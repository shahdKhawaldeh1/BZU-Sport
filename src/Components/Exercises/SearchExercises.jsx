import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack} from '@mui/material';

import { options, fetchData } from '../../utils/FetchData'
import ExerciseCard from '../ExerciseCard/ExerciseCard';
export default function SearchExercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
   
   
   return (
    <div>
       <Box id="exercises" className="exercises-box">
        <h2 className='heading-exercises'>Exercises </h2>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">

      {currentExercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise}/>
      ))}

      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      </Box>
    </div>
  )
}
