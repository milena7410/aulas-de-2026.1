const prompt = require('prompt-sync')();

let linhas = Number(prompt("Digite a quantidade de linhas:"));
let colunas = Number(prompt("Digite a quantidade de colunas:"));

let matriz = [];

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];

    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor para [${i}][${j}]:`));
    }
}

for (let i = 0; i < linhas; i++) {
    let soma = 0;
    for (let j = 0; j < colunas; j++) { 
        soma += matriz[i][j];
    }

    console.log(`Linha ${i + 1} = ${soma}`);
}