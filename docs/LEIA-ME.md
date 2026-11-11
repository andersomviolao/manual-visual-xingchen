# Xingchen — guia interativo em português

Abra **index.html** no navegador. Não é necessário instalar o bot ou iniciar um servidor.

Revisão atual: **1380, de 11/11/2026**. As 46 definições XML foram comparadas integralmente com o APK 1375: três alteradas e 43 idênticas. Consulte [a revisão](REVISAO_1380.md) para detalhes, origem do instalador e limites.

O ícone Xingchen abre a simulação. Os controles permitem estudar configurações, trocar o idioma e salvar/importar exercícios JSON nas Opções da simulação. As preferências ficam no navegador. Não informe credenciais reais.

**Baixar bot** abre https://921015.xyz/. No site, escolha **辅助游戏下载** e depois **辅助下载**. A versão anunciada na conferência era 1380. O link não fixa um APK antigo nem depende do antigo atalho /fz.

O manual PDF incluído permanece como referência histórica; a revisão 1380 é do guia interativo. A simulação não executa o jogo, instalações, compras ou serviços remotos.

## Organização e manutenção

- `docs/`: versão publicada no GitHub Pages, com o guia e suas ferramentas.
- `materiais/guia-offline/`: cópia local do guia, fora do Git.
- `materiais/manuais/`: documentos de origem locais.
- `instaladores/`: APK atual e backup anterior; fora do GitHub.
- `manutencao/interfaces-originais.json`: 46 XML originais do APK de referência.
- `manutencao/traducoes.json`: traduções das definições.
- `manutencao/conferencia-1380.json`: registro da comparação e origem.

Edite os arquivos em `docs/`. Para regenerar dados, execute `python docs/manutencao/gerar.py`; depois `./docs/manutencao/preparar-publicacao.ps1`. Valide com `node docs/manutencao/verificar-publicacao.cjs` e `node docs/manutencao/conferir-layout.cjs` (Node.js, Playwright e Edge). APKs e scripts de automação do jogo não são publicados.

O guia inclui uma tela de senha. É uma barreira visual no navegador, sem autenticação de servidor: os arquivos continuam acessíveis diretamente no GitHub Pages ou no repositório.
