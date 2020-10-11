import React, { useState, useEffect } from 'react';
import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddButton from '../components/AddButton';
// import data from '../data/data';

const Exercises = () => {
    const url = 'https://fitnessappi.herokuapp.com/api/exercises';
    const [data, setData] = useState([]);
    useEffect( () => {
        const fetchExercise = async () => {
            let res = await fetch(url)
            let data = await res.json();
            console.log(data);
            setData(data);
        }
        fetchExercise();
    }, [url]);
    
    return(
    <div>
        <Welcome 
            username='Kurt Anthony Sosa'/>
        <ExerciseList 
            exercises={data} />
        <AddButton />
    </div>
)}

export default Exercises;