let num1 = 10;
let num2 = 20;
let num3 = 30;

if(num1 === num2 && num2 === num3){
    console.log("Todos os numeros são iguais")
}else if(num1 >= num2 && num1 >= num3){
    console.log("o maior numero e: ",num1);
}else if(num2 >= num1 && num2 >= num3){
    console.log("o maior numero e: ",num2);
}else if(num3 >= num2 && num3 >= num1){
    console.log("o maior numero e: ",num3);
}