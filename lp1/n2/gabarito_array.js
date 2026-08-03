//1
let v = [40, 10, 31, 5, 2];
for(let i = 0; i < v.length; i++){
    for(let j = i+1; j < v.length; j++){
        if (v[i]>v[j]) {//compara o primeiro elemento com o segundo
            let temp = v[i]//se for vdd armazena o 1 elemento
            v[i] = v[j]//troco, 2 elemento vira o primeiro
            v[j] = temp// coloco o 1 elemento no segundo
        }
    }
}console.log(`${v}`);

//====================================

//2
let v = [10, 5, 8, 5, 20, 5];
let numero = 5;
let contador = 0;

for(let i in v){
    if (v[i] === numero) {
        console.log("Achou na posição:", i);
        contador++;
    }
}
if (contador > 0) {
    console.log("Total:", contador);
} else {
    console.log("Número não encontradooooo");
}
