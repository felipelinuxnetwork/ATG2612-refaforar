Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Publicando Coopstar Express no GitHub" -ForegroundColor Cyan
Write-Host "  Repositorio: https://github.com/felipelinuxnetwork/ATG2612-refaforar.git" -ForegroundColor DarkGray
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[SUCESSO] Repositorio publicado com exito no GitHub!" -ForegroundColor Green
} else {
    Write-Host "`n[INFO] Caso seja solicitado usuario/senha no terminal, utilize seu usuario 'felipelinuxnetwork' e o seu Personal Access Token (classic) gerado no GitHub." -ForegroundColor Yellow
}
