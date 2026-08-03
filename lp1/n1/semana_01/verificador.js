const prompt = require("prompt-sync")();

let senha = prompt("Digite uma senha: ");

let tamanhoValido = senha.length >= 8;

console.log("Quantidade de caracteres:", senha.length);
console.log("Senha válida?", tamanhoValido);
