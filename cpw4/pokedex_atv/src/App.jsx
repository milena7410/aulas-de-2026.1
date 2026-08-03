import { useState, useEffect } from "react";
import "./style.scss";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [busca, setBusca] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!busca) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro");
        return res.json();
      })
      .then((data) => {
        setDados(data);
        setErro(false);
      })
      .catch(() => {
        setDados(null);
        setErro(true);
      });
  }, [busca]);

  function pesquisarPokemon() {
    setBusca(pokemon.toLowerCase());
  }

  return (
    <div className="container">
      <div className="titulo">
        <h1>Pokédex</h1>
      </div>

      <div className="busca">
        <input
          type="text"
          placeholder="Digite o nome do Pokémon"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") pesquisarPokemon();
          }}
        />

        <button onClick={pesquisarPokemon}>Buscar</button>
      </div>

      {erro && <p>Pokémon não encontrado</p>}

      {dados && (
        <div className="card">
          <div className="imagens">
            <img src={dados.sprites.front_default} alt="front" />
            <img src={dados.sprites.back_default} alt="back" />
          </div>

          <div className="info">
            <h2>{dados.name.charAt(0).toUpperCase() + dados.name.slice(1)}</h2>

            <p>
              <strong>Tipo:</strong>
            </p>
            <ul>
              {dados.types.map((t, index) => (
                <li key={index}>{t.type.name}</li>
              ))}
            </ul>

            <p>
              <strong>Habilidades:</strong>
            </p>
            <ul>
              {dados.abilities.map((hab, index) => (
                <li key={index}>{hab.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
