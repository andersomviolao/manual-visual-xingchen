# Xingchen — simulação Android em português

Abra **index.html** no navegador. Não precisa instalar dependências, iniciar servidor nem conectar o bot real.

## Como navegar

1. A página começa na tela inicial do Android. Toque no ícone **Xingchen** para abrir o aplicativo.
2. Na entrada, **Configurações** abre os ajustes nativos. O triângulo **Voltar**, na barra inferior, retorna à entrada.
3. Confirme a entrada para voltar ao Android com o ícone flutuante do bot disponível na borda esquerda.
4. Toque no ícone flutuante e feche o aviso gratuito pelo X ou pelo botão Voltar. O painel de configurações será exibido.
5. Navegue pelos botões, caixas, listas e abas da interface traduzida. Não há barra lateral, miniaturas ou atalhos para telas antigas.
6. No painel principal, deslize para a esquerda para abrir a ativação de aparelhos na nuvem; deslize para a direita para voltar. Nas janelas com abas, também é possível trocar de página por gesto.

## Barra de navegação Android

- **Voltar**: dispensa a edição em andamento, fecha a janela informativa ou retorna à janela anterior. Na raiz, retorna à tela inicial do Android. No computador, Escape faz a mesma navegação.
- **Início**: abre a tela inicial e mantém a tarefa, os campos e a janela atual para retomar depois.
- **Aplicativos recentes**: mostra a tarefa Xingchen; toque no cartão para retomá-la. **Limpar tudo** remove a tarefa recente, sem apagar os campos salvos do exercício.

Confirmar no painel principal inicia apenas o estado de execução da simulação. O botão vermelho para esse estado e retorna ao Android. Nenhum jogo é aberto e nenhuma função do bot real é executada.

## Opções fora do dispositivo

No rodapé, **Opções da simulação** reúne o idioma de comparação, salvar e abrir exercício JSON, restaurar campos, o manual e o relatório da revisão. Esses recursos ficam fora da interface do aplicativo.

Os campos continuam salvos no navegador. O formato dos exercícios anteriores foi preservado. Recarregar a página retorna ao Android, sem retomar uma execução. Não use senhas ou chaves reais nos campos de prática.

## Fidelidade e limites

A estrutura vem das 45 definições visuais do APK 1355 e de telas adicionais observadas. O painel do bot real foi conferido na atualização interna **1358**. As conferências diretas de 16 e 17/10/2026 cobriram **37 telas/estruturas, 46 páginas/abas e os 11 modos**. Consulte [REVISAO_1358.md](REVISAO_1358.md).

A mudança para simulação Android foi implementada em **17/10/2026**. A navegação de Voltar, Início, Recentes e os estados do aplicativo foram implementados no HTML; não são uma emulação completa do Android, nem uma reprodução comprovada de todos os comportamentos internos do bot. As outras 16 definições auxiliares continuam nos dados para referência de desenvolvimento, sem menu de acesso artificial na interface pública.

A tradução pode exigir quebras de linha e rolagem diferentes do chinês. Conteúdos remotos, contas, licença, compras, arquivos na nuvem, instalação e ações no jogo não são executados. Não se afirma igualdade visual pixel a pixel ou equivalência funcional integral.

O ícone em `system/bot-icon.png` foi extraído do APK local, preservando a arte original. Os demais 245 recursos de imagem continuam em `assets/`.

## Onde editar e verificar

- `index.html`: tela inicial Android, superfície do aplicativo e navegação inferior.
- `estilo.css`: controles, janelas e apresentação do dispositivo.
- `aplicativo.js`: navegação, estados do Android e renderização dos controles.
- `dados.js`: definições, traduções e metadados da conferência.
- `dados/`: fontes XML, traduções e registro da conferência visual.
- `system/`: ícone original do aplicativo.

Após editar, execute `scripts/preparar-publicacao.ps1`, na raiz. O script atualiza `docs/`, incluindo o manual e os arquivos do simulador. O teste `scripts/verificar-publicacao.cjs` verifica o site sob uma subpasta, o fluxo de entrada, navegação Android, gestos, campos por modo, janelas, imagens, manual e exercícios.
