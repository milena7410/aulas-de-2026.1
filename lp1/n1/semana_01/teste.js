const prompt = require("prompt-sync")();

let idadeUsuario = 26;
let senhaCorreta = "1234";

let idadeDigitada = Number(prompt("Digite sua idade: "));
let senhaDigitada = prompt("Digite sua senha: ");

let idadeValida = idadeDigitada === idadeUsuario;
let senhaValida = senhaDigitada === senhaCorreta;

console.log("Idade correta?", idadeValida);
console.log("Senha correta?", senhaValida);


