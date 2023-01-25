import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseState from "./Hooks/useState/UseState";
import Challenge1 from "./Hooks/useState/Challenge_1";
import UseEffect from "./Hooks/useEffect/UseEffect";
import { GrandParent } from "./Hooks/useContext/GrandParent";
import GrandChild from "./Hooks/useContext/GrandChild";
import ReducerHook from "./Hooks/useReducer/ReducerHook";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GrandParent>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <Challenge1 /> */}
    {/* <UseEffect /> */}
    {/* <GrandChild /> */}
    <ReducerHook />
  </GrandParent>
);
