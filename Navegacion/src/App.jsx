import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import List from './pages/List'
import Calculadora from './pages/Calculadora'
import Componentes from './pages/Componentes'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/Calculadora" element={<Calculadora />} />
        <Route path="/List" element={<List />} />
        <Route path="/Componentes" element={<Componentes />} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
