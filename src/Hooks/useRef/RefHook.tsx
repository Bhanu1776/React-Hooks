//* It creates a mutable variable which will not re-render the components
//* Used to access the DOM element directly

import { useRef } from "react";
import styled from "styled-components";

const RefHook = () => {
  const inputRef: any = useRef<HTMLInputElement>(); //! Important to overcome typescript errors

  const changeBorder = () => {
    inputRef.current?.focus(); //! Making it optional to overcome typescript errors
    inputRef.current.style.backgroundColor = "#82E0AA";
  };

  return (
    <Wrapper>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={changeBorder}>submit</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    min-width: 20rem;
    padding: 1rem 0.5rem;
    color: #000;
    font-size: 2rem;
  }

  button {
    text-transform: uppercase;
  }
`;

export default RefHook;
