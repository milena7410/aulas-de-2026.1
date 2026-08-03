const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("Digite um número: "));
    soma += num;
}

console.log("Soma:", soma);

// const prompt = require('prompt-sync')();

// let soma = 0;

// for (let i = 1; i <= 5; i++) {
//     let num = parseInt(prompt("Digite um número: "));
//     soma += num;
// }

// let media = soma / 5;

// console.log("Média:", media);

// FASE 4 – LÓGICA

// Peça 5 números e mostre qual é o maior.

// Peça 5 números e mostre qual é o menor.

// Peça 5 números e conte quantos são positivos.

// Peça 5 números e conte quantos são negativos.

// Peça uma palavra e conte quantas letras ela possui usando for.