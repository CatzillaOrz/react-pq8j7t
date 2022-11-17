import React from "react";
import "./style.css";

export default function App() {
  const Greeting = {
    hello: 'Hello StackBlitz!',
    desrc: 'Start editing to see some magic happen :)'
  }
  return (
    <div>
      <h1>{Greeting.hello}</h1>
      <p>{Greeting.desrc}</p>
    </div>
  );
}
