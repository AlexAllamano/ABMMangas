import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { ItemProducto } from "../components/ListaProductos/ItemProducto/ItemProducto"
import { ListaProductos } from "../components/ListaProductos/ListaProductos"
import { SearchPage } from "../components/ListaProductos/SearchPage"
import { ListaUsuarios } from "../components/ListaUsuarios/ListaUsuarios"
import { VistaPrincipal } from "../components/VistaPrincipal/VistaPrincipal"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="/" element={<Navigate to="/vista-principal"/>}/>
            <Route path="vista-principal" element={<VistaPrincipal/>}/>
            <Route path="productos" element={<ListaProductos/>}/>
            <Route path="manga/:id" element={<ItemProducto/>}/>
            <Route path="usuarios" element={<ListaUsuarios/>}/>
            <Route path="search" element={<SearchPage/>}/>
        </Routes>
    </>
  )
}
