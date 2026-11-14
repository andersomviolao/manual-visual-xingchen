# Automação de ciclos do bot Xingchen

## Como solicitar

Para executar novamente, o proprietário pode pedir: **“Execute a automação descrita em automação.md na instância [nome].”**

Este arquivo define o procedimento reutilizável. Sua existência não inicia tarefas nem cria agendamentos. A instância deve ser indicada pelo proprietário; no teste inicial, é **conta upando 3**. Nunca substituir a instância por outra conta sem autorização.

## Objetivo e escopo

Abrir a instância somente quando necessário, executar o bot por um período curto, consultar as melhorias em andamento e fechar a instância até a próxima conclusão relevante.

Comparar os tempos restantes de:

- Construções da Vila Principal.
- Construções da Vila do Construtor.
- Pesquisas de tropas da Vila Principal.
- Pesquisas de tropas da Vila do Construtor.
- Melhorias de animais na Casa de Animais, quando disponível na conta.

A melhoria do prédio do laboratório e a melhoria do prédio da Casa de Animais entram como **construções**. As pesquisas de tropas e as melhorias dos animais entram separadamente. Categorias ainda não desbloqueadas são ignoradas.

## Parâmetros padrão

| Parâmetro | Regra |
| --- | --- |
| Espera inicial do teste | Fechar a instância e esperar 10 minutos antes da primeira abertura. |
| Execução mínima | 8 minutos, contados após confirmar que o bot começou a executar. O carregamento do emulador não entra nessa duração. |
| Conclusões consideradas | As três próximas conclusões, ordenadas por horário, entre todas as categorias acima. |
| Proximidade para agrupamento | Até 2 minutos depois do encerramento previsto do período de execução. |
| Margem após uma conclusão | 2 minutos, para compensar arredondamentos e permitir que o bot processe a conclusão. |
| Concorrência | Somente um ciclo ativo e um próximo agendamento por instância. |

## Primeiro ciclo

1. Confirmar a instância indicada, fechá-la e registrar o horário.
2. Agendar sua abertura para 10 minutos depois, sem verificações periódicas durante a espera.
3. Abrir a instância diretamente, sem abrir o LDMultiPlayer, abrir o Xingchen e iniciar o bot com as configurações já salvas.
4. Confirmar a execução e deixá-lo rodar por pelo menos 8 minutos.
5. Pausar o bot e consultar os temporizadores das duas vilas e dos animais disponíveis.
6. Ordenar os horários de conclusão e registrar os três primeiros. Aplicar a regra de agrupamento se houver uma conclusão iminente; caso contrário, fechar a instância e agendar a primeira conclusão mais a margem de 2 minutos.

## Ciclos seguintes e duração variável

1. Ao despertar, adquirir a trava da instância e verificar a fase registrada. Um disparo duplicado não pode abrir outro ciclo.
2. Abrir a instância diretamente, sem abrir o LDMultiPlayer, e iniciar o bot. A primeira conclusão registrada no ciclo anterior determina esse despertar.
3. Definir o encerramento inicial para 8 minutos após o início confirmado do bot.
4. Comparar a segunda conclusão registrada com esse encerramento:
   - Se ocorrer durante a execução, incluí-la no mesmo ciclo. Garantir que o encerramento permita a margem de 2 minutos após sua conclusão.
   - Se ocorrer até 2 minutos depois do encerramento previsto, estender a execução até essa conclusão mais a margem.
   - Se estiver mais distante, não estender por causa dela; ela será considerada no próximo agendamento.
5. Repetir a mesma avaliação para a terceira conclusão, usando o encerramento já ajustado pela segunda.
6. Usar sempre o maior valor entre os 8 minutos mínimos e os horários de conclusão incluídos mais a margem. A duração da execução, portanto, pode variar.
7. Ao terminar, pausar, conferir novamente todos os grupos de melhorias e calcular uma nova lista das três próximas conclusões. Os tempos lidos no jogo prevalecem sobre previsões anteriores.
8. Se a análise revelar uma conclusão a até 2 minutos daquele momento, ela pode entrar na janela atual, respeitando o limite de três conclusões agrupadas por ciclo. Retomar o bot até a conclusão mais a margem e analisar novamente. Não encadear extensões indefinidamente.
9. Fechar a instância, substituir o agendamento anterior por um único despertar na primeira conclusão pendente mais a margem e liberar a trava.

Se houver menos de três melhorias em andamento, usar apenas as disponíveis. Se mais de três terminarem espontaneamente durante a janela, isso não é erro: o limite de três restringe as extensões planejadas, não as conclusões do jogo.

### Exemplos

- Primeira conclusão em 1 hora e segunda em 1 hora e 6 minutos: a segunda cabe na execução mínima de 8 minutos iniciada após o primeiro despertar.
- Segunda conclusão 8 minutos e 30 segundos após o início do bot: estender até 10 minutos e 30 segundos, incluindo a margem.
- Segunda conclusão 15 minutos após o início: ao fim dos 8 minutos ainda faltam 7 minutos. Fechar e agendar outra abertura; não manter a instância aberta apenas para esperar essa conclusão distante.
- Se a segunda provocar extensão, a terceira é comparada com o novo encerramento. Ela só provoca outra extensão se estiver dentro da proximidade de 2 minutos.

## Prevenção de conflitos e registro de estado

Manter as fases **aguardando → abrindo → executando → analisando → fechando → aguardando**. As extensões podem alternar entre execução e análise, sempre dentro do mesmo ciclo.

Registrar localmente: instância, identificador do ciclo, fase, início real da execução, encerramento previsto, três conclusões consideradas, categoria e vila de cada melhoria, horário da leitura, próximo despertar e identificador do único agendamento ativo.

- Um disparo com ciclo já ativo deve ser ignorado, sem iniciar bot ou análise paralela.
- A retomada programada ao fim dos 8 minutos ou de uma extensão continua o ciclo existente; ela não representa um novo ciclo.
- Antes de substituir um agendamento, conferir qual já existe e atualizar o mesmo mecanismo, sem criar duplicatas.
- Se houver uma trava antiga após falha ou reinício, verificar o estado real da instância antes de retomar. Não executar em paralelo por presumir que a trava expirou.
- Armazenar os registros das contas em área local ignorada pelo Git, como `tmp/automacao/`. Nunca publicar capturas, dados de contas ou temporizadores no GitHub.

## Esperas, limites e encerramento

- Não é necessário abrir o LD Multiplayer para iniciar uma instância. Preferir a abertura direta da instância indicada, por seu atalho ou pela interface de linha de comando instalada do LDPlayer. Comando disponível neste computador: `C:\LDPlayer\LDPlayer9\ldconsole.exe launch --name "conta upando 3"`. Para outras instâncias, substituir apenas pelo nome exato autorizado e conferir sua identidade antes de iniciar. Usar a interface visual para controlar o bot e ler o jogo.
- Usar o agendador disponível no aplicativo para os despertares e verificar se o agendamento foi aceito. Não tratar instruções escritas em um prompt como prova de que um reagendamento foi realizado.
- Não consultar telas ou chamar o modelo periodicamente enquanto se aguarda um prazo conhecido. O objetivo é concentrar o consumo nas intervenções necessárias.
- Se o agendador não suportar o horário variável necessário, informar o impedimento e interromper a repetição automática em vez de manter consultas frequentes.
- Se não houver melhorias em andamento, não inventar uma próxima conclusão. Informar a situação e deixar a instância fechada até nova orientação.
- Se um temporizador estiver ilegível, não desbloquear conteúdo nem trocar de conta para obtê-lo. Tentar uma leitura melhor pela interface; se continuar inconclusivo, informar o impedimento.
- Não gastar gemas, usar itens de aceleração ou alterar as configurações salvas do bot sem autorização adicional.
- Manter o computador e o aplicativo de controle ligados e disponíveis. Após suspensão, desconexão ou atraso, conferir o estado atual e recalcular os horários.
- Restaurar as janelas usadas e fechar a instância ao entrar em espera. Preservar as demais instâncias.
- O proprietário pode encerrar ou pausar a automação a qualquer momento. Ao receber essa instrução, cancelar os próximos disparos e informar o estado em que a instância ficou.
