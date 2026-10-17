param()

$ErrorActionPreference = 'Stop'
$taskProjectRoot = Split-Path -Parent $PSScriptRoot
$taskSourceDir = Join-Path $taskProjectRoot 'HTML'
$taskPublishDir = Join-Path $taskProjectRoot 'docs'
$taskAssetsSource = Join-Path $taskSourceDir 'assets'
$taskAssetsTarget = Join-Path $taskPublishDir 'assets'
$taskManualTargetDir = Join-Path $taskPublishDir 'manual'
$taskManualName = 'Manual_Xingchen_Portugues_BR.pdf'
$taskManualSource = Join-Path $taskProjectRoot $taskManualName
$taskManualTarget = Join-Path $taskManualTargetDir $taskManualName
$taskUtf8 = [System.Text.UTF8Encoding]::new($false)

foreach ($taskFileName in @('index.html','estilo.css','aplicativo.js','dados.js','REVISAO_1357.md')) {
    if (-not (Test-Path -LiteralPath (Join-Path $taskSourceDir $taskFileName) -PathType Leaf)) {
        throw "Arquivo de origem ausente: $taskFileName"
    }
}
if (-not (Test-Path -LiteralPath $taskAssetsSource -PathType Container)) { throw 'Pasta de imagens ausente.' }
if (-not (Test-Path -LiteralPath $taskManualSource -PathType Leaf) -and -not (Test-Path -LiteralPath $taskManualTarget -PathType Leaf)) {
    throw 'O PDF em português não foi encontrado na raiz nem na pasta de publicação.'
}

New-Item -ItemType Directory -Force -Path $taskPublishDir,$taskAssetsTarget,$taskManualTargetDir | Out-Null

foreach ($taskFileName in @('estilo.css','aplicativo.js','dados.js')) {
    Copy-Item -LiteralPath (Join-Path $taskSourceDir $taskFileName) -Destination (Join-Path $taskPublishDir $taskFileName) -Force
}
Get-ChildItem -LiteralPath $taskAssetsSource -File | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $taskAssetsTarget $_.Name) -Force
}
Copy-Item -LiteralPath (Join-Path $taskSourceDir 'system') -Destination $taskPublishDir -Recurse -Force

if (Test-Path -LiteralPath $taskManualSource -PathType Leaf) {
    Copy-Item -LiteralPath $taskManualSource -Destination $taskManualTarget -Force
}

$taskIndex = [IO.File]::ReadAllText((Join-Path $taskSourceDir 'index.html'))
$taskOldLink = '../Manual_Xingchen_Portugues_BR.pdf'
if (-not $taskIndex.Contains($taskOldLink)) { throw 'O link esperado para o manual não foi encontrado no HTML de origem.' }
$taskIndex = $taskIndex.Replace($taskOldLink, 'manual/Manual_Xingchen_Portugues_BR.pdf')
[IO.File]::WriteAllText((Join-Path $taskPublishDir 'index.html'), $taskIndex, $taskUtf8)
[IO.File]::WriteAllText((Join-Path $taskPublishDir '.nojekyll'), '', $taskUtf8)

# O relatório público usa caminhos relativos ao projeto.
$taskReview = [IO.File]::ReadAllText((Join-Path $taskSourceDir 'REVISAO_1357.md'))
$taskReview = [regex]::Replace($taskReview, 'C:\\Users\\[^\r\n`]+\\星辰辅助1355\.apk', '星辰辅助1355.apk')
[IO.File]::WriteAllText((Join-Path $taskPublishDir 'REVISAO_1357.md'), $taskReview, $taskUtf8)

Copy-Item -LiteralPath (Join-Path $taskSourceDir 'REVISAO_1358.md') -Destination (Join-Path $taskPublishDir 'REVISAO_1358.md') -Force

$taskFiles = @(Get-ChildItem -LiteralPath $taskPublishDir -Recurse -File)
$taskSize = ($taskFiles | Measure-Object -Property Length -Sum).Sum
Write-Output ("Publicação preparada: docs/ — {0} arquivos, {1:N2} MB." -f $taskFiles.Count, ($taskSize / 1MB))
