import React, { useState } from 'react';
import Exercises from '../Exercises/Exercises';
import './Home.css';

const Home = () => {
    const img = 'https://i.ytimg.com/vi/_sbdZLbyAGs/hqdefault.jpg';
    const [user, setUser] = useState('');
    const [userCheck, setUserCheck] = useState(false);
    const handleSubmit = () => {
        if(user.length > 0){
            setUserCheck(true);
            localStorage.setItem('user', user);
        }
    }
    const handleChange = (e) => {
        setUser(e.target.value)
    };

    if(userCheck){
        return(
            <Exercises />
        )
    }else{
        return(
            <div className='Home-container'>
                <div className='Home-login-container'>
                    <div className='Title-container'>
                        <h1 className='Title-text'>
                            FitnessApp
                        </h1>
                    </div>
                    <div className="Home-Card-container">
                        <div className="Home-container-img">
                            <img src={img} alt='homero-gym' className="Home-img"/>
                        </div>
                    </div>
                    <div className='Label-container'>
                        <h2 className='Label-text'>
                            Usuario
                        </h2>
                    </div>
                    <div className='Input-container'>
                        <input 
                            id= '1'
                            type= 'text'
                            name= 'usuario'
                            placeholder= 'Ingrese su nombre...'
                            onChange= {handleChange}
                            className='regular-style'/>
                    </div>
                    <div className='Home-login-boton'>
                        <button onClick={handleSubmit}>
                            Ingresar
                        </button>
                    </div>
                </div>
            </div> 
        )
    }  
}

export default Home;