# Programas Educativos sobre Vetores em C

Este repositório contém três programas em C criados para ensinar conceitos fundamentais sobre vetores (arrays) de forma didática e prática.

## 📁 Arquivos Incluídos

### 1. `vetores_explicacao.c` - Conceitos Fundamentais
**Objetivo**: Introduzir os conceitos básicos de vetores
**Conteúdo**:
- Declaração e inicialização de vetores
- Acesso e modificação de elementos
- Operações básicas (soma, busca, maior elemento)
- Preenchimento pelo usuário
- Conceitos importantes e erros comuns
- Vantagens e desvantagens dos vetores

### 2. `vetores_exercicios.c` - Exercícios Práticos
**Objetivo**: Praticar operações comuns com vetores
**Conteúdo**:
- Cálculo de média
- Busca do menor elemento
- Contagem de números pares
- Inversão de vetores
- Criação de vetores derivados
- Busca e substituição
- Análise estatística simples

### 3. `vetores_algoritmos.c` - Algoritmos Avançados
**Objetivo**: Demonstrar algoritmos clássicos usando vetores
**Conteúdo**:
- Algoritmos de ordenação (Bubble Sort, Selection Sort, Insertion Sort)
- Algoritmos de busca (Linear e Binária)
- Análise de complexidade
- Comparação de eficiência

## 🚀 Como Compilar e Executar

### Pré-requisitos
- Compilador C (GCC recomendado)
- Sistema operacional Windows/Linux/macOS

### Comandos de Compilação

**No Windows (PowerShell/CMD):**
```powershell
# Compilar cada arquivo individualmente
gcc -o vetores_explicacao.exe vetores_explicacao.c
gcc -o vetores_exercicios.exe vetores_exercicios.c
gcc -o vetores_algoritmos.exe vetores_algoritmos.c

# Executar os programas
.\vetores_explicacao.exe
.\vetores_exercicios.exe
.\vetores_algoritmos.exe
```

**No Linux/macOS:**
```bash
# Compilar cada arquivo individualmente
gcc -o vetores_explicacao vetores_explicacao.c
gcc -o vetores_exercicios vetores_exercicios.c
gcc -o vetores_algoritmos vetores_algoritmos.c

# Executar os programas
./vetores_explicacao
./vetores_exercicios
./vetores_algoritmos
```

## 📚 Ordem de Estudo Recomendada

1. **Comece com `vetores_explicacao.c`**
   - Execute o programa e observe as explicações
   - Estude o código fonte para entender a sintaxe
   - Experimente modificar alguns valores

2. **Continue com `vetores_exercicios.c`**
   - Execute e veja os exercícios práticos
   - Tente implementar suas próprias versões das funções
   - Experimente criar novos exercícios

3. **Finalize com `vetores_algoritmos.c`**
   - Observe como os algoritmos funcionam passo a passo
   - Estude a análise de complexidade
   - Tente implementar outros algoritmos

## 🎯 Conceitos Aprendidos

### Conceitos Básicos
- ✅ Declaração de vetores
- ✅ Inicialização com valores
- ✅ Acesso por índice
- ✅ Modificação de elementos
- ✅ Tamanho fixo vs dinâmico

### Operações Fundamentais
- ✅ Percorrer vetores com loops
- ✅ Buscar elementos
- ✅ Calcular estatísticas (soma, média, maior, menor)
- ✅ Modificar elementos condicionalmente
- ✅ Inverter e rotacionar vetores

### Algoritmos Clássicos
- ✅ Bubble Sort (O(n²))
- ✅ Selection Sort (O(n²))
- ✅ Insertion Sort (O(n²))
- ✅ Busca Linear (O(n))
- ✅ Busca Binária (O(log n))

### Análise de Complexidade
- ✅ Notação Big O
- ✅ Comparação de eficiência
- ✅ Trade-offs entre algoritmos

## 🔧 Exercícios Sugeridos

### Nível Iniciante
1. Crie um programa que encontre o segundo maior elemento
2. Implemente uma função para contar elementos negativos
3. Crie um vetor com a tabuada de um número

### Nível Intermediário
1. Implemente o algoritmo de ordenação por contagem
2. Crie uma função para intercalar dois vetores ordenados
3. Implemente rotação de vetor (mover elementos N posições)

### Nível Avançado
1. Implemente Quick Sort com análise de passos
2. Crie um algoritmo para encontrar o k-ésimo menor elemento
3. Implemente busca por interpolação

## 🐛 Problemas Comuns e Soluções

### Erro: "Index out of bounds"
```c
// ERRO:
int vetor[5];
vetor[5] = 10; // Índice inválido!

// CORRETO:
int vetor[5];
vetor[4] = 10; // Último índice válido é tamanho-1
```

### Erro: Vetor não inicializado
```c
// PROBLEMA:
int vetor[5]; // Contém lixo de memória

// SOLUÇÃO:
int vetor[5] = {0}; // Inicializa todos com 0
// ou
int vetor[5] = {1, 2, 3, 4, 5}; // Inicializa com valores
```

### Erro: Tamanho variável
```c
// ERRO (em C padrão):
int n;
scanf("%d", &n);
int vetor[n]; // Não é padrão C90

// SOLUÇÃO:
#define TAMANHO_MAX 100
int vetor[TAMANHO_MAX];
// ou usar alocação dinâmica com malloc()
```

## 💡 Dicas de Boas Práticas

1. **Sempre validar índices** antes de acessar vetores
2. **Usar constantes** para definir tamanhos máximos
3. **Comentar algoritmos complexos** passo a passo
4. **Separar lógica em funções** para reutilização
5. **Testar com diferentes tamanhos** de vetores
6. **Considerar casos extremos** (vetor vazio, um elemento)

## 📖 Recursos Adicionais

- [Documentação oficial C](https://en.cppreference.com/w/c)
- [Visualização de algoritmos](https://visualgo.net/en/sorting)
- [Análise de complexidade](https://www.bigocheatsheet.com/)

## 🤝 Contribuições

Sinta-se à vontade para:
- Adicionar novos exercícios
- Melhorar explicações
- Corrigir bugs
- Otimizar algoritmos
- Traduzir comentários

---

**Autor**: Programa Educativo para Algoritmos e Complexidade
**Data**: 2025
**Linguagem**: C (padrão C99)
