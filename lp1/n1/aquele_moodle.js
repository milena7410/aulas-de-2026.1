
let soma = 0;
let maior = -999999;
let menor = 999999;

let pares = 0;
let impares = 0;

let positivos = 0;
let negativos = 0;
let zeros = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número:"));

  soma = soma + num;

  // maior e menor
  if (num > maior) {
    maior = num;
  }
  if (num < menor) {
    menor = num;
  }

  // par ou ímpar
  if (num % 2 == 0) {
    pares++;
  } else {
    impares++;
  }

  // positivo, negativo ou zero
  if (num > 0) {
    positivos++;
  } else if (num < 0) {
    negativos++;
  } else {
    zeros++;
  }
}

let media = soma / 10;

console.log("Soma: " + soma);
console.log("Média: " + media);
console.log("Maior: " + maior);
console.log("Menor: " + menor);
console.log("Pares: " + pares);
console.log("Ímpares: " + impares);
console.log("Positivos: " + positivos);
console.log("Negativos: " + negativos);
console.log("Zeros: " + zeros);