import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField ,Button} from '@mui/material';
import { FetchData,options } from '../../utils/FetchData';
import { HorizontalScrollbar } from '../HorizontalScrollbar/HorizontalScrollbar';
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'

export default function Exercises({setExercises,bodyPart,setBodyPart}) {
    const [search , setSearch ] =useState('');
   const [bodyParts, setBodyParts]=useState([])
    const handleSearch = async()=>{
        if (search){
            const exerciseData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,options);
            console.log(exerciseData);
            const searchedExercises=exerciseData.filter(
                (exercise)=> exercise.name.toLowerCase().includes(search)||
                exercise.target.toLowerCase().includes(search)||
                exercise.equipment.toLowerCase().includes(search)||
                exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }
     useEffect(()=>{
const FetchExerciseData= async()=>{
    const bodyPartData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,options);

     setBodyParts(['all', ...bodyPartData]);
}
FetchExerciseData();
    },[]);
  return (
    <>
    <h2>Choose your Exercise For Today  </h2>
    <Box position="relative" mb="72px">
        <TextField
            height ="72px"
            value={search}
            onChange={(e)=> setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercise'
            type='text'
 

/>
<Button className="search-btn" onClick={handleSearch}>
Search
</Button>
    </Box>
    <Box>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
    </Box>

    </>
  )
}