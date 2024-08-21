
function soma(a, b) {
    return a + b;
}


function ehPar(numero) {
    return numero % 2 === 0;
}


function dobraValores(array) {
    return array.map(valor => valor * 2);
}

function contaCaracteres(string) {
    return string.length;
}


function fatorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1; 
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}


console.log(soma(5, 3)); 
console.log(ehPar(4)); 
console.log(ehPar(7)); 

const numeros = [1, 2, 3, 4, 5];
console.log(dobraValores(numeros)); 

const texto = "Olá, mundo!";
console.log(contaCaracteres(texto)); 

console.log(fatorial(5)); 
console.log(fatorial(0)); 
console.log(fatorial(-3)); 
