# Xingchen - referência visual em português

Abra [o HTML pronto](docs/index.html) ou [o site publicado](https://andersomviolao.github.io/manual-visual-xingchen/). A página simula o Android para estudar as configurações; não executa o bot.

## Organização

| Pasta | Conteúdo |
| --- | --- |
| `HTML/` | Código-fonte do simulador, traduções e imagens |
| `HTML/revisoes/` | Histórico das conferências e limitações |
| `docs/` | Site publicado pelo GitHub Pages; inclui o PDF traduzido |
| `instaladores/` | Apenas o APK oficial mais recente, fora do Git |
| `materiais/manuais/` | Manual chinês original, fora da publicação |
| `scripts/` | Publicação e verificações |
| `verificacao/` | Resultados opcionais dos testes, gerados somente quando solicitados |

Revisão atual: **31/10/2026, pacote 1370**. As 46 definições de tela e os recursos visuais correspondem à base 1368. O conjunto renderiza 49 telas e 58 páginas/abas. Consulte [o relatório](HTML/revisoes/REVISAO_1370.md) e [o guia de uso](HTML/LEIA-ME.md).

As correções de salvamento e validação do simulador estão descritas na [revisão do código](HTML/revisoes/REVISAO_CODIGO_20261031.md). Os registros e temporários antigos foram excluídos por solicitação do usuário; `materiais/` conserva apenas os manuais.

## Alterar e publicar

Edite `HTML/`. Após mudar traduções ou definições, execute `python HTML/dados/gerar.py`. Depois rode `./scripts/preparar-publicacao.ps1` para atualizar `docs/` e envie ao GitHub. O Pages usa a pasta `docs/` da branch `main`. Não edite a cópia publicada diretamente.

O PDF traduzido tem sua cópia principal em `docs/manual/`. Se fornecer uma revisão em `materiais/manuais/Manual_Xingchen_Portugues_BR.pdf`, o script a copiará para publicação. O manual histórico não representa todas as telas atuais.

## Verificar

Instale as dependências de `package.json` e rode `npm test`. No Windows, os testes usam o Edge instalado. `npm run test:referencia` confere também as larguras móveis. Os dois comandos mostram o resultado no terminal e não acumulam arquivos no projeto.

Para guardar relatórios e capturas em `verificacao/`, use `npm test -- --artefatos` ou `npm run test:referencia -- --artefatos`. A variável opcional `BOT_TEST_OUTPUT` permite escolher outro diretório de saída.

APKs, registros pessoais, exercícios e materiais locais não devem ser enviados ao site.
