async function unlock(page){
 await page.locator('#access-password').fill('1983');await page.locator('#access-form button').click();
 await page.locator('#access-gate').waitFor({state:'hidden'});
}
/* Regressões de persistência e importação; usa um navegador isolado dos exercícios do usuário. */
const assert=(ok,message)=>{if(!ok)throw new Error(message);};
const storageKey='xingchen-estudo-v1',modeKey='界面设置/0/功能选择开关';

module.exports=async function verificarEstado(browser,base){
  const context=await browser.newContext();
  try{
    const page=await context.newPage(),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto(base);await unlock(page);
    await page.waitForFunction(()=>window.ReferenceApp);
    const go=name=>page.evaluate(name=>ReferenceApp.go(name),name);
    const input=id=>page.locator(`#screen [data-original-id="${id}"] input`);
    async function reload(name){
      await page.reload();await unlock(page);
      await page.waitForFunction(()=>window.ReferenceApp);
      await go(name);
    }
    async function loadStored(text){
      await page.evaluate(({key,text})=>localStorage.setItem(key,text),{key:storageKey,text});
      await page.reload();await unlock(page);
      await page.waitForFunction(()=>window.ReferenceApp);
    }
    async function importExercise(data){
      await page.locator('#import-file').setInputFiles({
        name:'exercicio.json',mimeType:'application/json',
        buffer:Buffer.from(typeof data==='string'?data:JSON.stringify(data))
      });
    }

    await go('打鱼资源条件');
    await input('手动指定分配资源').click();
    await reload('打鱼资源条件');
    assert(await input('手动指定分配资源').isChecked(),'Distribuição manual não foi preservada.');
    assert(!await input('辅助自动分配资源').isChecked(),'Distribuição automática voltou marcada após recarregar.');
    await input('辅助自动分配资源').click();
    await reload('打鱼资源条件');
    assert(await input('辅助自动分配资源').isChecked(),'Distribuição automática não foi preservada.');
    assert(!await input('手动指定分配资源').isChecked(),'Distribuição manual voltou marcada após recarregar.');
    await input('不判断死鱼').click();
    await reload('打鱼资源条件');
    assert(await input('不判断死鱼').isChecked()&&!await input('强制进攻').isChecked(),'Opções de ataque conflitantes após recarregar.');

    await go('城墙');
    const wallFields=page.locator('#screen input[data-original-id="QQ1值"]');
    await wallFields.nth(0).fill('111');
    await wallFields.nth(1).fill('222');
    await reload('城墙');
    assert(await wallFields.nth(0).inputValue()==='111'&&await wallFields.nth(1).inputValue()==='222','Campos de muros compartilham valores.');
    const keys=await wallFields.evaluateAll(fields=>fields.map(field=>field.dataset.key));
    assert(keys[0]!==keys[1],'Campos de muros usam a mesma chave.');
    const exportWait=page.waitForEvent('download');
    await page.locator('#toolbar-options summary').click();
    await page.locator('#export').click();
    const download=await exportWait;
    const saved=JSON.parse(require('node:fs').readFileSync(await download.path(),'utf8'));
    assert(saved.values[keys[0]]==='111'&&saved.values[keys[1]]==='222','Exportação não preservou os campos de muros.');
    await page.locator('#reset').click();
    await importExercise(saved);
    await page.waitForFunction(({key})=>ReferenceApp.values[key]==='222',{key:keys[1]});
    await reload('城墙');
    assert(await wallFields.nth(0).inputValue()==='111'&&await wallFields.nth(1).inputValue()==='222','Importação não preservou os campos de muros.');

    const baseline=await page.evaluate(()=>({values:ReferenceApp.values,mode:ReferenceApp.mode,stored:localStorage.getItem('xingchen-estudo-v1')}));
    const invalid=[null,[],{format:'outro',values:{}},
      ...['abc','',true,null,-1,11,1.5].map(mode=>({format:'xingchen-referencia-1',values:{[modeKey]:mode}})),
      {format:'xingchen-referencia-1',values:[]},
      {format:'xingchen-referencia-1',values:{campo:{aninhado:true}}},
      {format:'xingchen-referencia-1',values:{},language:'desconhecido'},
      '{"format":"xingchen-referencia-1","values":{"campo":1e999}}',
      '{JSON incompleto'];
    for(const data of invalid){
      await importExercise(data);
      await page.locator('#info-dialog').waitFor({state:'visible'});
      assert(await page.locator('#info-title').innerText()==='Arquivo inválido','Exercício inválido não foi rejeitado.');
      const current=await page.evaluate(()=>({values:ReferenceApp.values,mode:ReferenceApp.mode,stored:localStorage.getItem('xingchen-estudo-v1')}));
      assert(JSON.stringify(current)===JSON.stringify(baseline),'Importação inválida modificou o exercício atual.');
      await page.locator('#info-close').click();
    }

    const legacy={format:'xingchen-referencia-1',language:'pt',values:{
      [modeKey]:'6','升级1/0/控杯值':'3141','城墙/0/QQ1值':'123',
      '打鱼资源条件/0/辅助自动分配资源/0':true,'打鱼资源条件/0/手动指定分配资源/0':true
    }};
    await importExercise(legacy);
    await page.waitForFunction(()=>ReferenceApp.mode===6);
    await go('升级1');
    assert(await page.locator('#screen input[data-original-id="控杯值"]').inputValue()==='3141','Exercício antigo perdeu a configuração da primeira conta.');
    await reload('城墙');
    assert(await wallFields.nth(0).inputValue()==='123'&&await wallFields.nth(1).inputValue()==='','Valor antigo de muros não ficou restrito ao primeiro campo.');
    await go('打鱼资源条件');
    assert(await input('手动指定分配资源').isChecked()&&!await input('辅助自动分配资源').isChecked(),'Conflito de um exercício antigo não foi recuperado.');

    for(const stored of ['null','[]','true','JSON incompleto',JSON.stringify({values:null,language:'invalido'})]){
      await loadStored(stored);
      assert(await page.evaluate(()=>ReferenceApp.mode===7),'Armazenamento inválido impediu a recuperação do modo padrão.');
    }
    await loadStored(JSON.stringify({values:{[modeKey]:1.5,'打鱼造兵设置/0/兵13':'33',invalido:{}},language:'xx'}));
    await go('打鱼造兵设置');
    assert(await page.locator('#screen input[data-original-id="兵13"]').inputValue()==='33','Recuperação descartou um campo válido.');
    assert(await page.evaluate(()=>ReferenceApp.mode===7),'Modo inválido no armazenamento local não foi recuperado.');
    await loadStored(JSON.stringify({layoutRevision:'antiga',values:{[modeKey]:'6'}}));
    assert(await page.evaluate(()=>ReferenceApp.mode===6),'Mudança de revisão sobrescreveu um modo válido.');
    assert(errors.length===0,'Erros nas regressões de estado: '+errors.join('; '));
    return ['persistência de opções exclusivas','campos de muros independentes','exportação e importação de muros',
      'importação inválida sem perda do exercício','compatibilidade com exercícios antigos',
      'recuperação do armazenamento local inválido'];
  }finally{await context.close();}
};
