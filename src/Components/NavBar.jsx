import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/project1.jpg";

const NavBar = () => {
    /* this is the useState hook its how you check the state of a variable or object.*/
    const [dropDownVisible, setDropDownVisible] = React.useState(false);
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} className="logo"></img>
      </a>
      <ul className="nav-links">
        <li className="dropdown" onMouseEnter={() => setDropDownVisible(true)} onMouseLeave={() => setDropDownVisible(false)}>
            <a href='#' id="linkTo">Menu</a>
            {/* CONDITIONAL RENDER basically an 'if' statement*/}
            {dropDownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/" id="linkTo">Home</Link></li>
              <li><Link to="/projects" id="linkTo">Projects</Link></li>
              <li><Link to="/about" id="linkTo">About</Link></li>
              <li><Link to="/contact" id="linkTo">Contact</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};


export default NavBar;
