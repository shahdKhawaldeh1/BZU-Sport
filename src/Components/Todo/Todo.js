import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store';
import Form from '../Form/Form';
import Show from '../Show/Show';
import { useState } from 'react';
import './Todo.css';

export const Todo = () => {
  const [storedData, setData] = useState(JSON.parse(localStorage.getItem('todo')) || []);

  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  
  const showFunction = () => {
    dispatch(actions.showForm());
  };

  return (
  <>
    <button className="button-add" onClick={showFunction}>Sechudle </button>
      <Show data={storedData} updateData={setData} />
      {show && <Form data={storedData} updateData={setData} />}

  </>
    
  );
};
