import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to='/about'>Ir para Sobre</Link>
            <br />
            <Link to='/detalhes/1'>Item 1</Link>
            <br />
            <Link to='/detalhes/2'>Item 2</Link>
            <br />
            <Link to='/personagens/jotaro'>jotaro</Link>
            <br />
            <Link to='/personagens/kakyoin'>kakyoin</Link>
            <br />
            <Link to='/personagens/avdol'>avdol</Link>
            <br />
            <Link to='/personagens/hol'>hol</Link>
            <br />
            <Link to='/personagens/polnareff'>polnareff</Link>
            <br />
            
        </>
    )
}

export default Home