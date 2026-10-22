"""Gera os dados locais do HTML. Não executa nenhum código do bot."""
import json,pathlib,xml.etree.ElementTree as E
base=pathlib.Path(__file__).parent
uis=json.loads((base/'interfaces-originais.json').read_text(encoding='utf8'))
tr=json.loads((base/'traducoes.json').read_text(encoding='utf8'))
def convert(e):
    return {'tag':e.tag,'a':dict(e.attrib),'children':[convert(c) for c in e]}
trees={name:convert(E.fromstring(s)) for name,s in uis.items()}
review=json.loads((base/'conferencia-1363.json').read_text(encoding='utf8'))
data={'review':review,'screens':trees,'translations':tr,'assets':[p.name for p in (base.parent/'assets').iterdir()],'source':{'apk':'星辰辅助1355.apk','version':'1355','observed':'1363','screens':len(trees),'texts':len(tr)}}
(base.parent/'dados.js').write_text('/* Definições visuais do APK original; não contém os scripts do bot. */\nwindow.BOT_DATA='+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf8')
print('dados.js gerado:',len(trees),'telas,',len(tr),'traduções')
