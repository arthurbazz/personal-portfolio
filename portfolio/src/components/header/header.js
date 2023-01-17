// components/header/index.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to="/">arthurbazz</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
