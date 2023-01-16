// components/screens/projects/index.js
// ********** Projects section **********
import React from "react";
// import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-text">
        <h1 className="projects-title">
          Projects.
        </h1>
        <p className="">
          I've worked on a few projects. Here are a few of them.
        </p>
        <div>
          {/* <Link to="/projects">
            <button className="btn slide-in">Check out my work</button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
