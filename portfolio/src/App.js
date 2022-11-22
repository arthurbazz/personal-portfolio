import React from "react";
import Homepage from "./pages/homepage";
// import global sccs file
import "./styles/global.scss";

function MyButton() {
  return <button>I'm a button</button>;
}

export default function App() {
  return (
    <>
      <h1>Welcome to my App</h1>
      <Homepage />
    </>
  );
}
