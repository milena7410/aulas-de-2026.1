class Estoque {
    verificar(item) { console.log("[Estoque] Reservando " + item); return true; }
}
class Financeiro {
    processarMoedas(qtd) { console.log(`[Moedas] Descontando ${qtd} moedas`); }
    aplicarCupom(cupom) { console.log(`[Cupom] Validando ${cupom}`); }
}
class Pagamento {
    gerarPix(valor) { console.log(`[Pagamento] Gerando PIX de R$ ${valor}`); }
}
class Logistica {
    agendarEnvio() { console.log("[Logistica] Criando etiqueta Shopee Xpress"); }
}

class ShopeeFacade {
    constructor() {
        this.estoque = new Estoque();
        this.financeiro = new Financeiro();
        this.pagamento = new Pagamento();
        this.logistica = new Logistica();
    }

    finalizarPedidoCompleto(item, preco, moedas, cupom) {
        console.log("[Sistema] Facade orquestrando tudo...");
        
        if (this.estoque.verificar(item)) {
            this.financeiro.processarMoedas(moedas);
            this.financeiro.aplicarCupom(cupom);
            this.pagamento.gerarPix(preco);
            this.logistica.agendarEnvio();
            return true;
        }
        return false;
    }
}

const shopee = new ShopeeFacade();

document.getElementById('btn-comprar').addEventListener('click', () => {
    const log = document.getElementById('log');
    log.innerHTML = "Chamando a Fachada...<br>";

    const sucesso = shopee.finalizarPedidoCompleto("Resident Evil", 190.00, 3, "FRETE GRATIS");

    if(sucesso) {
        log.innerHTML += "[Sucesso] Compra finalizada via Facade com sucesso!";
    }
});