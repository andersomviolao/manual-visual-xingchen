# Xingchen — simulação Android em português

Interface do Xingchen em português do Brasil, dentro de um dispositivo Android simulado. Abre no navegador, no computador ou no celular.

## Usar

Abra `docs/index.html` ou o site publicado. Toque no ícone **Xingchen**, confirme a entrada e depois toque no ícone flutuante para abrir o painel. Navegue pelos controles do próprio aplicativo. A barra inferior oferece **Voltar**, **Início** e **Aplicativos recentes**.

Não há menu lateral nem miniaturas de orientação. Os campos do exercício ficam no navegador. No rodapé, **Opções da simulação** reúne salvar/abrir exercícios, idioma de comparação, manual e relatório.

A simulação não executa o bot nem ações no jogo. O estado de execução, os ajustes nativos e os controles do Android funcionam apenas dentro desta página.

## Alcance

A base contém 45 definições do APK 1355, mais ajustes nativos e dois avisos observados: **48 telas e 57 páginas/abas** nos dados. Na atualização interna **1358**, foram conferidas diretamente **32 telas, 41 páginas/abas e os 11 modos**. As outras 16 definições auxiliares não foram confirmadas nessa versão e não têm atalhos artificiais na interface pública.

A apresentação Android e seu fluxo foram acrescentados em 17/10/2026. Não se afirma uma emulação completa do Android ou identidade visual e funcional integral com o bot. Consulte [o guia](HTML/LEIA-ME.md) e [a revisão visual](HTML/REVISAO_1358.md).

## Atualizar o site

Edite `HTML/` e execute, na raiz:

```powershell
.\scripts\preparar-publicacao.ps1
```

O script monta a publicação em `docs/`, com estilos, dados, 245 imagens, ícone do aplicativo e manual em PDF. Depois envie as alterações ao GitHub; o Pages publica a pasta `docs/` da branch `main`.

O procedimento está em [PUBLICAR_NO_GITHUB.md](PUBLICAR_NO_GITHUB.md). O APK, documentos de origem, temporários e exercícios locais não fazem parte da publicação.

## Verificar

O site pronto não precisa de Node.js. Para os testes de desenvolvimento, instale as dependências de `package.json` e execute `npm test`. No Windows, o teste usa o Edge instalado; em outros sistemas, é necessário instalar o Chromium do Playwright.

A verificação cobre as 48 definições e 57 páginas/abas, os 11 modos, diálogos, ícone, PDF, navegação Android, gestos, retomada de tarefas, armazenamento, exportação/importação e largura de celular. Os resultados ficam em `verificacao/`, fora da publicação.
