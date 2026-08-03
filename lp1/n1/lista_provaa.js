
// 1
let ataque = Number(prompt("Ataque:"));
let defesa = Number(prompt("Defesa:"));
let dano = ataque - defesa;
if (dano <= 0) {
  console.log("Ataque sem efeito");
} else if (dano <= 50) {
  console.log("Dano normal");
} else {
  console.log("Dano crítico!");
}

// 2
let energia = Number(prompt("Energia:"));
let custo = Number(prompt("Custo:"));
if (energia >= custo) {
  energia = energia - custo;
  console.log("Energia restante: " + energia);
} else {
  console.log("Energia insuficiente");
}

// 3
let heroi = Number(prompt("Poder do herói:"));
let inimigo = Number(prompt("Poder do inimigo:"));
if (heroi > inimigo) {
  console.log("Herói mais forte");
} else if (inimigo > heroi) {
  console.log("Inimigo mais forte");
} else {
  console.log("Empate de poder");
}

// 4
let nivel = Number(prompt("Nível:"));
if (nivel >= 10 && nivel <= 30) {
  console.log("Pode entrar na missão");
} else {
  console.log("Acesso negado");
}

// 5
let vida = Number(prompt("Vida:"));
if (vida <= 0) {
  console.log("Personagem derrotado");
} else if (vida <= 30) {
  console.log("Estado crítico");
} else {
  console.log("Estado estável");
}

// 6
let vidaInimigo = 100;
let turnos = 0;
while (vidaInimigo > 0) {
  let danoTurno = Number(prompt("Dano:"));
  vidaInimigo = vidaInimigo - danoTurno;
  turnos++;
}
console.log("Turnos: " + turnos);

// 7
let total = 0;
let valor = Number(prompt("Ouro:"));
while (valor != 0) {
  total = total + valor;
  valor = Number(prompt("Ouro:"));
}
console.log("Total: " + total);

// 8
let cont = 0;
let num = Number(prompt("Número:"));
while (num != -1) {
  if (num > 50) {
    cont++;
  }
  num = Number(prompt("Número:"));
}
console.log("Quantidade: " + cont);

// 9
let soma = 0;
let n = Number(prompt("Número:"));
while (n != 0) {
  if (n % 2 == 0) {
    soma = soma + n;
  }
  n = Number(prompt("Número:"));
}
console.log("Soma: " + soma);

// 10
let valor2 = Number(prompt("Número:"));
let ultimo;
while (valor2 != 0) {
  ultimo = valor2;
  valor2 = Number(prompt("Número:"));
}
console.log("Último: " + ultimo);

// 11
let classe = Number(prompt("Classe:"));
switch (classe) {
  case 1:
    console.log("Guerreiro - Ataque forte");
    break;
  case 2:
    console.log("Mago - Magia poderosa");
    break;
  case 3:
    console.log("Arqueiro - Ataque à distância");
    break;
}

// 12
let nivelCliente = Number(prompt("Nível:"));
switch (nivelCliente) {
  case 1:
    console.log("0% desconto");
    break;
  case 2:
    console.log("10% desconto");
    break;
  case 3:
    console.log("20% desconto");
    break;
}

// 13
let dia = Number(prompt("Dia:"));
switch (dia) {
  case 1: console.log("Domingo"); break;
  case 2: console.log("Segunda"); break;
  case 3: console.log("Terça"); break;
  case 4: console.log("Quarta"); break;
  case 5: console.log("Quinta"); break;
  case 6: console.log("Sexta"); break;
  case 7: console.log("Sábado"); break;
}

// 14
let tipo = Number(prompt("Tipo:"));
switch (tipo) {
  case 1:
    console.log("Físico");
    break;
  case 2:
    console.log("Mágico");
    break;
  case 3:
    console.log("Distância");
    break;
}

// 15
let N = Number(prompt("N:"));
for (let i = 1; i <= N; i++) {
  console.log(i);
}

// 16
let N2 = Number(prompt("N:"));
for (let i = 1; i <= N2; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 17
let N3 = Number(prompt("N:"));
let soma2 = 0;
for (let i = 1; i <= N3; i++) {
  soma2 = soma2 + i;
}
console.log("Soma: " + soma2);

// 18
let numTab = Number(prompt("Número:"));
for (let i = 1; i <= 10; i++) {
  console.log(numTab + " x " + i + " = " + (numTab * i));
}

// 19
let segredo = 8;
let palpite = Number(prompt("Palpite:"));
while (palpite != segredo) {
  if (palpite > segredo) {
    console.log("Maior");
  } else {
    console.log("Menor");
  }
  palpite = Number(prompt("Palpite:"));
}
console.log("Acertou!");

// 20
let soma3 = 0;
let qtd = 0;
let num2 = Number(prompt("Número:"));
while (num2 != 0) {
  soma3 = soma3 + num2;
  qtd++;
  num2 = Number(prompt("Número:"));
}
console.log("Soma: " + soma3);
console.log("Quantidade: " + qtd);

// 21
let nFib = Number(prompt("N:"));
let a = 0;
let b = 1;
for (let i = 1; i <= nFib; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}



// 22
let numero = prompt("Digite um número inteiro:");
let invertido = "";
for (let i = numero.length - 1; i >= 0; i--) {
    invertido = invertido + numero[i];
}






console.log("Número invertido:", invertido);
// 23
let numDig = Number(prompt("Número:"));
let contDig = 0;
while (numDig > 0) {
  contDig++;
  numDig = Math.floor(numDig / 10);
}
console.log(contDig);

// 24
let limite = Number(prompt("Limite:"));
let x = 0;
let y = 1;
while (x <= limite) {
  console.log(x);
  let temp = x + y;
  x = y;
  y = temp;
}