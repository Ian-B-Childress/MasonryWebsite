import React from "react";
import Home from "../pages/Home";
import "../App.css";
import { Link } from "react-router-dom";

export default function HomeSectionOne() {
  return (
    <>
      <div className="homeContainer">
        <div className="hero">
          <h1></h1>
        </div>

        <div>
          <p></p>
        </div>

        <div className="h-header">
          {/*add a new div to seperate the call to actions and the header */}
          <p className="welcome">Welcome To Melvin Masonry</p>
          <p className="h2p">
            With 58+ years of business we ensure all of your masonry needs are
            met with our highest quality craftsmanship.
          </p>

          <div className="button-container">
            <Link to="/gallery" id="callToAction">
              <p id="ctaWork">See Work</p>
            </Link>

            <Link to="/contact" id="callToAction">
              <p id="ctaContact">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
