import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import './App.css';

function App() {
  const counterReducer = useSelector(state => state.counterReducer)
  const loginReducer = useSelector(state => state.loginReducer)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter: {counterReducer}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      {loginReducer ? <h3>Valuable Info I shouldnt see</h3> : ''}
    </div>
  );
}

export default App;
