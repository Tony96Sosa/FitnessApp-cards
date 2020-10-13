import React from 'react';
import './ExerciseForm.css';

const ExerciseForm = ({ onChange, onSubmit, form }) => (
    <div >
        <form className="ExerciseForm-container"
            onSubmit={onSubmit}>
            <div className="form-group ExerciseForm-text">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese el ejercicio.." 
                    name="title"
                    onChange={onChange}
                    value={form.title}
                />
            </div>
            <div className="form-group ExerciseForm-text">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese repeticiones y series..." 
                    name="description"
                    onChange={onChange}
                    value={form.description}
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary ExerciseForm-btn">
                Enviar!!
            </button>
        </form>
    </div>
)

export default ExerciseForm;