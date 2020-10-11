import React from 'react';
import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddButton from '../components/AddButton';
import Loading from '../components/Loading';
import FatalError from './500';
import useFetch from '../Hook/useFetch';
import url from '../data/config';


const Exercises = () => {
    const { data, loading, error } = useFetch(url);
    if(loading){
        return(
            <Loading />
        )
    }
    if(error){
        return(
            <FatalError />
        )
    }
    return(
        <>
            <Welcome 
                username='Kurt Anthony Sosa'/>
            <ExerciseList 
                exercises={data} />
            <AddButton />
        </>
)}

export default Exercises;