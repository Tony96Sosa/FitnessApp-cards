import React, { useState } from 'react';
import Loading from '../components/Loading';
import FatalError from './500';
import ExerciseNew from './ExerciseNew';
import url from '../data/config';

const ExerciseNewContainer = ({ history }) => {
    const [form, setForm] = useState({
        title:'',
        description:'',
        img:'',
        leftColor:'',
        rightColor:'',
    });
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
            let res = await fetch(url, config);
            let json = await res.json();
            console.log(json);
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

    return <ExerciseNew 
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
    />
}

export default ExerciseNewContainer;