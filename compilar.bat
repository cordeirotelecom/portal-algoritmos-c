@echo off
echo ====================================
echo     COMPILADOR DE PROGRAMAS C
echo ====================================
echo.

REM Verifica se o GCC está disponível
where gcc >nul 2>&1
if %errorlevel% == 0 (
    echo GCC encontrado! Compilando programas...
    echo.
    
    echo Compilando vetores_explicacao.c...
    gcc -o vetores_explicacao.exe vetores_explicacao.c
    if %errorlevel% == 0 (
        echo ✓ vetores_explicacao.exe criado com sucesso!
    ) else (
        echo ✗ Erro ao compilar vetores_explicacao.c
    )
    
    echo.
    echo Compilando vetores_exercicios.c...
    gcc -o vetores_exercicios.exe vetores_exercicios.c
    if %errorlevel% == 0 (
        echo ✓ vetores_exercicios.exe criado com sucesso!
    ) else (
        echo ✗ Erro ao compilar vetores_exercicios.c
    )
    
    echo.
    echo Compilando vetores_algoritmos.c...
    gcc -o vetores_algoritmos.exe vetores_algoritmos.c
    if %errorlevel% == 0 (
        echo ✓ vetores_algoritmos.exe criado com sucesso!
    ) else (
        echo ✗ Erro ao compilar vetores_algoritmos.c
    )
    
    echo.
    echo ====================================
    echo Todos os programas foram compilados!
    echo ====================================
    echo.
    echo Para executar os programas:
    echo   .\vetores_explicacao.exe
    echo   .\vetores_exercicios.exe
    echo   .\vetores_algoritmos.exe
    echo.
    
    goto end
)

REM Verifica se o Visual Studio Build Tools está disponível
where cl >nul 2>&1
if %errorlevel% == 0 (
    echo Visual C++ encontrado! Compilando programas...
    echo.
    
    echo Compilando vetores_explicacao.c...
    cl vetores_explicacao.c /Fe:vetores_explicacao.exe
    if %errorlevel% == 0 (
        echo ✓ vetores_explicacao.exe criado com sucesso!
    ) else (
        echo ✗ Erro ao compilar vetores_explicacao.c
    )
    
    echo.
    echo Compilando vetores_exercicios.c...
    cl vetores_exercicios.c /Fe:vetores_exercicios.exe
    if %errorlevel% == 0 (
        echo ✓ vetores_exercicios.exe criado com sucesso!
    ) else (
        echo ✗ Erro ao compilar vetores_exercicios.c
    )
    
    echo.
    echo Compilando vetores_algoritmos.c...
    cl vetores_algoritmos.c /Fe:vetores_algoritmos.exe
    if %errorlevel% == 0 (
        echo ✓ vetores_algoritmos.exe criado com sucesso!
    ) else (
        echo ✗ Erro ao compilar vetores_algoritmos.c
    )
    
    echo.
    echo ====================================
    echo Todos os programas foram compilados!
    echo ====================================
    echo.
    echo Para executar os programas:
    echo   .\vetores_explicacao.exe
    echo   .\vetores_exercicios.exe
    echo   .\vetores_algoritmos.exe
    echo.
    
    goto end
)

REM Nenhum compilador encontrado
echo ✗ NENHUM COMPILADOR C ENCONTRADO!
echo.
echo Para compilar os programas, você precisa instalar um compilador C.
echo.
echo OPÇÕES DE INSTALAÇÃO:
echo.
echo 1. MinGW-w64 (Recomendado para iniciantes):
echo    - Baixe de: https://www.mingw-w64.org/downloads/
echo    - Ou use: https://sourceforge.net/projects/mingw-w64/files/
echo    - Adicione o diretório bin ao PATH do Windows
echo.
echo 2. Visual Studio Build Tools:
echo    - Baixe de: https://visualstudio.microsoft.com/downloads/
echo    - Instale "Build Tools for Visual Studio"
echo    - Execute pelo "Developer Command Prompt"
echo.
echo 3. Code::Blocks (IDE com compilador):
echo    - Baixe de: http://www.codeblocks.org/downloads
echo    - Escolha a versão "mingw-setup"
echo.
echo 4. Dev-C++ (IDE simples):
echo    - Baixe de: https://www.bloodshed.net/devcpp.html
echo.
echo INSTALAÇÃO RÁPIDA COM CHOCOLATEY:
echo    choco install mingw
echo.
echo INSTALAÇÃO RÁPIDA COM WINGET:
echo    winget install -e --id MinGW.MinGW
echo.
echo Após instalar, execute este arquivo novamente!

:end
echo.
pause
