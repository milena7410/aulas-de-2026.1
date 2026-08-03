//ex6
let n = 1;
let qtd = 0;
let soma = 0;

while (n !== 0) {
  n = Number(prompt("Digite um numero: "));
  if (n !== 0) {
    qtd++;
    soma += n;
  }
}

console.log("quantidade: ", qtd);
console.log("Soma:", soma);


//ex7
n = 1;
let pares = 0;
let impares = 0;

while (n !== 0) {
  n = Number(prompt("Digite um numero:"));
  if (n !== 0) {
    if (n % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
}

console.log("Ex7 - Pares:", pares);
console.log("Ex7 - Ímpares:", impares);


//ex8
let nota = 0;
soma = 0;
qtd = 0;

while (nota !== -1) {
  nota = Number(prompt("Digite nota:"));

  if (nota >= 0 && nota <= 10) {
    soma += nota;
    qtd++;
  } else if (nota !== -1) {
    console.log("inválido");
  }
}

if (qtd > 0) {
  console.log("Quantidade:", qtd);
  console.log("media:", soma / qtd);
}


//ex9
n = 1;
soma = 0;
qtd = 0;

while (n !== 0) {
  n = Number(prompt("Digite um numero:"));

  if (n > 0) {
    soma += n;
    qtd++;
  }
}

console.log("Positivos:", qtd);
console.log(" Soma:", soma);


//ex10
n = 1;
let somaPares = 0;

while (n !== 0) {
  n = Number(prompt("Digite um numero: "));

  if (n !== 0 && n % 2 == 0) {
    somaPares += n;
  }
}

console.log("Soma dos pares:", somaPares);