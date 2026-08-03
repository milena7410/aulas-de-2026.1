import { Link, useParams } from 'react-router-dom'
import jotaroIMG from '../assets/jotaro.png'
import avdolIMG from '../assets/avdol.png'
import holIMG from '../assets/hol.webp'
import kakyoinIMG from '../assets/kakyoin.png'
import polnareffIMG from '../assets/polnareff.png'

function FazerManos() {
    const { nome } = useParams()

    const personagens = [
        {
            nome: 'jotaro',
            imagem: jotaroIMG,
            descricao: "goat fortao",
        },
        {
            nome: 'avdol',
            imagem: avdolIMG,
            descricao: 'Negao do fogo'
        },
        {
            nome: 'hol',
            imagem: holIMG,
            descricao: 'pistoleiro massa muito loko'

        },
        {
            nome: 'kakyoin',
            imagem: kakyoinIMG,
            descricao: 'goat so que verde cristal'
        },
        {
            nome: 'polnareff',
            imagem: polnareffIMG,
            descricao: 'rapaz da espada'
        }

    ]
    var personagem = personagens.find(item => item.nome === nome)
    return (
        <div className='Personagens'>
            <h1>{nome.toUpperCase()}</h1>
            <p>{personagem.descricao}</p>
            <img src={personagem.imagem} alt={nome} />
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </div>
    )
}

export default FazerManos