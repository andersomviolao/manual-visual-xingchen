# Xingchen — simulação Android em português

Abra **index.html** no navegador. Não precisa instalar dependências, iniciar servidor nem conectar o bot real.

A revisão de **31/10/2026** compara as 46 definições visuais do pacote oficial 1370. Elas permanecem iguais às da base 1368. Veja [a revisão atual](REVISAO_1370.md) para a cobertura e os limites.

## Como navegar

1. A página começa na tela inicial do Android. Toque no ícone **Xingchen** para abrir o aplicativo.
2. Na entrada, **Configurações** abre os ajustes nativos. O triângulo **Voltar**, na barra inferior, retorna à entrada.
3. Confirme a entrada para voltar ao Android com o ícone flutuante do bot disponível na borda esquerda.
4. Toque no ícone flutuante e feche o aviso gratuito pelo X ou pelo botão Voltar. O painel de configurações será exibido.
5. Navegue pelos botões, caixas, listas e abas da interface traduzida. Não há barra lateral, miniaturas ou atalhos para telas antigas.
6. No painel principal, deslize para a esquerda para abrir a ativação de aparelhos na nuvem; deslize para a direita para voltar. Nas janelas com abas, também é possível trocar de página por gesto.

A tela inicial também tem os atalhos **Manual em português**, que abre o PDF em outra aba, e **Baixar bot**, que usa o endereço contínuo de download indicado pelo site oficial. Esse endereço entrega a versão disponibilizada pelo autor, sem fixar um número de APK no HTML. A busca da tela inicial filtra os três atalhos.

## Barra de navegação Android

- **Voltar**: dispensa a edição em andamento, fecha a janela informativa ou retorna à janela anterior. Na raiz, retorna à tela inicial do Android. No computador, Escape faz a mesma navegação.
- **Início**: abre a tela inicial e mantém a tarefa, os campos e a janela atual para retomar depois.
- **Aplicativos recentes**: mostra a tarefa Xingchen; toque no cartão para retomá-la. **Limpar tudo** remove a tarefa recente, sem apagar os campos salvos do exercício.

Confirmar no painel principal inicia apenas o estado de execução da simulação. O botão vermelho para esse estado e retorna ao Android. Nenhum jogo é aberto e nenhuma função do bot real é executada.

## Opções fora do dispositivo

No rodapé, **Opções da simulação** reúne o idioma de comparação, salvar e abrir exercício JSON, restaurar campos, o manual e o relatório da revisão. Esses recursos ficam fora da interface do aplicativo.

Os campos continuam salvos no navegador. O formato dos exercícios anteriores foi preservado. Recarregar a página retorna ao Android, sem retomar uma execução. Não use senhas ou chaves reais nos campos de prática.

## Fidelidade e limites

A base contém 46 definições do APK e três estruturas adicionais: 49 telas e 58 páginas/abas. Os relatórios antigos podem ser consultados no histórico do Git. A navegação Android é simulada para estudo.

A tradução pode exigir quebras de linha e rolagem diferentes do chinês. Conteúdos remotos, contas, licença, compras, arquivos na nuvem, instalação e ações no jogo não são executados. Não se afirma igualdade visual pixel a pixel ou equivalência funcional integral.

O ícone em `bot-icon.png` foi extraído do APK local, preservando a arte original. Os demais 264 recursos de imagem continuam em `assets/`.

## Onde editar e verificar

- `index.html`: tela inicial Android, superfície do aplicativo e navegação inferior.
- `estilo.css`: controles, janelas e apresentação do dispositivo.
- `aplicativo.js`: navegação, estados do Android e renderização dos controles.
- `dados.js`: definições, traduções e metadados da conferência.
- `manutencao/`: fontes XML, traduções, conferência atual e ferramentas.
- `bot-icon.png`: ícone original do aplicativo.

A pasta `docs/` é a fonte única do site e também a pasta publicada pelo GitHub Pages. A antiga pasta `HTML/` foi incorporada aqui; não existe mais uma cópia para sincronizar. O endereço público continua o mesmo.

Na raiz do projeto ficam somente `docs/` (site e ferramentas), `instaladores/` (APK local) e `materiais/` (documentos de origem locais), além dos arquivos de controle do Git. Instaladores e materiais continuam fora do GitHub.

Após editar, execute `./docs/manutencao/preparar-publicacao.ps1`, na raiz do projeto. O script valida os arquivos necessários e atualiza os endereços de cache dos recursos no próprio HTML. Não cria outra pasta de publicação.

Para conferir o site, execute `node docs/manutencao/verificar-publicacao.cjs`. Ele testa o site sob uma subpasta, incluindo navegação, imagens, manual, atalhos e exercícios. Para conferir as larguras de tela, execute `node docs/manutencao/conferir-layout.cjs`. Esses testes precisam de Node.js, Playwright e um navegador compatível (Microsoft Edge no Windows).

Os testes apenas exibem resultados. Acrescente `--artefatos` somente quando quiser guardar relatórios e capturas; `BOT_TEST_OUTPUT` permite escolher outra pasta. Os arquivos de teste, manutenção e o gerador `gerar.py` ficam juntos em `manutencao/`. O PDF e a revisão atual estão diretamente em `docs/`. Somente `assets/` e `manutencao/` são subpastas; cópias de relatórios e conferências antigas foram removidas.
