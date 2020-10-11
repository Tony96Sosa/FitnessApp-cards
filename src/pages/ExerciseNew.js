import React, { useState } from 'react';
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import '../components/styles/ExerciseNew.css';

const ExerciseNew = () => {
    const [form, setForm] = useState({
        title:'',
        description:'',
        img:'',
        leftColor:'',
        rightColor:'',
    });
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const onChange = (e) => {
        setForm({ ...form,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="ExerciseNew_Lateral_Spaces row">
            <div className="col-sm ExerciseNew_Card_Space">
                <Card { ...form }
                />
            </div>
            <div className="col-sm ExerciseNew_Form_Space">
                <ExerciseForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    form={form}
                />            
            </div>
        </div>
    )
}

export default ExerciseNew;