class PagamentoCartao {
    pagar(valor) {
        let taxa = valor * 0.05;
        let total = valor + taxa;

        return {
            metodo: "Cartão",
            taxa: taxa.toFixed(2),
            total: total.toFixed(2)
        };
    }
}

class PagamentoPix {
    pagar(valor) {
        let desconto = valor * 0.10;
        let total = valor - desconto;

        return {
            metodo: "Pix",
            desconto: desconto.toFixed(2),
            total: total.toFixed(2)
        };
    }
}

class PagamentoBoleto {
    pagar(valor) {
        let taxa = 2;
        let total = valor + taxa;

        return {
            metodo: "Boleto",
            taxa: taxa.toFixed(2),
            total: total.toFixed(2)
        };
    }
}

class PagamentoPaypal {
    pagar(valor) {

        let taxa = valor * 0.08;
        let total = valor + taxa;

        return {
            metodo: "PayPal",
            taxa: taxa.toFixed(2),
            total: total.toFixed(2)
        };
    }
}

class PagamentoCriptomoeda {
    pagar(valor) {

        let desconto = valor * 0.15;
        let total = valor - desconto;

        return {
            metodo: "Criptomoeda",
            desconto: desconto.toFixed(2),
            total: total.toFixed(2)
        };
    }
}

class ProcessadorPagamento {

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    processar(valor) {
        return this.strategy.pagar(valor);
    }
}

function realizarPagamento() {

    const valor = parseFloat(document.getElementById("valor").value);
    const metodo = document.getElementById("metodo").value;

    const processador = new ProcessadorPagamento();

    if (metodo === "cartao") {
        processador.setStrategy(new PagamentoCartao());
    }

    else if (metodo === "pix") {
        processador.setStrategy(new PagamentoPix());
    }

    else if (metodo === "boleto") {
        processador.setStrategy(new PagamentoBoleto());
    }

    else if (metodo === "paypal") {
    processador.setStrategy(new PagamentoPaypal());
}

    else if (metodo === "cripto") {
    processador.setStrategy(new PagamentoCriptomoeda());
}

    const resultado = processador.processar(valor);

    let html = `
        <p><strong>Método:</strong> ${resultado.metodo}</p>
      `;

    if (resultado.taxa) {
        html += `<p><strong>Taxa:</strong> R$ ${resultado.taxa}</p>`;
    }

    if (resultado.desconto) {
        html += `<p><strong>Desconto:</strong> R$ ${resultado.desconto}</p>`;
    }

    html += `
        <p><strong>Total:</strong> R$ ${resultado.total}</p>
      `;

    document.getElementById("resultado").innerHTML = html;
}