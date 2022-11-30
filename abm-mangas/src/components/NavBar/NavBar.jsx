import React from "react";
import "./NavBar.css";
import logo from "../../assets/img/Logo.jpg";

export const NavBar = () => {
  return (
    <div className="navBar contenedorNav row">
      <img className="col-md-6 col-sm-12" src={logo} alt="" />

      <ul className="col-md-6 col-sm-12 d-flex justify-content-between">
        <li className="mr-3 ml-3">Ver Productos</li>
        <li className="mr-3 ml-3">Ver Usuarios</li>
      </ul>
    </div>
  );
};
