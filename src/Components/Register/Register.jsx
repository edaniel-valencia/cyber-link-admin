import React from 'react'
import './Register.css'
import '../../App.css'
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { IoMdLogIn } from 'react-icons/io';
import { BsPhone } from 'react-icons/bs';

import { Link } from 'react-router-dom'

// import video from '../../Assets/video.mp4'
import logo from '../../Assets/cyber-link.png'
import publicidad from '../../Assets/gamer-1.jpeg'

const Register = () => {
  return (

    <div className='registerPage flex'>
      <div className='container  flex'>
        <div className='videoDiv'>
          {/* <video src={video} autoPlay muted loop></video> */}
          <img src={publicidad} alt="Logo" />

          <div className='textDiv'>
            <h2 className='title'>Cyber Link </h2>
            <p>Siempre a tus servicios</p>
          </div>
          <div className='footerDiv flex'>
            <span className='text'>Ya tengo una cuenta.</span>
            <Link to={'/'}>
              <button className='btn'>Iniciar Sesión</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt="Logo" />
            <h3>Crear una cuenta</h3>
          </div>

          <form action="" className='form grid'>
           
            <div className='inputDiv'>
              <div className='input flex'>
                <AiOutlineUser className='icon' />
                <input type="text" id='nombre' name="nombre" value="" placeholder='Escribe tus nombres' />
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <AiOutlineUser className='icon' />
                <input type="text" id='apellido' name="apellido" value="" placeholder='Escribe tus apellidos' />
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <BsPhone className='icon' />
                <input type="number" id='telefono' name="telefono" value="" placeholder='Escribe tu teléfono' />
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <AiOutlineMail className='icon' />
                <input type="email" id='email' name="email" value="" placeholder='Escribe tu correo electrónico' />
              </div>
            </div>

            <div className='inputDiv'>
              <div className='input flex'>
                <RiLockPasswordLine className='icon' />
                <input type="password" id='password' name="password" value="" placeholder='Escribe una clave' />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Registrarme</span>
              <IoMdLogIn className='icon' />
            </button>

            <span className='forgotPassword'>
              Recuperar clave? <a href='#'> Clic aquí</a>
            </span>
            
          </form>

        </div>
      </div>
    </div>
  )
}
export default Register
