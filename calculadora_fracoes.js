// calculadora_fracoes_aluno1.js

class Fracao {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    toString() {
        return `${this.numerador}/${this.denominador}`;
    }
}

function adicao(f1, f2) {
    // TODO: Implementar adição de frações
    // Dica: (a/b) + (c/d) = (ad + bc) / (bd)
}

function subtracao(f1, f2) {
    // TODO: Implementar subtração de frações
    // Dica: (a/b) - (c/d) = (ad - bc) / (bd)
}

function simplificarFracao(f) {
    // TODO: Implementar simplificação de fração
    // Dica: Usar o algoritmo de Euclides para encontrar o MDC
}

// Função de teste
function testarOperacoes() {
    const f1 = new Fracao(1, 2);
    const f2 = new Fracao(1, 3);
    
    console.log(`${f1} + ${f2} = ${adicao(f1, f2)}`);
    console.log(`${f1} - ${f2} = ${subtracao(f1, f2)}`);
}

testarOperacoes();