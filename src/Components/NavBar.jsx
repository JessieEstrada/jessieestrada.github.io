import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-menu-bar">
          <ul className="menu-bar">
            <li className="nav-item">
              <Link to="/MainPage">Welcome</Link>
            </li>
            <li className="nav-item">
              <Link to="/MainPage">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/MainPage">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/MainPage">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
