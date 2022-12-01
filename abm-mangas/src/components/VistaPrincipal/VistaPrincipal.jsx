import React from 'react'
import { Carrusel } from '../Auxiliares/Carrusel/Carrusel'
import { ListaUsuarios } from '../ListaUsuarios/ListaUsuarios'

export const VistaPrincipal = () => {
  return (
    <div>
        <Carrusel></Carrusel>
        <ListaUsuarios/>
    </div>
  )
}