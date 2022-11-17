import React from 'react';
import './style.css';

export default function App() {
  
  return (
    <div>
      <h1>{App.hello}</h1>
      {App.enable && <p>{App.desrc}</p>}
      <h2>{App.counter}</h2>
      <button onClick={App.addOne}>+</button>
      <button onClick={App.minusOne}>-</button>
    </div>
  );
}
