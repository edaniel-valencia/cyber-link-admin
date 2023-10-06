import axios from 'axios';
import { useState } from 'react';
import { _API } from '../../Config/Api';
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
      
    const createUser = () => {
        // No necesitas un bloque try/catch aquí
        return axios.post(_API.registroWeb, formData);
        
    };

    const handleOpenLink = () => {
        const externalLink = 'https://www.google.com/search?q=utchat+app&sca_esv=570563447&rlz=1C1VDKB_esEC1023EC1023&sxsrf=AM9HkKmodhBUGbIPv0Svzp2HhEzxsalZTg%3A1696392001391&ei=QeMcZeSyF4e5qtsPqeSykA8&ved=0ahUKEwik15HVwNuBAxWHnGoFHSmyDPIQ4dUDCBA&uact=5&oq=utchat+app&gs_lp=Egxnd3Mtd2l6LXNlcnAiCnV0Y2hhdCBhcHAyCBAAGMsBGIAESO1CUABYnjxwBHgBkAEAmAGmAaABwQKqAQMwLjK4AQPIAQD4AQHCAgcQABgNGIAE4gMEGAAgQYgGAQ&sclient=gws-wiz-serp#ip=1';
        window.open(externalLink, '_blank');
      };
    
   
    return { formData, updateFormData, createUser, clearForm, handleOpenLink };
};

export default RegisterModel;
