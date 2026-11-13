param()

$ErrorActionPreference = 'Stop'
# docs é a fonte única do site e a pasta publicada pelo GitHub Pages.
$taskSiteDir = Join-Path (Split-Path -Parent $PSScriptRoot) 'docs'
$taskUtf8 = [System.Text.UTF8Encoding]::new($false)
foreach ($taskFileName in @('index.html','r/40ee78a6/d07ffefd/33067e5cd1aa6ff2.css','r/d19ee7bc/846bf152/a179235114fbc100.js','r/feee7e6b/8c5ef3dc/7c2488f4a8663413.js','r/4ef9ede3/fc45762d/ee607e44444e845b.js','r/0629895b/c57ff5a8/7c2a95b4876da032.pdf')) {
    if (-not (Test-Path -LiteralPath (Join-Path $taskSiteDir $taskFileName) -PathType Leaf)) {
        throw "Arquivo do site ausente: $taskFileName"
    }
}
$taskIndexPath = Join-Path $taskSiteDir 'index.html'
$taskIndex = [IO.File]::ReadAllText($taskIndexPath)
$taskIndex = [regex]::Replace($taskIndex, 'data-guide-code="([^"]+)"', { param($m) 'data-guide-src="' + [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($m.Groups[1].Value)) + '"' })
$taskIndex = [regex]::Replace($taskIndex, 'data-destination="([^"]+)"', { param($m) 'data-resolved-link="' + [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($m.Groups[1].Value)) + '"' })
foreach ($taskResource in @('r/40ee78a6/d07ffefd/33067e5cd1aa6ff2.css','r/feee7e6b/8c5ef3dc/7c2488f4a8663413.js','r/d19ee7bc/846bf152/a179235114fbc100.js','r/4ef9ede3/fc45762d/ee607e44444e845b.js','r/0629895b/c57ff5a8/7c2a95b4876da032.pdf')) {
    $taskHash = (Get-FileHash -LiteralPath (Join-Path $taskSiteDir $taskResource) -Algorithm SHA256).Hash.Substring(0,12).ToLowerInvariant()
    $taskPattern = '((?:src|href|data-guide-src|data-resolved-link)="' + [regex]::Escape($taskResource) + ')(?:\?[^" ]*)?"'
    if (-not [regex]::IsMatch($taskIndex, $taskPattern)) { throw "Recurso ausente no HTML: $taskResource" }
    $taskIndex = [regex]::Replace($taskIndex, $taskPattern, ('${1}?v=' + $taskHash + '"'))
}
$taskIndex = [regex]::Replace($taskIndex, 'data-guide-src="([^"]+)"', { param($m) 'data-guide-code="' + [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($m.Groups[1].Value)) + '"' })
$taskIndex = [regex]::Replace($taskIndex, 'data-resolved-link="([^"]+)"', { param($m) 'data-destination="' + [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($m.Groups[1].Value)) + '"' })
[IO.File]::WriteAllText($taskIndexPath, $taskIndex, $taskUtf8)
[IO.File]::WriteAllText((Join-Path $taskSiteDir '.nojekyll'), '', $taskUtf8)
Write-Output 'Site preparado em docs/ — sem gerar cópias ou pastas de saída.'
