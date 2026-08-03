import { useEffect, useState } from 'react'

function App() {

  const [tarefas, setTarefas] = useState([])
  const [texto, setTexto] = useState('')

  useEffect(() => {

    const dadosSalvos =
      localStorage.getItem('tarefas')

    if (dadosSalvos) {
      setTarefas(
        JSON.parse(dadosSalvos)
      )
    }

  }, [])

  function adicionarTarefa() {

    if (texto === '') return

    const novaLista = [
      ...tarefas,
      {
        id: Date.now(),
        nome: texto,
        concluida: false
      }
    ]

    setTarefas(novaLista)
    localStorage.setItem(
      'tarefas',
      JSON.stringify(novaLista)
    )
    setTexto('')
  }

  function removerTarefa(id) {
    const novaLista =
      tarefas.filter(
        tarefa => tarefa.id !== id
      )
    setTarefas(novaLista)

    localStorage.setItem(
      'tarefas',  
      JSON.stringify(novaLista)
    )
  }
  function concluirTarefa(id) {
    const novaLista =
      tarefas.map(tarefa => {
        if (tarefa.id === id) {
          return {
            ...tarefa,
            concluida: !tarefa.concluida
          }

        }

        return tarefa
      })

    setTarefas(novaLista)
    localStorage.setItem(
      'tarefas',
      JSON.stringify(novaLista)
    )
  }

  return (

    <div className="container">

      <h1>
        PWA Offlineee
      </h1>

      <div className="input-area">

        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={texto}
          onChange={(e) =>
            setTexto(e.target.value)
          }
        />

        <button
          onClick={adicionarTarefa}
        >
          Adicionar
        </button>

      </div>

      <ul>

        {tarefas.map(tarefa => (

          <li key={tarefa.id}>

            <span
              className={
                tarefa.concluida
                  ? 'concluida'
                  : ''
              }
            >
              {tarefa.nome}
            </span>

            <div>

              <button
                onClick={() =>
                  concluirTarefa(tarefa.id)
                }
              >
                {tarefa.concluida
                  ? 'Desfazer'
                  : 'Concluir'}
              </button>

              <button
                className="remover"
                onClick={() =>
                  removerTarefa(tarefa.id)
                }
              >
                Remover
              </button>

            </div>

          </li>

        ))}

      </ul>

    </div>

  )
}

export default App