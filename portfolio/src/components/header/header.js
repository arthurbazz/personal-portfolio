// components/header/index.js

import React from "react";
import Headroom from "react-headroom";
// import { StyleContext } from "../../contexts/StyleContext";
import { greeting, projectsHeader } from "../../portfolio";

const Header = () => {
  const viewProjects = projectsHeader.display;

  return (
    <Headroom>
      <header className="navbar">
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        {/* <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label> */}
        <ul className="menu">
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {/* {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};

export default Header;
