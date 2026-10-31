# Publicar no GitHub Pages

Repositório: https://github.com/andersomviolao/manual-visual-xingchen

Site: https://andersomviolao.github.io/manual-visual-xingchen/

1. Edite os arquivos-fonte em `HTML/`.
2. Se alterar traduções ou definições, execute `python HTML/dados/gerar.py`.
3. Execute `./scripts/preparar-publicacao.ps1` na raiz.
4. Execute `npm test` e, para alterações visuais, `npm run test:referencia`.
5. Revise e envie as alterações da branch `main` ao GitHub.
6. Aguarde o workflow de Pages e confira o site publicado.

O Pages publica `docs/`. O script copia os recursos e relatórios de `HTML/revisoes/`, mantém o PDF em `docs/manual/` e atualiza os endereços de cache. Links antigos de revisões são preservados por compatibilidade.

`instaladores/`, `materiais/` e `verificacao/` são locais e ignorados pelo Git. Não envie APKs, registros das instâncias, credenciais ou exercícios preenchidos para o site.

Os testes não gravam arquivos por padrão. Acrescente `-- --artefatos` ao comando npm apenas quando precisar guardar os relatórios e as capturas.
