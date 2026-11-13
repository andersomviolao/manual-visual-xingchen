"""Gera os dados locais do HTML. Não executa nenhum código do bot."""
import json,pathlib,xml.etree.ElementTree as E
base=pathlib.Path(__file__).parent
site=base.parent/'docs'
paths=json.loads((base/'caminhos.json').read_text(encoding='utf8'))
uis=json.loads((base/'interfaces-originais.json').read_text(encoding='utf8'))
tr=json.loads((base/'traducoes.json').read_text(encoding='utf8'))
def convert(e):
    return {'tag':e.tag,'a':dict(e.attrib),'children':[convert(c) for c in e]}
trees={name:convert(E.fromstring(s)) for name,s in uis.items()}
review=json.loads((base/'conferencia-1382.json').read_text(encoding='utf8'))
data={'review':review,'screens':trees,'translations':tr,'assets':sorted(p.name for p in (site/paths['assets/bt.webp']).parent.iterdir() if p.is_file()),'source':{'apk':'instaladores/Xingchen-1382.apk','version':'1382','observed':'1382','screens':len(trees),'texts':len(tr)}}
(site/paths['dados.js']).write_text('/* Definições visuais do APK original; não contém os scripts do bot. */\nwindow.BOT_DATA='+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf8',newline='\n')
print('dados.js gerado:',len(trees),'telas,',len(tr),'traduções')
