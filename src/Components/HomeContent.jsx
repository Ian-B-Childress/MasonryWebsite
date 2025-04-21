import React from "react";
import Home from "../pages/Home";
import "../App.css";
import project1 from "../images/project1.jpg";
import { Link } from "react-router-dom";

export default function HomeSectionOne() {
  return (
    <>
      <div className="hero">
        <h1>Welcome To Melvin Masonry</h1>
      </div>
      <div className="homeImage">
        <img src={project1} />
      </div>
      <div className="h-header">
        {/*add a new div to seperate the call to actions and the header */}
        <a>
          <Link to="/projects" id="callToAction">
            <p id="ctaWork">See Work</p>
          </Link>
        </a>

        <a>
          <Link to="/contact" id="callToAction">
            <p id="ctaContact">Contact Us</p>
          </Link>
        </a>
      </div>
    </>
  );
}
