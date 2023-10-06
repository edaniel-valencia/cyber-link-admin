import React from 'react';
import './Register.css';
import '../../App.css';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { IoMdLogIn } from 'react-icons/io';
import { BsPhone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../Assets/cyber-link.png';
import publicidad from '../../Assets/gamer-1.jpeg';

const RegisterPage = ({ formData, updateFormData, handleCreateUser }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleCreateUser();

  };


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
            <Link to={'/login'}>
              <button className='btn'>Iniciar Sesión</button>
            </Link>
          </div>
        </div>
       
        <div className='formDiv flex'>
        
          <div className='headerDiv'>
            <img src={logo} alt="Logo" />
            <h3>Crear una cuenta</h3>
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

            <div className='inputDiv'>
              <div className='input flex'>
                <AiOutlineUser className='icon' />
                <input type="text"
                  id='name'
                  name="name"
                  value={formData.name}
                  placeholder='Escribe tus nombres'
                  required
                  onChange={handleInputChange} />
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <AiOutlineUser className='icon' />
                <input type="text"
                  id='lastname'
                  name="lastname"
                  value={formData.lastname}
                  placeholder='Escribe tus apellidos'
                  required
                  onChange={handleInputChange} />
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <BsPhone className='icon' />
                <input
                  type="number"
                  id='phone'
                  name="phone"
                  value={formData.phone}
                  placeholder='Escribe tu teléfono'
                  required
                  onChange={handleInputChange} />
              </div>
            </div>
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

            <button type='submit' className='btn flex'  >
              <span>Registrarme</span>
              <IoMdLogIn className='icon' />
            </button>

            {/* <span className='forgotPassword'>
              Recuperar clave? <a href='#'> Clic aquí</a>
            </span> */}
            <span className='forgotPassword'>
            <a href='/'>Ir al Inicio </a>
            </span>

          </form>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
