import React from 'react';
import { Box } from '@mui/material';
import BodyPart from '../BodyPart/BodyPart';
import './styles.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollTo({
    left: slider.scrollLeft - 500,
    behavior: 'smooth'
  });
};

const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollTo({
    left: slider.scrollLeft + 500,
    behavior: 'smooth'
  });
};

export const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (

    <>
  <div className="container-loader">
  <div className="loader">
    <span className="loader-text">Exercises..</span>
  </div>
  </div>
  <div className='relative d-flex items-center'>
    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={150} />
    <div id='slider' className='w-full d-flex h-full overflow-x-scroll scroll scrollbar-hide'>
      {data.map((item) => (
        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px" style={{ backgroundColor: '#bec8be' }}>
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
      ))}
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={150} />
  </div>


    </>
    
  );
};