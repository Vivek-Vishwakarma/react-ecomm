 // eslint-disable-next-line
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const inc = () =>{
    dispatch(actions.inc())
  }
  const dec = () =>{
    dispatch(actions.dec())
  }
  const add = () => {
    dispatch(actions.add(10))
  }
  
  return (
    <>
      {counter}
      <br />
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={add}>Add by 10</button>
    </>
  );
}

export default App;
