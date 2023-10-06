import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import RegisterModel from './RegisterModel';
import RegisterPage from './RegisterPage';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

const Register = () => {
  const { formData, updateFormData, createUser,clearForm  } = RegisterModel();
  const navigationTo = useNavigate();
  const handleCreateUser = async () => {
    try {
      const response = await createUser();
      if (response && response.data && response.data.success) {
        MySwal.fire({
          title: 'Usuario creado',
          text: 'El usuario se ha creado exitosamente. ' + response.data.message,
          icon: 'success',
        }).then(() => {
  
          window.location.href = 'https://t-i-movil.es.aptoide.com/app';
        });
      
        clearForm();
   
      } else {
        MySwal.fire({
          title: 'Error al crear usuario',
          text: response.data.message || 'Correo o teléfono ya existen. Por favor, inténtalo de nuevo.',
          icon: 'error',
        });
        navigationTo('/register');
      }
    } catch (error) {
      console.error('Error al crear el usuario', error);
      MySwal.fire({
        title: 'Error al crear usuario',
        text: 'Correo o teléfono ya existen. Por favor, inténtalo de nuevo.',
        icon: 'error',
      });
      navigationTo('/register');
    }
  };


  return (
    <RegisterPage
      formData={formData}
      updateFormData={updateFormData}
      handleCreateUser={handleCreateUser}
      clearForm={clearForm}
    />
  );
};

export default Register;
