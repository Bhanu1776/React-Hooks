import { useReducer } from "react";
import { reducer } from "./reducer"; //* Prefer creating different file for reducer actions

const InitialCounter: number = 0;

const ReducerHook = () => {
  //   const [counter, setCounter] = useState(InitialCounter);     //* By using useState Hook

  const [counter, dispatch] = useReducer(reducer, InitialCounter);

  return (
    <>
      <h1>Increment counter on click</h1>
      <h2>Count - {counter}</h2>
      <button onClick={() => dispatch({ type: "INC" })}>Add 1</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Remove 1</button>
    </>
  );
};

export default ReducerHook;
