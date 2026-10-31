# Revisão da atualização 1365

## Nova conferência — 23 e 24/10/2026

Revisão por navegação visual direta na instância **construtor muros 1** do LDPlayer. Foram abertas **32 telas/estruturas, 41 páginas/abas, os 11 modos** e sete ajudas específicas. As partes inferiores foram conferidas com rolagem. Os testes do HTML são uma validação separada dessa observação do aplicativo.

### Correções desta revisão

- **Manual:** o HTML publicado apontava para `../Manual_Xingchen_Portugues_BR.pdf`, fora da pasta pública. O link da publicação agora usa `manual/Manual_Xingchen_Portugues_BR.pdf`. O acesso pelo rodapé e o PDF usado pelo botão Tutorial são verificados sob uma subpasta de site. O HTML em `HTML/` aponta para `../docs/manual/`, onde o PDF está incluído no repositório; assim não depende do documento original da raiz, que não é enviado ao GitHub.
- **Contas individuais:** Anterior/Próximo apenas alteram o número, como no aplicativo. Os atalhos e o botão de acesso abrem a conta escolhida. A aba mostra seu número e os valores do exercício ficam separados por conta, inclusive as composições acessadas pelo modo de doação múltipla. Exercícios antigos da conta 1 são preservados.
- **Entrada no clã:** marcar/desmarcar a opção revela/oculta imediatamente os campos de tag e pedido, sem precisar trocar de modo. Cada modo exibe apenas o campo de tag correspondente, removendo a segunda caixa indevida que aparecia ao lado dele.
- **Aprovação de pedidos:** o painel foi restaurado também nos modos 9/11 e 10/11, onde aparece no bot; antes o HTML o restringia ao farming 7/11.
- **Faixa inferior:** a sequência Supercarga → Jogos do Clã → Base do Construtor foi conferida nos modos 7/11, 8/11, 9/11 e 10/11. A linha Refinaria → Aprendizes → Equipar construções aparece no farming e nos modos de doação, mas **não aparece em 8/11 — Tarefas cíclicas**. Isso corrige a uniformização indevida registrada em conversas anteriores.
- **Ícones:** o raio azul de Supercarga foi reproduzido em vetor a partir da observação; o marcador do Construtor passou de um castelo para uma cabana. Não são recursos novos extraídos do APK, nem se afirma identidade pixel a pixel.
- **Ajuda:** foram traduzidas as explicações observadas para funções adicionais, visitas, conversão de recursos, intervalo após gestos, cliques por coordenadas, cliques por texto e bloqueio de eventos. Elas substituem o aviso genérico que aparecia nesses botões.
- **Ajustes nativos:** a instância exibe **APK instalado 1363**, modelo SM-A805N, Android 9 e mecanismo 3.8.6. Isso é diferente da atualização interna **1365** e da base visual original **1355**. O título desses ajustes permanece fixo durante a rolagem.
- **Layout:** a escala dos controles acompanha a largura do aparelho, em vez de usar uma escala diferente e fixa na tela principal. As traduções ficam dentro das próprias colunas, sem avançar sobre a caixa vizinha. Foram revisados tamanhos e espaçamentos em larguras de 480, 390 e 320 pixels, incluindo os onze modos. Os limites de recursos dos modos de doação mantêm os três valores e a unidade de 10 mil na mesma linha.

### Cobertura e limites atuais

Foram conferidos: entrada e ajustes nativos; avisos gratuito e de licença; painel principal e sua página de nuvem; tarefas gerais e especiais; recursos, muros e limites por CV; tropas; construções, pesquisa, pets e equipamentos; configurações independentes e suas cinco abas; eventos; obstáculos/layouts; compra e venda de itens; depósitos cheios; pedidos de reforço; guerras/ligas e reforços de guerra; Jogos do Clã; Base do Construtor; doação por conta; idiomas de busca; poções; links de recompensas; múltiplas versões e suas cinco abas; seleção QQ; acesso ao tutorial.

A lista de arquivos na nuvem permanece **bloqueada pela licença gratuita**. Os modelos antigos sem caminho confirmado continuam nos dados, sem atalhos artificiais. As janelas de execução manual, reduzida e de experiência foram preservadas da revisão anterior, mas não foram reexecutadas nesta conferência. O modelo genérico de mensagem não comprova todas as mensagens possíveis. Não foram executados ataques, doações ou tarefas especiais para provocar telas de execução.

A instância foi devolvida ao modo **8/11**, com a configuração aberta, sem iniciar tarefas no jogo. As seleções alteradas temporariamente para abrir os painéis foram restauradas.

O HTML continua sendo uma referência de estudo: a navegação e os controles conferidos foram corrigidos, mas não se afirma reprodução integral de conteúdo remoto, estados restritos por licença ou lógica interna do bot.

---

## Registro anterior — 22/10/2026

Conferência do histórico oficial em **22/10/2026**, horário de Brasília, em `http://xccoc.fun/msg/log.txt`. O autor identifica a atualização interna e o pacote como **1365**, com data de 23 de outubro. A instância aberta também exibiu o indicador visual `v1365` no painel flutuante.

## Mudanças informadas pelo autor

- Correção do uso do aprendiz do construtor no servidor internacional.
- Correção do uso do assistente do laboratório no servidor internacional.
- Correção da melhoria por supercarga no servidor internacional.
- Correção de casos em que o bot não criava o Castelo do Clã, não melhorava o depósito de ouro ou não melhorava a Estrela no CV 17.
- Correções adicionais para erros relatados por usuários.

## Atualização da referência HTML

O cabeçalho, os dados gerados e o material público agora identificam a versão 1365. A tela inicial de configurações reproduz os controles novos integrados ao painel, incluindo **Supercarga**, **Aprendizes**, **Equipar construções** e **Assistente do Laboratório**, com os ícones de informação posicionados junto às opções. Eles representam as funções anunciadas e não executam ações no jogo.

Na conferência com rolagem até o fim da tela, também foram confirmados os blocos de ranqueadas, espera de reforços, check-in, recompensas de baú, refinaria, aprendizes, reforma e restrição por CV. Os marcadores visuais de Supercarga e Base do Construtor foram reproduzidos junto aos respectivos rótulos.

## Conferência do menu de modos

Em 22/10/2026, as onze opções do menu superior da instância pausada foram abertas individualmente e comparadas com o seletor e os blocos condicionais do HTML. A correspondência conferida foi:

1. **Manual / trocar conta e extrair dados** — campos de envio e extração de dados.
2. **Abrir contas automaticamente** — faixa de contas, ataques, nome aleatório e critérios de criação.
3. **Ataque da capital** — etiquetas do clã, nível da capital e regras de inscrição.
4. **Doação automática de moedas da capital** — etiquetas, mensagem, espera e quantidade de doação.
5. **Verificar informações** — moedas da capital, limpeza de dados e nível da conta.
6. **Vincular e-mail** — caminho do arquivo de e-mails e opções do Gmail.
7. **Farming** — horários, recursos, tropas, aprovação e ações de coleta/melhoria.
8. **Tarefas cíclicas** — recursos de ciclo e a opção de parar depois da última conta.
9. **Doação de uma conta** — agenda, limites e seleção de tropas/recursos.
10. **Doação de várias contas** — faixa de contas e botão combinado de tropas de doação e farming.
11. **Ganhar experiência** — aviso específico do modo e controles de execução.

Cada tela possui uma página equivalente no HTML, e os controles que aparecem ou desaparecem no bot são governados pelo mesmo índice do modo. Foram verificados também o item exclusivo de parada após a última conta no modo 8 e o botão combinado do modo 10. Nenhuma tela adicional do menu ficou sem representação no HTML.

A base visual do APK original continua identificada separadamente como APK 1355; 1365 é a atualização interna e o pacote atual informado pelo histórico. A referência permanece uma reprodução de estudo, sem alegar cópia pixel a pixel ou equivalência da lógica de execução.
