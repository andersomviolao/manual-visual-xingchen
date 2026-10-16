const {chromium}=require('playwright');
const path=require('path'),fs=require('fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1080}});
 const errors=[],failed=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('requestfailed',r=>failed.push(r.url()));
 await page.goto('file:///'+path.resolve(__dirname,'../index.html').replaceAll('\\','/'));
 await page.waitForFunction(()=>window.ReferenceApp);
 const shots=path.resolve(__dirname,'../conferencia');fs.mkdirSync(shots,{recursive:true});
 await page.screenshot({path:path.join(shots,'01-principal.png'),fullPage:true});
 const screens=await page.evaluate(()=>Object.keys(BOT_DATA.screens));
 const report=[];
 for(const name of screens){
  await page.evaluate(n=>ReferenceApp.go(n),name);
  const tabs=await page.locator('#page-tabs button').count();
  for(let i=0;i<Math.max(1,tabs);i++){
   if(i)await page.evaluate(({name,i})=>ReferenceApp.go(name,i),{name,i});
   await page.waitForTimeout(60);
   const item=await page.evaluate(()=>({name:ReferenceApp.current,page:ReferenceApp.page,controls:document.querySelectorAll('#screen input,#screen select,#screen button').length,overflow:[...document.querySelectorAll('#screen .ui-row')].filter(e=>e.scrollWidth>e.clientWidth+8).map(e=>({id:e.dataset.originalId,width:e.clientWidth,scroll:e.scrollWidth,text:e.textContent.slice(0,90)})),chinese:[...document.querySelectorAll('#screen .ui-text,#screen .ui-button,#screen .ui-check span,#screen select option')].filter(e=>/[\u3400-\u9fff]/.test(e.textContent)&&!e.textContent.includes('/sdcard/')).map(e=>e.textContent)}));
   report.push(item);
  }
 }
 for(const [name,file]of [['打鱼造兵设置','02-tropas.png'],['打鱼资源条件','03-recursos.png'],['通用任务','04-tarefas.png'],['升级建筑','05-construcoes.png'],['通用切号','06-contas.png']]){
  await page.evaluate(n=>ReferenceApp.go(n),name);await page.waitForTimeout(100);await page.screenshot({path:path.join(shots,file),fullPage:true});
 }
 await page.evaluate(()=>ReferenceApp.go('界面设置'));
 await page.locator('[data-original-id="打鱼造兵设置"]').click();
 if(await page.evaluate(()=>ReferenceApp.current)!=='打鱼造兵设置')throw Error('Navegação para tropas falhou');
 await page.locator('input[data-original-id="兵13"]').fill('10');
 await page.locator('#confirm').click();
 await page.reload();await page.waitForFunction(()=>window.ReferenceApp);
 await page.evaluate(()=>ReferenceApp.go('打鱼造兵设置'));
 if(await page.locator('input[data-original-id="兵13"]').inputValue()!=='10')throw Error('Persistência falhou');
 await page.locator('#language').selectOption('zh');
 if(!(await page.locator('#screen').innerText()).includes('打鱼造兵'))throw Error('Idioma chinês falhou');
 await page.locator('#language').selectOption('pt');
 await page.evaluate(()=>ReferenceApp.go('界面设置'));
 for(let i=0;i<11;i++)await page.locator('select[data-original-id="功能选择开关"]').selectOption(String(i));
 await page.locator('select[data-original-id="功能选择开关"]').selectOption('6');
 await page.locator('#screen button[data-original-id="卡密说明"]').click();
 if(await page.evaluate(()=>ReferenceApp.current)!=='赠卡说明')throw Error('Destino da oferta de licença não corresponde à versão 1357');
 await page.screenshot({path:path.join(shots,'08-oferta-1357.png'),fullPage:true});
 await page.locator('.runtime-close').click();
 if(await page.evaluate(()=>ReferenceApp.current)!=='界面设置')throw Error('Fechar oferta não voltou ao painel');
 await page.evaluate(()=>ReferenceApp.go('免费模式说明'));
 if(!(await page.locator('.runtime-popup-body').innerText()).includes('Usuários gratuitos'))throw Error('Aviso gratuito ausente');
 await page.screenshot({path:path.join(shots,'09-aviso-gratuito-1357.png'),fullPage:true});
 await page.locator('.runtime-close').click();
 await page.locator('#search').fill('doação');
 if(!await page.locator('#navigation .nav-item').count())throw Error('Busca falhou');
 await page.locator('#search').fill('');
 await page.setViewportSize({width:390,height:844});await page.waitForTimeout(120);
 await page.screenshot({path:path.join(shots,'07-celular.png'),fullPage:true});
 const result={screens:screens.length,renderedPages:report.length,controls:report.reduce((s,r)=>s+r.controls,0),errors,failed,overflows:report.filter(r=>r.overflow.length),untranslated:report.filter(r=>r.chinese.length),checks:[`${screens.length} telas e ${report.length} páginas/abas renderizadas`,'atalho tropas','persistência após recarregar','alternância de idioma','11 modos','busca','largura de celular']};
 fs.writeFileSync(path.join(shots,'verificacao.json'),JSON.stringify(result,null,2));
 console.log(JSON.stringify(result,null,2));await browser.close();
 if(errors.length||failed.length||result.untranslated.length||result.overflows.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});

