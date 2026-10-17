# Referência visual do Xingchen em português

Abra **index.html** no Edge. Basta dar dois cliques no arquivo; não é preciso instalar Python, iniciar um servidor ou usar a internet.

A conferência com o download oficial e com os painéis observados na atualização 1357 está em **[REVISAO_1357.md](REVISAO_1357.md)**. O site continua entregando o APK 1355; a 1357 é uma atualização interna do script.

## Versão atual

O bot já está na **1358**, conforme informado pelo usuário. O HTML identifica essa versão; a base visual e a conferência anterior continuam descritas abaixo. A comparação visual da 1358 está pendente. Veja [REVISAO_1358.md](REVISAO_1358.md).

## O que foi reproduzido

- As 45 definições de tela presentes no APK original `星辰辅助1355.apk`, com suas abas, ordem de controles, agrupamentos, campos, listas, caixas e imagens disponíveis.
- Uma 46ª tela: os ajustes nativos do aplicativo, conferidos diretamente no LDPlayer, com os quatro interruptores, dados do sistema e botões de registros e conexão remota. A tela inicial também inclui o aviso roxo observado na atualização 1357.
- Mais duas janelas observadas na atualização 1357: Aviso do modo gratuito e Oferta de licença. O botão de licença do painel abre a oferta exibida no modo gratuito. Total: 48 telas e 57 páginas/abas.
- Tradução dos 755 textos chineses visíveis dessas definições. Caminhos de arquivos conservam sua grafia para continuarem identificáveis.
- Os 11 modos da tela principal e uma apresentação dos campos por modo, reconstruída para estudo.
- Ícones originais das tropas, feitiços, máquinas de cerco, construções, heróis, mascotes e equipamentos.
- Navegação por botões e pelo menu lateral, pesquisa por opções, troca entre português e chinês, consulta do nome original ao selecionar um controle, salvamento local e exportação/importação do exercício em JSON.
- Atalho para a segunda página da tela principal: ativação de celulares na nuvem.

## Como praticar

1. Na tela principal, escolha um modo na lista vermelha.
2. Marque as opções, preencha quantidades e abra os botões de configuração. Funções com janela própria abrem ao serem marcadas. O menu lateral dá acesso direto a todas as telas.
3. Selecione um controle para consultar o texto chinês no painel de ajuda. Para comparar a tela toda, mude Idioma para Chinês original.
4. Use Confirmar para guardar o exercício ou voltar à tela anterior. As alterações ficam apenas no armazenamento deste navegador.
5. Use Salvar exercício para baixar uma cópia JSON; Abrir exercício recupera esse arquivo. Restaurar campos volta aos valores de modelo do APK.
6. Reproduza manualmente no bot real a configuração que quiser usar.

## Fidelidade e limites

A base visual é o **APK 1355**. A tela principal foi comparada com a versão **1357**, atualizada no LDPlayer. O HTML preserva as definições disponíveis no APK, incluindo telas auxiliares ou antigas que podem não estar expostas na atualização atual. Não se afirma uma reprodução integral de todas as alterações remotas da versão 1357.

O português ocupa mais espaço que o chinês. Há ajustes de tamanho de fonte, quebra de linha e altura para manter a legibilidade. A organização e as imagens foram preservadas; não é uma cópia pixel a pixel.

Algumas mensagens de ajuda, anúncios, estatísticas, listas de arquivos, dados de licença e conteúdos de páginas são preenchidos durante a execução do aplicativo. Esses textos não constam das definições visuais. Quando não há texto verificado, a referência informa isso, em vez de inventar instruções. Algumas ajudas conhecidas foram incluídas com base nas telas observadas e no manual traduzido.

Dois fundos citados pelos modelos (`qq.png` e `背景框.png`) não estavam entre as imagens fornecidas nesse pacote; foram substituídos por apresentação simples. Nomes de alguns equipamentos e itens recentes usam tradução descritiva.

Os campos começam com os valores dos modelos do APK, **não com a configuração atual da sua conta**. A navegação, as regras de exibição e as ações dos controles são uma simulação de estudo. Os botões de cálculo somam quantidades no exercício; não reproduzem o cálculo de alojamento do bot. Não servem para validar a capacidade do exército.

Este HTML não executa o bot, não acessa a instância do LDPlayer, não faz compras, não transmite dados, não altera licenças e não envia configurações ao aplicativo. Não contém os scripts executáveis do bot. Não use os campos de exemplo para guardar senhas ou chaves reais.

## Onde editar

| Arquivo ou pasta | Conteúdo |
|---|---|
| `index.html` | Estrutura da página, navegação e área de estudo |
| `estilo.css` | Cores, fontes, dimensões e aparência dos controles |
| `aplicativo.js` | Renderização, navegação, campos por modo, ajudas e salvamento |
| `dados.js` | Definições das telas e traduções carregadas pelo navegador |
| `assets/` | Imagens disponíveis no APK |
| `dados/interfaces-originais.json` | XML visual original das 45 telas, sem scripts do bot |
| `dados/traducoes.json` | Traduções dos textos originais |
| `dados/traduzir.py` | Fonte da tradução organizada por texto |
| `dados/gerar.py` | Gera novamente `dados.js` depois de editar as definições ou traduções |
| `conferencia/` | Pasta temporária criada pelos testes para capturas e relatórios; pode ser descartada |

Para mudanças visuais simples, comece por `estilo.css`. Para mudar um texto diretamente, procure-o em `dados.js`. Se preferir manter os dados organizados, edite `dados/traducoes.json` e gere novamente `dados.js` com `dados/gerar.py` usando Python.

HTML + CSS + JavaScript é adequado para esta referência: abre no navegador, permite clicar e preencher os controles e facilita a comparação visual. Python é útil para gerar os dados, mas não é necessário para usar a referência.

## Verificação

Foi feita uma conferência automática de renderização das 48 telas e suas 57 páginas/abas, carregamento de imagens, tradução dos rótulos, navegação para tropas, persistência depois de recarregar, troca de idioma, seleção dos 11 modos, busca e apresentação em largura de celular. Foram inspecionadas visualmente capturas de telas principais. Isso verifica o HTML; não verifica o funcionamento do bot no jogo.

## Tela de origem no bot

A miniatura à esquerda mostra a tela da interface do bot que contém o controle para abrir a tela atual. O botão ou caixa aparece destacado na miniatura; “Para abrir no bot” mostra seu nome. Se o controle depender de um modo, o modo é informado. Clique na miniatura para abrir a tela de origem.

O menu lateral é um atalho da referência: mesmo entrando por ele, a indicação mostra o controle da interface do bot, não o item do menu lateral nem a última tela visitada. O caminho usa as relações de navegação reproduzidas no HTML; não houve nova conferência ao vivo. Telas auxiliares sem relação de acesso confirmada ficam identificadas como tal.

Conferência em 16/10/2026: o histórico oficial em http://xccoc.fun/msg/log.txt ainda informa atualização interna 1357; https://921015.xyz/fz_update informa APK 1355. Nenhum dispositivo estava conectado ao emulador nesta conferência; não houve nova validação visual do aplicativo em execução.

A barra superior mantém o nome e o idioma à vista. Abra **Opções** para salvar ou abrir exercícios, restaurar campos e ativar ou desativar a ajuda ao selecionar.
