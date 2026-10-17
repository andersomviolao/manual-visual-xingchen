# Xingchen — referência visual em português

Referência interativa das configurações do Xingchen, com menus, campos e ícones em português do Brasil. Abre no navegador, no computador ou no celular.

São **48 telas**, distribuídas em **57 páginas e abas**: 45 modelos do APK oficial 1355, os ajustes nativos e dois avisos observados na atualização interna 1357. Os controles permitem praticar configurações e consultar os textos chineses. As ações são simuladas e não controlam o jogo nem o aplicativo Android.

Bot atual: **1358**, informado pelo usuário. A identificação foi atualizada; a comparação visual das telas da 1358 está pendente. Consulte [a situação da versão 1358](HTML/REVISAO_1358.md).

## Usar

Abra `docs/index.html` no navegador. A pasta `docs` contém o site pronto e o manual em português. Não precisa instalar dependências para usar ou publicar.

- Alterne entre português e chinês no topo.
- Use o menu lateral e os botões para abrir as configurações.
- Selecione um controle para consultar seu nome original.
- As alterações ficam no navegador de cada visitante. Salvar exercício exporta uma cópia JSON; Abrir exercício recupera essa cópia.
- O botão do manual abre o PDF incluído no próprio site.

## Publicar no GitHub Pages

Envie este repositório para sua conta e configure **Settings → Pages → Deploy from a branch → main → /docs**. O GitHub fornecerá o endereço público.

O passo a passo está em [PUBLICAR_NO_GITHUB.md](PUBLICAR_NO_GITHUB.md).

## Organização

| Pasta / arquivo | Finalidade |
|---|---|
| `docs/` | Site pronto para o GitHub Pages, com imagens e PDF |
| `HTML/` | Fonte de edição da referência |
| `HTML/dados/` | Modelos visuais e traduções |
| `scripts/preparar-publicacao.ps1` | Atualiza a cópia de publicação em `docs/` |
| `scripts/verificar-publicacao.cjs` | Confere o site servido em uma subpasta, como no GitHub Pages |
| `.gitignore` | Mantém APK, temporários, exercícios preenchidos e documentos de origem fora do envio |

Os arquivos Android e os documentos de origem podem continuar na pasta local. O site e o repositório não precisam deles para funcionar. O manual traduzido está incluído em `docs/manual/`.

## Atualizar a referência

Edite os arquivos em `HTML/`. Depois execute, a partir da raiz:

```powershell
.\scripts\preparar-publicacao.ps1
```

O script copia os arquivos do site para `docs/`, coloca o PDF no local correto e ajusta o link do manual. Quando o PDF já estiver em `docs/manual/`, também funciona em uma cópia clonada do repositório, sem o documento de origem da raiz.

Envie as alterações ao GitHub para atualizar o site.

## Conferência automática (opcional)

O site pronto não precisa de Node.js. Para executar os testes de desenvolvimento, use Node.js, execute `npm install` e depois `npm test`. No Windows, o teste usa o Edge instalado. Em outros sistemas, instale o navegador de teste com `npx playwright install chromium`.

O teste serve `docs/` em um endereço com nome de repositório e confere as telas, as imagens, o PDF, a troca de idioma e o salvamento dos exercícios. O resultado fica na pasta local `verificacao/`.

## Alcance da referência

A base dos modelos e das 245 imagens foi comparada com o APK oficial 1355. Os painéis observados foram conferidos na atualização interna 1357. A revisão não confirma uma cópia integral de todas as mensagens geradas em execução ou de todas as alterações remotas do bot. Consulte [a revisão](HTML/REVISAO_1357.md) e [o guia completo](HTML/LEIA-ME.md).

