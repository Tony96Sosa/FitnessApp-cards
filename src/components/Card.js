import React from 'react';
import circles from '../images/circles.png';
import empty from '../images/empty.png';
import './styles/Card.css';

const Card = ({ title, description, img, leftColor, rightColor }) => {
    return(
        <div className="card mx-auto Fitness-Card"
        style={
            {
                backgroundImage: `url(${circles}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
            }
        }>
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={img || empty} alt='exercise'/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;