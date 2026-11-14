# Automação de múltiplas instâncias do Xingchen

## Como solicitar e ampliar

Para iniciar: **“Execute automação multi.md.”** Para ampliar: **“Adicione [nome exato da instância] à automação multi.md.”**

Este arquivo define o procedimento; sua criação não inicia bots nem agenda execuções. `automação.md` continua disponível para o ciclo individual. Este procedimento mantém suas regras e acrescenta a coordenação entre várias instâncias. Consulte também `navegação.md`.

### Instâncias participantes

| Identificação | Nome da instância |
| --- | --- |
| 1 | conta upando 1 |
| 2 | conta upando 2 |
| 3 | conta upando 3 |

Conferir os nomes reais antes da primeira execução. Nunca substituir uma conta por outra. A lista é extensível: cada nova instância recebe estado e ciclo próprios, sem reiniciar as demais.

## Regras mantidas por instância

- Espera inicial: fechar a instância e aguardar 10 minutos antes da primeira abertura.
- Execução mínima: **30 minutos após confirmar o bot executando**. O carregamento não conta.
- Comparar construções e pesquisas de tropas nas duas vilas e melhorias de animais quando disponíveis. Prédios do laboratório e da Casa de Animais contam como construções.
- Ordenar as três próximas conclusões de cada conta, independentemente das outras contas.
- Agrupar conclusões com proximidade de até 2 minutos após o encerramento previsto e garantir margem de 2 minutos após cada conclusão incluída.
- Não gastar gemas, usar acelerações nem alterar as configurações salvas dos bots.
- Abrir cada instância diretamente pelo atalho ou `C:\LDPlayer\LDPlayer9\ldconsole.exe launch --name "nome exato"`. Manter o LD Multiplayer fechado.

## Modelo de concorrência

Os bots podem rodar simultaneamente nas três instâncias. As ações de interface são feitas **uma instância por vez**, confirmando a identidade da janela antes de cada intervenção. Iniciar uma conta não exige esperar os 30 minutos da outra.

Usar um único coordenador e um único próximo disparo do agendador para toda a automação multi. Cada instância mantém um evento lógico próprio: abertura ou término da execução. O disparo central atende o evento mais próximo e depois é substituído pelo próximo prazo calculado.

Não manter a automação individual e a multi controlando a mesma instância. Antes de iniciar a multi, conferir agendamentos existentes e cancelar os individuais das contas participantes, preservando os não relacionados. Travas devem ser compartilhadas com o procedimento individual para impedir controle duplicado.

## Primeiro ciclo

1. Conferir participantes, agendamentos e estado real das janelas. Adquirir a trava do coordenador.
2. Pausar os bots participantes, fechar cada instância e registrar seu horário real de fechamento `F_i`.
3. Para cada instância `i`, registrar abertura inicial `A_i = F_i + 10 minutos`. Fechar as contas em sequência permite que seus prazos iniciais sejam ligeiramente diferentes.
4. Programar um único despertar para o menor `A_i`. Liberar a trava do coordenador durante a espera.
5. Ao despertar, atender as aberturas vencidas em ordem de prazo. Abrir e confirmar o bot de uma conta antes de passar à seguinte, sem aguardar o fim da execução anterior.
6. Registrar separadamente o início confirmado `S_i` e calcular o encerramento `E_i`. Substituir o disparo central pelo evento pendente mais próximo, seja abertura de outra conta ou término de uma execução.
7. Ao atingir `E_i`, pausar e analisar somente aquela conta, fechar e calcular seu próximo despertar. As demais podem continuar rodando.

## Cálculos de cada conta

Usar horários absolutos em UTC nos registros. Exibir horários locais ao proprietário. Para uma melhoria lida no instante `L` com tempo restante `r`, estimar conclusão `C = L + r`; registrar a precisão exibida no jogo. Novas leituras substituem previsões anteriores.

Para cada conta, ordenar `C1 ≤ C2 ≤ C3`, usando apenas as conclusões disponíveis. Não selecionar as três menores de todas as contas juntas: uma conta não pode perder eventos porque outra possui melhorias mais próximas.

### Próxima abertura

Após a análise e o fechamento, definir `A_i = C1 + 2 minutos`. Se o prazo já tiver passado ao finalizar a intervenção, tratar o evento como vencido, sem criar um horário no passado ou executar ciclos paralelos.

### Duração de execução

No início confirmado, definir `E_i = S_i + 30 minutos`. Para a segunda e depois a terceira conclusão da lista anterior, em ordem:

1. Se `Ck ≤ E_i + 2 minutos`, incluir a conclusão e definir `E_i = máximo(E_i, Ck + 2 minutos)`.
2. Se estiver mais distante, não estender por causa dela. Reavaliá-la na próxima análise.
3. Uma conclusão cujo prazo já passou não causa extensão por si só; conferir seu resultado na análise final.

O limite é de três conclusões agrupadas por ciclo, incluindo a primeira. Ao fim, pausar e ler novamente todas as categorias. Se surgir uma conclusão a até 2 minutos da análise e ainda houver espaço nesse limite, retomar até sua conclusão mais 2 minutos e analisar de novo. Não encadear extensões indefinidamente. Ao retomar, os 30 minutos mínimos do ciclo já cumpridos não recomeçam.

Se menos de três melhorias estiverem ativas, usar as disponíveis. Se nenhuma estiver ativa, fechar essa instância, informar a situação e retirá-la da fila até nova orientação, mantendo as outras.

### Exemplos de duração

| Situação após início confirmado | Encerramento calculado |
| --- | --- |
| Segunda conclusão em 6 minutos | 30 minutos, pois já inclui a margem |
| Segunda em 30min30s | 32min30s |
| Segunda em 30min30s e terceira em 34 minutos | 36 minutos: a terceira fica a 1min30s do encerramento ajustado |
| Segunda em 37 minutos | 30 minutos; depois analisar e agendar outra abertura |

## Fila central e conflitos entre contas

Cada conta pode ter no máximo um evento pendente: `abrir` quando aguardando, ou `analisar` quando executando. As fases intermediárias representam uma intervenção em curso, não novos eventos.

O próximo disparo é `T = mínimo dos horários de todos os eventos pendentes`. Exemplo: conta 1 deve abrir às 10h, conta 2 às 10h06 e conta 3 às 11h. Despertar às 10h para a conta 1; depois às 10h06 para a conta 2. Se os bots começarem exatamente nesses horários e não houver extensões, seus términos serão 10h30 e 10h36; a conta 3 continua fechada até 11h.

Ao atender um disparo:

1. Adquirir a trava global. Conferir se a automação está ativa e ler todos os estados.
2. Reunir os eventos vencidos. Ordenar pelo prazo; em empate, analisar execuções antes de abrir novas contas e usar a identificação da instância como desempate estável.
3. Atender um evento por vez, com trava da conta. Antes de executar, conferir fase e identificador do ciclo para descartar eventos antigos ou duplicados.
4. Após cada intervenção, atualizar o relógio e a fila: outra conta pode ter vencido durante a leitura. Priorizar eventos vencidos antes de continuar uma extensão opcional.
5. Registrar atrasos reais. Um bot pode rodar alguns minutos além do término enquanto outra janela está sendo atendida; isso não autoriza reduzir o mínimo de outra conta nem presumir execução sem confirmação.
6. Quando não houver eventos vencidos, substituir o único agendamento pelo menor prazo futuro e conferir a aceitação pela ferramenta. Liberar a trava global.

Não abrir outra conta antecipadamente só porque seu prazo está próximo. Não prolongar um bot para coincidir com o prazo de outra conta. O agrupamento de melhorias é calculado dentro de cada conta; a fila central resolve a concorrência entre contas.

Um disparo antecipado deve ser reagendado pelo tempo restante. Não manter consultas periódicas enquanto se espera um prazo conhecido. Se o agendador não aceitar prazos variáveis, interromper a recorrência e informar o impedimento, sem criar polling como alternativa.

## Estado local e recuperação

Guardar os registros em `tmp/automacao/`, ignorado pelo Git. Não publicar capturas, dados de contas nem temporizadores.

- `multi.json`: participantes, estado geral, identificador do único agendamento, fila, próximo despertar, versão do estado e última atualização.
- Um arquivo por instância: identidade, ciclo, fase, horário de fechamento inicial, início confirmado, encerramento previsto, melhorias lidas e suas categorias/vilas, três conclusões selecionadas, quantidade agrupada, próximo evento e eventual impedimento.
- Uma trava global do coordenador e uma por instância, identificando o responsável e o ciclo. As travas por instância são as mesmas usadas pela automação individual.
- Fases por conta: `aguardando → abrindo → executando → analisando → fechando → aguardando`. Admitir também `bloqueada`, `sem melhorias`, `pausada` e `encerrada`, sem eventos automáticos enquanto estiverem nesses estados.

Salvar o estado de modo atômico. Uma trava global não fica mantida durante os 30 minutos dos bots ou as esperas. A reserva da conta continua identificando seu ciclo; o callback de término pode continuar esse mesmo ciclo, mas não iniciar outro.

Após falha, suspensão ou reinício, conferir o estado real antes de remover travas ou retomar. Não contar tempo em que o bot esteve parado como execução confirmada; se não for possível determinar a duração, garantir uma nova janela de 30 minutos após a confirmação da retomada. Ler novamente temporizadores antes de prever conclusões com base em dados antigos.

Se uma conta falhar ao abrir ou tiver leitura inconclusiva após tentativa de melhor visualização, isolá-la como bloqueada, retirar seu evento e informar. Não reparar a VM nem trocar de conta. As demais podem continuar se suas condições estiverem verificadas. Se houver falha geral do coordenador ou do agendamento, cancelar o disparo central e informar quais instâncias ainda estavam executando; pausar e fechar as controladas quando a interface permitir.

## Adição, remoção e encerramento

Ao pedir uma nova instância:

1. Acrescentar seu nome exato à tabela deste arquivo e publicar a alteração conforme `AGENTS.md`.
2. Se a multi estiver parada, apenas atualizar a configuração; não iniciar sem comando de execução.
3. Se estiver ativa, conferir identidade e ausência de outro controlador. Incorporar a nova conta com seu primeiro ciclo: fechar, esperar 10 minutos e iniciar. Não reiniciar ciclos existentes.
4. Recalcular o menor evento e atualizar o mesmo agendamento central.

Ao remover uma participante durante a execução, pausar seu bot, fechar somente ela e retirar seu evento; preservar os ciclos das demais. Ao encerrar toda a automação, cancelar o disparo central primeiro, marcar o estado como encerrado, pausar e fechar as instâncias participantes controladas e liberar as travas. Não modificar instâncias fora da lista.

Ao finalizar cada intervenção, restaurar janelas e manter a área de trabalho organizada. Aguardar sem abrir telas até o próximo evento aceito pelo agendador. A criação deste documento não comprova que o agendamento foi iniciado: informar ativação somente depois da confirmação real da ferramenta.
