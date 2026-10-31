# Revisão 1370 - 31/10/2026

O site oficial aponta para o instalador 1370, com 47.112.466 bytes. O pacote foi baixado integralmente e sua estrutura ZIP passou na verificação de integridade. SHA-256: `7da92a628d105d464cb03071468fca0fb43849fd3e3bb93748019ddab7ce517e`.

Comparação integral: os 46 arquivos XML e os recursos visuais do pacote 1370 são iguais aos da base 1368 já traduzida. Não foram inventadas novas opções para correções de execução. O histórico oficial informa correções de bugs após mudanças na interface internacional, sem detalhar novas telas.

## Organização e limpeza

- `instaladores/` contém somente o APK 1370. Removidos APKs anteriores e downloads incompletos.
- Manual chinês original em `materiais/manuais/`; PDF traduzido mantido em `docs/manual/`, sem duplicação na raiz.
- Registros de ajustes das instâncias preservados em `materiais/registros/`.
- Revisões reunidas em `HTML/revisoes/`, com cópia de publicação em `docs/revisoes/`.
- Script de publicação usa uma lista de relatórios, eliminando cópias específicas por versão.
- Removida constante de versão não utilizada; nome da função de composição dos modos corrigido.
- Atualizados README, guia e destino dos diagnósticos de layout.

A simulação conserva os dados nativos históricos do aparelho anterior. A indicação de APK 1363 nessa tela não comprova a versão atualmente instalada no emulador.

## Conferência no aplicativo

A instância `upar 1` foi iniciada pelo gerenciador do LDPlayer. O aplicativo abriu na entrada; após confirmação e espera pela rotina de verificação de atualização, exibiu o painel e o aviso gratuito. Após a entrada, o cabeçalho dinâmico exibiu explicitamente a atualização interna 1370 e uma contagem para execução automática. A contagem foi interrompida para evitar iniciar tarefas. Não foi iniciada tarefa no jogo. A conferência visual atual não representa uma nova visita manual a todas as telas; a cobertura integral foi realizada pela comparação dos arquivos do pacote e pelos testes do HTML.

Fontes consultadas: [site](http://xccoc.fun/), [histórico](http://xccoc.fun/msg/log.txt), [download indicado pelo site](https://921015.xyz/fz).

Validação: 49 telas, 58 páginas/abas, 264 recursos, manual e navegação aprovados. Layout em 320, 390 e 480 px sem estouro horizontal. Temporários antigos foram arquivados em `materiais/temporarios-anteriores/`, preservando dados e evidências locais.

Ferramentas antigas de geração inicial e o teste substituído foram preservados em `materiais/fontes-historicas/`. O teste de referência agora executa o diagnóstico de layout atual. Relatórios antigos na raiz de `docs/` são mantidos como compatibilidade com links já divulgados.
