import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem("compras");

    if (dados) {
      setLista(JSON.parse(dados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("compras", JSON.stringify(lista));
  }, [lista]);

  function adicionar() {
    if (item.trim() === "") return;

    setLista([
      ...lista,
      {
        nome: item,
        comprado: false,
      },
    ]);

    setItem("");
  }

  function concluir(index) {
    const novaLista = [...lista];

    novaLista[index].comprado =
      !novaLista[index].comprado;

    setLista(novaLista);
  }

  function remover(index) {
    const novaLista = lista.filter(
      (_, i) => i !== index
    );

    setLista(novaLista);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Compras</h1>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />

      <button onClick={adicionar}>
        Adicionar
      </button>

      <ul>
        {lista.map((produto, index) => (
          <li key={index}>
            <span
              onClick={() => concluir(index)}
              style={{
                cursor: "pointer",
                textDecoration:
                  produto.comprado
                    ? "line-through"
                    : "none",
              }}
            >
              {produto.nome}
            </span>

            <button
              onClick={() => remover(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;