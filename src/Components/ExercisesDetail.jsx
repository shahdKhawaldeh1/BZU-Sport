import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { options, FetchData, youtubeOptions } from '../utils/FetchData';
import Detail from '../Components/Detail';
import ExerciseVideos from './ExerciseVideos';
import SimilarExercises from './SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      try {
        const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, options);
        console.log('Exercise Detail Data:', exerciseDetailData);
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await FetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
        console.log('Exercise Videos Data:', exerciseVideosData);
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options);
        console.log('Target Muscle Exercises Data:', targetMuscleExercisesData);
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options);
        console.log('Equipment Exercises Data:', equipmentExercisesData);
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
        // Handle error appropriately (e.g., display an error message)
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} /> */}
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
