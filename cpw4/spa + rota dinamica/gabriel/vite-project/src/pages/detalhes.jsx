import {useParams} from 'react-router-dom'

function Details(){
    const {id} = useParams()
    return <h1>Detalhes do Item {id}</h1>
}

export default Details