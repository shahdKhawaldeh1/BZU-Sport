import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField ,Button} from '@mui/material';

import { FetchData,options } from '../../utils/FetchData';
export default function Exercises() {
    const [search , setSearch ] =useState('');
    const handleSearch = async()=>{
        if (search){
            const exerciseData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,options);
            console.log(exerciseData);
        }
    }
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

    </>
  )
}