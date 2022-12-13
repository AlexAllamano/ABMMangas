import React from "react";
import "./NavBar.css";
import logo from "../../assets/img/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const NavBar = () => {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true
    });
  }

  return (
    <div className="navBar sombraBlanca text-center">

      <div className="row">

        <div className="d-flex justify-content-center align-items-center col-md-3 col-sm-12">
          <div>
            <h2 className="textoLogo">Tienda <span>de</span></h2>
            <h2 className="textoLogo">Mangas</h2>
          </div>
          <img className="logo " src={logo} alt="" />
        </div>


        <ul id="listaNavBar" className="d-flex justify-content-center listaNavBar col-md-9 col-sm-12">

            <a className="mr-5 ml-5 d-flex justify-content-center flex-column text-decoration-none"
              href="/Vista-principal">
              Home
            </a>

            <a className="mr-5 ml-5 d-flex justify-content-center flex-column text-decoration-none"
              href="/Productos">
              Ver Productos
            </a>


            <a className="mr-5 ml-5 d-flex justify-content-center flex-column text-decoration-none"
              href="#">
              Ver Usuarios
            </a>

            <a className="mr-5 ml-5 d-flex justify-content-center flex-column text-decoration-none"
              href="/Search">
              Search
            </a>

            <a className="mr-5 ml-5 d-flex justify-content-center flex-column text-decoration-none"
              onClick={onLogout}>
              Logout
            </a>


        </ul>

      </div>

    </div>

  );
};
