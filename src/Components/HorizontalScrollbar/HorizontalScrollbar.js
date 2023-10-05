import React, { useContext } from 'react';
import { Box,Typography} from '@mui/material';
import BodyPart from '../BodyPart/BodyPart';
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from './../../assets/images/right-arrow.png';
import LeftArrowIcon from './../../assets/images/left-arrow.png';

const LeftArrow = () => {

  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

export const HorizontalScrollbar = ({data ,bodyPart ,setBodyPart}) => {
  
  return (
    
    
  <ScrollMenu>

      {data.map((item)=>(
      <Box
      key = {item.id|| item}
      itemId = {item.id|| item}
      title= {item.id|| item}
    
      m="0 40px"

      >
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>



      </Box>)
      
      )} 
       </ScrollMenu>

    
  )
}
