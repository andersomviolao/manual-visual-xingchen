# Publicar esta referência no GitHub Pages

A pasta de publicação está pronta: **docs**. Ela contém o HTML, os estilos, as configurações visuais, as imagens e o PDF em português. Os links são relativos e funcionam no endereço de um repositório.

## Na sua conta do GitHub

1. Crie um repositório **público** com o nome desejado. Um exemplo é `manual-visual-xingchen`.
2. Envie o repositório local, preservando a estrutura com `docs/` na raiz. O `.gitignore` já separa os arquivos locais que não fazem parte da publicação.
3. No repositório, abra **Settings** e depois **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch **main** e a pasta **/docs**. Clique em **Save**.
6. Aguarde a publicação e abra o link apresentado pelo GitHub.

O endereço terá este formato:

```text
https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/
```

Depois basta enviar esse link. Cada pessoa poderá navegar pelas telas, preencher campos e abrir o manual sem instalar nada.

## Acesso à conta

Entre diretamente no GitHub pelo seu navegador. Não é necessário compartilhar a senha no chat. A publicação pode ser concluída com a sessão autenticada ou com o fluxo oficial de autorização do GitHub.

## O que já está preparado

- Pasta `docs/` com os arquivos públicos e o PDF.
- Arquivo `.nojekyll` para servir os arquivos estáticos diretamente.
- Link do PDF ajustado para dentro do site.
- `.gitignore` para manter APK, arquivos temporários e exercícios locais fora do repositório.
- Script para reconstruir a publicação quando a referência for editada.
- Verificação dos arquivos e da navegação em um endereço com nome de repositório.

Nenhum repositório remoto ou endereço público é criado durante a preparação local.

