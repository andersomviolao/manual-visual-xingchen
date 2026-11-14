# Navegação pelo jogo

Registro contínuo das orientações do proprietário e dos caminhos confirmados na interface. Acrescentar aqui novas instruções de navegação à medida que forem explicadas ou verificadas. Consultar este guia antes de ler os temporizadores para a automação de `automação.md`.

## Instância e acesso

- Ao abrir uma instância do LDPlayer, pode surgir uma propaganda no meio da tela do emulador ou no canto inferior direito da área de trabalho do Windows. Se aparecer, fechá-la pelo pequeno **X**, geralmente no canto superior direito da própria propaganda. Conferir a tela atual para distinguir esse X do botão de fechar a instância; não clicar no anúncio. Orientação do proprietário em 14/11/2026.
- Para fechar instâncias, encerrar diretamente os processos específicos da instância alvo. Por exigência do proprietário, não usar a habilidade de controle de computador para esse fechamento. Identificar a instância e seus processos antes de encerrar; não usar encerramento genérico por nome que afete outras contas. Conferir depois que a instância fechou.
- Conferir o nome da instância na barra de título antes de agir.
- Abrir a instância diretamente pelo próprio atalho ou pelo `ldconsole.exe`, conforme `automação.md`. Manter o LD Multiplayer fechado.
- Preservar as demais instâncias e suas configurações.
- As posições dos controles mudam conforme tamanho, orientação e deslocamento da tela. Usar os ícones e uma captura atual, sem reutilizar coordenadas antigas.

## Painel de melhorias da Vila do Construtor

Orientação do proprietário, confirmada em 14/11/2026:

1. Abrir o painel pela área dos construtores, acima do botão de construção no canto inferior direito.
2. No painel lateral direito, usar as duas abas inferiores:
   - **Esquerda:** construções e heróis.
   - **Direita:** melhorias do laboratório, isto é, pesquisas das tropas.
3. Ler as melhorias em andamento no topo da aba. As barras verdes mostram os tempos restantes.
4. As listas de melhorias sugeridas ou disponíveis mostram custos e duração de uma futura melhoria. Esses valores não são temporizadores de atividades em andamento.
5. Itens com cadeado indicam requisitos ainda não atendidos; não representam pesquisa ativa.
6. Usar o X vermelho do painel para fechá-lo.

O prédio do Laboratório Estelar aparece entre as construções. Melhorar esse prédio e pesquisar tropas são atividades diferentes e devem ser lidas nas respectivas abas.

## Troca entre as vilas

- Da Vila do Construtor para a Vila Principal, tocar no barco junto ao cais. Na visualização observada, ele estava na água no alto à direita.
- Na Vila Principal, o barco de retorno foi observado na costa inferior esquerda. A localização na tela depende do enquadramento da vila.
- Confirmar visualmente a vila de destino antes de continuar.

## Painel de melhorias da Vila Principal

O proprietário orientou usar também as abas inferiores nesta vila. Caminhos confirmados em 14/11/2026:

1. Abrir o painel pela área dos construtores, acima do botão de construção no canto inferior direito.
2. Usar a **primeira aba à esquerda** para construções e heróis. Melhorias da Rainha Arqueira e do Rei Bárbaro aparecem nessa lista junto às construções.
3. Usar a **segunda aba**, com ícone de tropa e frasco, para pesquisas do laboratório.
4. Aplicar a mesma distinção entre barras verdes em andamento e sugestões com duração e custo.
5. Há outras abas inferiores. Sua finalidade deve ser confirmada antes de usá-las; não presumir que contenham animais ou pesquisas.

## Leitura para o agendamento

- Conferir construções e pesquisas nas duas vilas, mesmo quando uma das abas estiver sem atividade.
- Não confundir o temporizador da Torre do Relógio com pesquisa de tropa ou construção em andamento.
- Incluir melhorias de animais quando a Casa de Animais estiver disponível; o caminho para essa leitura ainda precisa ser confirmado numa conta que tenha o recurso.
- Não gastar gemas, usar acelerações, iniciar melhorias manualmente nem alterar opções do bot para consultar um prazo.
- Guardar os tempos e demais dados específicos das contas somente em `tmp/automacao/`, ignorado pelo Git. Este guia registra caminhos de navegação, sem dados das contas.

## Bot e retorno ao jogo

- Abertura rápida orientada pelo proprietário: tocar no ícone do Xingchen e confirmar no botão grande inferior da primeira tela. Aguardar o processamento; se aparecer a pergunta de atualização, aceitar. Ao chegar ao painel de opções salvas, tocar diretamente em **Confirmar** no rodapé, mesmo com o aviso central visível. Não fechar esse aviso nem esperar sua contagem regressiva: o bot prossegue sozinho. Confirmar depois que está executando para registrar o início dos 30 minutos. Caminho sem fechar o aviso confirmado na CV15 em 14/11/2026. Evitar capturas e esperas desnecessárias nesse percurso.
- Na sessão observada, o controle de volume + da barra lateral do emulador interrompeu o bot e retornou ao iniciador Android.
- Para consultar o jogo depois dessa interrupção, abrir novamente o ícone do Clash of Clans. Confirmar o estado da tela e que o bot está parado antes de navegar.
- Se houver batalha ainda em andamento, aguardar a tela de resultado e usar o botão de retorno à vila.
- Esse comportamento foi observado nesta instalação; conferir o resultado da ação a cada uso.
