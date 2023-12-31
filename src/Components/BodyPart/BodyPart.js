import React from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from './../../assets/images/gym.png';


function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <div className='d-flex'>
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card d-flex"
    sx={bodyPart === item ? { borderTop: '4px solid green', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
    </div>
  )
}

export default BodyPart