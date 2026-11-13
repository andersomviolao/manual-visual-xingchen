"""Recompõe a edição PT-BR com a revisão oficial de 12/11/2026.

Requer reportlab e pymupdf. Os PDFs de origem ficam locais, fora do Git.
Preserva a tradução ilustrada conferida; não apresenta o manual antigo como novo.
"""
from pathlib import Path
from io import BytesIO
import hashlib, json, shutil
import pymupdf as fitz
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors

ROOT = Path(__file__).resolve().parents[1]
LOCAL = ROOT / 'materiais/manuais'
BASE = LOCAL / 'historico/Manual_Xingchen_Portugues_BR_1366.pdf'
SOURCE = LOCAL / 'Manual_Xingchen_Original_Chines_2026-11-12.pdf'
OUTPUT = ROOT / 'docs' / json.loads((ROOT/'ferramentas/caminhos.json').read_text(encoding='utf8'))['Manual_Xingchen_Portugues_BR.pdf']
W, H = 1190.551, 841.89
NAVY = colors.HexColor('#123247')
BLUE = colors.HexColor('#007395')
style = ParagraphStyle('body', fontName='Helvetica', fontSize=13, leading=19,
                       textColor=NAVY, spaceAfter=12)
small = ParagraphStyle('small', parent=style, fontSize=11, leading=16)
heading = ParagraphStyle('heading', parent=style, fontName='Helvetica-Bold',
                         fontSize=17, leading=23, textColor=BLUE)
buf = BytesIO()
c = canvas.Canvas(buf, pagesize=(W,H))

def para(text,x,y,width,sty=style):
    p=Paragraph(text,sty); _,height=p.wrap(width,H)
    p.drawOn(c,x,y-height)
    return y-height-12

def header(kicker,title,page):
    c.setFillColor(NAVY); c.rect(0,H-100,W,100,fill=1,stroke=0)
    c.setFillColor(colors.HexColor('#90d5df')); c.setFont('Helvetica-Bold',10)
    c.drawString(38,H-31,kicker)
    c.setFillColor(colors.white); c.setFont('Helvetica-Bold',27)
    c.drawString(38,H-72,title)
    c.setStrokeColor(colors.HexColor('#cadce5')); c.line(38,39,W-38,39)
    c.setFillColor(NAVY); c.setFont('Helvetica',9)
    c.drawString(38,24,'Xingchen | Edição independente em português do Brasil | Consulta: 12/11/2026')
    c.drawRightString(W-38,24,f'Revisão {page} / 2')

header('MANUAL ILUSTRADO + ATUALIZAÇÕES OFICIAIS','Xingchen - edição revisada até a versão 1380',1)
y=H-133
y=para('O manual oficial continua histórico',38,y,W-76,heading)
y=para('O site oficial aponta para o <b>Tutorial do Xingchen International</b> no Tencent Docs. A cópia foi novamente exportada em PDF em 12/11/2026, com 24 páginas. Os metadados públicos informam última edição em <b>25/03/2025</b>. A comparação visual das 24 páginas com o original local não identificou novas instruções ou funções; há diferenças de renderização, tipografia e posicionamento de imagens. Os arquivos não são idênticos byte a byte.',38,y,W-76)
y=para('Esta edição mantém as 27 páginas da tradução ilustrada existente, após estas duas páginas de revisão. Ela traduz o manual histórico, com o original chinês à esquerda e o português à direita. As capturas antigas não representam integralmente a interface 1380. O resumo abaixo vem do histórico oficial do bot e da comparação local dos XML, fontes separadas do manual.',38,y,W-76)
y=para('Principais novidades desde a revisão anterior do PDF (1366)',38,y,W-76,heading)
items=[
('<b>Muros e construtores:</b> correções para reservar construtor ao melhorar construções, retomar a melhoria contínua de muros e usar a opção de reservar construtor para muros (1380).',),
('<b>Farm e recursos cheios:</b> correções na detecção dos recursos, no farm em alguns emuladores MuMu e opção de permanecer conectado quando o limite de recursos impedir ataques.',),
('<b>Guerras e ligas:</b> correções para participar da liga, enviar reforços e reconhecer o botão do clã. Corrigida também a avaliação do desconto de recursos ao melhorar o CV.',),
('<b>Servidor chinês:</b> adicionadas tarefas delegadas e coleta das recompensas do evento Celebração da Madeira na 1374. A tradução do nome do evento é descritiva; o título oficial em português não foi confirmado.',),
('<b>Arquivos e Base do Construtor:</b> envio/recebimento de arquivos passou a oferecer criptografia e descriptografia; corrigidos bloqueios de interface que impediam farm e melhorias na Base do Construtor internacional.',),
]
for item, in items: y=para('• '+item,38,y,W-76)
y=para('<b>Versão anunciada na consulta:</b> APK 1380 e atualização interna 1380, com data 10 de novembro no histórico. O registro 1376 contém apenas “?” e não permite identificar uma mudança. As datas do histórico são publicadas sem ano.',38,y,W-76,small)
assert y>50,y
c.showPage()
header('HISTÓRICO TRADUZIDO E NOTAS DE USO','O que mudou e como consultar esta edição',2)
y=H-132
rows=[['Versão / data do autor','Mudanças descritas pelo histórico oficial'],
['1380 / 10 nov.','Corrigida a opção de reservar construtor para melhorar muros. APK 1380.'],
['1376 / 8 nov.','Registro sem descrição útil: “?”. APK indicado: 1375.'],
['1375 / 7 nov.','Muros voltam a ser melhorados continuamente em condições específicas; corrigido farm em alguns MuMu; opção de não desconectar com recursos cheios.'],
['1374 / 6 nov.','Uso de poções e aprendizes com zero construtores livres; tarefas delegadas e recompensas de evento no servidor chinês; reconhecimento da tela de melhoria e do botão do clã.'],
['1373 / 2 nov.','Correções de participação na liga, reforços da liga e avaliação do desconto de recursos ao melhorar o CV.'],
['1372 / 1 nov.','Correções ao acionar a melhoria de muros e ao detectar recursos cheios.'],
['1371 / 1 nov.','Correção da reserva de construtor ao melhorar construções, do ganho de experiência e de outros erros.'],
['1370 / 30 out.','Correções após a atualização da interface da versão internacional. APK 1370.'],
['1369 / 30 out.','Correção temporária no servidor chinês: reconhecimento de cargos e ataques na Base do Construtor.'],
['1368 / 28 out.','Base do Construtor internacional: corrigidos bloqueios de melhorias e farm. Arquivos: suporte a criptografia/descriptografia no envio e recebimento.'],
['1367 / 26 out.','Correções de erros relatados pelos usuários, sem detalhamento.']]
table=Table([[Paragraph(v,small) for v in row] for row in rows],colWidths=[165,W-76-165])
table.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#e5f1f5')),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),10),('RIGHTPADDING',(0,0),(-1,-1),10),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6),('LINEBELOW',(0,0),(-1,-1),.4,colors.HexColor('#cadce5'))]))
_,height=table.wrap(W-76,H);table.drawOn(c,38,y-height);y-=height+18
y=para('Diferenças verificadas no guia 1380',38,y,W-76,heading)
y=para('A comparação local das 46 definições XML (1375 → 1380) registra: opção de continuar atacando com bônus de estrelas; remoção das opções de benefícios gratuitos da loja e forja de moedas da Capital; aviso de atualização com os botões Agora não e Atualizar. Essas são mudanças de interface, distintas das correções de execução acima.',38,y,W-76,small)
y=para('<b>Termos preservados:</b> “Ataques à Capital” significa raides da Capital do Clã; “Iniciar raide da Capital” é um controle separado. A estrutura antes traduzida como “Refinaria” corresponde à Estação de Produção. A simulação local serve para estudo; esta revisão não executou o bot nem verificou as correções dentro do jogo.',38,y,W-76,small)
y=para('<b>Fontes:</b> <link href="https://921015.xyz/" color="#007395">site oficial</link> · <link href="https://docs.qq.com/doc/DSnRwSW9xYktBVnJU" color="#007395">manual no Tencent Docs</link> · <link href="http://xccoc.fun/msg/log.txt" color="#007395">histórico oficial</link> · registro local REVISAO_1380.md. Os vídeos citados no manual não estão incorporados. Condições comerciais e instruções antigas continuam atribuídas ao autor.',38,y,W-76,small)
assert y>50,y
c.save()

old=fitz.open(BASE); source=fitz.open(SOURCE)
assert len(old)==28 and len(source)==24
out=fitz.open(stream=buf.getvalue(),filetype='pdf')
out.insert_pdf(old,from_page=1)
# Atualiza as referências visuais com a exportação recém-obtida, mantendo as traduções.
for i in range(24):
    p=out[i+5]
    rect=fitz.Rect(38,129.8251953125,500,783.0645141601562)
    p.draw_rect(rect,color=None,fill=(1,1,1),overlay=True)
    p.show_pdf_page(rect,source,i,overlay=True)
toc=[[1,'Revisão 1380: situação do manual e novidades',1],[1,'Histórico traduzido e notas de uso',2]]
toc += [[level,title,page+1] for level,title,page in old.get_toc() if page>1]
out.set_toc(toc)
out.set_metadata({'title':'Xingchen - Manual em português do Brasil - revisão 1380',
                  'author':'Tradução independente do projeto Manual visual Xingchen',
                  'subject':'Manual histórico ilustrado e atualizações oficiais consultadas em 12/11/2026'})
out.save(OUTPUT,garbage=4,deflate=True)
check=fitz.open(OUTPUT);assert len(check)==29
for i in [0,1,5,10,20,28]:
    check[i].get_pixmap(matrix=fitz.Matrix(1,1)).save(ROOT/f'tmp/manual/final-{i+1}.png')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
record={'consulted':'2026-11-12','manual_url':'https://docs.qq.com/doc/DSnRwSW9xYktBVnJU','official_site':'https://921015.xyz/','changelog_url':'http://xccoc.fun/msg/log.txt','manual_last_modified_utc':'2025-03-25T14:48:22Z','source_pages':24,'translated_pages':29,'advertised_apk':'1380','advertised_hot_update':'1380','changelog_latest_date_literal':'11月10日','comparison':'24 páginas comparadas visualmente. Sem novas instruções identificadas; diferenças de renderização e posicionamento. Não há igualdade binária. Tradução ilustrada reaproveitada e referências visuais substituídas pela nova exportação.','source_sha256':sha(SOURCE),'previous_source_sha256':sha(LOCAL/'Manual_Xingchen_Original_Chines.pdf'),'previous_translation_sha256':sha(BASE),'translation_sha256':sha(OUTPUT)}
(ROOT/'ferramentas/conferencia-manual-2026-11-12.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Manual revisado:',len(check),'páginas; SHA-256',sha(OUTPUT))
