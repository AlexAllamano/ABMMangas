import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ListaProductos } from './components/ListaProductos/ListaProductos'
import { AppRouter } from './router/AppRouter'
import { VistaPrincipal } from './components/VistaPrincipal/VistaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
      <AppRouter />
      <VistaPrincipal></VistaPrincipal>
    </>
  )
}

export default App
