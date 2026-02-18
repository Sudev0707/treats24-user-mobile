$assetsDir = "src\assets"
$imageExtensions = @("*.png", "*.jpg", "*.jpeg")

Get-ChildItem -Path $assetsDir -Recurse -File -Include $imageExtensions | ForEach-Object {
    $filePath = $_.FullName
    $originalSize = $_.Length

    $ext = $_.Extension.ToLowerCase()
    $outputPath = $filePath -replace $ext, "_optimized$ext"

    try {
        if ($ext -eq ".png") {
            & magick $filePath -quality 80 -define png:compression-level=9 $outputPath
        } elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") {
            & magick $filePath -quality 80 -sampling-factor 4:2:0 $outputPath
        }

        # Check if output file exists and is smaller
        if (Test-Path $outputPath) {
            $optimizedSize = (Get-Item $outputPath).Length
            if ($optimizedSize -lt $originalSize) {
                Move-Item $outputPath $filePath -Force
                $reduction = [math]::Round((($originalSize - $optimizedSize) / $originalSize) * 100, 2)
                Write-Host "$filePath optimized: $originalSize -> $optimizedSize bytes ($reduction% reduction)"
            } else {
                Remove-Item $outputPath -Force
                Write-Host "${filePath}: No reduction possible"
            }
        }
    } catch {
        Write-Host "Error optimizing $filePath : $($_.Exception.Message)"
    }
}

Write-Host "Image optimization complete."
