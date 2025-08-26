import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/melvinmasonrylogo.webp";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} className="logo"></img>
      </a>

      <ul className="dropdown-menu">
        <li>
          <Link to="/" className="linkTo">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="linkTo">
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="linkTo">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className="linkTo">
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default NavBar;
