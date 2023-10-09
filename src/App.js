import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { NotFound } from './Components/NotFound/NotFound';
import { Navbar } from './Components/Navbar/Navbar';
import { Todo } from './Components/Todo/Todo';
import Sport from './Components/Sport/Sport';
import ExerciseDetail from './Components/ExercisesDetail';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home/>} />
        <Route path='todo' element={<Todo/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='sport' element={<Sport/>} />
        <Route path="/sport/:id" element={<ExerciseDetail/>} />
      </Routes>
     
    </>
  );
}

export default App;