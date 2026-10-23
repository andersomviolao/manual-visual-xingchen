/* Referência visual local. Não carrega nem executa os scripts do aplicativo. */
(() => {
  'use strict';
  const BOT_VERSION='1365';
  const D=window.BOT_DATA, $=s=>document.querySelector(s);
  // Tela nativa adicional, conferida visualmente no LDPlayer em 15/10/2026.
  D.screens['应用设置']={tag:'Window',a:{},children:[{tag:'Page',a:{},children:[{tag:'NativeSettings',a:{},children:[]}]}]};
  const livePopups={
    '免费模式说明':{
      ptTitle:'Modo gratuito — aviso inicial',zhTitle:'界面自动关闭倒计时',
      pt:'① Usuários gratuitos não podem alternar contas durante a execução, enviar ou baixar configurações nem usar as funções da nuvem. Segundo o aviso, as outras funções não têm diferença. Para alternar contas, o autor orienta comprar uma chave.\n\n② Segundo a oferta do autor, a compra de aparelho na nuvem pelo site inclui uma chave do assistente.\n\n③ Site informado no aviso: http://xccoc.fun.\n\n④ Toque no X vermelho no canto superior direito para fechar.',
      zh:'①免费用户不能切号挂机，不能上传下载设置，不能使用云端功能，其他功能没有区别。如果需要切号请购买卡密。\n②在辅助官网购买云机即可免费送辅助卡密，高性价比，云机价格为市场价，同样的价格免费送卡密。\n③购买卡密请访问官网【http://xccoc.fun】。\n④点击右上角红X可立即关闭界面。'
    },
    '赠卡说明':{
      ptTitle:'Você ainda não tem uma chave? Gostaria de apoiar o autor?',
      zhTitle:'why baby why ?你竟然没有卡密？不支持一下作者吗?',
      pt:'① Segundo a oferta exibida pelo autor, comprar um aparelho na nuvem pelo site inclui gratuitamente uma chave do assistente pelo mesmo preço anunciado para o aparelho.\n\n② Site indicado: xccoc.fun. Digite na barra de endereços do navegador para visitar.',
      zh:'①在辅助官网购买云机即可免费送辅助卡密，高性价比，云机价格为市场价，同样的价格免费送卡密。\n②辅助官网：xccoc.fun 在浏览器地址栏输入访问即可。'
    }
  };
  for(const name of Object.keys(livePopups))D.screens[name]={tag:'Window',a:{},children:[{tag:'Page',a:{},children:[{tag:'RuntimePopup',a:{},children:[]}]}]};
  const names={
    '界面设置':'Configurações principais','星辰国际':'Tela inicial e licença','打鱼造兵设置':'Tropas para farm','捐兵造兵设置':'Tropas para doação','打鱼资源条件':'Recursos de farm e muros','进攻资源条件':'Limites de recursos por CV','通用任务':'Tarefas gerais','特殊功能':'Funções especiais','升级建筑':'Melhorar construções','升级科技':'Melhorar pesquisa','升级战宠':'Melhorar mascotes','升级武器':'Melhorar equipamentos','升级1':'Configuração individual da conta','多号独立设置':'Melhorias por conta','多号捐兵设置':'Doação por conta','QQ切号':'Troca de contas QQ','通用切号':'Várias versões — 50 contas','夜世界':'Base do Construtor','宝石加速':'Aceleração com gemas','竞赛':'Jogos do Clã','部落增援':'Reforços para guerras','部落战联赛':'Guerras e ligas','语言设置':'Idiomas na busca de clãs','自定义下兵':'Lançamento personalizado','自助切号':'Troca manual e extração','智能换阵':'Obstáculos e layouts','买卖药水':'Comprar e vender poções','使用药水':'Uso de poções','兑换物品活动':'Trocas de eventos','军队配置链接':'Composição por link','捐兵统计':'Estatísticas de doação','城墙':'Limites para muros','满资源设置':'Pausa com recursos cheios','刷经验':'Ganho de experiência','链接奖励':'Recompensas por link','卡密说明':'Informações da licença','反馈':'Relatar um problema','文件列表':'Arquivos na nuvem','更新公告':'Aviso de atualização','使用说明':'Instruções de uso','文本框':'Janela de informações','浏览器':'Tutorial no navegador','网':'Loja de chaves','交流群':'Grupo de usuários','放大':'Expandir ou ocultar janela'
  };
  names['应用设置']='Ajustes gerais do aplicativo';
  names['建筑工人学徒']='Aprendiz do Construtor';names['实验助手']='Assistente do Laboratório';names['超级充能']='Supercarga';
  names['免费模式说明']='Aviso do modo gratuito';names['赠卡说明']='Oferta de licença';
  const extra={
    '权限不够':'Permissão insuficiente',
    '①免费用户不支持上传下载 请访问官网 http://xccoc.fun 购买卡密。':'① Usuários gratuitos não podem enviar ou baixar arquivos. Acesse o site oficial http://xccoc.fun para comprar uma chave.',
    '星辰国际':'Xingchen Internacional','守卫':'Guarda','终极炸弹':'Bomba Suprema','背景框':'Quadro de fundo','银币':'Moedas de prata',
    '设置':'Configurações','音量加(+)控制脚本开始/停止':'Volume (+) inicia ou para o script','脚本停止或者结束的时候振动提醒':'Vibrar quando o script parar ou terminar','开机自启动脚本':'Iniciar o script ao ligar','开启或者关闭节点服务':'Ativar ou desativar o serviço de nós',
    '辅助仅支持在安卓12及以下系统运行。':'O assistente funciona apenas no Android 12 ou anterior.',
    '××':'Conteúdo preenchido pelo aplicativo durante a execução.',
    '雷电飞龙':'Dragão Elétrico','气球兵':'Balão','狂暴法术':'Feitiço de Fúria','愤怒法术':'Feitiço de Fúria','冰冻法术':'Feitiço de Congelamento','攻城气球':'Lança-Pedras','攻城战车':'Quebra-Muros','攻城飞艇':'Dirigível Bélico','攻城训练营':'Quartel de Cerco','攻城滚木车':'Lançador de Troncos','攻城烈焰车':'Lança-Chamas','攻城钻机':'Broca de Batalha','攻城器':'Máquina de Cerco','空中战车':'Máquina aérea de cerco','天使':'Curadora','疗伤法术':'Feitiço de Cura','雷电法术':'Feitiço de Relâmpago','弹跳法术':'Feitiço de Salto','镜像法术':'Feitiço de Clone','隐形法术':'Feitiço de Invisibilidade','复苏法术':'Feitiço de Revocação','疯狂蔓生法术':'Feitiço de Crescimento Excessivo','毒药法术':'Feitiço de Veneno','地震法术':'Feitiço de Terremoto','急速法术':'Feitiço de Aceleração','骷髅法术':'Feitiço de Esqueleto','蝙蝠法术':'Feitiço de Morcego','冰障法术':'Feitiço de Gelo','回溯法术':'Feitiço de Retorno','图腾法术':'Feitiço de Totem',
    '兵营':'Acampamento','法术工厂':'Fábrica de Feitiços','暗黑法术工厂':'Fábrica de Feitiços Sombrios','暗黑训练营':'Quartel Negro','暗黑重油罐':'Depósito de Elixir Negro','暗黑重油钻井':'Broca de Elixir Negro','圣水收集器':'Coletor de Elixir','部落城堡':'Castelo do Clã','英雄殿堂':'Salão dos Heróis','战宠小屋':'Casa dos Mascotes','宠物小屋':'Casa dos Mascotes','铁匠铺':'Ferreiro','攻城机器工坊':'Oficina','建筑工人小屋':'Cabana do Construtor','精制台':'Refinaria','防空火箭':'Defesa Aérea','空气炮':'Dispersor Aéreo','法师塔':'Torre do Mago','地狱之塔':'Torre Inferno','投石炮':'Catapulta','天鹰火炮':'Artilharia Águia','特斯拉电磁塔':'Tesla Oculta','法术塔':'Torre de Feitiços','巨型炸弹':'Bomba Gigante','搜空地雷':'Mina Aérea Guiada','隐形炸弹':'Bomba','骷髅陷阱':'Armadilha de Esqueleto','飓风陷阱':'Armadilha de Tornado','炸弹塔':'Torre de Bombas','跳弹加农炮':'Canhão Ricochete','多人箭塔':'Torre Multi-Arqueira','超级法师塔':'Torre do Supermago','火焰喷射器':'Cospe-Fogo','复合机械塔':'Torre Mecânica Composta','反击之塔':'Torre de Contra-Ataque','部队发射器':'Lançador de Tropas','擎天巨柱':'Monólito',
    '蛮王':'Rei Bárbaro','女皇':'Rainha Arqueira','永王':'Grande Guardião','闰土':'Campeã Real','王子':'Príncipe Servo','阿啾':'L.A.S.S.I','闪枭':'Coruja Elétrica','大牦':'Iaque Poderoso','独角':'Unicórnio','猛蜥':'Diggy','凤凰':'Fênix','地兽':'Lagarto Venenoso','冰牙':'Morsa Glacial','灵狐':'Raposa Espiritual','水母':'Geleia Furiosa','莱希':'Sneezy','渡鸦':'Corvo',
    '野蛮人木偶':'Boneco de Bárbaro','狂暴药水瓶':'Frasco de Fúria','巨型手套':'Manopla Gigante','地震金靴':'Botas de Terremoto','尖刺足球':'Bola Espinhosa','铁甲短裤':'Calção de Ferro','弓箭手木偶':'Boneca de Arqueira','隐形药水瓶':'Frasco de Invisibilidade','巨型箭矢':'Flecha Gigante','天使木偶':'Boneca de Curadora','冰封箭矢':'Flecha Congelada','克隆魔镜':'Espelho Mágico','生命宝石':'Gema da Vida','永恒书卷':'Tomo Eterno','狂暴宝石':'Gema de Fúria','治疗书卷':'Tomo de Cura','巨大火球':'Bola de Fogo','火箭飞矛':'Lança-Foguetes','皇家宝石':'Gema Real','寻踪飞盾':'Escudo Buscador','野猪骑士木偶':'Boneco de Corredor','急速药水瓶':'Frasco de Aceleração','雷电战靴':'Botas Elétricas','暗黑魔球':'Orbe Sombrio','护卫玩偶':'Boneco de Guarda','动作人偶':'Boneco de Ação','贵族哑铃':'Halteres Nobres','熔岩气球玩偶':'Boneco de Balão de Lava','英雄火炬':'Tocha Heroica','灵蛇手镯':'Bracelete da Serpente','陨石法杖':'Cajado Meteórico','暗黑皇冠':'Coroa Sombria','英雄技能':'Habilidade de herói',
    '超级大雪怪':'Superyeti','战吼狂人':'Guerreiro de Grito','收债哥布林':'Goblin Cobrador','废墟女巫':'Bruxa das Ruínas','皮卡凯恩':'P.E.K.K.A Kaine','铁壁终结者':'Destruidor Blindado','陨石戈仑':'Golem Meteórico','霸天巨人':'Gigante Titânico','飞龙公爵':'Duque Dragão','超级兵':'Supertropa','法术':'Feitiço','说明':'Informações','停止运行':'Parar execução','编辑':'Editar'
  };
  function tr(s=''){return extra[s]??D.translations[s]??names[s]??s;}
  let stored={};try{stored=JSON.parse(localStorage.getItem('xingchen-estudo-v1')||'{}');}catch{}
  const layoutRevision='mobile-bottom-1365';
  if(stored.layoutRevision!==layoutRevision){stored.values={...(stored.values||{}),'界面设置/0/功能选择开关':7};stored.layoutRevision=layoutRevision;}
  let values=stored.values||{},language=stored.language||'pt',current='星辰国际',page=0,mode=7,history=[],allMain=false;
  const screenEl=$('#screen'),tabs=$('#page-tabs');
  const localized=s=>language==='zh'?s:tr(s);
  function save(){try{localStorage.setItem('xingchen-estudo-v1',JSON.stringify({values,language,layoutRevision}));}catch{toast('O navegador não permitiu salvar automaticamente. Use Salvar exercício.');}}
  function toast(t){$('#toast').textContent=t;$('#toast').classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
  function info(title,text){$('#info-title').textContent=title;$('#info-body').textContent=text;$('#info-dialog').hidden=false;}
  const assetName=bg=>tr((bg||'').replace(/\.(webp|png|jpe?g)$/i,''));
  function controlLabel(n){const a=n.a,o=n.children.find(c=>c.tag==='Option');return tr(a.title||a.text||o?.a.text||((a.background&&!a.background.startsWith('#'))?assetName(a.background):''))||'Campo de configuração';}
  function showControl(){}
  const routes={
    '通用任务':'通用任务','特殊功能':'特殊功能','打鱼造兵设置':'打鱼造兵设置','多号打鱼造兵设置':'打鱼造兵设置','设置打鱼资源条件':'打鱼资源条件','多号捐兵兵种':'多号捐兵设置','搜索部落语言选择':'语言设置','卡密说明':'卡密说明','查看教程':'浏览器','升级建筑':'升级建筑','升级科技':'升级科技','升级战宠':'升级战宠','升级武器':'升级武器','多号升级':'多号独立设置','限时活动':'兑换物品活动','智能换阵':'智能换阵','买卖药水':'买卖药水','使用药水':'使用药水','链接兑换奖励':'链接奖励','宝石加速':'宝石加速','捐部落战援兵':'部落增援','自动联赛':'部落战联赛','求援':'军队配置链接','满资源不进攻':'满资源设置','下载新':'文件列表','查询文件':'文件列表','上传指定文件':'文件列表','发起部落战':'部落战联赛'
  };
  routes['卡密说明']='赠卡说明';
  function getVal(key,def){return Object.hasOwn(values,key)?values[key]:def;}
  let arrival='Início da referência',androidNoticeDismissed=false;
  function go(name,newPage=0,push=true,source='Controle da tela'){
    if(!D.screens[name])return;
    const total=D.screens[name].children.filter(n=>n.tag==='Page').length;
    newPage=Math.max(0,Math.min(Number(newPage)||0,total-1));
    if(current===name&&page===newPage){systemView='app';taskOpen=true;syncSystem();return;}
    if(push&&name!==current)history.push({name:current,page,scroll:screenEl.scrollTop,arrival});
    current=name;page=newPage;arrival=source;systemView='app';taskOpen=true;render();syncSystem();
  }
  function returnTo(index){
    const prev=history[index];if(!prev)return;
    history=history.slice(0,index);current=prev.name;page=prev.page;arrival=prev.arrival;
    render();screenEl.scrollTop=prev.scroll;syncSystem();
  }
  let systemView='home',taskOpen=false,floatingAvailable=false,running=false,noticeShown=false,previousSystemView='home';
  function back(){
    if(systemView==='recents'){systemView=previousSystemView;syncSystem();return;}
    if(systemView==='home')return;
    const focused=document.activeElement;
    if(focused?.matches('input,textarea,select')){focused.blur();return;}
    if(!$('#info-dialog').hidden){$('#info-dialog').hidden=true;return;}
    if(history.length)returnTo(history.length-1);
    else{systemView='home';taskOpen=false;syncSystem();}
  }
  function syncSystem(){
    const runtime=systemView==='app'&&['自助切号','放大','刷经验'].includes(current);
    $('#android-launcher').hidden=systemView!=='home'&&!runtime;
    $('#android-launcher').inert=runtime;
    $('#app-surface').hidden=systemView!=='app';
    $('#android-recents').hidden=systemView!=='recents';
    $('#floating-bot').hidden=!floatingAvailable||systemView!=='home';
    $('#floating-bot').classList.toggle('running',running);
    $('#phone').classList.toggle('launcher-visible',systemView!=='app'||!['星辰国际','应用设置'].includes(current));
    $('#phone').dataset.view=systemView;
  }
  function openApp(){
    if(!taskOpen){current='星辰国际';page=0;history=[];taskOpen=true;$('#info-dialog').hidden=true;render();}
    systemView='app';syncSystem();
  }
  function openPanel(){
    if(!taskOpen||current==='星辰国际'){current='界面设置';page=0;history=[];androidNoticeDismissed=false;render();}
    taskOpen=true;systemView='app';syncSystem();
    if(!noticeShown){noticeShown=true;go('免费模式说明');}
  }
  function stopSimulation(){running=false;floatingAvailable=false;taskOpen=false;history=[];systemView='home';$('#info-dialog').hidden=true;syncSystem();toast('Assistente parado');}
  function overview(){
    if(systemView==='recents'){systemView=previousSystemView;syncSystem();return;}
    previousSystemView=systemView;
    $('#recent-app').hidden=!taskOpen;$('#clear-recents').hidden=!taskOpen;$('#recents-empty').hidden=taskOpen;
    const preview=$('#recent-preview');preview.replaceChildren();
    if(taskOpen){
      const copy=$('#app-surface').cloneNode(true),originals=$('#app-surface').querySelectorAll('input,select,textarea');
      copy.querySelectorAll('input,select,textarea').forEach((el,i)=>{el.value=originals[i].value;if('checked'in el)el.checked=originals[i].checked;});
      copy.removeAttribute('id');copy.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));copy.hidden=false;copy.classList.add('recent-copy');copy.setAttribute('inert','');preview.append(copy);copy.querySelector('.screen').scrollTop=screenEl.scrollTop;
    }
    systemView='recents';syncSystem();
  }
  function mainVisibility(n){
    if(current!=='界面设置'||page!==0||allMain)return true;
    const a=n.a,ids=n.children.map(c=>c.a.id||'');const has=id=>ids.includes(id);const farm=[6,8,9].includes(mode),donation=[8,9].includes(mode);
    if(a.id==='紧急通知布局')return !androidNoticeDismissed;
    if(a.id==='循环任务布局')return mode===7;
    if(a.id==='国服')return Number(getVal('界面设置/0/游戏版本',0))===1;
    if(a.id==='游戏起名布局')return mode===1;
    if(a.id==='收件邮箱布局')return !!getVal('界面设置/0/发送邮件/0',false);
    if(a.id==='通用功能1')return ![0,10].includes(mode);
    if(a.id==='通用功能')return ![0,1,10].includes(mode);
    if(a.id==='偷袭账号选择布局')return [2,3].includes(mode);
    if(a.id==='账号选择布局')return ![0,2,3,8,10].includes(mode);
    if(a.id==='账号地址布局')return ![0,1,8,10].includes(mode);
    if(a.id==='提取数据')return mode===0;
    if(a.id==='部落标签布局')return [2,3].includes(mode)||!!getVal('界面设置/0/加入部落/0',false);
    if(a.id==='检测信息布局')return mode===4;
    if(a.id==='捐献数量布局')return mode===3;
    if(a.id==='都城等级布局')return mode===2;
    if(a.id==='邮箱数据布局')return mode===5;
    if(a.id==='打鱼时间布局')return mode===6;
    if(a.id==='捐兵时间布局')return donation;
    if(a.id==='多号捐兵打鱼布局')return mode===9;
    if(a.id==='捐兵打鱼布局')return mode!==9;
    if(has('打鱼时删兵重造'))return farm;
    if(has('定时下线'))return farm;
    if(has('自动审批'))return mode===6;
    // O painel 8/11 mantém a faixa de funções novas (supercarga, refinaria,
    // aprendiz e reforma) junto das tarefas cíclicas, como no APK observado.
    if(a.id==='自动审批布局'&&has('功能生效说明'))return farm||mode===7;
    if(a.id==='自动审批布局')return farm;
    if(a.id==='其他')return farm||mode===7;
    if(a.id==='刷经验模式')return mode===10;
    return true;
  }
  function color(s){if(!s)return '';return /^#[\da-f]{8}$/i.test(s)?'#'+s.slice(3):s;}
  function style(el,n,parent){
    const a=n.a,row=parent?.a.orientation==='0',unit=current==='界面设置'?1:1.4;const width=Number(a.width),height=Number(a.height);let css=el.style;
    if(a.width!==undefined){if(width>0){css.width=width*unit+'px';css.flex=row?'0 1 '+width*unit+'px':'0 0 auto';}else if(width===-1){css.flex=row?'1 1 0':'0 0 auto';if(!row){const m=(a.margin||'0,0,0,0').split(',').map(Number);css.width=`calc(100% - ${((m[0]||0)+(m[2]||0))*unit}px)`;}}else{css.flex='0 1 auto';}}
    if(height>0){css.minHeight=height*unit+'px';if(n.tag==='Button'||n.tag==='EditText'||n.tag==='ComboBox')css.height=height*unit+'px';}
    if(a.margin){const m=a.margin.split(',').map(Number);if(m.length===4)css.margin=`${m[1]*unit}px ${m[2]*unit}px ${m[3]*unit}px ${m[0]*unit}px`;}
    if(Number(a.textsize)>0)css.fontSize=Number(a.textsize)*unit+'px';
    if(a.textcolor)css.color=color(a.textcolor);
    if(a.align?.includes('center')){if(n.tag==='TextView')el.classList.add('center');if(n.tag==='LinearLayout')css.alignItems='center';}
    if(a.background?.startsWith('#'))css.backgroundColor=color(a.background);
    if(['c.png','c.webp'].includes(a.background))el.classList.add('ui-card');
    if(a.background==='bt.webp')el.classList.add('ui-ribbon');
    if(a.background==='tt.webp')el.classList.add('ui-note-ribbon');
    if(a.background==='背景框.png'){css.backgroundColor='#70b6d9';css.borderRadius='4px';}
    if(['上.png','上1.png','下.png','中上.png','中.png','中.webp','lbg.png','lbj.png','文本框.webp'].includes(a.background)){css.backgroundImage=`url("assets/${a.background}")`;css.backgroundSize='100% 100%';}
  }
  function keyFor(n,path){const id=n.a.id;return `${current}/${page}/${id&&!['文本','占位符','idLabel1','idButton','私人定制','水平布局','idLayoutHor1'].includes(id)?id:path}`;}
  function create(n,parent=null,path='0'){
    if(!mainVisibility(n))return null;const a=n.a,tag=n.tag,key=keyFor(n,path);let el;
    if(tag==='Option')return null;
    if(tag==='RuntimePopup'){
      const data=livePopups[current];el=document.createElement('div');el.className='runtime-popup';const head=document.createElement('div');head.className='runtime-popup-head';const title=document.createElement('span');title.textContent=language==='zh'?data.zhTitle:data.ptTitle;const close=document.createElement('button');close.className='runtime-close';close.textContent='X';close.setAttribute('aria-label','Fechar aviso');close.onclick=back;head.append(title,close);const body=document.createElement('div');body.className='runtime-popup-body';body.textContent=language==='zh'?data.zh:data.pt;el.append(head,body);
    }else if(tag==='NativeSettings'){
      el=document.createElement('div');el.className='native-settings';
      const head=document.createElement('div');head.className='native-heading';head.textContent=localized('设置');el.append(head);
      for(const [id,def]of [['音量加(+)控制脚本开始/停止',true],['脚本停止或者结束的时候振动提醒',true],['开机自启动脚本',false],['开启或者关闭节点服务',true]]){
        const label=document.createElement('label');label.className='native-row native-toggle';const text=document.createElement('span');text.textContent=localized(id);const input=document.createElement('input');input.type='checkbox';input.setAttribute('role','switch');input.setAttribute('aria-label',tr(id));const k='native/'+id;input.checked=getVal(k,def);input.onchange=()=>{values[k]=input.checked;save();showControl({tag:'CheckBoxGroup',a:{id,title:tr(id)},children:[]});};label.title=localized(id);label.append(text,input);el.append(label);
      }
      for(const [zh,pt]of [['当前系统型号: SM-G977N','Modelo do sistema: SM-G977N'],['当前系统版本: 9','Versão do Android: 9'],['当前分辨率: 720X1280:320(DPI)','Resolução: 720 × 1280 · 320 dpi'],['系统总共内存: 3945(M)','Memória total: 3945 MB'],['虚拟按键: 无','Botões virtuais: nenhum'],['当前apk版本号:1355','Versão do APK: 1355'],['当前引擎版本3.8.6','Versão do mecanismo: 3.8.6']]){const row=document.createElement('div');row.className='native-row';row.textContent=language==='zh'?zh:pt;row.title=zh;el.append(row);}
      for(const [zh,pt]of [['打开日志','Abrir registros'],['连接远程电脑开发助手','Conectar ao auxiliar de desenvolvimento remoto']]){const row=document.createElement('div');row.className='native-row';const b=document.createElement('button');b.textContent=language==='zh'?zh:pt;b.className='native-green';b.onclick=()=>info(pt,'Controle reproduzido para consulta. Não abre registros nem inicia conexão remota.');row.append(b);el.append(row);}
      const address=document.createElement('div');address.className='native-row native-address';address.textContent='127.0.0.1:10082';el.append(address);
    }else if(tag==='Page'||tag==='LinearLayout'){
      el=document.createElement('div');el.className=tag==='Page'?'ui-page':'ui-layout '+(a.orientation==='0'?'ui-row':'ui-col');
      if(tag==='Page')el.dataset.name=current;
      n.children.forEach((c,i)=>{const child=create(c,n,path+'.'+i);if(child)el.append(child);});
      // Blank checkboxes use their following icon as a clickable label.
      const ch=[...el.children];ch.forEach((c,i)=>{if(c.classList.contains('ui-check-group')&&ch[i+1]?.classList.contains('icon')){const input=c.querySelector('input');if(input&&!c.textContent.trim()){input.setAttribute('aria-label',ch[i+1].title||'Selecionar item');ch[i+1].addEventListener('click',()=>{input.checked=!input.checked;input.dispatchEvent(new Event('change',{bubbles:true}));});}}});
    }else if(tag==='TextView'){
      el=document.createElement('div');el.className='ui-text';let text=a.text||'';
      if(a.id==='紧急通知说明')text='辅助仅支持在安卓12及以下系统运行。';
      if(a.id==='分辨率检测')text=language==='zh'?'系统:安卓9 CPU:4核 内存:2.68/4.04G 分辨率:720*1280 dpi320':'Sistema: Android 9 · CPU: 4 núcleos · 720 × 1280 · dpi 320';
      if(a.id==='简单说明'){const version=Number(getVal('界面设置/0/游戏版本',0));if(version===1)return null;text=version===2?(language==='zh'?'多版本 可以同时挂QQ 微信 国际服':'Várias versões: QQ, WeChat e servidor internacional ao mesmo tempo'):(language==='zh'?'数据包切号 单号时直接运行游戏':'Pacotes de dados · uma conta: abrir o jogo diretamente');}
      el.textContent=localized(text);el.title=localized(text);
      if(!text&&!a.background&&!(Number(a.width)>0))el.style.display='none';
    }else if(tag==='Button'){
      el=document.createElement('button');el.type='button';el.className='ui-button';el.textContent=localized(a.title||'');
      if(current==='界面设置'&&a.id==='卡密说明'&&language==='pt')el.textContent='Licença';
      if(current==='界面设置'&&a.id==='卡密说明'&&language==='zh')el.textContent='送卡密';
      if(current==='界面设置'&&a.id==='关闭界面')el.textContent=language==='zh'?`官网 xccoc.fun　热更新版本:${BOT_VERSION}`:`Site xccoc.fun · Atualização: ${BOT_VERSION}`;
      if(a.background&&D.assets.includes(a.background)&&!['bt.webp','tt.webp'].includes(a.background)){el.classList.add('icon');el.style.backgroundImage=`url("assets/${a.background}")`;el.title=(language==='zh'?a.background.replace(/\.[^.]+$/,''):assetName(a.background));el.setAttribute('aria-label',el.title||'Informações');}
      else el.title=localized(a.title||a.id||'');
      el.onclick=()=>{showControl(n);action(a.id||'',n,el);};
    }else if(tag==='EditText'){
      el=document.createElement('input');el.className='ui-input';el.type='text';if(a.inputtype==='1')el.inputMode='decimal';el.autocomplete='off';el.spellcheck=false;el.value=getVal(key,localized(a.text||''));el.setAttribute('aria-label',inputLabel(n,parent));el.title=inputLabel(n,parent)+(a.id?' · '+a.id:'');el.dataset.key=key;el.dataset.originalId=a.id||'';
      if(a.id==='数据路径')el.value=getVal(key,a.text||'');
      el.oninput=()=>{values[key]=el.value;save();};el.onfocus=()=>showControl({...n,a:{...a,title:inputLabel(n,parent)}});
    }else if(tag==='ComboBox'){
      el=document.createElement('select');el.className='ui-select';el.setAttribute('aria-label',tr(a.id)||'Selecionar opção');n.children.forEach((c,i)=>{const o=document.createElement('option');o.value=i;o.textContent=localized(c.a.text);o.title=localized(c.a.text);el.append(o);});const def=Number(a.select)||0;el.value=current==='界面设置'&&a.id==='功能选择开关'?mode:getVal(key,def);
      el.onchange=()=>{values[key]=Number(el.value);showControl({...n,a:{...a,title:n.children[Number(el.value)]?.a.text}});save();if(a.id==='功能选择开关'){mode=Number(el.value);render();}else if(a.id==='游戏版本'){if(Number(el.value)===2)go('通用切号',0,true,'Lista → '+tr(a.id)+' → '+el.selectedOptions[0].textContent);else render();}else if(a.id==='授权选择'&&Number(el.value)===2)go('QQ切号',0,true,'Lista → '+tr(a.id)+' → '+el.selectedOptions[0].textContent);};
    }else if(tag==='CheckBoxGroup'||tag==='RadioGroup'){
      el=document.createElement('div');el.className=tag==='RadioGroup'?'ui-radio-group':'ui-check-group';
      n.children.forEach((c,i)=>{const label=document.createElement('label');label.className='ui-check';const input=document.createElement('input');input.type=tag==='RadioGroup'?'radio':'checkbox';input.name=key;const ck=key+'/'+i;input.checked=!!getVal(ck,(a.select||'').split(',').includes(String(i)));const text=document.createElement('span');text.textContent=localized(c.a.text||'');if(c.a.textcolor)label.style.color=color(c.a.textcolor);label.title=localized(c.a.text||a.id||'');input.setAttribute('aria-label',tr(c.a.text)||tr(a.id)||'Selecionar item');label.append(input,text);el.append(label);
        input.onchange=()=>{if(tag==='RadioGroup')n.children.forEach((_,j)=>values[key+'/'+j]=j===i);else values[ck]=input.checked;save();showControl(n);if(input.checked&&routes[a.id])go(routes[a.id],0,true,'Caixa → '+(localized(c.a.text)||controlLabel(n)));else if(current==='打鱼资源条件'&&a.id==='手动指定分配资源'&&input.checked){values[current+'/'+page+'/辅助自动分配资源/0']=false;go('进攻资源条件',0,true,'Caixa → '+(localized(c.a.text)||controlLabel(n)));}else if(current==='打鱼资源条件'&&['辅助自动分配资源','强制进攻','不判断死鱼'].includes(a.id)){const sibling={'辅助自动分配资源':'手动指定分配资源','强制进攻':'不判断死鱼','不判断死鱼':'强制进攻'}[a.id];if(input.checked)values[current+'/'+page+'/'+sibling+'/0']=false;save();render(true);}else if(current==='界面设置'&&a.id==='发送邮件')render(true);};
      });
    }else if(tag==='WebView'){
      el=document.createElement('div');el.className='ui-web';el.textContent=language==='zh'?'教程加载中 请等待……':'Área de conteúdo online do aplicativo. Nesta cópia, consulte o manual local em português.';
      if(current==='浏览器'){
        el.replaceChildren();const note=document.createElement('p');note.className='tutorial-substitution';note.textContent='Manual local em português. O bot abre um documento online do Tencent Docs; o conteúdo remoto não é reproduzido aqui.';
        const frame=document.createElement('iframe');frame.title='Manual do Xingchen em português';frame.src=document.querySelector('a[href$=".pdf"]').href;
        const link=document.createElement('a');link.href=frame.src;link.target='_blank';link.rel='noopener';link.textContent=' Abrir manual em outra aba';note.append(link);
        el.append(note,frame);
      }
      if(current==='星辰国际'){
        el.classList.add('initial-notice');
        el.textContent=language==='zh'?'①辅助新官网：921015.xyz 输入到浏览器访问\n②卡密、云机、辅助相关下载、反馈、群聊、联系作者等访问官网查看。\n③辅助运行需要具备以下条件：安卓13以下 root权限 分辨率必须720*1280 dpi:320 不能使用场景皮肤，国服可以使用大本营皮肤。\n④mumu模拟器请到模拟器的【设置中心-其他】不要勾选后台挂机时保活运行。':'① Novo site indicado no aplicativo: 921015.xyz. Digite no navegador para visitar.\n② O site reúne licenças, aparelhos na nuvem, downloads, relatos, grupos e contato com o autor.\n③ Requisitos: Android inferior a 13, root, resolução 720 × 1280 e 320 dpi. Não usar cenários personalizados; o servidor chinês permite aparência do Centro de Vila.\n④ No MuMu, abra Central de configurações → Outros e deixe desmarcada a opção de manter a execução ativa durante o uso em segundo plano.';
      }
    }else{el=document.createElement('div');n.children.forEach((c,i)=>{const v=create(c,n,path+'.'+i);if(v)el.append(v);});}
    el.dataset.originalId=a.id||'';el.dataset.kind=tag;style(el,n,parent);
    if(!['Page','LinearLayout','Window'].includes(tag)){el.addEventListener('pointerdown',e=>{e.stopPropagation();showControl(n);});}
    return el;
  }
  function inputLabel(n,parent){const siblings=parent?.children||[],idx=siblings.indexOf(n);const before=siblings[idx-1];if(before?.tag==='Button'&&before.a.background)return assetName(before.a.background)+' — quantidade';if(before?.tag==='TextView'&&before.a.text)return tr(before.a.text);return tr(n.a.id)||'Campo';}
  const helpTexts={
    '首次删兵说明':['Excluir e refazer tropas','Quando ativado, o bot exclui e refaz o exército especificado na primeira execução. Depois não repete a exclusão. Reiniciar o assistente reinicia essa condição.\n\nIsso não equivale a uma conferência obrigatória da composição antes de cada ataque.'],
    '审批说明':['Aprovação automática','A senha de aprovação deve conter números. Separe várias senhas com hífen. Exemplo: 123-456-789 é interpretado como três senhas.\n\nErros de reconhecimento podem provocar recusas indevidas. O texto da tela recomenda deixar Recusar pedidos desmarcado se isso for um problema.'],
    '按时捐兵说明':['Doação por horário','Sem marcar: doações durante 24 horas. Com horário marcado: doação no intervalo escolhido e farm fora dele, conforme o manual.'],
    '造兵说明':['Tropas para farm','Configure uma composição completa para farm. Os números são quantidades de unidades; cada tropa ocupa um espaço diferente.\n\nO manual antigo mostra capacidade de 320, mas a conta observada nesta sessão possui 340 espaços. Use a capacidade real da sua conta.'],
    '按资源条件说明':['Farm quando os recursos baixarem','Os campos estão em unidades de 10 mil. Exemplo: 100 = 1.000.000. Os limites de início e fim são separados. Confira o efeito no bot antes de deixá-lo sem acompanhamento.'],
    '按资源条件不打说明':['Parar farm pelo nível dos recursos','Os campos usam unidades de 10 mil. Na configuração observada, o retorno à doação depende de todos os limites de recursos de saída.'],
    '增援说明':['Reforços para guerras e ligas','Segundo o texto da tela: durante o dia de preparação, executa a cada 20 minutos; nos demais dias, verifica a cada 2 horas.'],
    '下兵说明':['Forma de lançar tropas','A lista da tela principal contém lançamento automático e lançamento por um lado. A janela de lançamento personalizado também existe nas definições do APK, mas sua disponibilidade na versão atual não foi confirmada.'],
    '序号说明':['Contas e números','Os números inicial e final definem a faixa de contas a executar. Os pacotes precisam corresponder às contas. Em uma conta direta, a tela observada permite executar o jogo sem alternar pacotes.'],
    '账号地址说明':['Pasta dos dados','Informe a pasta dos pacotes de conta. O manual usa /sdcard/星辰国际. Os caminhos originais são mantidos em chinês para não alterar o endereço.'],
    '打鱼时捐兵说明':['Doação durante o farm','Esta opção controla a doação executada durante o farm. O aviso do bot orienta a não confundi-la com os modos de doação.'],
    '功能生效说明':['Funções adicionais','A tela contém supercarga, refinaria, aprendizes e equipar construções. As regras internas de execução não estão descritas nos arquivos visuais.'],
    '下拉框说明':['Seleção da função','① A lista contém 11 opções. Abra-a e deslize para cima ou para baixo para escolher a função.\n\n② O botão vermelho ■ à direita para o script imediatamente ao ser tocado.']
  };
  function action(id,n,el){
    if(current==='界面设置'&&id==='关闭紧急通知'){androidNoticeDismissed=true;render(true);return;}
    if(['下载新','查询文件','上传指定文件','上传新'].includes(id)){info(localized('权限不够'),localized('①免费用户不支持上传下载 请访问官网 http://xccoc.fun 购买卡密。'));return;}
    if(current==='自助切号'&&id==='缩小窗口'){go('放大');return;}
    if(current==='放大'&&id==='展开'){back();return;}
    if(current==='放大'&&id==='隐藏'){systemView='home';syncSystem();return;}
    if(current==='自助切号'&&['账号-','账号+'].includes(id)){const input=screenEl.querySelector('[data-original-id="账号数据"]');input.value=Math.max(1,(Number(input.value)||1)+(id==='账号+'?1:-1));input.dispatchEvent(new Event('input'));return;}
    if(routes[id]){go(routes[id],0,true,'Botão → '+(el.textContent.trim()||controlLabel(n)));return;}
    if(id==='停止运行'||id==='停止脚本'){stopSimulation();return;}
    if(id.startsWith('关闭')||id==='取消反馈'){back();return;}
    if(id==='清空设置'||id==='清空造兵设置'){screenEl.querySelectorAll('input.ui-input').forEach(input=>{input.value='';values[input.dataset.key]='';});save();toast('Campos desta tela limpos no exercício.');return;}
    if(id==='取消建筑勾选'||id==='取消科技勾选'||id==='全选科技'){screenEl.querySelectorAll('input[type=checkbox]').forEach(input=>{input.checked=id==='全选科技';const group=input.closest('[data-original-id]');if(group)values[`${current}/${page}/${group.dataset.originalId}/0`]=input.checked;});save();toast(id==='全选科技'?'Pesquisas selecionadas no exercício.':'Seleções removidas no exercício.');return;}
    if(helpTexts[id]){info(...helpTexts[id]);return;}
    if(id==='计算兵种数量'||id==='计算法术数量'){const prefix=id==='计算兵种数量'?'兵':'法';const fields=[...screenEl.querySelectorAll('.ui-input')].filter(i=>i.dataset.originalId.startsWith(prefix));const total=fields.reduce((s,i)=>s+(Number(i.value)||0),0);info('Contagem do exercício',`${total} unidades preenchidas.\n\nEsta referência soma quantidades. O botão do bot calcula espaço de alojamento; esse cálculo não é reproduzido aqui. Confira a capacidade total no jogo antes de atacar.`);return;}
    if(/^账号\d+设置$/.test(id)||id==='跳转指定账号设置'||id==='上一个'||id==='下一个'){go('升级1',0,true,'Botão → '+(el.textContent.trim()||controlLabel(n)));return;}
    if(/^账号\d+打鱼设置$/.test(id)){go('打鱼造兵设置',0,true,'Botão → '+(el.textContent.trim()||controlLabel(n)));return;}
    if(id.endsWith('说明')){info(controlLabel(n),`Este é o botão de informações do controle “${id}”.\n\nO conteúdo dessa ajuda é preenchido pelo aplicativo e não está presente nos arquivos visuais. Consulte o manual em português ou a janela correspondente no bot para obter a regra exata.`);return;}
    if(n.a.background&&!['bt.webp','tt.webp','说明.webp','背景框.png'].includes(n.a.background)){showControl(n);return;}
    if(id==='打鱼同步按钮'||id==='捐兵同步按钮'||id==='同步按钮'||id==='同步复制按钮'){toast('Botão Copiar do modelo visual. Não altera configurações do bot.');return;}
    info(controlLabel(n)||'Ação de demonstração','Este botão está reproduzido para consulta. Ações de execução, compra, upload, download, exclusão, atualização e instalação são apenas demonstradas neste HTML.');
  }
  function renderObservedDialog(content,spec){
    const name=current,tab=page,savedMode=mode;
    current=spec.parent;page=0;if(current==='界面设置'&&[0,1,10].includes(mode))mode=6;
    let background;
    try{background=create(D.screens[current].children.filter(n=>n.tag==='Page')[0]);}finally{current=name;page=tab;mode=savedMode;}
    background.classList.add('observed-background');background.setAttribute('inert','');
    background.setAttribute('aria-hidden','true');
    const layer=document.createElement('div');layer.className='observed-layer';
    const sheet=document.createElement('div');sheet.className='observed-sheet';sheet.style.width=spec.width+'px';sheet.style.minHeight=spec.minHeight+'px';
    sheet.setAttribute('role','region');sheet.setAttribute('aria-label',names[current]);
    sheet.append(content);
    if(!spec.noConfirm){const wrap=document.createElement('div');wrap.className='observed-confirm';const b=document.createElement('button');b.className='confirm';b.textContent=language==='zh'?'确定':'Confirmar';b.onclick=()=>$('#confirm').click();wrap.append(b);sheet.append(wrap);}
    const footer=document.createElement('div');footer.className='observed-background-confirm';footer.setAttribute('aria-hidden','true');footer.setAttribute('inert','');footer.textContent=language==='zh'?'确定':'Confirmar';
    layer.append(sheet);screenEl.replaceChildren(background,footer,layer);
  }
  function arrangeModeEightFeatures(content){
    if(current!=='界面设置'||mode!==7)return;
    const competitionRow=content.querySelector('.ui-row:has(>[data-original-id="竞赛"])');
    const newFeaturesRow=content.querySelector('.ui-row:has(>[data-original-id="超级充能"])');
    if(!competitionRow||!newFeaturesRow)return;
    const parts=[
      newFeaturesRow.querySelector('[data-original-id="功能生效说明"]'),
      newFeaturesRow.querySelector('[data-original-id="超级充能"]'),
      competitionRow.querySelector('[data-original-id="竞赛"]'),
      competitionRow.querySelector('[data-original-id="夜世界开荒"]')
    ].filter(Boolean);
    const row=document.createElement('div');row.className='ui-layout ui-row ui-card mode-eight-features';row.dataset.originalId='modo-oito-funcoes';
    parts.forEach(part=>row.append(part));
    competitionRow.replaceWith(row);newFeaturesRow.remove();
  }
  function render(keepScroll=false){
    $('#app-surface > .versions-heading')?.remove();
    const scroll=keepScroll?screenEl.scrollTop:0,tree=D.screens[current],pages=tree.children.filter(n=>n.tag==='Page');page=Math.min(page,pages.length-1);const tabbed=pages.length>1;tabs.hidden=!tabbed;tabs.replaceChildren();
    if(tabbed)pages.forEach((p,i)=>{const b=document.createElement('button');b.role='tab';b.setAttribute('aria-selected',String(i===page));b.className=i===page?'active':'';b.textContent=localized(p.a.title||(i===0?'设置':'激活云手机【游】'));b.onclick=()=>go(current,i,true,'Aba → '+b.textContent);tabs.append(b);});
    if(current==='界面设置')tabs.hidden=true;
    const content=create(pages[page]);screenEl.replaceChildren(content);arrangeModeEightFeatures(content);screenEl.scrollTop=scroll;
    const sheet=D.review?.dialogs[current];screenEl.classList.toggle('has-observed-dialog',!!sheet);$('#app-surface > .confirm-wrap').hidden=!!sheet||tree.a.showconfirm==='false';
    const runtime=['自助切号','放大','刷经验'].includes(current);
    screenEl.classList.toggle('runtime-window-host',runtime);
    screenEl.classList.toggle('tutorial-host',current==='浏览器');
    if(runtime){content.classList.add('execution-window');content.dataset.execution=current;}
    if(sheet)renderObservedDialog(content,sheet);
    if(livePopups[current]){
      const popupName=current,popupPage=page;current='界面设置';page=0;const background=create(D.screens['界面设置'].children[0]);current=popupName;page=popupPage;content.classList.add('runtime-page');background.classList.add('runtime-background');background.setAttribute('inert','');content.prepend(background);
    }
    if(current==='星辰国际'){
      const head=document.createElement('div');head.className='native-heading initial-heading';const title=document.createElement('span');title.textContent=localized('星辰国际');const b=document.createElement('button');b.textContent=localized('设置');b.onclick=()=>go('应用设置',0,true,'Botão → '+b.textContent);head.append(title,b);screenEl.prepend(head);
    }
    if(current==='通用切号'){const head=document.createElement('div');head.className='native-heading versions-heading';head.textContent=language==='zh'?'双端版本50开':'Várias versões — 50 contas';$('#app-surface').insertBefore(head,tabs);}
    $('#language').value=language;$('#confirm').textContent=language==='zh'?'确定':'Confirmar';
    requestAnimationFrame(()=>{fitRows();if(keepScroll)screenEl.scrollTop=scroll;});
  }
  function fitRows(){
    // Portuguese often needs two lines where Chinese fits in one.
    screenEl.querySelectorAll('.ui-row').forEach(row=>{if(row.scrollWidth>row.clientWidth+3){row.querySelectorAll(':scope > .ui-text,:scope > .ui-check-group span,:scope > .ui-select,:scope > .ui-button:not(.icon)').forEach(el=>{el.style.fontSize=Math.min(parseFloat(getComputedStyle(el).fontSize),13)+'px';});}if(row.scrollWidth>row.clientWidth+10&&row.querySelector('.ui-text:not(:empty)')){row.style.flexWrap='wrap';row.style.rowGap='3px';}});
  }
  $('#launch-bot').addEventListener('click',openApp,{passive:true});
  $('#launch-bot').addEventListener('pointerup',e=>{if(e.pointerType==='touch'){e.preventDefault();openApp();}},{passive:false});
  $('#floating-bot').onclick=openPanel;
  let dismissKeyboard=false;
  $('#android-back').addEventListener('pointerdown',()=>{dismissKeyboard=!!document.activeElement?.matches('input,textarea,select');});
  $('#android-back').onclick=()=>{if(dismissKeyboard){dismissKeyboard=false;document.activeElement?.blur();return;}back();};
  $('#android-home').onclick=()=>{systemView='home';syncSystem();};
  $('#android-overview').onclick=overview;
  $('#recent-app').onclick=()=>{systemView='app';syncSystem();};
  $('#clear-recents').onclick=()=>{taskOpen=false;history=[];systemView='home';syncSystem();};
  $('#launcher-search').oninput=e=>{const match='xingchen assistente bot'.includes(e.target.value.trim().toLowerCase());$('#launch-bot').hidden=!match;$('#launcher-empty').hidden=match;};

  $('#language').onchange=e=>{language=e.target.value;save();render(true);};
  $('#confirm').onclick=()=>{
    save();
    if(current==='星辰国际'){
      floatingAvailable=true;running=false;taskOpen=false;noticeShown=false;history=[];systemView='home';syncSystem();
    }else if(current==='界面设置'&&page===0){
      running=true;floatingAvailable=true;
      if(mode===0||mode===10){go(mode===0?'自助切号':'刷经验');}
      else{systemView='home';syncSystem();toast('Execução iniciada na simulação');}
    }else if(history.length)back();
    else{systemView='home';syncSystem();}
  };
  $('#info-close').onclick=$('#info-confirm').onclick=()=>{$('#info-dialog').hidden=true;};
  $('#info-dialog').addEventListener('click',e=>{if(e.target===$('#info-dialog'))$('#info-dialog').hidden=true;});
  $('#reset').onclick=()=>{values={'界面设置/0/功能选择开关':7};mode=7;save();render();toast('Campos restaurados ao modelo do APK.');};
  $('#export').onclick=()=>{const text=JSON.stringify({format:'xingchen-referencia-1',values,language},null,2);const url=URL.createObjectURL(new Blob([text],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='meu-exercicio-xingchen.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  $('#import').onclick=()=>$('#import-file').click();$('#import-file').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(data.format!=='xingchen-referencia-1'||!data.values||typeof data.values!=='object'||Array.isArray(data.values))throw Error();for(const value of Object.values(data.values))if(!['string','number','boolean'].includes(typeof value))throw Error();values=data.values;language=['pt','zh'].includes(data.language)?data.language:'pt';mode=Number(getVal('界面设置/0/功能选择开关',7));if(mode<0||mode>10)mode=7;save();render();toast('Exercício aberto.');}catch{info('Arquivo inválido','Escolha um exercício JSON salvo por esta referência.');}e.target.value='';};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();back();}});
  let gesture=null;
  screenEl.addEventListener('pointerdown',e=>{if(!e.target.closest('input,select,button,textarea'))gesture={x:e.clientX,y:e.clientY,id:e.pointerId};},true);
  screenEl.addEventListener('pointercancel',()=>{gesture=null;});
  screenEl.addEventListener('pointerup',e=>{
    if(!gesture||e.pointerId!==gesture.id)return;
    const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;gesture=null;
    const count=D.screens[current].children.filter(n=>n.tag==='Page').length;
    if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.7&&count>1){const next=page+(dx<0?1:-1);if(next>=0&&next<count)go(current,next,false,'Deslizar a tela');}
  });
  mode=Number(getVal('界面设置/0/功能选择开关',7));if(mode<0||mode>10)mode=7;
  function resizePhone(){
    const narrow=window.innerWidth<520;
    const width=narrow?Math.max(280,window.innerWidth):480;
    const height=narrow?Math.max(520,Math.min(853.333,window.innerHeight-74)):853.333;
    // On mobile use the real CSS viewport dimensions. Avoid zoom/transform:
    // Safari can otherwise offset pointer coordinates from the visible button.
    $('#phone').style.zoom='';
    $('#phone').style.transform='none';
    $('#phone').style.width=width+'px';$('#phone').style.height=height+'px';
    $('#device-frame').style.width=width+'px';$('#device-frame').style.height=height+'px';
  }
  function updateClock(){$('#android-clock').textContent=new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit',timeZone:'America/Sao_Paulo'}).format(new Date());}
  window.addEventListener('resize',resizePhone);updateClock();setInterval(updateClock,30000);resizePhone();render();syncSystem();
  window.ReferenceApp={go,get current(){return current;},get page(){return page;},get mode(){return mode;},get values(){return {...values};},get screenNames(){return {...names};},get system(){return {view:systemView,taskOpen,running,floatingAvailable};}};
})();
