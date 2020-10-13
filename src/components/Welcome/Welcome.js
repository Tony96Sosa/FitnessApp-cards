import React from 'react';
import './Welcome.css';

const Welcome = ({ username }) => (
    <div className="welcome-container">
        <div className="welcome-user-info">
            <h1>Hola {username}!</h1>
            <p>Algunos ejercicios, para entrenar y estar siempre saludable!</p>
        </div>
    </div>
)

export default Welcome;