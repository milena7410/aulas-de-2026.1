//const prompt = require('prompt-sync')();
// let nome = prompt("Digite o nome do aluno:");

// let nota1 = Number(prompt("Digite a primeira nota:"));
// let nota2 = Number(prompt("Digite a segunda nota:"));
// let nota3 = Number(prompt("Digite a terceira nota:"));

// let media = (nota1 + nota2 + nota3) / 3;

// let resultado;

// if (media >= 7) {
//   resultado = "Aprovado";
// } else if (media >= 5) {
//   resultado = "Recuperação";
// } else {
//   resultado = "Reprovado";
// }

// console.log("Aluno: " + nome);
// console.log("Resultado: " + resultado);


//2;const prompt = require('prompt-sync')()
// let soma = 0
// let media= 0
// let par= 0
// let impar= 0
// let maior= 0
// let menor= 0
// let positivo = 0
// let negativo = 0
// let zero = 0
// for ( let i = 1; i<=10 ; i++){
//    let numero = parseInt(prompt(`digite o numero: `))
//     soma += numero
//     media = soma /10

//     if (numero >maior) {
//         maior = numero
//     }
//     if (numero < menor) {
//         menor = numero
//     }
//     if (numero %2 === 0) {
//         par++
           
//     } else {
//         impar++
//     }
//     if (numero > 0) {
//         positivo++
//     } else if (numero < 0) {
//         negativo++
//     } else {
//         zero++
//     } 
        
// }
// console.log("maior: ", maior);
// console.log("menor: ", menor);
// console.log("soma: ", soma);
// console.log("media: ", media);
// console.log("impar:", impar);
// console.log("par:", par);
// console.log("positivo:", positivo);
// console.log("negativo:", negativo);
// console.log("zeros:", zero);


//3
// let i = 10;

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

//4
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }


//tipo 2
//1
// let num = Number(prompt("Digite um número:"));

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + (num * i));
// }

//tipo3
//
// let opcao = Number(prompt("Escolha uma classe:\n1 - Guerreiro\n2 - Mago\n3 - Arqueiro"));

// switch (opcao) {
//   case 1:
//     console.log("Guerreiro - Ataque forte");
//     break;
//   case 2:
//     console.log("Mago - Magia poderosa");
//     break;
//   case 3:
//     console.log("Arqueiro - Ataque à distância");
//     break;
//   default:
//     console.log("Opção inválida");
//}

//let nivel = Number(prompt("Digite o nível do jogador:"));

//3
// if (nivel >= 10 && nivel <= 30) {
//   console.log("Pode entrar na missão");
// } else {
//   console.log("Acesso negado");
// }

//tipo3
let vida = Number(prompt("Digite a vida atual do personagem:"));

if (vida <= 0) {
  console.log("Personagem derrotado");
} else if (vida <= 30) {
    console.log("Estado crítico");
} else {
  console.log("Estado estável");
}

let n = Number(prompt("Digite um número:"));

for (let i = 1; i <= n; i++) {
  console.log(i);
}

// function maiorNumero(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(maiorNumero(10, 5)); 


function calcularMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return media;
}

let resultado = calcularMedia(7, 8, 9);
console.log("Média:", resultado);