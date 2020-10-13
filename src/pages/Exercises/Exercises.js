import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import AddButton from '../../components/AddButton/AddButton';
import Loading from '../../components/Loading/Loading';
import FatalError from '../Error/500';
import useFetch from '../../Hook/useFetch';
import url from '../../data/config';
// import './Exercises.css';


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
            <AddButton ruta='/new' texto='agregar un ejercicio!!' />
        </>
)}

export default Exercises;