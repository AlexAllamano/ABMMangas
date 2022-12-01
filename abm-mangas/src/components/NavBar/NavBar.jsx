import React from "react";
import "./NavBar.css";
import logo from "../../assets/img/Logo.jpg";

export const NavBar = () => {
  return (
    <div className="navBar sombraBlanca text-center">
      <div className="contenedorNav row">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h2 className="textoLogo">Rayos <span>y</span></h2>
            <h2 className="textoLogo">Centellas</h2>
          </div>
          <img className="logo " src={logo} alt="" />
        </div>

        <ul className="col-md-6 col-sm-12 d-flex justify-content-center listaNavBar">
          <li className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar">
            Ver Productos
          </li>
          <li className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar">
            Ver Usuarios
          </li>
        </ul>
      </div>
    </div>
  );
};
