@echo off
chcp 65001 >nul 2>&1
cls
echo ====================================
echo     COMPILADOR DE PROGRAMAS C
echo ====================================
echo.

REM Verificar se o GCC esta instalado
gcc --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: GCC nao encontrado!
    echo.
    echo Para instalar o compilador GCC:
    echo 1. Use o comando: winget install BrechtSanders.WinLibs.POSIX.UCRT
    echo 2. Ou baixe o MinGW-w64 de: https://www.mingw-w64.org/downloads/
    echo 3. Ou use o Chocolatey: choco install mingw
    echo.
    echo Apos a instalacao, reinicie o terminal e execute este script novamente.
    pause
    exit /b 1
)

echo GCC encontrado! Compilando programas...
echo.

REM Compilar vetores_explicacao_corrigido.c
if exist "vetores_explicacao_corrigido.c" (
    echo Compilando vetores_explicacao_corrigido.c...
    gcc -o vetores_explicacao_corrigido.exe vetores_explicacao_corrigido.c
    if errorlevel 1 (
        echo ERRO na compilacao de vetores_explicacao_corrigido.c
    ) else (
        echo ✓ vetores_explicacao_corrigido.exe criado com sucesso!
    )
    echo.
)

REM Compilar vetores_exercicios.c
if exist "vetores_exercicios.c" (
    echo Compilando vetores_exercicios.c...
    gcc -o vetores_exercicios.exe vetores_exercicios.c
    if errorlevel 1 (
        echo ERRO na compilacao de vetores_exercicios.c
    ) else (
        echo ✓ vetores_exercicios.exe criado com sucesso!
    )
    echo.
)

REM Compilar vetores_algoritmos.c
if exist "vetores_algoritmos.c" (
    echo Compilando vetores_algoritmos.c...
    gcc -o vetores_algoritmos.exe vetores_algoritmos.c
    if errorlevel 1 (
        echo ERRO na compilacao de vetores_algoritmos.c
    ) else (
        echo ✓ vetores_algoritmos.exe criado com sucesso!
    )
    echo.
)

echo ====================================
echo Todos os programas foram compilados!
echo ====================================
echo.
echo Para executar os programas:
echo   .\vetores_explicacao_corrigido.exe
echo   .\vetores_exercicios.exe
echo   .\vetores_algoritmos.exe
echo.
echo.
pause
