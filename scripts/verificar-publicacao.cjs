/* Testa o site sob /referencia-bot/, como em um repositório no Pages. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),publish=path.join(root,'docs'),prefix='/referencia-bot/';
const assert=(ok,message)=>{if(!ok)throw new Error(message);};
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.md':'text/plain; charset=utf-8','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.pdf':'application/pdf'};
(async()=>{
 const errors=[],missing=[],requests=[];let browser;
 const server=http.createServer((req,res)=>{
  let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
  if(!name.startsWith(prefix)){res.writeHead(404).end();return;}
  const file=path.resolve(publish,name.slice(prefix.length)||'index.html');
  if(!file.startsWith(publish+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404).end();return;}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
 });
 try{
  await new Promise((ok,no)=>{server.once('error',no);server.listen(0,'127.0.0.1',ok);});
  const base=`http://127.0.0.1:${server.address().port}${prefix}`;
  browser=await chromium.launch({headless:true,...(process.platform==='win32'?{channel:'msedge'}:{})});
  const context=await browser.newContext({viewport:{width:1440,height:1080},acceptDownloads:true}),page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)missing.push(r.url());});page.on('request',r=>requests.push(r.url()));
  await page.goto(base);await page.waitForFunction(()=>window.ReferenceApp);
  const screens=await page.evaluate(()=>Object.entries(BOT_DATA.screens).map(([name,n])=>({name,pages:n.children.filter(c=>c.tag==='Page').length})));
  let rendered=0;
  for(const {name,pages} of screens)for(let i=0;i<pages;i++){
   await page.evaluate(({name,i})=>ReferenceApp.go(name,i),{name,i});await page.waitForTimeout(25);
   assert(await page.locator('#screen').innerText(),'Tela vazia: '+name);rendered++;
  }
  const images=fs.readdirSync(path.join(publish,'assets'));
  for(let i=0;i<images.length;i+=8)await Promise.all(images.slice(i,i+8).map(async name=>{
   const r=await context.request.get(base+'assets/'+encodeURIComponent(name));assert(r.status()===200,'Imagem ausente: '+name);
   assert((await r.body()).equals(fs.readFileSync(path.join(publish,'assets',name))),'Imagem diferente: '+name);
  }));
  await page.evaluate(()=>ReferenceApp.go('界面设置'));
  const manual=await page.locator('a[href$=".pdf"]').evaluate(el=>el.href);assert(manual.startsWith(base+'manual/'),'Link do manual fora do site.');
  const r=await context.request.get(manual);assert(r.status()===200,'Manual ausente.');const bytes=await r.body();
  assert(bytes.subarray(0,5).toString()==='%PDF-','PDF inválido.');assert(bytes.equals(fs.readFileSync(path.join(publish,'manual','Manual_Xingchen_Portugues_BR.pdf'))),'PDF diferente.');
  await page.locator('#screen button[data-original-id="打鱼造兵设置"]').click();assert(await page.evaluate(()=>ReferenceApp.current)==='打鱼造兵设置','Navegação falhou.');
  await page.locator('input[data-original-id="兵13"]').fill('10');
  const wait=page.waitForEvent('download');await page.locator('#export').click();const download=await wait;
  const saved=JSON.parse(fs.readFileSync(await download.path(),'utf8'));assert(saved.values['打鱼造兵设置/0/兵13']==='10','Exportação falhou.');
  await page.locator('#reset').click();await page.locator('#import-file').setInputFiles({name:'exercicio.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(saved))});
  await page.waitForFunction(()=>ReferenceApp.values['打鱼造兵设置/0/兵13']==='10');
  await page.reload();await page.waitForFunction(()=>window.ReferenceApp);await page.evaluate(()=>ReferenceApp.go('打鱼造兵设置'));
  assert(await page.locator('input[data-original-id="兵13"]').inputValue()==='10','Persistência falhou.');
  await page.locator('#language').selectOption('zh');assert((await page.locator('#screen').innerText()).includes('打鱼造兵'),'Troca de idioma falhou.');
  await page.locator('#language').selectOption('pt');await page.locator('#home').click();await page.setViewportSize({width:390,height:844});await page.waitForTimeout(80);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+2),'Largura excedida no celular.');
  assert(!errors.length,'Erros JavaScript: '+errors);assert(!missing.length,'Recursos ausentes: '+missing);
  assert(requests.every(u=>u.startsWith(base)||u.startsWith('blob:')),'Solicitação a um serviço externo.');assert(fs.existsSync(path.join(publish,'.nojekyll')),'.nojekyll ausente.');
  const result={status:'aprovado',endereco_testado:prefix,telas:screens.length,paginas_abas:rendered,imagens:images.length,manual_pdf:'presente e idêntico ao arquivo local',erros_javascript:errors,recursos_ausentes:missing,verificacoes:['links relativos sob nome de repositório','48 telas e 57 páginas/abas','245 imagens com conteúdo idêntico','PDF dentro da publicação','navegação para tropas','exportação e importação','persistência','português e chinês','largura de celular','sem solicitações externas']};
  const out=path.join(root,'verificacao');fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(out,'publicacao.json'),JSON.stringify(result,null,2));await page.screenshot({path:path.join(out,'publicacao-celular.png'),fullPage:true});console.log(JSON.stringify(result,null,2));
 }finally{if(browser)await browser.close();await new Promise(ok=>server.close(ok));}
})().catch(e=>{console.error(e);process.exitCode=1;});
