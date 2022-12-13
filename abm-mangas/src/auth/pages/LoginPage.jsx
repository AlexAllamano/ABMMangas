import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./LoginPage.css";


export const LoginPage = () => {

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
    email: '',
    password: ''
  });

  const { email, password } = usuario;

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
            <h1 className='text-dark h-propio'>Iniciar Sesión</h1>

            <form className='form-s'
              onSubmit={onSubmit}
            >

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
                <input type="submit" className='btn btn-primario btn-block' value="Iniciar Sesión"/>
              </div>

            </form>

            <Link to={'/create-account'} className="enlace-cuenta">
              Crear Cuenta
            </Link>
            
          </div>
          {/* <button
          className='btn btn-primary'
          onClick={ onLogin }
          >
            Login
        </button> */}
        </div>

        
    
  )
}
