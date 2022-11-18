import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';

const rootElement = document.getElementById('root');

let counter = 0;
const addOne = () => {
  counter++;
  renderCounterApp();
};
const minusOne = () => {
  counter--;
  renderCounterApp();
};

const reset = () => {
  counter = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const template = (
    <div>
      <h2>{counter}</h2>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, rootElement);
};

renderCounterApp();
