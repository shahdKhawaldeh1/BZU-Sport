import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack} from '@mui/material';

import { options, FetchData } from '../../utils/FetchData'
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
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', options);
      } else {
        exercisesData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
   
   return (
    <div>
       <Box id="exercises" className="exercises-box">
        <h2 className='heading-exercises'>The secret of getting ahead is getting started </h2>
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
