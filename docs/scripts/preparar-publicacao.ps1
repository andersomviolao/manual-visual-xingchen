param()

$ErrorActionPreference = 'Stop'
# docs é a fonte única do site e a pasta publicada pelo GitHub Pages.
$taskSiteDir = Split-Path -Parent $PSScriptRoot
$taskUtf8 = [System.Text.UTF8Encoding]::new($false)
foreach ($taskFileName in @('index.html','estilo.css','aplicativo.js','dados.js','manual/Manual_Xingchen_Portugues_BR.pdf')) {
    if (-not (Test-Path -LiteralPath (Join-Path $taskSiteDir $taskFileName) -PathType Leaf)) {
        throw "Arquivo do site ausente: $taskFileName"
    }
}
$taskIndexPath = Join-Path $taskSiteDir 'index.html'
$taskIndex = [IO.File]::ReadAllText($taskIndexPath)
foreach ($taskResource in @('estilo.css','dados.js','aplicativo.js')) {
    $taskHash = (Get-FileHash -LiteralPath (Join-Path $taskSiteDir $taskResource) -Algorithm SHA256).Hash.Substring(0,12).ToLowerInvariant()
    $taskPattern = '((?:src|href)="' + [regex]::Escape($taskResource) + ')(?:\?[^" ]*)?"'
    if (-not [regex]::IsMatch($taskIndex, $taskPattern)) { throw "Recurso ausente no HTML: $taskResource" }
    $taskIndex = [regex]::Replace($taskIndex, $taskPattern, ('${1}?v=' + $taskHash + '"'))
}
[IO.File]::WriteAllText($taskIndexPath, $taskIndex, $taskUtf8)
[IO.File]::WriteAllText((Join-Path $taskSiteDir '.nojekyll'), '', $taskUtf8)
Write-Output 'Site preparado em docs/ — sem gerar cópias ou pastas de saída.'
