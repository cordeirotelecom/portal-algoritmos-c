#include <stdio.h>
#include <stdlib.h>

// Exercício 1: Calcular a média dos elementos
float calcularMedia(int vetor[], int tamanho) {
    int soma = 0;
    for (int i = 0; i < tamanho; i++) {
        soma += vetor[i];
    }
    return (float)soma / tamanho;
}

// Exercício 2: Inverter um vetor
void inverterVetor(int vetor[], int tamanho) {
    int temp;
    for (int i = 0; i < tamanho / 2; i++) {
        temp = vetor[i];
        vetor[i] = vetor[tamanho - 1 - i];
        vetor[tamanho - 1 - i] = temp;
    }
}

// Exercício 3: Contar elementos pares
int contarPares(int vetor[], int tamanho) {
    int contador = 0;
    for (int i = 0; i < tamanho; i++) {
        if (vetor[i] % 2 == 0) {
            contador++;
        }
    }
    return contador;
}

// Exercício 4: Encontrar o menor elemento
int encontrarMenor(int vetor[], int tamanho) {
    int menor = vetor[0];
    for (int i = 1; i < tamanho; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    return menor;
}

// Função auxiliar para imprimir vetor
void imprimirVetor(int vetor[], int tamanho) {
    printf("[");
    for (int i = 0; i < tamanho; i++) {
        printf("%d", vetor[i]);
        if (i < tamanho - 1) printf(", ");
    }
    printf("]\n");
}

int main() {
    printf("=== EXERCÍCIOS PRÁTICOS COM VETORES ===\n\n");
    
    // Vetor de exemplo para os exercícios
    int numeros[] = {12, 7, 23, 4, 18, 9, 15, 6};
    int tamanho = sizeof(numeros) / sizeof(numeros[0]);
    
    printf("Vetor original: ");
    imprimirVetor(numeros, tamanho);
    printf("Tamanho: %d elementos\n\n", tamanho);
    
    // Exercício 1: Média
    printf("EXERCÍCIO 1: Calculando a média\n");
    printf("-------------------------------\n");
    float media = calcularMedia(numeros, tamanho);
    printf("Média dos elementos: %.2f\n\n", media);
    
    // Exercício 2: Menor elemento
    printf("EXERCÍCIO 2: Encontrando o menor elemento\n");
    printf("----------------------------------------\n");
    int menor = encontrarMenor(numeros, tamanho);
    printf("Menor elemento: %d\n\n", menor);
    
    // Exercício 3: Contando números pares
    printf("EXERCÍCIO 3: Contando números pares\n");
    printf("-----------------------------------\n");
    int pares = contarPares(numeros, tamanho);
    printf("Quantidade de números pares: %d\n", pares);
    printf("Números pares encontrados: ");
    for (int i = 0; i < tamanho; i++) {
        if (numeros[i] % 2 == 0) {
            printf("%d ", numeros[i]);
        }
    }
    printf("\n\n");
    
    // Exercício 4: Invertendo o vetor
    printf("EXERCÍCIO 4: Invertendo o vetor\n");
    printf("-------------------------------\n");
    printf("Vetor antes da inversão: ");
    imprimirVetor(numeros, tamanho);
    
    inverterVetor(numeros, tamanho);
    
    printf("Vetor após a inversão: ");
    imprimirVetor(numeros, tamanho);
    printf("\n");
    
    // Exercício 5: Criando um vetor de quadrados
    printf("EXERCÍCIO 5: Vetor de quadrados\n");
    printf("-------------------------------\n");
    int quadrados[5];
    printf("Criando vetor com quadrados de 1 a 5:\n");
    
    for (int i = 0; i < 5; i++) {
        quadrados[i] = (i + 1) * (i + 1);
        printf("%d² = %d\n", i + 1, quadrados[i]);
    }
    
    printf("Vetor de quadrados: ");
    imprimirVetor(quadrados, 5);
    printf("\n");
    
    // Exercício 6: Busca e substituição
    printf("EXERCÍCIO 6: Busca e substituição\n");
    printf("---------------------------------\n");
    int vetorTeste[] = {5, 10, 15, 10, 25, 10, 35};
    int tamanhoTeste = 7;
    int valorBusca = 10;
    int novoValor = 99;
    
    printf("Vetor original: ");
    imprimirVetor(vetorTeste, tamanhoTeste);
    
    printf("Substituindo todas as ocorrências de %d por %d:\n", valorBusca, novoValor);
    int substituicoes = 0;
    
    for (int i = 0; i < tamanhoTeste; i++) {
        if (vetorTeste[i] == valorBusca) {
            vetorTeste[i] = novoValor;
            substituicoes++;
            printf("Posição %d: %d → %d\n", i, valorBusca, novoValor);
        }
    }
    
    printf("Total de substituições: %d\n", substituicoes);
    printf("Vetor final: ");
    imprimirVetor(vetorTeste, tamanhoTeste);
    printf("\n");
    
    // Exercício 7: Análise estatística simples
    printf("EXERCÍCIO 7: Análise estatística\n");
    printf("--------------------------------\n");
    int dados[] = {85, 92, 78, 96, 85, 88, 79, 94, 87, 90};
    int tamanhoDados = 10;
    
    printf("Notas dos alunos: ");
    imprimirVetor(dados, tamanhoDados);
    
    // Calculando estatísticas
    int soma = 0, maior = dados[0], menorNota = dados[0];
    
    for (int i = 0; i < tamanhoDados; i++) {
        soma += dados[i];
        if (dados[i] > maior) maior = dados[i];
        if (dados[i] < menorNota) menorNota = dados[i];
    }
    
    float mediaTurma = (float)soma / tamanhoDados;
    
    printf("Estatísticas da turma:\n");
    printf("• Média: %.1f\n", mediaTurma);
    printf("• Maior nota: %d\n", maior);
    printf("• Menor nota: %d\n", menorNota);
    printf("• Amplitude: %d\n", maior - menorNota);
    
    // Contando aprovados (nota >= 70)
    int aprovados = 0;
    for (int i = 0; i < tamanhoDados; i++) {
        if (dados[i] >= 70) aprovados++;
    }
    printf("• Alunos aprovados (≥70): %d de %d (%.1f%%)\n", 
           aprovados, tamanhoDados, (float)aprovados/tamanhoDados*100);
    
    printf("\n=== DESAFIOS PARA PRATICAR ===\n");
    printf("1. Implemente uma função para ordenar o vetor (bubble sort)\n");
    printf("2. Crie uma função para remover elementos duplicados\n");
    printf("3. Implemente busca binária (vetor deve estar ordenado)\n");
    printf("4. Crie uma função para intercalar dois vetores ordenados\n");
    printf("5. Implemente uma função para rotacionar o vetor\n");
    
    return 0;
}
