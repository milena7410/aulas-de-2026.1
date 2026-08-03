// PRODUTOS

class Produto {
  guardar() {
    throw new Error("Método deve ser implementado");
  }
}

class Alimento extends Produto {
  guardar() {
    return "Alimento armazenado no estoque alimentício";
  }
}

class Roupa extends Produto {
  guardar() {
    return "Roupa armazenada no estoque de vestuário";
  }
}

// FACTORY METHOD

class Fabrica {
  criarProduto() {
    throw new Error("Método deve ser implementado");
  }

  armazenar() {
    const produto = this.criarProduto();
    return produto.guardar();
  }
}

// FÁBRICAS CONCRETAS

class FabricaAlimento extends Fabrica {
  criarProduto() {
    return new Alimento();
  }
}

class FabricaRoupa extends Fabrica {
  criarProduto() {
    return new Roupa();
  }
}

// FUNÇÃO PRINCIPAL

function armazenarProduto(tipo) {
  let fabrica;

  if (tipo === "alimento") {
    fabrica = new FabricaAlimento();
  }

  if (tipo === "roupa") {
    fabrica = new FabricaRoupa();
  }

  document.getElementById("resultado").innerText =
    fabrica.armazenar();
}