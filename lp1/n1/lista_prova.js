const prompt = require('prompt-sync')()

// 1
let ataque = Number(prompt("Digite o ataque: "))
let defesa = Number(prompt("Digite a defesa: "))
let dano = ataque - defesa

if (dano <= 0) {
  console.log("Ataque sem efeito")
} else if (dano <= 50) {
  console.log("Dano normal")
} else {
  console.log("Dano crítico")
}

// 2
let energia = Number(prompt("Digite a energia: "))
let custo = Number(prompt("Digite o custo: "))

if (energia >= custo) {
  energia = energia - custo
  console.log("Energia restante:", energia)
} else {
  console.log("Energia insuficiente")
}

// 3
let heroi = Number(prompt("Poder do herói: "))
let inimigo = Number(prompt("Poder do inimigo: "))

if (heroi > inimigo) {
  console.log("Herói mais forte")
} else if (heroi < inimigo) {
  console.log("Inimigo mais forte")
} else {
  console.log("Empate")
}

// 4
let nivel = Number(prompt("Nível: "))

if (nivel >= 10 && nivel <= 30) {
  console.log("Pode entrar")
} else {
  console.log("Acesso negado")
}

// 5
let vida = Number(prompt("Vida: "))

if (vida <= 0) {
  console.log("Derrotado")
} else if (vida <= 30) {
  console.log("Crítico")
} else {
  console.log("Estável")
}

// 6
let vidaInimigo = 100
let turnos = 0

while (vidaInimigo > 0) {
  let danoTurno = Number(prompt("Dano: "))
  vidaInimigo = vidaInimigo - danoTurno
  turnos++
}

console.log("Turnos:", turnos)

// 7
let ouro = 0
let valor = Number(prompt("Digite um valor: "))

while (valor != 0) {
  ouro = ouro + valor
  valor = Number(prompt("Digite um valor: "))
}

console.log("Total:", ouro)

// 8
let cont = 0
let num = Number(prompt("Digite um número: "))

while (num != -1) {
  if (num > 50) {
    cont++
  }
  num = Number(prompt("Digite um número: "))
}

console.log(cont)

// 9
let soma = 0
let n = Number(prompt("Digite um número: "))

while (n != 0) {
  if (n % 2 == 0) {
    soma = soma + n
  }
  n = Number(prompt("Digite um número: "))
}

console.log(soma)

// 10
let ultimo = 0
let numero = Number(prompt("Digite um número: "))

while (numero != 0) {
  ultimo = numero
  numero = Number(prompt("Digite um número: "))
}

console.log(ultimo)

// 11
let classe = Number(prompt("Classe (1-3): "))

switch (classe) {
  case 1:
    console.log("Guerreiro")
    break

  case 2:
    console.log("Mago")
    break

  case 3:
    console.log("Arqueiro")
    break

  default:
    console.log("Inválido")
    break
}

// 12
let nivelCliente = Number(prompt("Nível cliente: "))

switch (nivelCliente) {
  case 1:
    console.log("0%")
    break

  case 2:
    console.log("10%")
    break

  case 3:
    console.log("20%")
    break

  default:
    console.log("Inválido")
    break
}

// 13
let dia = Number(prompt("Dia: "))

switch (dia) {
  case 1:
    console.log("Domingo")
    break

  case 2:
    console.log("Segunda")
    break

  case 3:
    console.log("Terça")
    break

  case 4:
    console.log("Quarta")
    break

  case 5:
    console.log("Quinta")
    break

  case 6:
    console.log("Sexta")
    break

  case 7:
    console.log("Sábado")
    break

  default:
    console.log("Inválido")
    break
}

// 14
let tipo = Number(prompt("Tipo: "))

switch (tipo) {
  case 1:
    console.log("Físico")
    break

  case 2:
    console.log("Mágico")
    break

  case 3:
    console.log("Distância")
    break

  default:
    console.log("Inválido")
    break
}

// 15
let N = Number(prompt("Digite N: "))

for (let i = 1; i <= N; i++) {
  console.log(i)
}

// 16
N = Number(prompt("Digite N: "))

for (let i = 2; i <= N; i = i + 2) {
  console.log(i)
}

// 17
N = Number(prompt("Digite N: "))
let somaTotal = 0

for (let i = 1; i <= N; i++) {
  somaTotal = somaTotal + i
}

console.log(somaTotal)

// 18
let tab = Number(prompt("Digite um número: "))

for (let i = 1; i <= 10; i++) {
  console.log(tab + " x " + i + " = " + (tab * i))
}

// 19
let secreto = 8
let chute = Number(prompt("Digite um número: "))

while (chute != secreto) {
  if (chute > secreto) {
    console.log("Menor")
  } else {
    console.log("Maior")
  }

  chute = Number(prompt("Digite outro número: "))
}

console.log("Acertou")

// 20
let soma2 = 0
let cont2 = 0
let entrada = Number(prompt("Digite um número: "))

while (entrada != 0) {
  soma2 = soma2 + entrada
  cont2++

  entrada = Number(prompt("Digite um número: "))
}

console.log(soma2)
console.log(cont2)

// 21
let qtd = Number(prompt("Quantidade: "))
let a = 0
let b = 1

console.log(a)

if (qtd > 1) {
  console.log(b)
}

for (let i = 3; i <= qtd; i++) {
  let c = a + b
  console.log(c)
  a = b
  b = c
}

// 22
let numInv = Number(prompt("Digite um número: "))
let inv = 0

while (numInv > 0) {
  let resto = numInv % 10
  inv = inv * 10 + resto
  numInv = parseInt(numInv / 10)
}

console.log(inv)

// 23
let numDig = Number(prompt("Digite um número: "))
let contDig = 0

if (numDig == 0) {
  contDig = 1
} else {
  while (numDig > 0) {
    numDig = parseInt(numDig / 10)
    contDig++
  }
}

console.log(contDig)

// 24
let limite = Number(prompt("Digite o limite: "))
let x = 0
let y = 1

console.log(x)

while (y <= limite) {
  console.log(y)

  let z = x + y
  x = y
  y = z
}