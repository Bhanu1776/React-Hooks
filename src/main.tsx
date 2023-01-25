import React from "react";
import ReactDOM from "react-dom/client";
import UseState from "./Hooks/UseState";
import Challenge1 from "./Hooks/Challenge_1";
// import App from './App'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <UseState />
    {/* <Challenge1 /> */}
  </React.StrictMode>
);
