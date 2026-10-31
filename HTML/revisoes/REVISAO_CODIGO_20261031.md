# Revisão do código - 31/10/2026

Esta manutenção corrige o simulador em português. A base visual do bot permanece 1370; não houve nova atualização nem execução do aplicativo Android.

## Correções

- Opções mutuamente exclusivas de recursos e ataque são atualizadas antes do salvamento. Recarregar a página não volta a marcar a distribuição automática junto com a manual.
- IDs repetidos no XML recebem chaves de armazenamento distintas. Os dois campos da tela auxiliar de muros conservam valores independentes ao recarregar, exportar e importar.
- O valor antigo compartilhado dos muros permanece apenas no primeiro campo. O segundo começa vazio, pois o valor sobrescrito anteriormente não pode ser recuperado.
- Exercícios inválidos são rejeitados antes de alterar valores, modo, idioma ou armazenamento do exercício aberto. Modos precisam ser inteiros de 0 a 10; os números em texto usados nos exercícios antigos continuam aceitos.
- Dados locais nulos, incompletos ou inválidos não impedem a inicialização. Campos válidos são preservados quando a recuperação é possível. Seleções conflitantes de exercícios antigos são normalizadas.
- Configurações antigas da primeira conta individual continuam sendo importadas. Uma mudança na revisão do layout não substitui mais um modo válido salvo pelo usuário.

## Limpeza

Removidos a função vazia de inspeção, seus eventos sem efeito, o estado de navegação que não era utilizado e rotas ocultadas por avisos de licença. Estilos básicos e de diálogos foram consolidados; classes sem uso foram removidas. A documentação atual foi ajustada após a exclusão das pastas locais de registros e temporários.

Os testes não geram arquivos no projeto por padrão. Relatórios e capturas exigem a opção `--artefatos` ou um diretório definido em `BOT_TEST_OUTPUT`. O diagnóstico visual retorna falha se encontrar estouro horizontal.

## Validação

O teste de publicação aprovou 49 telas, 58 páginas/abas e 264 imagens, incluindo regressões de persistência, importação inválida, compatibilidade e recuperação do armazenamento. A conferência de layout percorreu todas as páginas e os onze modos em 480, 390 e 320 px, sem estouro horizontal. A comparação dos estilos e dimensões calculados pelo navegador, antes e depois da limpeza, não encontrou diferenças nas 207 combinações de páginas/modos e larguras verificadas.

Essa cobertura valida o simulador. Não comprova execução das funções do bot no jogo nem equivalência integral dos comportamentos do Android.
