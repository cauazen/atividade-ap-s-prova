let num1 = 200.456;
let num2 = 150.789;


let arredondadoNum1 = Math.round(num1);
console.log("Arredondado num1:", arredondadoNum1);


let maximo = Math.max(num1, num2);
let minimo = Math.min(num1, num2);
console.log("Valor máximo:", maximo);
console.log("Valor mínimo:", minimo);


let raizQuadradaNum2 = Math.sqrt(num2);
console.log("Raiz quadrada de num2:", raizQuadradaNum2);


let notacaoCientificaNum1 = num1.toExponential();
console.log("num1 em notação científica:", notacaoCientificaNum1);
