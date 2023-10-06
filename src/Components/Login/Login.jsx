import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LoginModel from './LoginModel';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

const Login = () => {
  const { formData, updateFormData, login, clearForm  } = LoginModel();
  const navigationTo = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await login();
      if (response && response.data && response.data.success) {
       
        // El usuario se creó con éxito según la respuesta de la API
        MySwal.fire({
          title: 'Acceso exitoso',
          // text: 'Acceso exitoso. ' + response.data.message,
          icon: 'success',
        });
        clearForm();
        navigationTo('/dashboard');
      } else {
        // La API devolvió un mensaje de error
        MySwal.fire({
          title: 'No eres administrador',
          // text: response.data.message || 'Correo o teléfono ya existen. Por favor, inténtalo de nuevo.',
          icon: 'error',
        });
        navigationTo('/login');
        console.log(response.data.success);
      }
    } catch (error) {
      console.error('Error al crear el usuario', error);
      // Manejo de errores de red u otros errores.
      MySwal.fire({
        title: 'No eres administrador',

        icon: 'warning',
      });
      navigationTo('/login');
    }
  };


  return (
    <LoginPage
      formData={formData}
      updateFormData={updateFormData}
      handleLogin={handleLogin}
    />
  );
};

export default Login;
