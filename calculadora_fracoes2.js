// calculadora_fracoes_aluno2.js
 
class Fracao {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }
 
    toString() {
        return `${this.numerador}/${this.denominador}`;
    }
}
 
function multiplicacao(f1, f2) {
    // TODO: Implementar multiplicação de frações
    // Dica: (a/b) * (c/d) = (ac) / (bd)
}
 
function divisao(f1, f2) {
    // TODO: Implementar divisão de frações
    // Dica: (a/b) / (c/d) = (ad) / (bc)
}
 
function simplificarFracao(f) {
    // TODO: Implementar simplificação de fração
    // Dica: Usar o algoritmo de Euclides para encontrar o MDC
}
 
// Função de teste
function testarOperacoes() {
    const f1 = new Fracao(1, 2);
    const f2 = new Fracao(1, 3);
    console.log(`${f1} * ${f2} = ${multiplicacao(f1, f2)}`);
    console.log(`${f1} / ${f2} = ${divisao(f1, f2)}`);
}
 
testarOperacoes();