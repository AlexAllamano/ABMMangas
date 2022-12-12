import React from "react";
import "./NavBar.css";
import logo from "../../assets/img/Logo.jpg";
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

      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2 className="textoLogo">Rayos <span>y</span></h2>
          <h2 className="textoLogo">Centellas</h2>
        </div>
        <img className="logo " src={logo} alt="" />
      </div>

      <ul className="d-flex justify-content-center listaNavBar">
        <li className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar">
        <a  className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar" 
              href="/Productos">
                Ver Productos
          </a>
        </li>
        <li className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar">
        <a  className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar" 
              href="/Search">
                Ver Usuarios
          </a>
        </li>


        <li className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar">
          <a  className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar" 
              href="/Search">
                Search
          </a>
        </li>

        <li className="mr-5 ml-5 d-flex justify-content-center flex-column itemNavBar"
            onClick={onLogout}>
          Logout
        </li>
        

        {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">

            <span className="nav-item nav-link text-primary">
              {user?.name}
            </span>

            <button
              className="nav-item nav-link btn itemNavBar"
              onClick={onLogout}
            >
              Logout
            </button>

          </ul>
        </div> */}
      </ul>
    </div>

  );
};
