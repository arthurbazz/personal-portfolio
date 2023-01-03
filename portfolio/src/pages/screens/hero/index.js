// pages/screens/hero/index.js
// ********** Hero section **********
import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        {/* <h1>Hi, I'm Chibuzor Arthur Uzoaru</h1>
        <p>
          I'm a frontend engineer. I build websites and web applications using
          HTML, CSS, and Javascript.
        </p> */}

        <h1 class="hero-title">
          Hi, my name is{" "}
          <span class="text-color-main">Chibuzor Arthur Uzoaru.</span>
          <br />
          I'm a frontend engineer.
        </h1>
        <p>
          A front-end software engineer with expertise in HTML, CSS, JavaScript,
          ReactJS, Django, and Python.
        </p>

        <button className="btn">
          <a href="#projects" className="">
            Check out my work
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
