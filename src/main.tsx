import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseState from "./Hooks/UseState";
import Challenge1 from "./Hooks/Challenge_1";
import UseEffect from "./Hooks/UseEffect";
import { GrandParent } from "./Hooks/useContext/GrandParent";
import GrandChild from "./Hooks/useContext/GrandChild";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GrandParent>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <Challenge1 /> */}
    {/* <UseEffect /> */}
    <GrandChild />
  </GrandParent>
);
