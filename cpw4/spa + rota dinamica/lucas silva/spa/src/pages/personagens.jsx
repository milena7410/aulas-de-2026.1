import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Personagem (){


const {nome}= useParams();

const personagens =[

    {
        nome:"mago",
        descricao: "O cara é quente",
        background: "blue",
        imagem: "https://ellosrpg.wordpress.com/wp-content/uploads/2016/10/bdbb3326ce0f4467b9e8c1bb139a5688.jpg?w=400&h=549"

    },
    {
        nome:"arqueira",
        descricao: "Só flechada",
        background: "red",
        imagem:"https://w7.pngwing.com/pngs/50/453/png-transparent-tera-role-playing-game-bow-archer-season-9-bow-miscellaneous-game-bow.png"

    },


    {
        nome:"dante",
        descricao: "Receba",
        background: "red",
        imagem: "https://static.wikia.nocookie.net/devilmaycry/images/8/86/Img_dmc5_dante.png/revision/latest?cb=20210409025842&path-prefix=pt-br"

    }

]

var personagem =personagens.find(item=>item.nome===nome)


console.log(personagem)
return(
    <>
    <div>
    <h1>{personagem.nome}</h1>
    <h2>{personagem.descricao}</h2>


    <img src={personagem.imagem} alt="" />

    <Link to ='/'>Ir para página inicial</Link>
    
    </div>



    
    </>

    
)


}

export default Personagem
