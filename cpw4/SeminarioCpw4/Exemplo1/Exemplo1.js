class ProcessadorPagamento {

    pagar(tipoPagamento, valor) {

        if (tipoPagamento === "cartao") {

            console.log("Pagamento com cartão");

            let taxa = valor * 0.05;
            let total = valor + taxa;

            console.log("Taxa de 5%");
            console.log("Valor final: R$ " + total);

            return `
                        <p>Pagamento com cartão</p>
                        <p>Taxa de 5%</p>
                        <p>Valor final: R$ ${total}</p>
                    `;

        } else if (tipoPagamento === "pix") {

            console.log("Pagamento via PIX");

            let desconto = valor * 0.10;
            let total = valor - desconto;

            console.log("Desconto de 10%");
            console.log("Valor final: R$ " + total);

            return `
                        <p>Pagamento via PIX</p>
                        <p>Desconto de 10%</p>
                        <p>Valor final: R$ ${total}</p>
                    `;

        } else if (tipoPagamento === "boleto") {

            console.log("Pagamento via boleto");

            console.log("Prazo de compensação: 3 dias");
            console.log("Valor final: R$ " + valor);

            return `
                        <p>Pagamento via boleto</p>
                        <p>Prazo de compensação: 3 dias</p>
                        <p>Valor final: R$ ${valor}</p>
                    `;

        } else if (tipoPagamento === "paypal") {

            console.log("Pagamento via PayPal");

            let taxa = valor * 0.08;
            let total = valor + taxa;

            console.log("Taxa internacional de 8%");
            console.log("Valor final: R$ " + total);

            return `
                        <p>Pagamento via PayPal</p>
                        <p>Taxa internacional de 8%</p>
                        <p>Valor final: R$ ${total}</p>
                    `;

        } else if (tipoPagamento === "criptomoeda") {

            console.log("Pagamento com criptomoeda");

            let taxa = valor * 0.02;
            let total = valor + taxa;

            console.log("Taxa blockchain de 2%");
            console.log("Valor final: R$ " + total);

            return `
                        <p>Pagamento com criptomoeda</p>
                        <p>Taxa blockchain de 2%</p>
                        <p>Valor final: R$ ${total}</p>
                    `;

        } else {

            console.log("Forma de pagamento inválida");

            return `
                        <p>Forma de pagamento inválida</p>
                    `;

        }
    }
}

const pagamento = new ProcessadorPagamento();

function realizarPagamento() {

    let tipo = document.getElementById("tipoPagamento").value;
    let valor = Number(document.getElementById("valor").value);

    let resultado = pagamento.pagar(tipo, valor);

    document.getElementById("resultado").innerHTML = resultado;

}