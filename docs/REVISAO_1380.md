# Revisão 1380 — 11/11/2026

Comparadas integralmente as 46 definições XML do APK 1380 com a base 1375: três alteradas e 43 idênticas.

- **Recursos cheios:** adicionada a opção, marcada por padrão no XML, de continuar atacando quando houver bônus de estrelas. A preferência é salva no exercício.
- **Tarefas gerais:** removidas as opções de coletar benefícios gratuitos da loja e forjar moedas da Capital, ausentes no XML 1380.
- **Aviso de atualização:** novo cabeçalho, botão de fechar e apenas dois botões: Agora não e Atualizar. Removido Atualizar 2.

## Origem do instalador

Site do desenvolvedor: https://921015.xyz/ — seção **辅助游戏下载**, botão **辅助下载**, etiqueta **1380**. O usuário baixou pelo navegador e colocou o arquivo em instaladores em 11/11/2026. Não foi registrado o endereço final do arquivo após redirecionamentos; o guia aponta para o site e sua seção de downloads, sem presumir que /fz continue válido.

Arquivo: `instaladores/Xingchen-1380.apk`; versão interna: **1380.0**; tamanho: **46.790.862 bytes**.

SHA-256: `8cfe4616399ec61af45c49825606df1dfa5a60412fc6e5cbf2d22d313d1b06ab`.

O teste ZIP passou. O certificado contido em META-INF/CERT.RSA tem a mesma impressão digital do APK 1375: `5F93B225B66B775A13AA44AFB93E94586B1ED310`. Isso não constitui auditoria de segurança nem validação criptográfica completa da assinatura APK.

## Cobertura e limites

Guia de estudo das definições visuais do pacote; não executa o bot nem ações no jogo. As três estruturas adicionais de Android e avisos continuam baseadas em observações históricas, sem nova inspeção no emulador. Conteúdos remotos e comportamentos de execução não foram conferidos. O PDF é uma referência histórica e não recebeu uma revisão integral para 1380.

## Publicação e acesso

O guia inclui uma tela de entrada com senha solicitada pelo proprietário. A senha é verificada no navegador e os scripts do guia são carregados somente após a entrada correta. O acesso é solicitado novamente ao recarregar a página. Essa barreira não protege URLs diretos, PDFs, dados ou o código de um repositório público; GitHub Pages não oferece autenticação de servidor.

Recursos de imagem: 269 arquivos no pacote 1380, incluindo `w.webp` e `×.webp`, adicionados desde 1375; os outros 267 permaneceram idênticos. O guia também preserva recursos históricos locais.

Validação nesta sessão: integridade ZIP e comparação dos XML/imagens concluídas; sintaxe JavaScript verificada. O teste de navegador foi bloqueado pelo encerramento do Edge antes do carregamento, portanto layout e navegação ainda precisam de verificação em navegador. O envio ao GitHub não foi concluído: resolução de domínio indisponível na sessão e Git ausente do PATH.

Entrada revisada: instrução “Digite o PIN para acessar o guia.”; PIN incorreto abre uma tela com “PIN incorreto, tente novamente.” e retorno ao formulário. Tentativas repetidas e liberação com PIN correto verificadas por teste de lógica, sem validação visual nesta sessão.
