import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ListaProductos } from './components/ListaProductos/ListaProductos'
import { AppRouter } from './router/AppRouter'
import { VistaPrincipal } from './components/VistaPrincipal/VistaPrincipal'
import { AuthProvider } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        
        <NavBar></NavBar>
        <AppRouter />

      </AuthProvider>

    </>
  )
}

export default App
