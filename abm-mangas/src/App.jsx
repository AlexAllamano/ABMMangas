import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ListaProductos } from './components/ListaProductos/ListaProductos'
import { AppRouter } from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
