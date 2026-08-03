const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um numero: "))
contador = 1

while (contador <= numero) {
    console.log(contador)
    contador++
}