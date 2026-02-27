param(
    [string]$Path = (Join-Path $PSScriptRoot ".."),
    [switch]$Recurse,
    [switch]$Force
)

$resolvedPath = Resolve-Path -Path $Path -ErrorAction Stop
$searchOptions = @{}
if ($Recurse) {
    $searchOptions['Recurse'] = $true
}

$h5pFiles = Get-ChildItem -Path $resolvedPath -Filter *.h5p @searchOptions

if (-not $h5pFiles) {
    Write-Host "No .h5p files found under $resolvedPath."
    exit 0
}

$unzipCount = 0



foreach ($file in $h5pFiles) {
    $destination = Join-Path $file.DirectoryName $file.BaseName

    if (-not (Test-Path $destination)) {
        New-Item -ItemType Directory -Path $destination | Out-Null
    }

    # Copy .h5p to .zip for extraction
    $zipPath = [System.IO.Path]::ChangeExtension($file.FullName, ".zip")
    Copy-Item -Path $file.FullName -Destination $zipPath -Force
    try {
        $expandArgs = @{
            Path = $zipPath
            DestinationPath = $destination
        }
        if ($Force) {
            $expandArgs['Force'] = $true
        }
        Expand-Archive @expandArgs -ErrorAction Stop 2>$null
        $unzipCount++
    } catch {
        Write-Warning "Skipping invalid or corrupted archive: $($file.FullName)"
    } finally {
        Remove-Item -Path $zipPath -ErrorAction SilentlyContinue
    }
}

Write-Host "Unzipped $unzipCount file(s)."

# # Unzip all .h5p in DS1
# .\scripts\unzip_h5p.ps1 -Path .\DS1

# # Recurse through all subfolders from repo root
# .\scripts\unzip_h5p.ps1 -Recurse

# # Overwrite existing files
# .\scripts\unzip_h5p.ps1 -Path .\DS1 -Force