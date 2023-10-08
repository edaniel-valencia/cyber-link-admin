import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClearLocalStorage = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <div className='dashboard flex'>
      <div className='dashboardContainer flex'>
        <button onClick={handleClearLocalStorage}><h1>Cerrar Sesión</h1></button>
      </div>
    </div>
  )
}

export default Dashboard
