let texto = "Aprendendo JavaScript é divertido e recompensador!";


let textoMaiusculas = texto.toUpperCase();
console.log("Texto em maiúsculas:", textoMaiusculas);


let contemDivertido = texto.includes("divertido");
console.log("O texto contém a palavra 'divertido':", contemDivertido);


let arrayPalavras = texto.split(" ");
console.log("Array de palavras:", arrayPalavras);


let textoComHifen = arrayPalavras.join("-");
console.log("Texto com palavras separadas por hífens:", textoComHifen);
