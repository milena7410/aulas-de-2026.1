import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Detalhes (){   

const{id} = useParams()
 return <h1>Detalhes do Item {id}</h1>
}
export default Detalhes;