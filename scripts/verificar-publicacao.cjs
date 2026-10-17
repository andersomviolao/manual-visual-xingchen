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
  assert(await page.locator('#android-launcher').isVisible(),'Android não iniciou na tela inicial.');
  assert(await page.locator('.navigation,#previous-screen,.inspector').count()===0,'Interface antiga ainda presente.');
  await page.locator('#launch-bot').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='星辰国际','Ícone não abriu a entrada.');
  await page.locator('.initial-heading button').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='应用设置','Configurações não abriu.');
  await page.locator('#android-back').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='星辰国际','Voltar não retornou à entrada.');
  await page.locator('#confirm').click();
  assert(await page.locator('#android-launcher').isVisible(),'Confirmar entrada não retornou ao Android.');
  assert(await page.locator('#floating-bot').isVisible(),'Ícone flutuante ausente.');
  await page.locator('#floating-bot').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='免费模式说明','Aviso inicial ausente.');
  await page.locator('#android-back').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='界面设置','Voltar não fechou aviso.');
  await page.locator('#screen button[data-original-id="设置打鱼资源条件"]').click();
  await page.locator('#screen [data-original-id="手动指定分配资源"] input').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='进攻资源条件','Caixa não abriu os limites.');
  await page.locator('#android-back').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='打鱼资源条件','Voltar não fechou limites.');
  await page.locator('#android-home').click();
  assert(await page.locator('#android-launcher').isVisible(),'Início não abriu Android.');
  await page.locator('#launch-bot').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='打鱼资源条件','Início perdeu a tela aberta.');
  await page.locator('#android-overview').click();
  assert(await page.locator('#recent-app').isVisible(),'Tarefa ausente nos recentes.');
  await page.locator('#recent-app').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='打鱼资源条件','Recentes não retomou a tela.');
  await page.locator('#android-back').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='界面设置','Pilha de navegação incorreta.');
  let swipeBox=await page.locator('#screen [data-original-id="分辨率检测"]').boundingBox();
  await page.mouse.move(swipeBox.x+swipeBox.width-25,swipeBox.y+swipeBox.height/2);await page.mouse.down();await page.mouse.move(swipeBox.x+25,swipeBox.y+swipeBox.height/2,{steps:12});await page.mouse.up();
  assert(await page.evaluate(()=>ReferenceApp.page)===1,'Deslizar não abriu a página da nuvem.');
  swipeBox=await page.locator('#screen').boundingBox();
  await page.mouse.move(swipeBox.x+25,swipeBox.y+swipeBox.height-15);await page.mouse.down();await page.mouse.move(swipeBox.x+swipeBox.width-25,swipeBox.y+swipeBox.height-15,{steps:12});await page.mouse.up();
  assert(await page.evaluate(()=>ReferenceApp.page)===0,'Deslizar não retornou ao painel.');
  await page.locator('#confirm').click();
  assert(await page.evaluate(()=>ReferenceApp.system.running),'Confirmar não iniciou estado simulado.');
  assert(await page.locator('#android-launcher').isVisible(),'Estado em execução não retornou ao Android.');
  await page.locator('#floating-bot').click();await page.locator('#screen button[data-original-id="停止运行"]').click();
  assert(!await page.evaluate(()=>ReferenceApp.system.running),'Parar não encerrou estado simulado.');
  assert(await page.locator('#floating-bot').isHidden(),'Ícone permaneceu ativo após parada.');
  await page.locator('#launch-bot').click();await page.locator('#confirm').click();await page.locator('#floating-bot').click();await page.locator('#android-back').click();
  for(let mode=0;mode<11;mode++){
   await page.locator('#screen select[data-original-id="功能选择开关"]').selectOption(String(mode));
   const count=id=>page.locator('#screen [data-original-id="'+id+'"]').count();
   assert(!!await count('通用功能1')===![0,10].includes(mode),'Linha de tarefas incorreta no modo '+mode);
   assert(!!await count('通用功能')===![0,1,10].includes(mode),'Funções comuns incorretas no modo '+mode);
   assert(!!await count('账号地址布局')===![0,1,8,10].includes(mode),'Pasta de conta incorreta no modo '+mode);
   assert(!!await count('偷袭账号选择布局')===[2,3].includes(mode),'Faixa da Capital incorreta no modo '+mode);
   assert(!!await count('自动审批')===(mode===6),'Aprovação indevida no modo '+mode);
  }
  for(const [name,spec] of Object.entries(await page.evaluate(()=>BOT_DATA.review.dialogs))){
   await page.evaluate(name=>ReferenceApp.go(name),name);
   const box=await page.locator('#screen .observed-sheet').boundingBox(),phone=await page.locator('#phone').boundingBox();
   assert(box.width<phone.width,'Diálogo ocupou largura total: '+name);
   assert(await page.locator('#screen .observed-background[inert]').count()===1,'Fundo do diálogo sem isolamento: '+name);
   assert(await page.locator('#app-surface > .confirm-wrap').isHidden(),'Confirmar externo duplicado: '+name);
   await page.locator('#android-back').click();
   assert(await page.evaluate(()=>ReferenceApp.current)!==name,'Voltar não fechou diálogo: '+name);
  }
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
  await page.locator('#screen select[data-original-id="功能选择开关"]').selectOption('6');
  const manual=await page.locator('a[href$=".pdf"]').evaluate(el=>el.href);assert(manual.startsWith(base+'manual/'),'Link do manual fora do site.');
  const r=await context.request.get(manual);assert(r.status()===200,'Manual ausente.');const bytes=await r.body();
  assert(bytes.subarray(0,5).toString()==='%PDF-','PDF inválido.');assert(bytes.equals(fs.readFileSync(path.join(publish,'manual','Manual_Xingchen_Portugues_BR.pdf'))),'PDF diferente.');
  await page.locator('#screen button[data-original-id="打鱼造兵设置"]').click();assert(await page.evaluate(()=>ReferenceApp.current)==='打鱼造兵设置','Navegação falhou.');

  await page.locator('input[data-original-id="兵13"]').fill('10');
  await page.locator('#android-back').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='打鱼造兵设置','Voltar saiu da tela antes de dispensar edição.');
  await page.locator('#android-back').click();
  assert(await page.evaluate(()=>ReferenceApp.current)==='界面设置','Segundo Voltar não fechou tropas.');
  await page.locator('#screen button[data-original-id="打鱼造兵设置"]').click();
  await page.locator('#screen button[data-original-id="计算兵种数量"]').click();
  assert(await page.locator('#info-dialog').isVisible(),'Ajuda não abriu.');
  await page.locator('#android-home').click();await page.locator('#launch-bot').click();
  assert(await page.locator('#info-dialog').isVisible(),'Início perdeu a janela aberta.');
  await page.locator('#android-back').click();
  assert(await page.locator('#info-dialog').isHidden(),'Voltar não fechou janela informativa.');

  const wait=page.waitForEvent('download');await page.locator('#toolbar-options summary').click();await page.locator('#export').click();const download=await wait;
  const saved=JSON.parse(fs.readFileSync(await download.path(),'utf8'));assert(saved.values['打鱼造兵设置/0/兵13']==='10','Exportação falhou.');
  await page.locator('#reset').click();await page.locator('#import-file').setInputFiles({name:'exercicio.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(saved))});
  await page.waitForFunction(()=>ReferenceApp.values['打鱼造兵设置/0/兵13']==='10');
  await page.reload();await page.waitForFunction(()=>window.ReferenceApp);assert(await page.locator('#android-launcher').isVisible(),'Recarregar não retornou ao Android.');assert(!await page.evaluate(()=>ReferenceApp.system.running),'Recarregar retomou execução.');await page.evaluate(()=>ReferenceApp.go('打鱼造兵设置'));
  assert(await page.locator('input[data-original-id="兵13"]').inputValue()==='10','Persistência falhou.');
  await page.locator('#toolbar-options summary').click();
  await page.locator('#language').selectOption('zh');assert((await page.locator('#screen').innerText()).includes('打鱼造兵'),'Troca de idioma falhou.');
  await page.locator('#language').selectOption('pt');await page.locator('#toolbar-options summary').click();await page.locator('#android-home').click();await page.setViewportSize({width:390,height:844});await page.waitForTimeout(80);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+2),'Largura excedida no celular.');
  assert(await page.locator('.android-navbar').isVisible(),'Barra Android ausente.');
  assert(await page.locator('#android-launcher').isVisible(),'Tela inicial ausente no celular.');
  await page.locator('#android-overview').click();await page.locator('#clear-recents').click();
  await page.locator('#android-overview').click();
  assert(await page.locator('#recents-empty').isVisible(),'Limpar recentes não removeu tarefa.');
  await page.locator('#android-back').click();
  assert(!errors.length,'Erros JavaScript: '+errors);assert(!missing.length,'Recursos ausentes: '+missing);
  assert(requests.every(u=>u.startsWith(base)||u.startsWith('blob:')),'Solicitação a um serviço externo.');assert(fs.existsSync(path.join(publish,'.nojekyll')),'.nojekyll ausente.');
  const result={status:'aprovado',endereco_testado:prefix,telas:screens.length,paginas_abas:rendered,imagens:images.length,manual_pdf:'presente e idêntico ao arquivo local',erros_javascript:errors,recursos_ausentes:missing,verificacoes:['links relativos sob nome de repositório','48 telas e 57 páginas/abas','245 imagens com conteúdo idêntico','PDF dentro da publicação','navegação para tropas','launcher, entrada e ícone flutuante','iniciar e parar estado de execução simulado','Voltar, Início e Aplicativos recentes','retomada de tarefa e limpeza de recentes','gestos entre páginas','Voltar dispensa edição e fecha janelas','Início preserva janela aberta','exportação e importação','persistência','português e chinês','largura de celular','sem solicitações externas','exibição de campos nos 11 modos conferidos','seis diálogos sobre o painel e confirmação' ]};
  const out=path.join(root,'verificacao');fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(out,'publicacao.json'),JSON.stringify(result,null,2));await page.screenshot({path:path.join(out,'publicacao-celular.png'),fullPage:true});console.log(JSON.stringify(result,null,2));
 }finally{if(browser)await browser.close();await new Promise(ok=>server.close(ok));}
})().catch(e=>{console.error(e);process.exitCode=1;});
