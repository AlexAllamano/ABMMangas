import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { ItemProducto } from "../components/ListaProductos/ItemProducto/ItemProducto"
import { ListaProductos } from "../components/ListaProductos/ListaProductos"
import { ListaUsuarios } from "../components/ListaUsuarios/ListaUsuarios"
import { VistaPrincipal } from "../components/VistaPrincipal/VistaPrincipal"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Navigate to="/vista-principal"/>}/>
            <Route path="vista-principal" element={<VistaPrincipal/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="productos" element={<ListaProductos/>}/>
            <Route path="productos/:id" element={<ItemProducto/>}/>
            <Route path="usuarios" element={<ListaUsuarios/>}/>
        </Routes>
    </>
  )
}
