import { Link } from "react-router-dom";
function Home(){
    return (
    <>
    <h1>Página Inicial</h1>
        



<Link to = "/personagens/mago"> Ir para Sobre</Link><br />
<Link to = "/personagens/arqueira"> 
Arqueira

<div>
    <h1>Arqueira</h1>
  

    <img src="https://e7.pngegg.com/pngimages/75/486/png-clipart-archery-shooter-bow-king-archer-free-archer-game-video-game.png" alt="" />
    
    <Link to ='/'>Ir para página inicial</Link>

    </div>




</Link><br />
<Link to = "/personagens/dante"> Dante

        
    <h1>Dante</h1>
    <h2>Vai tomando</h2>
    <img src="https://static.wikia.nocookie.net/devilmaycry/images/8/86/Img_dmc5_dante.png/revision/latest?cb=20210409025842&path-prefix=pt-br" alt="" />

</Link><br />



</>



    );
}
export default Home;