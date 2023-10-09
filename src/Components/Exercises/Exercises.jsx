import React, { useEffect, useState } from 'react';
import { Box, TextField ,Button} from '@mui/material';
import { FetchData,options } from '../../utils/FetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

import './styles.css'
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
    <div  className='container-search'> 
    <div className="search-container">
    <TextField
      className="textField-search"
      height="72px"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Search Exercise"
      type="text"
    />
    <Button className="search-button " onClick={handleSearch}>
      Search
    </Button>
    
  </div>
    </div>

    <Box>
    <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </Box>

    </>
  )
}