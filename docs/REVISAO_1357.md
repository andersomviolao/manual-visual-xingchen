# Revisão da referência — atualização 1357

Conferência em 15/10/2026, horário de Brasília.

## APK baixado e identificação da versão

O download oficial `https://921015.xyz/fz` foi baixado novamente e conferido. O arquivo fornecido é **星辰辅助1355.apk**, com **46.599.839 bytes**. O indicador oficial `https://921015.xyz/fz_update` também informa **1355**.

O download é idêntico ao APK que já estava na raiz do projeto. A cópia da raiz foi gravada com os bytes baixados e preserva o nome correto:

`星辰辅助1355.apk` (na raiz local do projeto; não faz parte da publicação).

SHA-256: `ff7f69b4514cb2a09a167bd5935cb52e71bebff787267aa29bb3a96af3a176af`.

**1357 é a atualização interna do script, não a versão do APK oferecido por esse link.** O próprio aplicativo mostra APK 1355 nas configurações e atualização 1357 na faixa do painel. O site explica que há duas formas de atualização: APK e atualização interna ao abrir o assistente. Não foi criado nem renomeado um APK 1355 como se fosse 1357.

## Resultado da comparação

| Item | Resultado | Alcance |
|---|---|---|
| 45 arquivos de definição das telas | Sem diferenças | Comparação integral com o APK oficial baixado |
| 245 imagens originais | Todas presentes e com bytes idênticos | Comparação individual por SHA-256 |
| Imagens extras ou alteradas | Nenhuma | Pasta `assets/` |
| `qq.png` e `背景框.png` | Não fornecidas no próprio pacote oficial | Os substitutos simples continuam identificados no guia |
| Tela nativa de ajustes e identificação do APK | Compatível com a tela observada | Conferida diretamente no LDPlayer |
| Entrada e aviso roxo | Compatíveis com o conteúdo observado | Conferidos diretamente no aplicativo |
| Painel de farm | Mesma organização observada | Conferido no painel com atualização 1357 |
| Tropas, feitiços e cerco | Mesma grade e ordem de ícones | Conferência visual no aplicativo 1357 |
| Recursos de farm, intervalos e muros | Mesmos controles e valores de modelo | Conferência visual no aplicativo 1357; os valores da conta continuam sendo independentes |
| Aviso inicial do modo gratuito | Acrescentado à referência | Texto observado na atualização 1357 |
| Botão `送卡密` | Destino corrigido no HTML | Na versão gratuita, abre uma oferta; não a janela de validade da licença |

## Ajustes feitos no HTML

- A faixa do painel identifica a atualização **1357**.
- A nota de origem distingue o **APK 1355** da **atualização interna 1357**.
- Foram acrescentadas as janelas **Aviso do modo gratuito** e **Oferta de licença**, com português e chinês, sobre o painel de referência.
- O botão de licença da tela principal abre a oferta correspondente à versão gratuita observada. O modelo de validade de licença continua disponível separadamente no menu lateral.
- O fechamento automático dos avisos permanece desativado no HTML para permitir a leitura.

A referência passa a ter **48 telas**, contando 45 modelos do APK, os ajustes nativos e os dois avisos observados em execução, distribuídos em **57 páginas/abas**.

## Histórico oficial consultado

Fonte atualizada: `http://xccoc.fun/msg/log.txt`.

- **1357 — 16 de outubro:** correção parcial da melhoria de construções da Vila Principal no servidor internacional. O autor diz que a lógica ainda não está completa e que as outras melhorias aguardam correção.
- **1356 — 14 de outubro:** correções de farm, doação de tropas e doação de recursos da Capital no servidor internacional; outras melhorias ainda pendentes.

O espelho `https://921015.xyz/msg/log.txt` estava desatualizado, mostrando 1348. Para esta revisão foi preservado o histórico do endereço `xccoc.fun` acima.

## Limites da conclusão

A comparação integral de arquivos é com o APK oficial 1355. As verificações da atualização 1357 são as telas observadas e descritas na tabela. Não foi obtido um pacote separado completo da atualização interna para comparar todos os arquivos alterados por ela.

Portanto, esta revisão confirma os arquivos-base e os painéis observados. Não afirma que todas as telas remotas, todas as mensagens de ajuda ou todas as regras de exibição da atualização 1357 foram reproduzidas integralmente. A navegação e os cálculos do HTML continuam sendo uma referência de estudo, conforme o `LEIA-ME.md`.

## Conferir novamente

Os resultados e o hash verificados foram preservados neste relatório. As capturas, cópias temporárias de download e relatórios auxiliares foram descartados na limpeza do projeto.

O teste `scripts/verificar-publicacao.cjs`, na raiz do repositório, permite conferir novamente as telas, as imagens, o PDF e a navegação do site publicado. O teste `HTML/dados/verificar.cjs` pode gerar novas capturas da referência quando necessário.
