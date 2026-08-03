const prompt = require("prompt-sync")();

let texto = prompt("Digite o código: ");

let tamanhoOk = texto.length === 6;
let comecaComA = texto[0] === "A";
let terminaComZ = texto[texto.length - 1] === "Z";

let valido = tamanhoOk && comecaComA && terminaComZ;

console.log("Tem 6 letras?", tamanhoOk);
console.log("Começa com A?", comecaComA);
console.log("Termina com Z?", terminaComZ);
console.log("Código válido?", valido);
