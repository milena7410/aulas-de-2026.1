import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/home'

import { Route, Routes } from 'react-router-dom'
import Erro from './pages/erro'
import Detalhes from './pages/detalhes'
import Personagem from './pages/personagens'
function App() {
  const [name, setname] = useState("")

  return (
   <Routes>

    <Route path='/' element = {<Home/>}/>
    <Route path='/personagens/:nome' element ={<Personagem/>}/>
    <Route path='*' element ={<Erro/> }/>
    <Route path='/detalhes/:nome' element = {<Detalhes/>}/> 
   </Routes>

   
  )
}

export default App
