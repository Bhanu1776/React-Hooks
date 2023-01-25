import { useState } from "react";

const UseState = () => {
  const [Name, setName] = useState("Bhanu");

  return (
    <>
      <h1>useState Hook</h1>
      <h3>My Name is {Name}</h3>
      <button
        onClick={() => {
          Name === "Bhanu" ? setName("Bunny") : setName("Bhanu");
        }}
      >
        Click Me to change the Name!
      </button>
    </>
  );
};

export default UseState;
