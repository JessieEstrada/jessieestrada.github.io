import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-menu-bar">
          <ul className="menu-bar">
            <li id="nav-bar-logo" className="nav-item">
              <a href="#home" onClick={scrollToTop}>
                <img
                  src="./images/JE-Logo.png"
                  alt="Logo"
                  className="nav-logo"
                />
              </a>
            </li>
            <li className="nav-item nav-link">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-item nav-link">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-item nav-link">
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
