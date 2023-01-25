import React, { useState } from "react";

const InitialCounter: number = 0;

const Counter = () => {
  const [counter, setCounter] = useState(InitialCounter);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Increment counter on click</h1>
      <h2>Count - {counter}</h2>
      <button onClick={IncrementCounter}>Add 1</button>
    </>
  );
};

export default Counter;
