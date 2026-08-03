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

document.getElementById('btn-comprar').addEventListener('click', () => {
    const log = document.getElementById('log');
    log.innerHTML = "Iniciando processo manual...<br>";

    const estoque = new Estoque();
    const financeiro = new Financeiro();
    const pgto = new Pagamento();
    const frete = new Logistica();

    if(estoque.verificar("Resident Evil")) {
        financeiro.processarMoedas(3);
        financeiro.aplicarCupom("FRETE GRATIS");
        pgto.gerarPix(190.00);
        frete.agendarEnvio();
        
        log.innerHTML += "[Sucesso] Compra finalizada (cliente fez todo o trabalho!)";
    }
});