// HorizontalScrollbar.js
import React from 'react';
import { Box } from '@mui/material';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Horizontal.css';
import BodyPart from '../BodyPart/BodyPart';

export const HorizontalScrollbar = ({ data, bodyParts, bodyPart, setBodyPart }) => {
  const sliderRef = React.useRef(null);

  const slideLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='relative d-flex items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={150} />
      <div className='slider scrollbar-hide' style={{ width: '970px' }} ref={sliderRef}>
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
  );
};
