import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import RegisterModel from './RegisterModel';
import RegisterView from './RegisterView';

const MySwal = withReactContent(Swal);

const RegisterViewModel = () => {
  const { formData, updateFormData, createUser,  } = RegisterModel();

  const handleCreateUser = async () => {
    try {
      const response = await createUser();
      if (response && response.data && response.data.success) {
       
        // El usuario se creó con éxito según la respuesta de la API
        MySwal.fire({
          title: 'Usuario creado',
          text: 'El usuario se ha creado exitosamente. ' + response.data.message,
          icon: 'success',
        });

      } else {
        // La API devolvió un mensaje de error
        MySwal.fire({
          title: 'Error al crear usuario',
          text: response.data.message || 'Correo o teléfono ya existen. Por favor, inténtalo de nuevo.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error al crear el usuario', error);
      // Manejo de errores de red u otros errores.
      MySwal.fire({
        title: 'Error al crear usuario',
        text: 'Correo o teléfono ya existen. Por favor, inténtalo de nuevo.',
        icon: 'error',
      });
    }
  };


  return (
    <RegisterView
      formData={formData}
      updateFormData={updateFormData}
      handleCreateUser={handleCreateUser}
    />
  );
};

export default RegisterViewModel;
