let v = [10, 5, 8, 5, 20, 5];
let numero = 5;
let contador = 0;

for(let i in v){
    if (v[i] === numero) {
        console.log("Achou na posição:", i);x
        contador++;
    }
}
if (contador > 0) {
    console.log("Total:", contador);
} else {
    console.log("Número não encontrado!");
}
