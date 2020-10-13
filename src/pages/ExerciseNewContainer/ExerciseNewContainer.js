import React, { useState } from 'react';
import Loading from '../../components/Loading/Loading';
import FatalError from '../Error/500';
import ExerciseNew from '../../components/ExerciseNew/ExerciseNew';
import url from '../../data/config';
import data from '../../data/data';
import './ExerciseNewContainer.css';

const ExerciseNewContainer = ({ history }) => {
    let obj;
    const choise = ({ name, url }) => {
        obj = {
            title: name,
            description:'',
            img:url,
            leftColor:'',
            rightColor:'',
        }
        setForm(obj);
    }
    
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            await fetch(url, config);
            setLoading(false);
            history.push('/');
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    
    const onChange = (e) => {
        setForm({ ...form,
            [e.target.name]: e.target.value
        })
    };

    if(loading)
        return <Loading />

    if(error)
        return <FatalError />

    return(
        <div className='ExerciseNewConainer-container'>
            <button onClick={() => choise(data[0])} 
            className='ExerciseNewConainer-btn'>
                <h1>
                    Flexiones
                </h1>
            </button>
            <button onClick={() => choise(data[1])}
            className='ExerciseNewConainer-btn'>
                <h1>
                    Sentadillas
                </h1>
                </button>
            <button onClick={() => choise(data[2])}
            className='ExerciseNewConainer-btn'>
                <h1>
                    Abdominales
                </h1>
                </button>
            <ExerciseNew 
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default ExerciseNewContainer;