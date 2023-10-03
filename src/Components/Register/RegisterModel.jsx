import axios from 'axios';
import { useState } from 'react';
import { API_ROUTES } from '../../Config/Api';
// import { useHistory  } from 'react-router-dom';


const RegisterModel = () => {
    // const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
    });

    const updateFormData = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };

    const createUser = () => {
        // No necesitas un bloque try/catch aquí
        return axios.post(API_ROUTES.registroWeb, formData);
        
    };

    const clearForm = () => {
        setFormData({
          name: '',
          lastname: '',
          phone: '',
          email: '',
          password: '',
        });
        // history.goBack() // Reemplaza '/login' con la ruta real de tu página de inicio de sesión

      };
      
    return { formData, updateFormData, createUser, clearForm };
};

export default RegisterModel;
