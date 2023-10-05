import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises'
import SearchExercises from '../Exercises/SearchExercises'

export default function Sport() {
  const [bodyPart, setBodyPart]=useState('all')
  const [exercises, setExercises]=useState([])
console.log(bodyPart);

  return (
   <>
<Exercises setExercises={setExercises} bodyPart={bodyPart}
setBodyPart={setBodyPart}
/>
<SearchExercises exercises={exercises}
 setExercises={setExercises} bodyPart={bodyPart}

/>
   </>
  )
}
