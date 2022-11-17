import React from "react";
import "./style.css";

export default function App() {
  const Greeting = {
    hello: 'Hello StackBlitz!',
    desrc: 'Start editing to see some magic happen :)',
    enable: true
  }
  return (
    <div>
      <h1>{Greeting.hello}</h1>
      {Greeting.enable && <p>{Greeting.desrc}</p>}
    </div>
  );
}
