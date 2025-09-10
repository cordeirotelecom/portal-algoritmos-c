# 📚 Programas Educativos sobre Vetores em C

Este projeto contém programas didáticos para ensinar conceitos de vetores em linguagem C.

## 🛠️ Problemas Corrigidos

### ✅ Codificação de Caracteres
- **Problema**: Caracteres especiais não exibiam corretamente
- **Solução**: Configurado UTF-8 (`chcp 65001`) no terminal
- **Arquivo corrigido**: `vetores_explicacao_corrigido.c`

### ✅ IntelliSense do VS Code  
- **Problema**: Headers não eram encontrados
- **Solução**: Criado `.vscode/c_cpp_properties.json` com configurações do compilador
- **Resultado**: Autocomplete e detecção de erros funcionando

## 📁 Arquivos do Projeto

### Programas Principais
- `vetores_explicacao_corrigido.c` - Explicações completas sobre vetores
- `vetores_exercicios.c` - Exercícios práticos  
- `vetores_algoritmos.c` - Algoritmos de ordenação

### Scripts de Compilação
- `compilar_corrigido.bat` - Script atualizado com UTF-8
- `compilar.bat` - Script original (pode ter problemas de codificação)

### Configurações do VS Code
- `.vscode/c_cpp_properties.json` - Configuração do IntelliSense
- `.vscode/settings.json` - Configurações de codificação

## 🚀 Como Usar

### 1. Compilar os Programas
```bash
# Usar o script corrigido
.\compilar_corrigido.bat

# Ou compilar manualmente
gcc -o vetores_explicacao_corrigido.exe vetores_explicacao_corrigido.c
gcc -o vetores_exercicios.exe vetores_exercicios.c  
gcc -o vetores_algoritmos.exe vetores_algoritmos.c
```

### 2. Executar os Programas
```bash
.\vetores_explicacao_corrigido.exe  # Conceitos básicos
.\vetores_exercicios.exe            # Exercícios práticos
.\vetores_algoritmos.exe            # Algoritmos avançados
```

## 🔧 Configuração do Ambiente

### Terminal com UTF-8
```bash
chcp 65001  # Configurar codificação UTF-8
```

### Verificar Compilador
```bash
gcc --version  # Deve mostrar GCC 15.2.0 ou superior
```

## 📋 Conteúdo dos Programas

### `vetores_explicacao_corrigido.c`
- ✅ Declaração e inicialização
- ✅ Acesso aos elementos
- ✅ Modificação de valores
- ✅ Operações básicas (soma, busca, maior elemento)
- ✅ Preenchimento interativo
- ✅ Conceitos importantes
- ✅ Erros comuns
- ✅ Vantagens e desvantagens

### `vetores_exercicios.c`
- ✅ Cálculo da média
- ✅ Encontrar menor elemento  
- ✅ Contar números pares
- ✅ Inversão de vetor
- ✅ Vetor de quadrados
- ✅ Busca e substituição
- ✅ Análise estatística

### `vetores_algoritmos.c`
- ✅ Bubble Sort
- ✅ Selection Sort
- ✅ Insertion Sort
- ✅ Busca binária
- ✅ Análise de complexidade

## ⚠️ Notas Importantes

1. **Codificação**: Use sempre UTF-8 no terminal (`chcp 65001`)
2. **IntelliSense**: As configurações do VS Code estão na pasta `.vscode/`
3. **Compilador**: GCC deve estar no PATH do sistema
4. **Arquivo principal**: Use `vetores_explicacao_corrigido.c` em vez do original

## 🐛 Solução de Problemas

### Caracteres estranhos na saída
```bash
chcp 65001  # Configurar UTF-8 no terminal
```

### Headers não encontrados no VS Code
- Verificar se existe `.vscode/c_cpp_properties.json`
- Usar "Ctrl+Shift+P" → "C/C++: Select IntelliSense Configuration"

### Erro de compilação
```bash
gcc --version  # Verificar se GCC está instalado
winget install BrechtSanders.WinLibs.POSIX.UCRT  # Instalar se necessário
```

---
**Data**: 10 de setembro de 2025  
**Compilador**: GCC 15.2.0 (MinGW-W64)  
**Codificação**: UTF-8
