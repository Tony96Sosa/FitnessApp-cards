import React from 'react';
import circles from '../../images/circles.png';
import empty from '../../images/empty.png';
import './Card.css';

const Card = ({ title, description, img, leftColor, rightColor }) => {
    return(
        <div className="Fitness-Card-container"
        style={
            {
                backgroundImage: `url(${circles}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
            }
        }>
            <div className="Fitness-container-img">
                <img src={img || empty} alt='exercise' className="Fitness-img"/>
            </div>
            <div className="Fitness-container-Info">
                <h1 className="Fitness-Info-title">{title}</h1>
                <p className="Fitness-Info-description">{description}</p>
            </div>
        </div>
    )
}

export default Card;