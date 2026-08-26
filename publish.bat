@echo off
echo ===================================================
echo   Publicando Coopstar Express no GitHub
echo ===================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCESSO] Repositorio publicado com sucesso no GitHub!
) else (
    echo [AVISO] Se solicitou login ou Personal Access Token, insira suas credenciais do GitHub.
)
pause
