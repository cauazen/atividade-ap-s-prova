let nulo = null;


let igualUndefined = (nulo == undefined);
let estritamenteIgualUndefined = (nulo === undefined);
console.log("nulo é igual a undefined (==):", igualUndefined);
console.log("nulo é estritamente igual a undefined (===):", estritamenteIgualUndefined);


let indefinido;


let indefinidoEhNaN = isNaN(indefinido);
console.log("indefinido é NaN:", indefinidoEhNaN);


let numStr2 = "123abc";
let convertidoParaNumero = Number(numStr2);


let resultadoEhNaN = isNaN(convertidoParaNumero);
console.log("O resultado da conversão de '123abc' para número é NaN:", resultadoEhNaN);
