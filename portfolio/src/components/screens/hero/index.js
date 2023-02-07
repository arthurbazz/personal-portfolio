// components/screens/hero/index.js
// ********** Hero section **********
import React from "react";
import { greeting } from "../../../portfolio";
// import { Link } from "react-router-dom";
import emoji from "react-easy-emoji";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title slide-in">
          <span className="salute">Hi, my name is </span>
          <br />
          <span className="text-color-main">{greeting.name}.</span>
          <span className="wave-emoji">{emoji("👋🏾")}</span>
          <br />
          I'm a frontend engineer.
        </h1>
        <p className="slide-in">
          A front-end software engineer with expertise in HTML, CSS, JavaScript,
          ReactJS, Django, and Python.
        </p>
        <div>
          {/* <Link to="/projects">
            <button className="btn slide-in">Check out my work</button>
          </Link> */}
          {/* <a href="/projects">
            <button className="btn slide-in">Check out my work</button>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
