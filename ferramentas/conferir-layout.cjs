async function unlock(page){
 await page.locator('#access-password').fill(process.env.BOT_TEST_PIN || (()=>{throw new Error('Defina BOT_TEST_PIN para testar o acesso.');})());await page.locator('#access-form button').click();
 await page.locator('#access-gate').waitFor({state:'hidden'});
}
/* Diagnóstico visual local: não controla nem se conecta ao bot real. */
const fs=require('node:fs'),path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
(async()=>{
 const root=path.resolve(__dirname,'..');
 const writeArtifacts=process.argv.includes('--artefatos')||Boolean(process.env.BOT_TEST_OUTPUT);
 const out=process.env.BOT_TEST_OUTPUT?path.resolve(process.env.BOT_TEST_OUTPUT):path.join(root,'verificacao','layout-atual');
 if(writeArtifacts)fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.platform==='win32'?{channel:'msedge'}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1000,height:1000}}),report=[];
  await page.goto(pathToFileURL(path.join(__dirname,'../docs','index.html')).href);
  await unlock(page);await page.waitForFunction(()=>window.ReferenceApp);
  const screens=await page.evaluate(()=>Object.entries(BOT_DATA.screens).map(([name,n])=>({name,pages:n.children.filter(c=>c.tag==='Page').length})));
  const screenshots=['界面设置','夜世界','通用任务','多号独立设置','升级建筑','打鱼造兵设置','竞赛','通用切号'];
  for(const width of [480,390,320]){
   await page.setViewportSize({width:width===480?1000:width,height:1000});
   for(const {name,pages} of screens)for(let tab=0;tab<pages;tab++){
    await page.evaluate(({name,tab})=>ReferenceApp.go(name,tab),{name,tab});
    await page.waitForTimeout(80);
    const rows=await page.locator('#screen .ui-row').evaluateAll(els=>els.filter(el=>el.scrollWidth>el.clientWidth+8).map(el=>({id:el.dataset.originalId,text:el.textContent.slice(0,100),width:el.clientWidth,overflow:el.scrollWidth-el.clientWidth})));
    report.push({width,name,tab,rows});
    if(writeArtifacts&&tab===0&&screenshots.includes(name))await page.locator('#phone').screenshot({path:path.join(out,`${width}-${name}.png`)});
   }
   await page.evaluate(()=>ReferenceApp.go('界面设置'));
   for(let mode=0;mode<11;mode++){
    await page.locator('#screen select[data-original-id="功能选择开关"]').selectOption(String(mode));
    await page.waitForTimeout(50);
    const rows=await page.locator('#screen .ui-row').evaluateAll(els=>els.filter(el=>el.scrollWidth>el.clientWidth+8).map(el=>({id:el.dataset.originalId,text:el.textContent.slice(0,100),width:el.clientWidth,overflow:el.scrollWidth-el.clientWidth})));
    report.push({width,name:'界面设置',mode,rows});
    if(writeArtifacts&&width!==320)await page.locator('#phone').screenshot({path:path.join(out,`${width}-modo-${mode+1}.png`)});
   }
  }
  if(writeArtifacts)fs.writeFileSync(path.join(out,'layout.json'),JSON.stringify(report,null,2));
  const overflows=report.filter(r=>r.rows.length);
  console.log(JSON.stringify(overflows,null,2));
  if(overflows.length)throw Error('Há linhas com estouro horizontal.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
