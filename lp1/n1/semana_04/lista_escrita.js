const prompt = require("prompt-sync")();

// a)
let pontuacao = Number(prompt("Digite sua pontuação:"));
if (pontuacao >= 100) {
  console.log("Você venceu!");
} else {
  console.log("Tente novamente");
}

// b)
let numero1 = Number(prompt("Digite um n:"));
if (numero1 % 2 === 0) {
  console.log("Número par");
} else {
  console.log("Número ímpar");
}

// c)
let vidas = Number(prompt("Digite suas vidas:"));
if (vidas < 3) {
  console.log("Você está em perigo!");
} else {
  console.log("Situação segura");
}

// d)
let nivel = Number(prompt("Digite o nível:"));
if (nivel >= 10 && nivel <= 50) {
  console.log("Acesso liberado ao portal");
} else {
  console.log("Acesso negado");
}

// 2. Cofre Misterioso (while)

// a)
let senha = 0;
while (senha !== 7) {
  senha = Number(prompt("Digite a senha:"));
}
console.log("Cofre aberto");

// b)
let soma = 0;
let num = Number(prompt("Digite um número :"));
while (num !== 0) {
  soma += num;
  num = Number(prompt("Digite um número "));
}
console.log("Soma:", soma);

// c)
let contador = 0;
let numero2 = Number(prompt("Digite um número:"));
while (numero2 >= 0) {
  if (numero2 > 0) {
    contador++;
  }
  numero2 = Number(prompt("Digite um número:"));
}
console.log("Quantidade de números positivos:", contador);

// d)
let numero3 = Number(prompt("Digite um número:"));
while (numero3 !== 10) {
  console.log(numero3);
  numero3 = Number(prompt("Digite um número:"));
}
console.log(10);

// 3. Menu do Sistema (switch)

// a)
let opcao = Number(prompt("1 - Jogar\n2 - Configurações\n3 - Sair"));

switch (opcao) {
  case 1:
    console.log("Você selecionou a opção 1 - Jogar, vamos começar!");
    break;
  case 2:
    console.log("Você selecionou a opção 2 - Configurações");
    break;
  case 3:
    console.log("Você selecionou a opção 3 - Sair");
    break;
  default:
    console.log("Opção inválida");
}

// b)
let dia = Number(prompt("Digite um número de 1 a 7:"));
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido");
}

// c)
let mes = Number(prompt("Digite um número de 1 a 12:"));
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Número inválido");
}

// 4. Treino do Herói (for)

// a)
let num1 = Number(prompt("Digite um número:"));
for (let i = 1; i <= num1; i++) {
  console.log(i);
}

// b)
let num2 = Number(prompt("Digite um número:"));
for (let i = 1; i <= num2; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// c)
let num3 = Number(prompt("Digite um número:"));
for (let i = 1; i <= 10; i++) {
  console.log(num3 + " x " + i + " = " + num3 * i);
}
