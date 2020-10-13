import React from 'react';
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import './ExerciseNew.css';

const ExerciseNew = ({ form, onChange, onSubmit }) => {
    return(
        <div className="ExerciseNew-conatiner">
            <Card { ...form }
            />
            <ExerciseForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            /> 
            <AddButton ruta='/' texto='volver al inicio!!' />
        </div>
    )
}

export default ExerciseNew;