// HorizontalScrollbar.js
import React from 'react';
import { Box } from '@mui/material';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Horizontal.css';
import BodyPart from '../BodyPart/BodyPart';

const slideLeft = () => {
  const slider = document.getElementById('slider');
  slider.scrollTo({
    left: slider.scrollLeft - 500,
    behavior: 'smooth'
  });
};

const slideRight = () => {
  const slider = document.getElementById('slider');
  slider.scrollTo({
    left: slider.scrollLeft + 500,
    behavior: 'smooth'
  });
};

export const HorizontalScrollbar = ({ data, bodyParts, bodyPart, setBodyPart }) => {
  return (
    <>
    <div className='relative d-flex items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={150} />
      <div
        id='slider'
        className='w-full d-flex h-full scrollbar-hide horizontal-scrollbar-container'
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          overflowX: 'scroll',
          overflowY: 'hidden',
        }}
      >
        {data.map((item) => (
          <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={150} />
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={150} />
   </>
    
  );
};
