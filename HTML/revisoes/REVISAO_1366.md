# Revisão 1366 - 24/10/2026

Base: APK 1366 baixado do endereço de download indicado por xccoc.fun, sem instalação nem execução. Foram comparados os 45 arquivos XML com os arquivos anteriores: 44 permanecem idênticos; o painel principal mudou. Os recursos gráficos foram atualizados a partir do pacote original.

Conferência visual atual: instância `upar 3`, atualização interna 1366, painel principal, trecho inferior e Tarefas gerais. A auditoria anterior da 1365 permanece como histórico; não foi repetida uma visita manual a todas as telas nesta revisão. A correspondência das demais definições foi verificada por comparação dos arquivos, e a renderização é percorrida pelos testes locais.

## Interface

- Botões de tarefas gerais, exército, ataque e doação usam os novos fundos originais, preservando texto traduzido.
- Faixa de Supercarga, Jogos do Clã e Base do Construtor usa os ícones originais. A composição deixou de reconstruir a linha antiga.
- Removidos da definição principal os campos antigos de captura de informações, API de e-mail Xingchen e aceleração por gemas dessa faixa. A tela própria antiga continua acessível no catálogo de referência do APK.
- Mantidos campos independentes por conta e os comportamentos já conferidos entre os onze modos.

## Termos do jogo

`精制台` é a Estação de Produção, estrutura das defesas diferenciadas, que são temporárias. Não é refinaria. A opção compacta `精制台升级` é apresentada como “Defesas temporárias”; a ajuda explicita a estrutura e a condição de “Melhorar construções”.

`都城偷袭` e `都城突袭` referem-se a ataques/raides na Capital do Clã. O manual descreve entrar em clãs e atacar a Capital. Foi removida a tradução literal “furtivo”. `发起偷袭`, em Tarefas gerais, é “Iniciar raide da Capital”, um controle distinto. Não foi acionado no jogo, portanto suas condições e sequência de execução não foram validadas.

Fontes primárias: [Supercell - atualização das defesas diferenciadas](https://supercell.com/en/games/clashofclans/pt/blog/release-notes/a-atualizacao-mais-diferenciada-do-clash/), [Supercell - Estação de Produção](https://supercell.com/en/games/clashofclans/pt/blog/news/the-awesome-quest-chegou/).

## Manual

O [site oficial](http://xccoc.fun/) continua apontando para [o mesmo Tencent Docs](https://docs.qq.com/doc/DSnRwSW9xYktBVnJU). Na consulta, ele informa 24 páginas e 4.615 caracteres. O índice, a paginação e a página 11 (com captura da versão 1008) correspondem ao original chinês usado na tradução. Não foi estabelecida igualdade integral do documento nem a data da última edição online.

Conclusão: o PDF é compatível com a estrutura e a amostra verificadas do manual online, porém ambos mostram interface antiga em relação ao bot 1366. O PDF traduzido agora tem 28 páginas: uma revisão inicial e as 27 páginas anteriores, com 16 ocorrências de “ataques furtivos” corrigidas. As capturas históricas foram preservadas. A nota inicial explica a versão e os limites da comparação.

O link do HTML permanece relativo à publicação (`manual/Manual_Xingchen_Portugues_BR.pdf`) para funcionar no subdiretório do GitHub Pages. O script de publicação preserva o PDF no destino e os testes verificam resposta 200 e assinatura PDF.

## Histórico de execução

O [histórico oficial](http://xccoc.fun/msg/log.txt) informa correções na detecção de recursos cheios, no percentual para melhoria dos muros, na melhoria da Estação de Produção e ao iniciar raides. Estrelas de vitória pendentes passam a ignorar a regra de recursos cheios. Não foram inventados controles novos para essas correções internas.

O histórico traz “25 de outubro”; a consulta e a revisão local ocorreram em 24/10/2026. A versão 1366 foi confirmada no painel, apesar dessa diferença de data. A versão do APK instalado exibida na tela de sistema permanece a observação histórica 1363 e não deve ser confundida com o pacote 1366 usado como fonte visual.
