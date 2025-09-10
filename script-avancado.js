// ============================================================
// SISTEMA EDUCACIONAL AVANÇADO - ALGORITMOS EM C
// ============================================================

// Estado global da aplicação
let currentExample = 'vetor-basico';
let tutorialStep = 0;
let isExecuting = false;
let executionSpeed = 1000;
let codeHistory = [];
let achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
let userProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
let studyTime = JSON.parse(localStorage.getItem('studyTime') || '0');
let startTime = Date.now();

// Sistema de Conquistas Gamificado
const achievementsData = {
    'first_compile': { 
        name: 'Primeira Compilação', 
        icon: '🎯', 
        description: 'Compilou seu primeiro código!',
        points: 10
    },
    'vector_master': { 
        name: 'Mestre dos Vetores', 
        icon: '📊', 
        description: 'Executou todos os exemplos de vetores',
        points: 25
    },
    'algorithm_explorer': { 
        name: 'Explorador de Algoritmos', 
        icon: '🔍', 
        description: 'Testou 5 algoritmos diferentes',
        points: 30
    },
    'performance_analyst': { 
        name: 'Analista de Performance', 
        icon: '📈', 
        description: 'Analisou complexidade de 5 algoritmos',
        points: 40
    },
    'code_optimizer': { 
        name: 'Otimizador de Código', 
        icon: '⚡', 
        description: 'Melhorou a eficiência de um algoritmo',
        points: 50
    },
    'tutorial_graduate': { 
        name: 'Graduado no Tutorial', 
        icon: '🎓', 
        description: 'Completou todo o tutorial passo a passo',
        points: 100
    },
    'dedicated_student': {
        name: 'Estudante Dedicado',
        icon: '⏰',
        description: 'Estudou por mais de 30 minutos',
        points: 20
    },
    'code_ninja': {
        name: 'Ninja do Código',
        icon: '🥷',
        description: 'Escreveu código personalizado funcionando',
        points: 35
    }
};

// Exemplos de código expandidos com animações
const codeExamples = {
    'vetor-basico': {
        title: '📊 Vetor Básico',
        difficulty: 'Iniciante',
        complexity: 'O(n)',
        code: `#include <stdio.h>

int main() {
    // Declaração e inicialização de vetor
    int numeros[5] = {10, 25, 7, 33, 15};
    int soma = 0;
    int maior = numeros[0];
    
    printf("=== ANÁLISE DO VETOR ===\\n");
    printf("Vetor: ");
    
    // Percorrer o vetor mostrando cada elemento
    for(int i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
        soma += numeros[i];
        
        if(numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    
    float media = soma / 5.0;
    
    printf("\\n\\n📊 RESULTADOS:");
    printf("\\nSoma total: %d", soma);
    printf("\\nMédia: %.1f", media);
    printf("\\nMaior elemento: %d\\n", maior);
    
    return 0;
}`,
        output: `=== ANÁLISE DO VETOR ===
Vetor: 10 25 7 33 15 

📊 RESULTADOS:
Soma total: 90
Média: 18.0
Maior elemento: 33`,
        explanation: 'Este exemplo demonstra operações básicas com vetores: percorrer elementos, calcular soma, média e encontrar o maior valor.',
        steps: [
            'Declarar vetor com 5 elementos',
            'Inicializar variáveis de controle',
            'Percorrer vetor com loop for',
            'Calcular soma acumulativa',
            'Encontrar maior elemento',
            'Calcular média',
            'Exibir resultados'
        ]
    },

    'busca-linear': {
        title: '🔍 Busca Linear',
        difficulty: 'Intermediário',
        complexity: 'O(n)',
        code: `#include <stdio.h>

int busca_linear(int vetor[], int tamanho, int buscar) {
    printf("🔍 Procurando %d no vetor...\\n", buscar);
    
    for(int i = 0; i < tamanho; i++) {
        printf("Posição %d: %d", i, vetor[i]);
        
        if(vetor[i] == buscar) {
            printf(" ✅ ENCONTRADO!\\n");
            return i;
        } else {
            printf(" ❌\\n");
        }
    }
    
    printf("❌ Elemento não encontrado\\n");
    return -1;
}

int main() {
    int numeros[] = {64, 34, 25, 12, 22, 11, 90};
    int tamanho = 7;
    int buscar = 22;
    
    printf("=== BUSCA LINEAR ===\\n");
    printf("Vetor: ");
    for(int i = 0; i < tamanho; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\\n\\n");
    
    int posicao = busca_linear(numeros, tamanho, buscar);
    
    if(posicao != -1) {
        printf("\\n🎯 Elemento %d encontrado na posição %d\\n", buscar, posicao);
    } else {
        printf("\\n❌ Elemento %d não encontrado\\n", buscar);
    }
    
    return 0;
}`,
        output: `=== BUSCA LINEAR ===
Vetor: 64 34 25 12 22 11 90 

🔍 Procurando 22 no vetor...
Posição 0: 64 ❌
Posição 1: 34 ❌
Posição 2: 25 ❌
Posição 3: 12 ❌
Posição 4: 22 ✅ ENCONTRADO!

🎯 Elemento 22 encontrado na posição 4`,
        explanation: 'Busca linear percorre o vetor sequencialmente até encontrar o elemento. Complexidade O(n) no pior caso.',
        steps: [
            'Definir função de busca',
            'Percorrer vetor elemento por elemento',
            'Comparar cada elemento com o valor buscado',
            'Retornar posição se encontrado',
            'Retornar -1 se não encontrado'
        ]
    },

    'ordenacao-bubble': {
        title: '🔄 Bubble Sort',
        difficulty: 'Avançado',
        complexity: 'O(n²)',
        code: `#include <stdio.h>

void bubble_sort(int vetor[], int tamanho) {
    printf("🔄 Iniciando Bubble Sort...\\n\\n");
    
    for(int i = 0; i < tamanho - 1; i++) {
        printf("Passada %d:\\n", i + 1);
        
        for(int j = 0; j < tamanho - i - 1; j++) {
            printf("  Comparando %d e %d: ", vetor[j], vetor[j + 1]);
            
            if(vetor[j] > vetor[j + 1]) {
                // Trocar elementos
                int temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
                printf("TROCOU! 🔄\\n");
            } else {
                printf("OK ✅\\n");
            }
        }
        
        // Mostrar estado atual do vetor
        printf("  Estado: ");
        for(int k = 0; k < tamanho; k++) {
            printf("%d ", vetor[k]);
        }
        printf("\\n\\n");
    }
}

int main() {
    int numeros[] = {64, 34, 25, 12, 22, 11, 90};
    int tamanho = 7;
    
    printf("=== BUBBLE SORT ===\\n");
    printf("Vetor original: ");
    for(int i = 0; i < tamanho; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\\n\\n");
    
    bubble_sort(numeros, tamanho);
    
    printf("✅ Vetor ordenado: ");
    for(int i = 0; i < tamanho; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\\n");
    
    return 0;
}`,
        output: `=== BUBBLE SORT ===
Vetor original: 64 34 25 12 22 11 90 

🔄 Iniciando Bubble Sort...

Passada 1:
  Comparando 64 e 34: TROCOU! 🔄
  Comparando 64 e 25: TROCOU! 🔄
  Comparando 64 e 12: TROCOU! 🔄
  Comparando 64 e 22: TROCOU! 🔄
  Comparando 64 e 11: TROCOU! 🔄
  Comparando 64 e 90: OK ✅
  Estado: 34 25 12 22 11 64 90 

[... mais passadas ...]

✅ Vetor ordenado: 11 12 22 25 34 64 90`,
        explanation: 'Bubble Sort compara elementos adjacentes e os troca se estiverem fora de ordem. Simples mas ineficiente para grandes conjuntos.',
        steps: [
            'Comparar pares adjacentes',
            'Trocar se estão fora de ordem',
            'Repetir até não haver mais trocas',
            'Elemento maior "borbulha" para o final',
            'Reduzir área de comparação a cada passada'
        ]
    },

    'matriz-jogo': {
        title: '🎮 Matriz - Jogo da Velha',
        difficulty: 'Intermediário',
        complexity: 'O(1)',
        code: `#include <stdio.h>

void exibir_tabuleiro(char tabuleiro[3][3]) {
    printf("\\n  0   1   2\\n");
    for(int i = 0; i < 3; i++) {
        printf("%d ", i);
        for(int j = 0; j < 3; j++) {
            printf(" %c ", tabuleiro[i][j]);
            if(j < 2) printf("|");
        }
        printf("\\n");
        if(i < 2) printf("  -----------\\n");
    }
    printf("\\n");
}

int verificar_vitoria(char tabuleiro[3][3], char jogador) {
    // Verificar linhas
    for(int i = 0; i < 3; i++) {
        if(tabuleiro[i][0] == jogador && 
           tabuleiro[i][1] == jogador && 
           tabuleiro[i][2] == jogador) {
            return 1;
        }
    }
    
    // Verificar colunas
    for(int j = 0; j < 3; j++) {
        if(tabuleiro[0][j] == jogador && 
           tabuleiro[1][j] == jogador && 
           tabuleiro[2][j] == jogador) {
            return 1;
        }
    }
    
    // Verificar diagonais
    if((tabuleiro[0][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][2] == jogador) ||
       (tabuleiro[0][2] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][0] == jogador)) {
        return 1;
    }
    
    return 0;
}

int main() {
    char tabuleiro[3][3] = {
        {'X', 'O', 'X'},
        {'O', 'X', 'O'},
        {'X', 'O', 'X'}
    };
    
    printf("=== JOGO DA VELHA ===");
    exibir_tabuleiro(tabuleiro);
    
    // Verificar se X ganhou
    if(verificar_vitoria(tabuleiro, 'X')) {
        printf("🎉 Jogador X venceu!\\n");
    } else if(verificar_vitoria(tabuleiro, 'O')) {
        printf("🎉 Jogador O venceu!\\n");
    } else {
        printf("🤝 Empate ou jogo em andamento\\n");
    }
    
    return 0;
}`,
        output: `=== JOGO DA VELHA ===

  0   1   2
0  X | O | X 
  -----------
1  O | X | O 
  -----------
2  X | O | X 

🎉 Jogador X venceu!`,
        explanation: 'Exemplo de matriz bidimensional aplicada a um jogo real. Demonstra acesso por coordenadas [linha][coluna].',
        steps: [
            'Criar matriz 3x3 para tabuleiro',
            'Função para exibir estado atual',
            'Verificar vitória em linhas',
            'Verificar vitória em colunas',
            'Verificar vitória em diagonais',
            'Determinar vencedor'
        ]
    },

    'ponteiros-avancado': {
        title: '👉 Ponteiros Avançados',
        difficulty: 'Avançado',
        complexity: 'O(n)',
        code: `#include <stdio.h>

void analisar_vetor_com_ponteiros(int *ptr, int tamanho) {
    printf("🔍 Análise usando ponteiros:\\n\\n");
    
    int *inicio = ptr;
    int *fim = ptr + tamanho - 1;
    int soma = 0;
    
    printf("Endereços e valores:\\n");
    for(int i = 0; i < tamanho; i++) {
        printf("ptr[%d] = %d (endereço: %p)\\n", i, *(ptr + i), (void*)(ptr + i));
        soma += *(ptr + i);
    }
    
    printf("\\n📊 Estatísticas:\\n");
    printf("Primeiro elemento: %d (endereço: %p)\\n", *inicio, (void*)inicio);
    printf("Último elemento: %d (endereço: %p)\\n", *fim, (void*)fim);
    printf("Soma total: %d\\n", soma);
    printf("Distância entre primeiro e último: %ld bytes\\n", 
           (char*)fim - (char*)inicio);
    
    // Percorrer com aritmética de ponteiros
    printf("\\n🚀 Percorrendo com ponteiros:\\n");
    int *atual = ptr;
    while(atual <= fim) {
        printf("%d ", *atual);
        atual++;
    }
    printf("\\n");
}

int main() {
    int numeros[] = {10, 20, 30, 40, 50};
    int tamanho = 5;
    
    printf("=== PONTEIROS AVANÇADOS ===\\n");
    printf("Vetor original: ");
    for(int i = 0; i < tamanho; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\\n\\n");
    
    analisar_vetor_com_ponteiros(numeros, tamanho);
    
    return 0;
}`,
        output: `=== PONTEIROS AVANÇADOS ===
Vetor original: 10 20 30 40 50 

🔍 Análise usando ponteiros:

Endereços e valores:
ptr[0] = 10 (endereço: 0x7fff5fbff6b0)
ptr[1] = 20 (endereço: 0x7fff5fbff6b4)
ptr[2] = 30 (endereço: 0x7fff5fbff6b8)
ptr[3] = 40 (endereço: 0x7fff5fbff6bc)
ptr[4] = 50 (endereço: 0x7fff5fbff6c0)

📊 Estatísticas:
Primeiro elemento: 10 (endereço: 0x7fff5fbff6b0)
Último elemento: 50 (endereço: 0x7fff5fbff6c0)
Soma total: 150
Distância entre primeiro e último: 16 bytes

🚀 Percorrendo com ponteiros:
10 20 30 40 50`,
        explanation: 'Demonstra conceitos avançados de ponteiros: aritmética, endereços de memória e navegação por arrays.',
        steps: [
            'Receber ponteiro como parâmetro',
            'Calcular ponteiro para último elemento',
            'Mostrar endereços de memória',
            'Usar aritmética de ponteiros',
            'Calcular distâncias em bytes',
            'Percorrer array com ponteiros'
        ]
    }
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadUserProgress();
    displayAchievements();
    startStudyTimer();
});

function initializeApp() {
    console.log('🚀 Inicializando Sistema Educacional Avançado...');
    
    // Configurar editor com highlight de sintaxe
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.addEventListener('input', handleCodeChange);
        editor.addEventListener('keydown', handleCodeInput);
        highlightSyntax();
    }
    
    // Configurar velocidade de execução
    const speedSlider = document.getElementById('execution-speed');
    if (speedSlider) {
        speedSlider.addEventListener('input', updateExecutionSpeed);
        updateSpeedDisplay();
    }
    
    // Carregar exemplo inicial
    loadExample(currentExample);
    initializeTutorial();
    createProgressIndicator();
}

function setupEventListeners() {
    // Botões de exemplo
    document.querySelectorAll('.example-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const exampleId = e.target.dataset.example;
            loadExample(exampleId);
            trackProgress('example_loaded', exampleId);
        });
    });
    
    // Botão de execução
    const runBtn = document.getElementById('run-code');
    if (runBtn) {
        runBtn.addEventListener('click', executeCode);
    }
    
    // Botão de análise de complexidade
    const analyzeBtn = document.getElementById('analyze-complexity');
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', analyzeComplexity);
    }
    
    // Controles do tutorial
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');
    
    if (prevBtn) prevBtn.addEventListener('click', previousTutorialStep);
    if (nextBtn) nextBtn.addEventListener('click', nextTutorialStep);
}

function loadExample(exampleId) {
    if (!codeExamples[exampleId]) return;
    
    currentExample = exampleId;
    const example = codeExamples[exampleId];
    
    // Atualizar editor
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.value = example.code;
        highlightSyntax();
    }
    
    // Atualizar informações do exemplo
    updateExampleInfo(example);
    
    // Marcar botão ativo
    document.querySelectorAll('.example-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.example === exampleId) {
            btn.classList.add('active');
        }
    });
    
    // Limpar saída anterior
    clearOutput();
    
    // Atualizar tutorial
    updateTutorialForExample(example);
}

function updateExampleInfo(example) {
    const titleElement = document.getElementById('example-title');
    const difficultyElement = document.getElementById('example-difficulty');
    const complexityElement = document.getElementById('example-complexity');
    const explanationElement = document.getElementById('example-explanation');
    
    if (titleElement) titleElement.textContent = example.title;
    if (difficultyElement) {
        difficultyElement.textContent = example.difficulty;
        difficultyElement.className = `difficulty ${example.difficulty.toLowerCase()}`;
    }
    if (complexityElement) {
        complexityElement.textContent = example.complexity;
        complexityElement.className = `complexity ${getComplexityClass(example.complexity)}`;
    }
    if (explanationElement) explanationElement.textContent = example.explanation;
}

function getComplexityClass(complexity) {
    if (complexity.includes('O(1)')) return 'constant';
    if (complexity.includes('O(log n)')) return 'logarithmic';
    if (complexity.includes('O(n)')) return 'linear';
    if (complexity.includes('O(n²)')) return 'quadratic';
    return 'unknown';
}

function executeCode() {
    if (isExecuting) return;
    
    isExecuting = true;
    const runBtn = document.getElementById('run-code');
    if (runBtn) {
        runBtn.disabled = true;
        runBtn.innerHTML = '⏳ Executando...';
    }
    
    // Simular compilação
    simulateCompilation().then(() => {
        displayOutput();
        showExecutionSteps();
        isExecuting = false;
        
        if (runBtn) {
            runBtn.disabled = false;
            runBtn.innerHTML = '▶️ Executar Código';
        }
        
        // Registrar conquista
        unlockAchievement('first_compile');
        trackProgress('code_executed', currentExample);
    });
}

function simulateCompilation() {
    return new Promise((resolve) => {
        const output = document.getElementById('output');
        if (output) {
            output.innerHTML = '<div class="compilation-step">🔨 Compilando código...</div>';
        }
        
        setTimeout(() => {
            if (output) {
                output.innerHTML += '<div class="compilation-step">✅ Compilação bem-sucedida!</div>';
                output.innerHTML += '<div class="compilation-step">🚀 Executando programa...</div>';
            }
            setTimeout(resolve, 1000);
        }, 1000);
    });
}

function displayOutput() {
    const example = codeExamples[currentExample];
    if (!example) return;
    
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML += `
            <div class="execution-result">
                <h4>📋 Saída do Programa:</h4>
                <pre class="program-output">${example.output}</pre>
            </div>
        `;
    }
}

function showExecutionSteps() {
    const example = codeExamples[currentExample];
    if (!example || !example.steps) return;
    
    const stepsContainer = document.getElementById('execution-steps');
    if (stepsContainer) {
        let stepsHtml = '<h4>📋 Passos da Execução:</h4><ol class="execution-steps-list">';
        
        example.steps.forEach((step, index) => {
            stepsHtml += `<li class="execution-step" style="animation-delay: ${index * 0.2}s">${step}</li>`;
        });
        
        stepsHtml += '</ol>';
        stepsContainer.innerHTML = stepsHtml;
    }
}

function analyzeComplexity() {
    const example = codeExamples[currentExample];
    if (!example) return;
    
    const analysisContainer = document.getElementById('complexity-analysis');
    if (analysisContainer) {
        const analysis = generateComplexityAnalysis(example);
        analysisContainer.innerHTML = analysis;
        
        // Registrar conquista
        unlockAchievement('performance_analyst');
        trackProgress('complexity_analyzed', currentExample);
    }
}

function generateComplexityAnalysis(example) {
    const complexityInfo = {
        'O(1)': {
            name: 'Constante',
            description: 'Tempo de execução não muda com o tamanho dos dados',
            color: '#10b981'
        },
        'O(log n)': {
            name: 'Logarítmica',
            description: 'Cresce muito lentamente com o tamanho dos dados',
            color: '#3b82f6'
        },
        'O(n)': {
            name: 'Linear',
            description: 'Tempo dobra quando dados dobram',
            color: '#f59e0b'
        },
        'O(n²)': {
            name: 'Quadrática',
            description: 'Tempo cresce exponencialmente - evite para dados grandes',
            color: '#ef4444'
        }
    };
    
    const info = complexityInfo[example.complexity] || complexityInfo['O(n)'];
    
    return `
        <div class="complexity-analysis-card">
            <h4>📊 Análise de Complexidade</h4>
            <div class="complexity-badge" style="background-color: ${info.color}">
                ${example.complexity} - ${info.name}
            </div>
            <p class="complexity-description">${info.description}</p>
            
            <div class="performance-comparison">
                <h5>⚡ Performance Estimada:</h5>
                <div class="performance-table">
                    <div class="performance-row">
                        <span>100 elementos:</span>
                        <span>${calculateOperations(example.complexity, 100)} operações</span>
                    </div>
                    <div class="performance-row">
                        <span>1.000 elementos:</span>
                        <span>${calculateOperations(example.complexity, 1000)} operações</span>
                    </div>
                    <div class="performance-row">
                        <span>10.000 elementos:</span>
                        <span>${calculateOperations(example.complexity, 10000)} operações</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateOperations(complexity, n) {
    switch (complexity) {
        case 'O(1)': return '1';
        case 'O(log n)': return Math.ceil(Math.log2(n)).toString();
        case 'O(n)': return n.toLocaleString();
        case 'O(n²)': return (n * n).toLocaleString();
        default: return n.toString();
    }
}

function highlightSyntax() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    
    const code = editor.value;
    
    // Aplicar highlight básico
    const highlighted = code
        .replace(/(#include|int|float|char|if|else|for|while|return|printf|scanf)/g, '<span class="keyword">$1</span>')
        .replace(/(".*?")/g, '<span class="string">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
    
    // Atualizar preview se existir
    const preview = document.getElementById('syntax-preview');
    if (preview) {
        preview.innerHTML = `<pre>${highlighted}</pre>`;
    }
}

function handleCodeChange() {
    highlightSyntax();
    saveCodeToHistory();
}

function handleCodeInput(e) {
    // Auto-completar parênteses e chaves
    if (e.key === '(' || e.key === '{' || e.key === '[') {
        const editor = e.target;
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        
        const pairs = { '(': ')', '{': '}', '[': ']' };
        const closing = pairs[e.key];
        
        if (closing) {
            setTimeout(() => {
                const newValue = editor.value.slice(0, start + 1) + closing + editor.value.slice(start + 1);
                editor.value = newValue;
                editor.setSelectionRange(start + 1, start + 1);
            }, 0);
        }
    }
}

function saveCodeToHistory() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    
    const currentCode = editor.value;
    if (codeHistory.length === 0 || codeHistory[codeHistory.length - 1] !== currentCode) {
        codeHistory.push(currentCode);
        if (codeHistory.length > 50) { // Limitar histórico
            codeHistory.shift();
        }
    }
}

function updateExecutionSpeed(e) {
    executionSpeed = 2000 - parseInt(e.target.value);
    updateSpeedDisplay();
}

function updateSpeedDisplay() {
    const display = document.getElementById('speed-display');
    if (display) {
        const speedText = executionSpeed < 500 ? 'Muito Rápido' :
                         executionSpeed < 1000 ? 'Rápido' :
                         executionSpeed < 1500 ? 'Normal' : 'Lento';
        display.textContent = speedText;
    }
}

function clearOutput() {
    const output = document.getElementById('output');
    const steps = document.getElementById('execution-steps');
    const analysis = document.getElementById('complexity-analysis');
    
    if (output) output.innerHTML = '';
    if (steps) steps.innerHTML = '';
    if (analysis) analysis.innerHTML = '';
}

// Sistema de Conquistas e Progresso
function unlockAchievement(achievementId) {
    if (achievements.includes(achievementId)) return;
    
    achievements.push(achievementId);
    localStorage.setItem('achievements', JSON.stringify(achievements));
    
    showAchievementNotification(achievementId);
    updateAchievementDisplay();
}

function showAchievementNotification(achievementId) {
    const achievement = achievementsData[achievementId];
    if (!achievement) return;
    
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-content">
            <span class="achievement-icon">${achievement.icon}</span>
            <div class="achievement-text">
                <strong>Conquista Desbloqueada!</strong>
                <br>${achievement.name}
                <small>+${achievement.points} pontos</small>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function displayAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;
    
    let totalPoints = 0;
    let achievementsHtml = '<h3>🏆 Suas Conquistas</h3><div class="achievements-grid">';
    
    Object.keys(achievementsData).forEach(id => {
        const achievement = achievementsData[id];
        const unlocked = achievements.includes(id);
        
        if (unlocked) {
            totalPoints += achievement.points;
        }
        
        achievementsHtml += `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                <span class="achievement-icon">${achievement.icon}</span>
                <h4>${achievement.name}</h4>
                <p>${achievement.description}</p>
                <small>${achievement.points} pontos</small>
            </div>
        `;
    });
    
    achievementsHtml += '</div>';
    achievementsHtml += `<div class="total-points">Total: ${totalPoints} pontos</div>`;
    
    container.innerHTML = achievementsHtml;
}

function trackProgress(action, data) {
    if (!userProgress[action]) {
        userProgress[action] = [];
    }
    
    if (!userProgress[action].includes(data)) {
        userProgress[action].push(data);
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
        
        checkProgressMilestones();
    }
}

function checkProgressMilestones() {
    // Verificar se completou todos os exemplos de vetores
    const vectorExamples = ['vetor-basico', 'busca-linear', 'ordenacao-bubble'];
    if (userProgress.example_loaded && 
        vectorExamples.every(ex => userProgress.example_loaded.includes(ex))) {
        unlockAchievement('vector_master');
    }
    
    // Verificar se analisou 5 algoritmos
    if (userProgress.complexity_analyzed && 
        userProgress.complexity_analyzed.length >= 5) {
        unlockAchievement('performance_analyst');
    }
    
    // Verificar se executou 5 códigos diferentes
    if (userProgress.code_executed && 
        userProgress.code_executed.length >= 5) {
        unlockAchievement('algorithm_explorer');
    }
}

function startStudyTimer() {
    setInterval(() => {
        studyTime = parseInt(studyTime) + 1;
        localStorage.setItem('studyTime', studyTime.toString());
        
        // Conquista por tempo de estudo
        if (studyTime >= 1800 && !achievements.includes('dedicated_student')) { // 30 minutos
            unlockAchievement('dedicated_student');
        }
        
        updateStudyTimeDisplay();
    }, 1000);
}

function updateStudyTimeDisplay() {
    const display = document.getElementById('study-time');
    if (display) {
        const minutes = Math.floor(studyTime / 60);
        const seconds = studyTime % 60;
        display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

function loadUserProgress() {
    // Carregar progresso salvo
    updateAchievementDisplay();
    updateStudyTimeDisplay();
}

function updateAchievementDisplay() {
    displayAchievements();
}

function createProgressIndicator() {
    const totalExamples = Object.keys(codeExamples).length;
    const completedExamples = userProgress.code_executed ? userProgress.code_executed.length : 0;
    const progressPercentage = (completedExamples / totalExamples) * 100;
    
    const progressContainer = document.getElementById('progress-indicator');
    if (progressContainer) {
        progressContainer.innerHTML = `
            <div class="progress-bar-container">
                <div class="progress-label">Progresso: ${completedExamples}/${totalExamples} exemplos</div>
                <div class="progress-bar-background">
                    <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <div class="progress-percentage">${Math.round(progressPercentage)}%</div>
            </div>
        `;
    }
}

// Tutorial Sistema
function initializeTutorial() {
    // Implementar sistema de tutorial passo a passo
    updateTutorialStep();
}

function updateTutorialStep() {
    const tutorial = document.getElementById('tutorial-container');
    if (!tutorial) return;
    
    const steps = [
        {
            title: '🚀 Bem-vindo!',
            content: 'Explore os exemplos de código clicando nos botões à esquerda.',
            highlight: '.examples-list'
        },
        {
            title: '📝 Editor de Código',
            content: 'Modifique o código no editor. Ele tem destaque de sintaxe automático!',
            highlight: '#code-editor'
        },
        {
            title: '▶️ Executar',
            content: 'Clique em "Executar Código" para ver o resultado.',
            highlight: '#run-code'
        },
        {
            title: '📊 Análise',
            content: 'Use "Analisar Complexidade" para entender a performance.',
            highlight: '#analyze-complexity'
        }
    ];
    
    if (tutorialStep < steps.length) {
        const step = steps[tutorialStep];
        tutorial.innerHTML = `
            <div class="tutorial-step">
                <h4>${step.title}</h4>
                <p>${step.content}</p>
                <div class="tutorial-controls">
                    <button onclick="previousTutorialStep()" ${tutorialStep === 0 ? 'disabled' : ''}>← Anterior</button>
                    <span>Passo ${tutorialStep + 1} de ${steps.length}</span>
                    <button onclick="nextTutorialStep()">Próximo →</button>
                </div>
            </div>
        `;
        
        // Destacar elemento
        if (step.highlight) {
            highlightElement(step.highlight);
        }
    }
}

function nextTutorialStep() {
    tutorialStep++;
    updateTutorialStep();
    
    // Completou tutorial
    if (tutorialStep >= 4) {
        unlockAchievement('tutorial_graduate');
    }
}

function previousTutorialStep() {
    if (tutorialStep > 0) {
        tutorialStep--;
        updateTutorialStep();
    }
}

function highlightElement(selector) {
    // Remover highlights anteriores
    document.querySelectorAll('.tutorial-highlight').forEach(el => {
        el.classList.remove('tutorial-highlight');
    });
    
    // Adicionar novo highlight
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add('tutorial-highlight');
    }
}

function updateTutorialForExample(example) {
    const tutorialInfo = document.getElementById('tutorial-info');
    if (tutorialInfo && example.steps) {
        let stepsHtml = '<h4>📚 Como Funciona:</h4><ul>';
        example.steps.forEach(step => {
            stepsHtml += `<li>${step}</li>`;
        });
        stepsHtml += '</ul>';
        tutorialInfo.innerHTML = stepsHtml;
    }
}

// Exportar funções globais
window.loadExample = loadExample;
window.executeCode = executeCode;
window.analyzeComplexity = analyzeComplexity;
window.nextTutorialStep = nextTutorialStep;
window.previousTutorialStep = previousTutorialStep;

console.log('✅ Sistema Educacional Avançado carregado com sucesso!');
