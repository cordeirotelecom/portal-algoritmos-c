#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

// Função para imprimir vetor
void imprimirVetor(int vetor[], int tamanho) {
    printf("[");
    for (int i = 0; i < tamanho; i++) {
        printf("%d", vetor[i]);
        if (i < tamanho - 1) printf(", ");
    }
    printf("]\n");
}

// Função para trocar dois elementos
void trocar(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Bubble Sort - Algoritmo simples de ordenação
void bubbleSort(int vetor[], int tamanho) {
    printf("\n=== BUBBLE SORT ===\n");
    printf("Ordenando passo a passo:\n");
    
    for (int i = 0; i < tamanho - 1; i++) {
        printf("\nPasso %d:\n", i + 1);
        bool houveTroca = false;
        
        for (int j = 0; j < tamanho - i - 1; j++) {
            printf("Comparando %d e %d: ", vetor[j], vetor[j + 1]);
            
            if (vetor[j] > vetor[j + 1]) {
                trocar(&vetor[j], &vetor[j + 1]);
                houveTroca = true;
                printf("Trocou!\n");
            } else {
                printf("Não trocou\n");
            }
        }
        
        printf("Estado atual: ");
        imprimirVetor(vetor, tamanho);
        
        if (!houveTroca) {
            printf("Nenhuma troca realizada - vetor já está ordenado!\n");
            break;
        }
    }
}

// Selection Sort - Encontra o menor e coloca na posição correta
void selectionSort(int vetor[], int tamanho) {
    printf("\n=== SELECTION SORT ===\n");
    printf("Encontrando o menor elemento a cada passo:\n");
    
    for (int i = 0; i < tamanho - 1; i++) {
        int menorIndice = i;
        
        printf("\nPasso %d - Buscando menor elemento a partir da posição %d:\n", i + 1, i);
        
        // Encontra o menor elemento no restante do vetor
        for (int j = i + 1; j < tamanho; j++) {
            if (vetor[j] < vetor[menorIndice]) {
                menorIndice = j;
            }
        }
        
        printf("Menor elemento encontrado: %d (posição %d)\n", vetor[menorIndice], menorIndice);
        
        if (menorIndice != i) {
            printf("Trocando %d (pos %d) com %d (pos %d)\n", 
                   vetor[i], i, vetor[menorIndice], menorIndice);
            trocar(&vetor[i], &vetor[menorIndice]);
        } else {
            printf("Elemento já está na posição correta\n");
        }
        
        printf("Estado atual: ");
        imprimirVetor(vetor, tamanho);
    }
}

// Insertion Sort - Insere cada elemento na posição correta
void insertionSort(int vetor[], int tamanho) {
    printf("\n=== INSERTION SORT ===\n");
    printf("Inserindo cada elemento na posição correta:\n");
    
    for (int i = 1; i < tamanho; i++) {
        int chave = vetor[i];
        int j = i - 1;
        
        printf("\nPasso %d - Inserindo %d na posição correta:\n", i, chave);
        printf("Parte ordenada: ");
        for (int k = 0; k < i; k++) {
            printf("%d ", vetor[k]);
        }
        printf("| Elemento a inserir: %d\n", chave);
        
        // Move elementos maiores que a chave para a direita
        while (j >= 0 && vetor[j] > chave) {
            printf("  Movendo %d para a direita\n", vetor[j]);
            vetor[j + 1] = vetor[j];
            j--;
        }
        
        vetor[j + 1] = chave;
        printf("  Inserindo %d na posição %d\n", chave, j + 1);
        
        printf("Estado atual: ");
        imprimirVetor(vetor, tamanho);
    }
}

// Busca Linear
int buscaLinear(int vetor[], int tamanho, int elemento) {
    printf("\n=== BUSCA LINEAR ===\n");
    printf("Procurando o elemento %d:\n", elemento);
    
    for (int i = 0; i < tamanho; i++) {
        printf("Posição %d: %d ", i, vetor[i]);
        if (vetor[i] == elemento) {
            printf("← ENCONTRADO!\n");
            return i;
        }
        printf("\n");
    }
    
    printf("Elemento não encontrado\n");
    return -1;
}

// Busca Binária (requer vetor ordenado)
int buscaBinaria(int vetor[], int tamanho, int elemento) {
    printf("\n=== BUSCA BINÁRIA ===\n");
    printf("Procurando o elemento %d em vetor ordenado:\n", elemento);
    
    int esquerda = 0;
    int direita = tamanho - 1;
    int passos = 0;
    
    while (esquerda <= direita) {
        passos++;
        int meio = esquerda + (direita - esquerda) / 2;
        
        printf("Passo %d: esquerda=%d, direita=%d, meio=%d\n", 
               passos, esquerda, direita, meio);
        printf("Elemento do meio: vetor[%d] = %d\n", meio, vetor[meio]);
        
        if (vetor[meio] == elemento) {
            printf("ENCONTRADO na posição %d em %d passos!\n", meio, passos);
            return meio;
        }
        
        if (vetor[meio] < elemento) {
            printf("Elemento procurado é maior, buscando na metade direita\n");
            esquerda = meio + 1;
        } else {
            printf("Elemento procurado é menor, buscando na metade esquerda\n");
            direita = meio - 1;
        }
        printf("\n");
    }
    
    printf("Elemento não encontrado em %d passos\n", passos);
    return -1;
}

// Função para copiar vetor
void copiarVetor(int origem[], int destino[], int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        destino[i] = origem[i];
    }
}

// Função para gerar números aleatórios
void preencherAleatorio(int vetor[], int tamanho, int maximo) {
    for (int i = 0; i < tamanho; i++) {
        vetor[i] = rand() % maximo + 1;
    }
}

int main() {
    // Inicializa gerador de números aleatórios
    srand(time(NULL));
    
    printf("=== ALGORITMOS COM VETORES ===\n\n");
    
    // Demonstração dos algoritmos de ordenação
    printf("DEMONSTRAÇÃO DOS ALGORITMOS DE ORDENAÇÃO\n");
    printf("=======================================\n");
    
    int vetorOriginal[] = {64, 34, 25, 12, 22, 11, 90};
    int tamanho = sizeof(vetorOriginal) / sizeof(vetorOriginal[0]);
    
    printf("Vetor original: ");
    imprimirVetor(vetorOriginal, tamanho);
    
    // Testando Bubble Sort
    int vetorBubble[tamanho];
    copiarVetor(vetorOriginal, vetorBubble, tamanho);
    bubbleSort(vetorBubble, tamanho);
    printf("\nResultado final Bubble Sort: ");
    imprimirVetor(vetorBubble, tamanho);
    
    printf("\n================================================\n");
    
    // Testando Selection Sort
    int vetorSelection[tamanho];
    copiarVetor(vetorOriginal, vetorSelection, tamanho);
    selectionSort(vetorSelection, tamanho);
    printf("\nResultado final Selection Sort: ");
    imprimirVetor(vetorSelection, tamanho);
    
    printf("\n================================================\n");
    
    // Testando Insertion Sort
    int vetorInsertion[tamanho];
    copiarVetor(vetorOriginal, vetorInsertion, tamanho);
    insertionSort(vetorInsertion, tamanho);
    printf("\nResultado final Insertion Sort: ");
    imprimirVetor(vetorInsertion, tamanho);
    
    printf("\n\n");
    printf("DEMONSTRAÇÃO DOS ALGORITMOS DE BUSCA\n");
    printf("===================================\n");
    
    // Testando busca linear
    int elementoBusca = 25;
    int posicao = buscaLinear(vetorOriginal, tamanho, elementoBusca);
    if (posicao != -1) {
        printf("Busca linear: Elemento %d encontrado na posição %d\n", elementoBusca, posicao);
    }
    
    // Testando busca binária (usando vetor ordenado)
    printf("\nUsando vetor ordenado para busca binária: ");
    imprimirVetor(vetorBubble, tamanho);
    
    posicao = buscaBinaria(vetorBubble, tamanho, elementoBusca);
    if (posicao != -1) {
        printf("Busca binária: Elemento %d encontrado na posição %d\n", elementoBusca, posicao);
    }
    
    // Comparação de eficiência
    printf("\n\nCOMPARAÇÃO DE EFICIÊNCIA\n");
    printf("=======================\n");
    printf("ALGORITMOS DE ORDENAÇÃO:\n");
    printf("• Bubble Sort:    O(n²) - Simples, mas lento\n");
    printf("• Selection Sort: O(n²) - Encontra mínimo a cada passo\n");
    printf("• Insertion Sort: O(n²) - Bom para vetores pequenos/quase ordenados\n");
    printf("• Quick Sort:     O(n log n) - Muito eficiente (não implementado aqui)\n");
    printf("• Merge Sort:     O(n log n) - Estável e consistente\n\n");
    
    printf("ALGORITMOS DE BUSCA:\n");
    printf("• Busca Linear:   O(n) - Funciona em qualquer vetor\n");
    printf("• Busca Binária:  O(log n) - Muito rápida, mas requer vetor ordenado\n\n");
    
    // Demonstração prática da diferença de eficiência
    printf("EXEMPLO PRÁTICO DE EFICIÊNCIA:\n");
    printf("Em um vetor de 1.000.000 elementos:\n");
    printf("• Busca Linear: até 1.000.000 comparações\n");
    printf("• Busca Binária: no máximo 20 comparações!\n\n");
    
    printf("=== EXERCÍCIOS SUGERIDOS ===\n");
    printf("1. Implemente o Quick Sort\n");
    printf("2. Implemente o Merge Sort\n");
    printf("3. Compare o tempo de execução dos algoritmos\n");
    printf("4. Implemente busca por aproximação\n");
    printf("5. Crie um algoritmo para encontrar o k-ésimo menor elemento\n");
    
    return 0;
}
