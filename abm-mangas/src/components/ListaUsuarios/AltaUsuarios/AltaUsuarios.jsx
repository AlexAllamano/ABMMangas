import React from "react";
import { useState } from "react";

export const AltaUsuarios = ({cargarUsuario}) => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    usuario: "",
    id: 0,
    password: ""
  });

  const modificarUsuario = (nombre,valor) => {
    const {value} = valor.target;
    setUsuario({
      ...usuario,[nombre]: value      
    });
  };

  const enviar = (e) =>{
    e.preventDefault();
    cargarUsuario(usuario);
   
  }

  return (
    <div className="back-amarillo p-4 rounded mb-4">
      <form onSubmit={enviar}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="First name"
              onChange={(e) => modificarUsuario('nombre', e)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Last name"
              onChange={(e) => modificarUsuario('apellido',e)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefaultUsername">Username</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Username"
                aria-describedby="inputGroupPrepend2"
                onChange={(e) => modificarUsuario('usuario',e)}
                required
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefaultPass">Password</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="validationDefaultPass"
                placeholder="Password"
                aria-describedby="inputGroupPrepend2"
                onChange={(e) => modificarUsuario('password',e)}
                required
              />
            </div>
          </div>
        </div>

        <button className="btn btn-primary" type="submit" >
          Submit form
        </button>
      </form>
    </div>
  );
};
