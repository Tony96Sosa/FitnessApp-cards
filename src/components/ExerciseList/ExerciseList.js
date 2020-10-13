import React from 'react';
import Card from '../Card/Card';
import './ExerciseList.css';

const ExerciseList = ({ exercises }) => (
    <div className='ExerciseList-container'>
        {
            exercises.map((exercise) => {
                return(
                    <Card 
                        key={exercise.id}
                        { ...exercise }
                    />
                )
            })
        }
    </div>    
)

export default ExerciseList;