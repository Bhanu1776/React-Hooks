import { useState, useEffect } from "react";

// * To understand useEffect take a look on Tab Title

const InitialCounter: number = 0;

const ChangeEffect = () => {
  const [counter, setCounter]: any = useState(InitialCounter);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };
  const DecrementCounter = () => {
    setCounter(counter < 1 || counter - 1);
  };

  useEffect(() => {
    window.document.title = counter;
  });

  return (
    <>
      <h1>Increment counter on click</h1>
      <h2>Count - {counter}</h2>
      <button onClick={IncrementCounter}>Add 1</button>
      <button onClick={DecrementCounter}>Remove 1</button>
    </>
  );
};

export default ChangeEffect;
