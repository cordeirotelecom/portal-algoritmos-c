// Exemplos de código pré-definidos
const codeExamples = {
    'vetor-basico': `#include <stdio.h>

int main() {
    // Declaração e inicialização de vetor
    int numeros[5] = {10, 25, 7, 33, 15};
    int soma = 0;
    int maior = numeros[0];
    
    printf("Vetor: ");
    for(int i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
        soma += numeros[i];
        if(numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    
    printf("\\nSoma: %d", soma);
    printf("\\nMédia: %.2f", soma / 5.0);
    printf("\\nMaior elemento: %d\\n", maior);
    
    return 0;
}`,

    'notas-exercicio': `#include <stdio.h>

int main() {
    // Vetor com as notas da turma
    float notas[5] = {8.5, 7.0, 9.5, 6.0, 8.0};
    float soma = 0;
    float maior = notas[0];
    float menor = notas[0];
    int aprovados = 0;
    
    printf("=== ANALISADOR DE NOTAS ===\\n\\n");
    
    printf("Notas da turma: ");
    for(int i = 0; i < 5; i++) {
        printf("%.1f ", notas[i]);
        
        // Somar para calcular média
        soma += notas[i];
        
        // Encontrar maior e menor
        if(notas[i] > maior) maior = notas[i];
        if(notas[i] < menor) menor = notas[i];
        
        // Contar aprovados (nota >= 7.0)
        if(notas[i] >= 7.0) aprovados++;
    }
    
    // Calcular média
    float media = soma / 5;
    
    printf("\\n\\nResultados da Análise:\\n");
    printf("- Média da turma: %.2f\\n", media);
    printf("- Maior nota: %.1f\\n", maior);
    printf("- Menor nota: %.1f\\n", menor);
    printf("- Alunos aprovados: %d de 5\\n", aprovados);
    printf("- Taxa de aprovação: %.1f%%\\n", (aprovados/5.0)*100);
    
    return 0;
}`,

    'matriz-soma': `#include <stdio.h>

int main() {
    // Matriz 3x3
    int matriz[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    printf("Matriz:\\n");
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\\n");
    }
    
    // Soma de cada linha
    printf("\\nSoma das linhas:\\n");
    for(int i = 0; i < 3; i++) {
        int soma = 0;
        for(int j = 0; j < 3; j++) {
            soma += matriz[i][j];
        }
        printf("Linha %d: %d\\n", i+1, soma);
    }
    
    // Soma da diagonal principal
    int somaDiagonal = 0;
    for(int i = 0; i < 3; i++) {
        somaDiagonal += matriz[i][i];
    }
    printf("\\nSoma da diagonal principal: %d\\n", somaDiagonal);
    
    return 0;
}`,

    'ponteiro-swap': `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    
    printf("Antes da troca:\\n");
    printf("x = %d, y = %d\\n", x, y);
    printf("Endereço de x: %p\\n", &x);
    printf("Endereço de y: %p\\n", &y);
    
    // Trocar valores usando ponteiros
    swap(&x, &y);
    
    printf("\\nApós a troca:\\n");
    printf("x = %d, y = %d\\n", x, y);
    
    // Demonstração de aritmética de ponteiros
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    
    printf("\\nArray usando ponteiros:\\n");
    for(int i = 0; i < 5; i++) {
        printf("arr[%d] = %d (endereço: %p)\\n", i, *(ptr + i), ptr + i);
    }
    
    return 0;
}`,

    'busca-linear': `#include <stdio.h>

int buscaLinear(int arr[], int n, int target) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == target) {
            return i;  // Retorna a posição encontrada
        }
    }
    return -1;  // Não encontrado
}

int main() {
    int numeros[10] = {64, 34, 25, 12, 22, 11, 90, 88, 76, 50};
    int target = 22;
    int n = 10;
    
    printf("Array: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\\n");
    
    printf("Procurando por: %d\\n", target);
    
    int resultado = buscaLinear(numeros, n, target);
    
    if(resultado != -1) {
        printf("Elemento encontrado na posição %d\\n", resultado);
        printf("Comparações realizadas: %d\\n", resultado + 1);
    } else {
        printf("Elemento não encontrado\\n");
        printf("Comparações realizadas: %d\\n", n);
    }
    
    printf("\\nComplexidade: O(n) - Tempo Linear\\n");
    
    return 0;
}`,

    'busca-binaria': `#include <stdio.h>

int buscaBinaria(int arr[], int n, int target, int *comparacoes) {
    int left = 0, right = n - 1;
    *comparacoes = 0;
    
    while(left <= right) {
        (*comparacoes)++;
        int mid = (left + right) / 2;
        
        printf("Comparação %d: meio = %d (valor: %d)\\n", 
               *comparacoes, mid, arr[mid]);
        
        if(arr[mid] == target) {
            return mid;
        }
        else if(arr[mid] < target) {
            left = mid + 1;
            printf("Target > meio, buscando à direita\\n");
        }
        else {
            right = mid - 1;
            printf("Target < meio, buscando à esquerda\\n");
        }
    }
    
    return -1;
}

int main() {
    // Array DEVE estar ordenado para busca binária
    int numeros[10] = {11, 12, 22, 25, 34, 50, 64, 76, 88, 90};
    int target = 25;
    int n = 10;
    int comparacoes = 0;
    
    printf("Array ordenado: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\\n\\n");
    
    printf("Procurando por: %d\\n\\n", target);
    
    int resultado = buscaBinaria(numeros, n, target, &comparacoes);
    
    printf("\\nResultado:\\n");
    if(resultado != -1) {
        printf("Elemento encontrado na posição %d\\n", resultado);
    } else {
        printf("Elemento não encontrado\\n");
    }
    
    printf("Total de comparações: %d\\n", comparacoes);
    printf("Complexidade: O(log n) - Tempo Logarítmico\\n");
    
    return 0;
}`,

    'bubble-sort': `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int comparacoes = 0, trocas = 0;
    
    printf("Array inicial: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n\\n");
    
    for(int i = 0; i < n-1; i++) {
        int trocou = 0;
        printf("Passada %d:\\n", i+1);
        
        for(int j = 0; j < n-i-1; j++) {
            comparacoes++;
            printf("  Comparando %d e %d: ", arr[j], arr[j+1]);
            
            if(arr[j] > arr[j+1]) {
                // Trocar elementos
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                trocas++;
                trocou = 1;
                printf("TROCOU\\n");
            } else {
                printf("não trocou\\n");
            }
        }
        
        printf("  Estado: ");
        for(int k = 0; k < n; k++) {
            printf("%d ", arr[k]);
        }
        printf("\\n\\n");
        
        // Se não houve trocas, o array já está ordenado
        if(!trocou) {
            printf("Array já ordenado! Parando antecipadamente.\\n");
            break;
        }
    }
    
    printf("Array final: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n\\n");
    
    printf("Estatísticas:\\n");
    printf("- Comparações: %d\\n", comparacoes);
    printf("- Trocas: %d\\n", trocas);
    printf("- Complexidade: O(n²) - Tempo Quadrático\\n");
}

int main() {
    int numeros[8] = {64, 34, 25, 12, 22, 11, 90, 5};
    int n = 8;
    
    printf("=== BUBBLE SORT ===\\n\\n");
    
    bubbleSort(numeros, n);
    
    return 0;
}`
};

// Função para carregar exemplos específicos dos exercícios
function loadVetorExercise() {
    document.getElementById('codeEditor').value = codeExamples['vetor-basico'];
    document.getElementById('exampleSelect').value = 'vetor-basico';
}

function loadMatrizExercise() {
    document.getElementById('codeEditor').value = codeExamples['matriz-soma'];
    document.getElementById('exampleSelect').value = 'matriz-soma';
}

function loadPonteiroExercise() {
    document.getElementById('codeEditor').value = codeExamples['ponteiro-swap'];
    document.getElementById('exampleSelect').value = 'ponteiro-swap';
}

function loadComplexidadeExercise() {
    document.getElementById('codeEditor').value = codeExamples['busca-binaria'];
    document.getElementById('exampleSelect').value = 'busca-binaria';
}

// Função para carregar exemplo selecionado
function loadSelectedExample() {
    const select = document.getElementById('exampleSelect');
    const selectedValue = select.value;
    
    if (selectedValue && codeExamples[selectedValue]) {
        document.getElementById('codeEditor').value = codeExamples[selectedValue];
    }
}

// Função para limpar o código
function clearCode() {
    document.getElementById('codeEditor').value = '';
    document.getElementById('output').innerHTML = '<p class="output-placeholder">A saída aparecerá aqui...</p>';
    document.getElementById('executionTime').textContent = 'Tempo: --';
    document.getElementById('memoryUsage').textContent = 'Memória: --';
    document.getElementById('complexity').textContent = 'Complexidade: --';
}

// Função para carregar exemplo básico
function loadExample() {
    document.getElementById('codeEditor').value = codeExamples['vetor-basico'];
    document.getElementById('exampleSelect').value = 'vetor-basico';
}

// Simulador de execução de código C
function runCode() {
    const code = document.getElementById('codeEditor').value;
    const outputDiv = document.getElementById('output');
    
    if (!code.trim()) {
        outputDiv.innerHTML = '<p style="color: #ef4444;">Erro: Nenhum código para executar!</p>';
        return;
    }
    
    // Simular tempo de execução
    const startTime = performance.now();
    
    // Limpar saída anterior
    outputDiv.innerHTML = '<p style="color: #fbbf24;">Executando...</p>';
    
    setTimeout(() => {
        try {
            const result = simulateC(code);
            const endTime = performance.now();
            const executionTime = (endTime - startTime).toFixed(2);
            
            // Mostrar resultado
            outputDiv.innerHTML = `<pre style="margin: 0; white-space: pre-wrap;">${result.output}</pre>`;
            
            // Atualizar informações de execução
            document.getElementById('executionTime').textContent = `Tempo: ${executionTime}ms`;
            document.getElementById('memoryUsage').textContent = `Memória: ${result.memory}KB`;
            document.getElementById('complexity').textContent = `Complexidade: ${result.complexity}`;
            
        } catch (error) {
            outputDiv.innerHTML = `<p style="color: #ef4444;">Erro de execução: ${error.message}</p>`;
            document.getElementById('executionTime').textContent = 'Tempo: erro';
            document.getElementById('memoryUsage').textContent = 'Memória: --';
            document.getElementById('complexity').textContent = 'Complexidade: --';
        }
    }, 500);
}

// Simulador simplificado de C
function simulateC(code) {
    let output = '';
    let memory = Math.floor(Math.random() * 50) + 10; // Simular uso de memória
    let complexity = 'O(1)';
    
    // Detectar complexidade baseada no código
    if (code.includes('for') && code.match(/for.*for/s)) {
        complexity = 'O(n²)';
        memory += 20;
    } else if (code.includes('for') || code.includes('while')) {
        complexity = 'O(n)';
        memory += 10;
    } else if (code.includes('buscaBinaria') || code.includes('binarySearch')) {
        complexity = 'O(log n)';
        memory += 5;
    }
    
    // Simular a execução baseada em padrões comuns
    try {
        // Extrair strings de printf
        const printfMatches = code.match(/printf\s*\(\s*"([^"]*)"(?:\s*,\s*([^)]*))?\s*\)/g);
        
        if (printfMatches) {
            printfMatches.forEach(match => {
                let printfContent = match.match(/printf\s*\(\s*"([^"]*)"/)[1];
                
                // Substituir escape sequences
                printfContent = printfContent.replace(/\\n/g, '\n');
                printfContent = printfContent.replace(/\\t/g, '\t');
                
                // Simular valores para formatadores básicos
                printfContent = printfContent.replace(/%d/g, () => Math.floor(Math.random() * 100));
                printfContent = printfContent.replace(/%.2f/g, () => (Math.random() * 100).toFixed(2));
                printfContent = printfContent.replace(/%f/g, () => (Math.random() * 100).toFixed(6));
                printfContent = printfContent.replace(/%s/g, 'string');
                printfContent = printfContent.replace(/%c/g, 'A');
                printfContent = printfContent.replace(/%p/g, '0x7fff5fbff6ac');
                
                output += printfContent;
            });
        }
        
        // Casos especiais para exemplos específicos
        if (code.includes('vetor-basico') || code.includes('numeros[5] = {10, 25, 7, 33, 15}')) {
            output = `Vetor: 10 25 7 33 15 
Soma: 90
Média: 18.00
Maior elemento: 33`;
        }
        
        if (code.includes('matriz-soma') || code.includes('matriz[3][3]')) {
            output = `Matriz:
1 2 3 
4 5 6 
7 8 9 

Soma das linhas:
Linha 1: 6
Linha 2: 15
Linha 3: 24

Soma da diagonal principal: 15`;
        }
        
        if (code.includes('swap') && code.includes('ponteiro')) {
            output = `Antes da troca:
x = 10, y = 20
Endereço de x: 0x7fff5fbff6ac
Endereço de y: 0x7fff5fbff6b0

Após a troca:
x = 20, y = 10

Array usando ponteiros:
arr[0] = 1 (endereço: 0x7fff5fbff6c0)
arr[1] = 2 (endereço: 0x7fff5fbff6c4)
arr[2] = 3 (endereço: 0x7fff5fbff6c8)
arr[3] = 4 (endereço: 0x7fff5fbff6cc)
arr[4] = 5 (endereço: 0x7fff5fbff6d0)`;
        }
        
        if (code.includes('buscaLinear')) {
            output = `Array: 64 34 25 12 22 11 90 88 76 50 
Procurando por: 22
Elemento encontrado na posição 4
Comparações realizadas: 5

Complexidade: O(n) - Tempo Linear`;
        }
        
        if (code.includes('buscaBinaria')) {
            output = `Array ordenado: 11 12 22 25 34 50 64 76 88 90 

Procurando por: 25

Comparação 1: meio = 4 (valor: 34)
Target < meio, buscando à esquerda
Comparação 2: meio = 1 (valor: 12)
Target > meio, buscando à direita
Comparação 3: meio = 3 (valor: 25)

Resultado:
Elemento encontrado na posição 3
Total de comparações: 3
Complexidade: O(log n) - Tempo Logarítmico`;
        }
        
        if (code.includes('bubbleSort')) {
            output = `=== BUBBLE SORT ===

Array inicial: 64 34 25 12 22 11 90 5 

Passada 1:
  Comparando 64 e 34: TROCOU
  Comparando 64 e 25: TROCOU
  Comparando 64 e 12: TROCOU
  Comparando 64 e 22: TROCOU
  Comparando 64 e 11: TROCOU
  Comparando 64 e 90: não trocou
  Comparando 90 e 5: TROCOU
  Estado: 34 25 12 22 11 64 5 90 

Passada 2:
  Comparando 34 e 25: TROCOU
  Comparando 34 e 12: TROCOU
  Comparando 34 e 22: TROCOU
  Comparando 34 e 11: TROCOU
  Comparando 34 e 64: não trocou
  Comparando 64 e 5: TROCOU
  Estado: 25 12 22 11 34 5 64 90 

Array final: 5 11 12 22 25 34 64 90 

Estatísticas:
- Comparações: 28
- Trocas: 12
- Complexidade: O(n²) - Tempo Quadrático`;
        }
        
        if (code.includes('notas-exercicio') || code.includes('float notas[5] = {8.5, 7.0, 9.5, 6.0, 8.0}')) {
            output = `=== ANALISADOR DE NOTAS ===

Notas da turma: 8.5 7.0 9.5 6.0 8.0 

Resultados da Análise:
- Média da turma: 7.80
- Maior nota: 9.5
- Menor nota: 6.0
- Alunos aprovados: 4 de 5
- Taxa de aprovação: 80.0%`;
        }
        
        if (!output) {
            output = 'Programa executado com sucesso!\n(Saída simulada - simulador educacional)';
        }
        
    } catch (error) {
        throw new Error('Erro na simulação do código');
    }
    
    return {
        output: output,
        memory: memory,
        complexity: complexity
    };
}

// Navegação suave
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique para links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Ajuste para navbar fixa
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Destacar seção ativa na navegação
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.content-section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            link.style.background = '';
            
            if (link.getAttribute('href') === '#' + currentSection) {
                link.style.color = '#4f46e5';
                link.style.background = 'rgba(79, 70, 229, 0.1)';
            }
        });
    });
    
    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.theory-block, .code-example, .complexity-box, .exercise-box');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Adicionar funcionalidade de auto-resize para o textarea
document.getElementById('codeEditor').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

// Atalhos de teclado para o simulador
document.getElementById('codeEditor').addEventListener('keydown', function(e) {
    // Ctrl+Enter para executar
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        runCode();
    }
    
    // Tab para identação
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        
        this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
    }
});

// ========================================
// SISTEMA DE TUTORIAL PASSO A PASSO
// ========================================

// Estado dos tutoriais
const tutorialState = {
    vetores: { currentStep: 1, totalSteps: 6 },
    matrizes: { currentStep: 1, totalSteps: 5 },
    ponteiros: { currentStep: 1, totalSteps: 4 },
    complexidade: { currentStep: 1, totalSteps: 4 }
};

// Função para avançar no tutorial
function nextStep(section) {
    const state = tutorialState[section];
    if (state.currentStep < state.totalSteps) {
        state.currentStep++;
        updateTutorial(section);
    }
}

// Função para voltar no tutorial
function prevStep(section) {
    const state = tutorialState[section];
    if (state.currentStep > 1) {
        state.currentStep--;
        updateTutorial(section);
    }
}

// Função para atualizar a exibição do tutorial
function updateTutorial(section) {
    const state = tutorialState[section];
    
    // Atualizar contador
    const counter = document.getElementById(`stepCounter-${section}`);
    if (counter) {
        counter.textContent = `Passo ${state.currentStep} de ${state.totalSteps}`;
    }
    
    // Atualizar botões
    const prevBtn = document.getElementById(`prevBtn-${section}`);
    const nextBtn = document.getElementById(`nextBtn-${section}`);
    
    if (prevBtn) {
        prevBtn.disabled = state.currentStep === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = state.currentStep === state.totalSteps;
        nextBtn.textContent = state.currentStep === state.totalSteps ? 'Concluído ✓' : 'Próximo →';
    }
    
    // Mostrar passo atual
    const steps = document.querySelectorAll(`#${section} .tutorial-step`);
    steps.forEach((step, index) => {
        step.classList.remove('active');
        if (index + 1 === state.currentStep) {
            step.classList.add('active');
        }
    });
}

// Função para mostrar acesso ao elemento do array
function showAccess(index) {
    // Remover classe active de todos os elementos
    document.querySelectorAll('.array-element-demo').forEach(el => {
        el.classList.remove('active');
    });
    
    // Adicionar classe active ao elemento clicado
    const clickedElement = document.querySelector(`[data-index="${index}"]`);
    clickedElement.classList.add('active');
    
    // Atualizar informações de acesso
    const accessInfo = document.getElementById('access-info');
    const examples = [
        {
            index: 0,
            code: 'numeros[0]',
            value: 10,
            explanation: 'Acessa o primeiro elemento (índice 0)'
        },
        {
            index: 1,
            code: 'numeros[1]',
            value: 25,
            explanation: 'Acessa o segundo elemento (índice 1)'
        },
        {
            index: 2,
            code: 'numeros[2]',
            value: 7,
            explanation: 'Acessa o terceiro elemento (índice 2)'
        },
        {
            index: 3,
            code: 'numeros[3]',
            value: 33,
            explanation: 'Acessa o quarto elemento (índice 3)'
        },
        {
            index: 4,
            code: 'numeros[4]',
            value: 15,
            explanation: 'Acessa o quinto elemento (índice 4)'
        }
    ];
    
    const example = examples[index];
    accessInfo.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 1.2rem; color: #fbbf24; margin-bottom: 0.5rem;">
                <strong>${example.code}</strong> → ${example.value}
            </div>
            <div style="color: #94a3b8;">
                ${example.explanation}
            </div>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: #64748b;">
                💡 Para modificar: <span style="color: #fbbf24;">${example.code} = novo_valor;</span>
            </div>
        </div>
    `;
}

// Função para mostrar operações
function showOperation(operation) {
    // Remover classe active de todos os botões e painéis
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.operation-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Ativar botão e painel correspondente
    event.target.classList.add('active');
    const panel = document.getElementById(`operation-${operation}`);
    if (panel) {
        panel.classList.add('active');
    }
}

// Função para carregar exercício de notas
function loadNotasExercise() {
    document.getElementById('codeEditor').value = codeExamples['notas-exercicio'];
    document.getElementById('exampleSelect').value = '';
    
    // Scroll para o simulador
    const simulador = document.getElementById('simulador');
    if (simulador) {
        simulador.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicializar tutoriais quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos os tutoriais
    Object.keys(tutorialState).forEach(section => {
        updateTutorial(section);
    });
    
    // Adicionar animações de entrada para elementos do tutorial
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const tutorialObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos do tutorial
    const tutorialElements = document.querySelectorAll('.tutorial-container, .concept-item, .example-card, .operation-panel');
    tutorialElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        tutorialObserver.observe(element);
    });
});
