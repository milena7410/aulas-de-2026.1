const prompt = require('prompt-sync')()

//TIPO 01
//1
// let n = Number(prompt("digite um numero: "));
// let total = 0
// let media = 0
// let contador = 0

// while (n !== 0) {
//     total +=n
//     contador++
//     n = Number(prompt("digite um numero: "));

// }
// media = total/contador
// console.log("a soma é:", total);
// console.log("a media é:", media);

//2
// let i = 0;
// let soma = 0;
// while (i <= 3) {
//     console.log("soma = ", i);
//     soma += i;
//     i++;
// }
// console.log("resultado final:", soma);

//3

// let soma=0
// let maior=0;
// let menor=0;
// let par=0
// let impar=0
// let positivo=0
// let negativo=0
// let zero=0
// for(let i=0; i<=15; i++){
//   numero = parseInt(prompt('Digite o numero: '))
//   soma = soma + numero;

//   if(numero > maior){
//     maior=numero
//   }
//   if(numero < menor){
//     menor=numero
//   }
//   if(numero %2 == 0){
//     par++
//   }else{
//     impar++
//   }
//   if(numero > 0){
//     positivo++
//   }
//   if(numero < 0){
//     negativo++
//   }
//   if(numero == 0){
//     zero++
//   }
// }
// media=soma/15
// console.log('A soma:',soma);
// console.log('A média:',media);
// console.log('O maior número:',maior);
// console.log('O menor número:',menor);
// console.log('O numero par:',par);
// console.log('O número impar:',impar);
// console.log('O número positivo:',positivo);
// console.log('O número negativo:',negativo);
// console.log('O numero igual a zero:',zero);

//4
let i = 50;

while (i >= 0) {
  console.log(i);
  i--;
}

//5
// for (let i = 1; i <= 88; i++) {
//   console.log(i);
// }

//=======================================================

//TIPO 02
//1
// let n = parseInt(prompt("Digite um numero: "))
// for(let i = 1; i<=15; i++){
//     console.log(n, "x", i, "= ",n*i); 
// }

//2
// let opcao = Number(prompt("Escolha uma classe: "));

// switch (opcao) {
//   case 1:
//     console.log("Guerreiro");
//     console.log("habilitade blablabla e blablabla ");
//     break;
//   case 2:
//     console.log("Mago");
//     console.log("habilitade blablabla e blablabla ");
//     break;
//   case 3:
//     console.log("Arqueiro");
//     console.log("habilitade blablabla e blablabla ");
//     break;
//   case 4:
//     console.log("Curandeiro");
//     console.log("habilitade blablabla e blablabla ");
//     break;
//   default:
//     console.log("Opção inválida");
// }

//3
// let nivel = Number(prompt("Digite o nível do jogador: "));

// if (nivel >= 10 && nivel <= 33) {
//   console.log("Pode entrar na missao");
// } else {
//   console.log("Acesso negado");
// }


//=======================================================
//TIPO 03
//1
// let nome = prompt("Nome do personagem: ");
// let vida = Number(prompt("vida atual: "));

// if (vida <= 0) {
//   console.log(nome, ": personagem derrotado");
// } else if (vida <= 33) {
//   console.log(nome, ": Estado critico");
// } else {
//   console.log(nome, ": Estado estavel");
// }


//4
// let numero = parseInt(prompt("digite um numero: "))
// for(let i = 0; i<=numero;i++){
//     console.log(i);
// }