 // eslint-disable-next-line
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const inc = () =>{
    dispatch({type : "INC"})
  }
  const dec = () =>{
    dispatch({type : "DEC"})
  }
  const add = () => {
    dispatch({type : "ADD", payload : 10})
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
