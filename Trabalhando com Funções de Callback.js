function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}


function soma(a, b) {
    return a + b;
}


function multiplicacao(a, b) {
    return a * b;
}


let resultadoSoma = executaOperacao(5, 3, soma);
console.log("Resultado da soma: " + resultadoSoma);


let resultadoMultiplicacao = executaOperacao(5, 3, multiplicacao);
console.log("Resultado da multiplicação: " + resultadoMultiplicacao);


function repetirOperacao(num, operacao) {
    for (let i = 1; i <= num; i++) {
        let resultado = operacao(i, i + 1);
        console.log(`Resultado da operação ${i}: ${resultado}`);
    }
}


repetirOperacao(5, soma);


function contarOcorrencias(string, caractere) {
    let contador = 0;
    string.split('').forEach(function(char) {
        if (char === caractere) {
            contador++;
        }
    });
    return contador;
}


let texto = "Hello, world!";
let caractere = "o";
let ocorrencias = contarOcorrencias(texto, caractere);
console.log(`O caractere '${caractere}' aparece ${ocorrencias} vezes na string '${texto}'.`);
