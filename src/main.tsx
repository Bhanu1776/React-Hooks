import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseState from "./Hooks/UseState";
import Challenge1 from "./Hooks/Challenge_1";
import UseEffect from "./Hooks/UseEffect";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <Challenge1 /> */}
    <UseEffect />
  </React.StrictMode>
);
