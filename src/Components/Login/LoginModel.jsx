import axios from 'axios';
import { useState } from 'react';

import { _API } from '../../Config/Api';

const LoginModel = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
  
    const updateFormData = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };

    const login = () => {
        console.log(formData);
        return axios.post(_API.loginWeb, formData)  
      
    };

    const clearForm = () => {
        setFormData({          
          email: '',
          password: '',
        });

      };
      
    return { formData, updateFormData, login, clearForm };
};

export default LoginModel;
