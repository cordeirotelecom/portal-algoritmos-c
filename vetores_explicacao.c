#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Funcao para imprimir um vetor
void imprimirVetor(int vetor[], int tamanho) {
    printf("Vetor: [");
    for (int i = 0; i < tamanho; i++) {
        printf("%d", vetor[i]);
        if (i < tamanho - 1) {
            printf(", ");
        }
    }
    printf("]\n");
}

// Função para encontrar o maior elemento do vetor
int encontrarMaior(int vetor[], int tamanho) {
    int maior = vetor[0];
    for (int i = 1; i < tamanho; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return maior;
}

// Função para calcular a soma dos elementos do vetor
int somarElementos(int vetor[], int tamanho) {
    int soma = 0;
    for (int i = 0; i < tamanho; i++) {
        soma += vetor[i];
    }
    return soma;
}

// Função para buscar um elemento no vetor
int buscarElemento(int vetor[], int tamanho, int elemento) {
    for (int i = 0; i < tamanho; i++) {
        if (vetor[i] == elemento) {
            return i; // Retorna a posição onde foi encontrado
        }
    }
    return -1; // Retorna -1 se não encontrou
}

int main() {
    printf("=== PROGRAMA EDUCATIVO: VETORES EM C ===\n\n");
    
    // 1. DECLARAÇÃO E INICIALIZAÇÃO DE VETORES
    printf("1. DECLARAÇÃO E INICIALIZAÇÃO DE VETORES\n");
    printf("----------------------------------------\n");
    
    // Vetor declarado com tamanho fixo e inicializado
    int numeros[5] = {10, 25, 7, 33, 15};
    printf("Vetor declarado: int numeros[5] = {10, 25, 7, 33, 15};\n");
    imprimirVetor(numeros, 5);
    
    // Vetor declarado sem inicialização (valores aleatórios)
    int vazio[3];
    printf("\nVetor não inicializado: int vazio[3];\n");
    printf("Valores iniciais (lixo de memória): [%d, %d, %d]\n", vazio[0], vazio[1], vazio[2]);
    
    // Inicializando o vetor vazio
    vazio[0] = 100;
    vazio[1] = 200;
    vazio[2] = 300;
    printf("Após inicialização manual: ");
    imprimirVetor(vazio, 3);
    
    printf("\n");
    
    // 2. ACESSO AOS ELEMENTOS
    printf("2. ACESSO AOS ELEMENTOS DO VETOR\n");
    printf("---------------------------------\n");
    printf("Primeiro elemento (índice 0): numeros[0] = %d\n", numeros[0]);
    printf("Segundo elemento (índice 1): numeros[1] = %d\n", numeros[1]);
    printf("Último elemento (índice 4): numeros[4] = %d\n", numeros[4]);
    printf("Tamanho do vetor: %d elementos\n", 5);
    printf("Importante: Os índices vão de 0 a (tamanho-1)\n\n");
    
    // 3. MODIFICAÇÃO DE ELEMENTOS
    printf("3. MODIFICAÇÃO DE ELEMENTOS\n");
    printf("---------------------------\n");
    printf("Vetor original: ");
    imprimirVetor(numeros, 5);
    
    numeros[2] = 99; // Modifica o terceiro elemento
    printf("Após numeros[2] = 99: ");
    imprimirVetor(numeros, 5);
    printf("\n");
    
    // 4. OPERAÇÕES COM VETORES
    printf("4. OPERAÇÕES COM VETORES\n");
    printf("------------------------\n");
    
    // Soma dos elementos
    int soma = somarElementos(numeros, 5);
    printf("Soma de todos os elementos: %d\n", soma);
    
    // Maior elemento
    int maior = encontrarMaior(numeros, 5);
    printf("Maior elemento: %d\n", maior);
    
    // Busca de elemento
    int elementoBusca = 25;
    int posicao = buscarElemento(numeros, 5, elementoBusca);
    if (posicao != -1) {
        printf("Elemento %d encontrado na posição %d\n", elementoBusca, posicao);
    } else {
        printf("Elemento %d não encontrado no vetor\n", elementoBusca);
    }
    printf("\n");
    
    // 5. PREENCHIMENTO DE VETOR PELO USUÁRIO
    printf("5. PREENCHIMENTO PELO USUÁRIO\n");
    printf("-----------------------------\n");
    int meuVetor[3];
    printf("Digite 3 números para preencher o vetor:\n");
    
    for (int i = 0; i < 3; i++) {
        printf("Digite o %dº número: ", i + 1);
        scanf("%d", &meuVetor[i]);
    }
    
    printf("Vetor preenchido pelo usuário: ");
    imprimirVetor(meuVetor, 3);
    printf("\n");
    
    // 6. CONCEITOS IMPORTANTES
    printf("6. CONCEITOS IMPORTANTES SOBRE VETORES\n");
    printf("--------------------------------------\n");
    printf("• Vetores têm tamanho FIXO definido na declaração\n");
    printf("• Índices começam em 0 e vão até (tamanho-1)\n");
    printf("• Todos os elementos devem ser do mesmo tipo\n");
    printf("• Acesso direto aos elementos por índice: O(1)\n");
    printf("• Elementos ficam em posições consecutivas na memória\n");
    printf("• Cuidado com acesso fora dos limites (segmentation fault)\n\n");
    
    // 7. EXEMPLO DE ERRO COMUM (comentado para não crashar)
    printf("7. CUIDADO COM ERROS COMUNS\n");
    printf("---------------------------\n");
    printf("ERRO: Acessar índice fora dos limites\n");
    printf("// numeros[10] = 5; // ERRO! Vetor só tem índices 0-4\n");
    printf("// printf(\"%%d\", numeros[-1]); // ERRO! Índice negativo\n\n");
    
    // 8. COMPARAÇÃO DE PERFORMANCE
    printf("8. VANTAGENS E DESVANTAGENS\n");
    printf("---------------------------\n");
    printf("VANTAGENS:\n");
    printf("• Acesso rápido aos elementos (O(1))\n");
    printf("• Uso eficiente de memória\n");
    printf("• Fácil de iterar com loops\n\n");
    printf("DESVANTAGENS:\n");
    printf("• Tamanho fixo (não pode crescer dinamicamente)\n");
    printf("• Inserção/remoção no meio é custosa (O(n))\n");
    printf("• Precisa saber o tamanho na compilação\n\n");
    
    printf("=== FIM DO PROGRAMA EDUCATIVO ===\n");
    
    return 0;
}
