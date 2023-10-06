import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='dashboard flex'>

            <div className=''>
                <h1>HOME</h1>
                <Link to={'/login'}>
                    <button className='btn'>INICIAR SESIÓN</button>
                </Link>
                <br/>
                <Link to={'/register'}>
                    <button className='btn'>REGISTRARME</button>
                </Link>
            </div>

        </div>
    )
}

export default Home
