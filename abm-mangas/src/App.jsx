import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { VistaPrincipal } from './components/VistaPrincipal/VistaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
      <VistaPrincipal></VistaPrincipal>
    </div>
  )
}

export default App
