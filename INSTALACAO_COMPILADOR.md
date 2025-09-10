# 🛠️ Como Instalar um Compilador C no Windows

Para executar os programas de vetores em C, você precisa de um compilador C instalado. Aqui estão as opções mais simples:

## 🎯 Opção 1: MinGW-w64 (Recomendado)

### Instalação Manual
1. **Baixe o instalador**: 
   - Acesse: https://www.mingw-w64.org/downloads/
   - Clique em "MingW-W64-builds"
   - Baixe o arquivo `.exe` mais recente

2. **Execute a instalação**:
   - Execute o arquivo baixado
   - Mantenha as configurações padrão
   - Anote o caminho de instalação (ex: `C:\mingw64`)

3. **Configure o PATH**:
   - Pressione `Win + R`, digite `sysdm.cpl` e pressione Enter
   - Clique em "Variáveis de Ambiente"
   - Na seção "Variáveis do Sistema", encontre "Path" e clique em "Editar"
   - Clique em "Novo" e adicione: `C:\mingw64\bin`
   - Clique "OK" em todas as janelas

4. **Teste a instalação**:
   ```powershell
   gcc --version
   ```

### Instalação via Chocolatey (Mais Fácil)
Se você tem o Chocolatey instalado:
```powershell
choco install mingw
```

### Instalação via Winget
Se você tem o Windows 10/11:
```powershell
winget install -e --id MinGW.MinGW
```

## 🎯 Opção 2: Visual Studio Build Tools

1. **Baixe o instalador**:
   - Acesse: https://visualstudio.microsoft.com/downloads/
   - Baixe "Build Tools for Visual Studio 2022"

2. **Execute a instalação**:
   - Execute o arquivo baixado
   - Selecione "C++ build tools"
   - Clique em "Install"

3. **Use o Developer Command Prompt**:
   - Procure por "Developer Command Prompt" no menu Iniciar
   - Execute seus comandos de compilação neste terminal

## 🎯 Opção 3: Code::Blocks (IDE Completa)

1. **Baixe e instale**:
   - Acesse: http://www.codeblocks.org/downloads
   - Baixe a versão "codeblocks-XX.XX-mingw-setup.exe"
   - Execute e siga o assistente de instalação

2. **Configure o PATH** (se necessário):
   - Adicione `C:\Program Files\CodeBlocks\MinGW\bin` ao PATH

## 🎯 Opção 4: Dev-C++ (Simples)

1. **Baixe e instale**:
   - Acesse: https://www.bloodshed.net/devcpp.html
   - Baixe e execute o instalador
   - Siga o assistente de instalação

## ✅ Verificando a Instalação

Após instalar qualquer uma das opções, abra o PowerShell e teste:

```powershell
# Teste se o compilador está funcionando
gcc --version

# Se funcionou, navegue até a pasta dos programas
cd "c:\Users\corde\OneDrive\Desktop\Algoritimos e Complexidade\vscode"

# Execute o script de compilação
.\compilar.bat
```

## 🚀 Compilando Manualmente

Se preferir compilar cada arquivo individualmente:

```powershell
# Compilar cada programa
gcc -o vetores_explicacao.exe vetores_explicacao.c
gcc -o vetores_exercicios.exe vetores_exercicios.c
gcc -o vetores_algoritmos.exe vetores_algoritmos.c

# Executar os programas
.\vetores_explicacao.exe
.\vetores_exercicios.exe
.\vetores_algoritmos.exe
```

## 🔧 Alternativas Online (Sem Instalação)

Se não quiser instalar nada localmente, você pode usar compiladores online:

1. **Replit**: https://replit.com/languages/c
2. **OnlineGDB**: https://www.onlinegdb.com/online_c_compiler
3. **Programiz**: https://www.programiz.com/c-programming/online-compiler/
4. **CodeChef**: https://www.codechef.com/ide

Para usar essas opções:
1. Copie o código de qualquer um dos arquivos `.c`
2. Cole no editor online
3. Clique em "Run" ou "Execute"

## 🆘 Solucionando Problemas

### Erro: "gcc não é reconhecido"
- ✅ Verifique se o PATH foi configurado corretamente
- ✅ Reinicie o PowerShell após configurar o PATH
- ✅ Reinicie o computador se necessário

### Erro durante a compilação
- ✅ Verifique se não há erros de sintaxe no código
- ✅ Certifique-se de estar na pasta correta
- ✅ Verifique se tem permissões de escrita na pasta

### PATH não funciona
- ✅ Abra o PowerShell como Administrador
- ✅ Use caminhos completos: `C:\mingw64\bin\gcc.exe`

## 📞 Precisa de Ajuda?

Se ainda tiver problemas:
1. Verifique se seguiu todos os passos
2. Reinicie o computador após a instalação
3. Tente usar um compilador online como alternativa temporária
4. Consulte a documentação oficial do compilador escolhido

## 🎓 Próximos Passos

Após instalar o compilador:
1. Execute `.\compilar.bat` para compilar todos os programas
2. Comece com `.\vetores_explicacao.exe`
3. Continue com os outros programas na ordem sugerida
4. Leia o arquivo `README.md` para orientações de estudo

---
**Dica**: Recomendamos o MinGW-w64 para iniciantes por ser leve e fácil de configurar!
