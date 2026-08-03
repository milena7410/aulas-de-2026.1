const prompt = require('prompt-sync')()
let num = parseInt(prompt("Digite um número: "))

for (let i = 1 ; i<=10; i++) {
  console.log(num, "x", i, "=", num*i)
  
}

// for (let i = 0; i<=20 ; i+=2){
//     console.log(i);
    
// }

// let c = 1 
// while (c <=5) {
//     console.log(c);
//     c++
// }


