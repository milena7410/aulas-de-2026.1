let precoProduto = 50;
let quantidade = 3;
let desconto = 10;
let nome = "acerola"

let total = precoProduto * quantidade;
let valorFinal = total - (total * desconto / 100);

console.log(nome, " - Total da compra:", total);
console.log(nome,  "- Valor com desconto:", valorFinal);

