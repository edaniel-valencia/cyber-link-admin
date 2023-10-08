import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LoginModel from './LoginModel';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

const Login = () => {
  const { formData, updateFormData, login, clearForm } = LoginModel();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await login();
    if (response && response.data && response.data.success) {
      // Mostrar la alerta de éxito
      MySwal.fire({
        title: 'Acceso exitoso',
        icon: 'success',
      });

      // Limpiar el formulario y redirigir al dashboard
      clearForm();
      navigate('/dashboard');
      localStorage.setItem('user', JSON.stringify(formData));
    } else {
      MySwal.fire({
        title: 'No eres administrador',
        icon: 'error',
      });
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
