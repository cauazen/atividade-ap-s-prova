let numeros = [10, 20, 30, 40, 50];


numeros.push(60);
console.log("Array após adicionar 60 com push:", numeros);


let valorRemovido = numeros.pop();
console.log("Valor removido com pop:", valorRemovido);
console.log("Array após remover o último valor com pop:", numeros);


numeros.splice(2, 1);
console.log("Array após remover o terceiro elemento com splice:", numeros);


numeros.sort((a, b) => b - a);
console.log("Array em ordem decrescente:", numeros);
