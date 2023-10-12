import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card"
    to={`/exercise/${exercise.id}`}
    style={{
      textDecoration: 'none',
      display: 'inline-block',
      width: '400px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      margin: '10px',
      whiteSpace: 'nowrap',
    }}
  >
    <img src={exercise.gifUrl} alt={exercise.name} style={{ width: '100%', height: 'auto' }} loading="lazy" />
    <Stack direction="row" style={{ marginTop: '10px',  justifyContent: 'center'  }}>
      <Button
        sx={{ color: '#fff', background: '#FFA9A9', fontSize: '12px', borderRadius: '10px', textTransform: 'capitalize', marginRight: '10px' }}
      >
        {exercise.bodyPart}
      </Button>
      <Button sx={{ color: '#fff', background: '#FCC757', fontSize: '20px', borderRadius: '10px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography color="#000" fontWeight="bold"   sx={{ fontSize: { lg: '16px', xs: '14px' } , textAlign: 'center'}} mt="10px" pb="5px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
