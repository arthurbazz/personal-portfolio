import React from "react";
// import pages
import { Header, Hero, Projects } from "./components"; // index.js of components folder
// import global styles
import "./styles/global.scss";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      {/* <About /> */}
    </>
  );
}
