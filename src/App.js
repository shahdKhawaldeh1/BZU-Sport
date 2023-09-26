import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { NotFound } from './Components/NotFound/NotFound';
import { Navbar } from './Components/Navbar/Navbar';
import { Todo } from './Components/Todo/Todo';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home/>} />
        <Route path='todo' element={<Todo/>} />


        
        <Route path='*' element={<NotFound/>} />
      </Routes>
     
    </>
  );
}

export default App;