import React from "react";
import "./App.css";
// import global sccs file
import "./styles/global.scss";

function MyButton() {
  return <button>I'm a button</button>;
}

export default function App() {
  return (
    <>
      <h1>Welcome to my App</h1>
      <MyButton />
    </>
  );
}

// export default App;
