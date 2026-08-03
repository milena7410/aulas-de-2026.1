import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Details from './pages/detalhes'
import FazerManos from './pages/personagens'

function App() {
  const [name, setname] = useState('')

  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/detalhes/:id' element={<Details />} />
      <Route path='/personagens/:nome' element={<FazerManos />} />

    </Routes>
  )
}

export default App
