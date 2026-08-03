const prompt = require('prompt-sync')()
let soma = 0
let media= 0
let par= 0
let impar= 0
let maior= 0
let menor= 0
let positivo = 0
let negativo = 0
let zero = 0
for ( let i = 1; i<=10 ; i++){
   let numero = parseInt(prompt(`digite o  ${i} numero: `))
    soma += numero
    media = soma /10

    if (numero >maior) {
        maior = numero
    }
    if (numero < menor) {
        menor = numero
    }
    if (numero %2 === 0) {
        par++
           
    } else {
        impar++
    }
    if (numero > 0) {
        positivo++
    } else if (numero < 0) {
        negativo++
    } else {
        zero++
    } 
        
}
console.log("maior: ", maior);
console.log("menor: ", menor);
console.log("soma: ", soma);
console.log("media: ", media);
console.log("impar:", impar);
console.log("par:", par);
console.log("positivo:", positivo);
console.log("negativo:", negativo);
console.log("zeros:", zero);





