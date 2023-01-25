import { useContext } from "react";
import { AppContext } from "./GrandParent";

const GrandChild = () => {
  const UserData = useContext(AppContext);
  return (
    <h1>
      My name is {UserData.Name} and my Age is {UserData.Age}
    </h1>
  );
};

export default GrandChild;
