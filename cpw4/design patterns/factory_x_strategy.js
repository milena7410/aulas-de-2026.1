//strategy
function pagar(tipo, valor) {
    if (tipo === "cartao") {
        console.log("Pagando com cartão:", valor);
    } else if (tipo === "pix") {
        console.log("Pagando com PIX:", valor);
    } else if (tipo === "boleto") {
        console.log("Pagando com boleto:", valor);
    }
}
pagar("pix", 100);

