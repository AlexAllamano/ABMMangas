import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();
    
    //Al momento de hacer logout, si hago logIn va a recordar el path donde estaba al hacer logout
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : <Navigate to="/login" />
}
