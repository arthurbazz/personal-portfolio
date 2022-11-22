// pages/homepage/index.js
import React from "react";
import Hero from "../screens/hero";
import About from "../screens/about";
import Projects from "../screens/projects";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}; // end of Homepage  function

export default Homepage;
