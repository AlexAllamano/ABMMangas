import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./LoginPage.css";
import "./LoginPage.css";

export const CreateAccount = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  // const onLogin = () => {

  //   const lastPath = localStorage.getItem('lastPath') || '/'

  //   login( 'Pablo Rizzo' );

  //   navigate('/', {
  //     replace: true
  //   });
  // }

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  const { nombre, email, password, confirmar } = usuario;

  const onChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();


  }

  return (
    
        <div className='form-usuario'>
          <div className='contenedor-form sombra-dark'>
            <h1 className='text-dark h-propio'>Crear Cuenta</h1>

            <form className='form-s'
              onSubmit={onSubmit}
            >
              <div className='campo-form'>
                <label htmlFor="nombre">Nombre</label>
                <input 
                  type="text" 
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={onChange}
                />
              </div>

              <div className='campo-form'>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="Email@example.com"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className='campo-form'>
                <label htmlFor="password">Password</label>
                <input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <div className='campo-form'>
                <label htmlFor="confirmar">Confirmar Password</label>
                <input 
                  type="password"
                  id="confirmar"
                  name="confirmar"
                  placeholder="Repetir Password"
                  value={confirmar}
                  onChange={onChange}
                />
              </div>

              <div className='campo-form'>
                <input type="submit" className='btn btn-primario btn-block' value="Register"/>
              </div>

            </form>

            <Link to={'/login'} className="enlace-cuenta">
              Volver a Iniciar Sesión
            </Link>
            
          </div>

        </div>
  )
}
