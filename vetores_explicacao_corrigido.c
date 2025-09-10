#include <stdio.h>
#include <stdlib.h>

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

// Funcao para encontrar o maior elemento do vetor
int encontrarMaior(int vetor[], int tamanho) {
    int maior = vetor[0];
    for (int i = 1; i < tamanho; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return maior;
}

// Funcao para buscar um elemento no vetor
int buscarElemento(int vetor[], int tamanho, int elemento) {
    for (int i = 0; i < tamanho; i++) {
        if (vetor[i] == elemento) {
            return i; // Retorna a posicao do elemento
        }
    }
    return -1; // Elemento nao encontrado
}

// Funcao para calcular a soma dos elementos
int somaElementos(int vetor[], int tamanho) {
    int soma = 0;
    for (int i = 0; i < tamanho; i++) {
        soma += vetor[i];
    }
    return soma;
}

int main() {
    printf("=== PROGRAMA EDUCATIVO: VETORES EM C ===\n\n");
    
    // 1. DECLARACAO E INICIALIZACAO
    printf("1. DECLARACAO E INICIALIZACAO DE VETORES\n");
    printf("----------------------------------------\n");
    printf("Vetor declarado: int numeros[5] = {10, 25, 7, 33, 15};\n");
    
    int numeros[5] = {10, 25, 7, 33, 15};
    imprimirVetor(numeros, 5);
    
    // Exemplo de vetor nao inicializado
    printf("\nVetor nao inicializado: int vazio[3];\n");
    int vazio[3];
    printf("Valores iniciais (lixo de memoria): [%d, %d, %d]\n", vazio[0], vazio[1], vazio[2]);
    
    // Inicializando manualmente
    vazio[0] = 100;
    vazio[1] = 200;
    vazio[2] = 300;
    printf("Apos inicializacao manual: ");
    imprimirVetor(vazio, 3);
    
    // 2. ACESSO AOS ELEMENTOS
    printf("\n2. ACESSO AOS ELEMENTOS DO VETOR\n");
    printf("---------------------------------\n");
    printf("Primeiro elemento (indice 0): numeros[0] = %d\n", numeros[0]);
    printf("Segundo elemento (indice 1): numeros[1] = %d\n", numeros[1]);
    printf("Ultimo elemento (indice 4): numeros[4] = %d\n", numeros[4]);
    printf("Tamanho do vetor: %lu elementos\n", sizeof(numeros)/sizeof(numeros[0]));
    printf("Importante: Os indices vao de 0 a (tamanho-1)\n");
    
    // 3. MODIFICACAO DE ELEMENTOS
    printf("\n3. MODIFICACAO DE ELEMENTOS\n");
    printf("---------------------------\n");
    printf("Vetor original: ");
    imprimirVetor(numeros, 5);
    
    numeros[2] = 99; // Alterando o terceiro elemento
    printf("Apos numeros[2] = 99: ");
    imprimirVetor(numeros, 5);
    
    // 4. OPERACOES COM VETORES
    printf("\n4. OPERACOES COM VETORES\n");
    printf("------------------------\n");
    int soma = somaElementos(numeros, 5);
    int maior = encontrarMaior(numeros, 5);
    int posicao = buscarElemento(numeros, 5, 25);
    
    printf("Soma de todos os elementos: %d\n", soma);
    printf("Maior elemento: %d\n", maior);
    if (posicao != -1) {
        printf("Elemento 25 encontrado na posicao %d\n", posicao);
    } else {
        printf("Elemento 25 nao encontrado\n");
    }
    
    // 5. PREENCHIMENTO PELO USUARIO
    printf("\n5. PREENCHIMENTO PELO USUARIO\n");
    printf("-----------------------------\n");
    int vetorUsuario[3];
    printf("Digite 3 numeros para preencher o vetor:\n");
    
    for (int i = 0; i < 3; i++) {
        printf("Digite o %d numero: ", i + 1);
        scanf("%d", &vetorUsuario[i]);
    }
    
    printf("Vetor preenchido pelo usuario: ");
    imprimirVetor(vetorUsuario, 3);
    
    // 6. CONCEITOS IMPORTANTES
    printf("\n6. CONCEITOS IMPORTANTES SOBRE VETORES\n");
    printf("--------------------------------------\n");
    printf("- Vetores tem tamanho FIXO definido na declaracao\n");
    printf("- Indices comecam em 0 e vao ate (tamanho-1)\n");
    printf("- Todos os elementos devem ser do mesmo tipo\n");
    printf("- Acesso direto aos elementos por indice: O(1)\n");
    printf("- Elementos ficam em posicoes consecutivas na memoria\n");
    printf("- Cuidado com acesso fora dos limites (segmentation fault)\n");
    
    // 7. ERROS COMUNS
    printf("\n7. CUIDADO COM ERROS COMUNS\n");
    printf("---------------------------\n");
    printf("ERRO: Acessar indice fora dos limites\n");
    printf("// numeros[10] = 5; // ERRO! Vetor so tem indices 0-4\n");
    printf("// printf(\"%%d\", numeros[-1]); // ERRO! Indice negativo\n");
    
    // 8. VANTAGENS E DESVANTAGENS
    printf("\n8. VANTAGENS E DESVANTAGENS\n");
    printf("---------------------------\n");
    printf("VANTAGENS:\n");
    printf("- Acesso rapido aos elementos (O(1))\n");
    printf("- Uso eficiente de memoria\n");
    printf("- Facil de iterar com loops\n\n");
    
    printf("DESVANTAGENS:\n");
    printf("- Tamanho fixo (nao pode crescer dinamicamente)\n");
    printf("- Insercao/remocao no meio e custosa (O(n))\n");
    printf("- Precisa saber o tamanho na compilacao\n");
    
    printf("\n=== FIM DO PROGRAMA EDUCATIVO ===\n");
    
    return 0;
}
