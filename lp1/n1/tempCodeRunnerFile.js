let numero = parseInt(prompt('Digite o numero:'))
soma=0
maior=0;
menor=0;
par=0
impar=0
positivo=0
negativo=0
zero=0
for(let i=2; i<=15; i++){
  numero = parseInt(prompt('Digite o numero:'))
  soma = soma + numero;
  if(numero > maior){
    maior=numero
  }
  if(numero < menor){
    menor=numero
  }
  if(numero %2 == 0){
    par++
  }else{
    impar++
  }
  if(numero > 0){
    positivo++
  }
  if(numero < 0){
    negativo++
  }
  if(numero == 0){
    zero++
  }
}
media=soma/15
console.log('A soma:',soma);
console.log('A média:',media);
console.log('O maior número:',maior);
console.log('O menor número:',menor);
console.log('O numero par:',par);
console.log('O número impar:',impar);
console.log('O número positivo:',positivo);
console.log('O número negativo:',negativo);
console.log('O numero igual a zero:',zero);