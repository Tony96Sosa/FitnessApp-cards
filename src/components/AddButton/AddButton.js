import React from 'react';
import './AddButton.css';
import buttomImg from '../../images/add.png';
import { Link } from 'react-router-dom';

const AddButton = ({ruta, texto }) => {
    return(
        <Link to={ruta} className="Fitness-Add-container" style={{ textDecoration: 'none' }}>
            <div className="Fitness-Add-info-container">
    <p className="Fitness-Add-info">{`Click aquí para ${texto}`}</p>
            </div>
            <div className="Fitness-Add-img-container">
                <img src={buttomImg} className="Fitness-Add-img" alt="exercise"/>
            </div>
        </Link>
    )
}

export default AddButton;