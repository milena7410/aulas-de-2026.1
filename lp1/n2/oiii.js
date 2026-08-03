
const prompt = require('prompt-sync')();
// let A = [
//   [1, 2],
//   [3, 4]
// ];

// let B = [
//   [5, 6],
//   [7, 8]
// ];


// let C = [];

// for (let i = 0; i < A.length; i++) {
//   C[i] = [];

//   for (let j = 0; j < A[i].length; j++) {
//     C[i][j] = A[i][j] + B[i][j];
//   }
// }
// //printar formatada
// for (let i = 0; i < C.length; i++) {
// console.log(C[i]);
// }

let linhas = Number(prompt("Digite o número de linhas: "));
let colunas = Number(prompt("Digite o número de colunas: "));

let m = [];

for (let i = 0; i < linhas; i++) {
    m[i] = [];

    for (let j = 0; j < colunas; j++) {
        m[i][j] = 0;
    }
}
//printar formatada
for (let i = 0; i < m.length; i++) {
    console.log(m[i]);
}

