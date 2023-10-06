import React from 'react'
import './Login.css'
import '../../App.css'
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdLogIn } from 'react-icons/io';
import { Link } from 'react-router-dom'

// import video from '../../Assets/video.mp4'
import logo from '../../Assets/cyber-link.png'
import publicidad from '../../Assets/gamer-1.jpeg'

const LoginPage = ({ formData, updateFormData, handleLogin }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin();

  };

 return (

    <div className='loginPage flex'>
      <div className='container  flex'>
        <div className='videoDiv'>
          {/* <video src={video} autoPlay muted loop></video> */}
            <img src={publicidad} alt="Logo" />
          <div className='textDiv'>
            <h2 className='title'>Cyber Link </h2>
            <p>Siempre a tus servicios</p>
          </div>
          <div className='footerDiv flex'>
            <span className='text'>No tengo cuenta?</span>
            <Link to={'/register'}>
              <button className='btn'>Registrarme</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
        <div className='iconBack'>
          </div>
          <div className='headerDiv'>
            <img src={logo} alt="Logo" />
            <h3>Bienvenido!</h3>
          </div>

          <form action="" className='form grid' onSubmit={handleSubmit}>
            {formData.success && (
              <div className="success-message">
                Usuario creado exitosamente: {formData.message}
              </div>
            )}

            {formData.error && (
              <div className="error-message">
                Error al crear el usuario: {formData.message}
              </div>
            )}
            {/* <span className='showMessage'>Iniciar Sesión</span> */}
            <div className='inputDiv'>
              <div className='input flex'>
                <AiOutlineMail className='icon' />
                <input
                  type="email"
                  id='email'
                  name="email"
                  value={formData.email}
                  placeholder='Escribe tu correo electrónico'
                  required
                  onChange={handleInputChange} />
              </div>
            </div>

            <div className='inputDiv'>
              <div className='input flex'>
                <RiLockPasswordLine className='icon' />
                <input
                  type="password"
                  id='password'
                  name="password"
                  value={formData.password}
                  placeholder='Escribe una clave'
                  required
                  onChange={handleInputChange} />

              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Acceder</span>
              <IoMdLogIn className='icon' />
            </button>

            <a href="/dashboard">Dashboard</a>

            <span className='forgotPassword'>
              Recuperar clave? <a href='#'> Clic aquí</a>
            </span>
            <span className='forgotPassword'>
            <a href='/'>Ir al Inicio </a>
            </span>
            
          </form>

        </div>
      </div>
    </div>
  )
}
export default LoginPage
