let y = 12;
let z = 8;


let comparacaoMaiorIgual = x >= y;
console.log("x é maior ou igual a y:", comparacaoMaiorIgual);


let diferenteDe = x != z;
let estritamenteDiferenteDe = x !== z;
console.log("x é diferente de z (!=):", diferenteDe);
console.log("x é estritamente diferente de z (!==):", estritamenteDiferenteDe);


let condicaoLogica1 = (x < y) && (z > x);
console.log("x é menor que y e z é maior que x:", condicaoLogica1);


let condicaoLogica2 = (x === z) || (y < z);
console.log("x é igual a z ou y é menor que z:", condicaoLogica2);
