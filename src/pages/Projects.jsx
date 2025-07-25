import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBar.jsx";
import React from "react";
import brickpath from "../images/brickpath.jpg";
import fireplace from "../images/fireplace.png";

// going to add a link to the brick, block, and stone projects, redirecting to their respective pages
// each image is a button that links to the specific project page
function Projects() {
  const [customerType, setCustomerType] = React.useState("");
  return (
    <>
      <div className="nav">
        <NavBar></NavBar>
      </div>
      <div className="serviceContainer">
        <div>
          <button>
            <Link to="/projects/brick">
              <img className="service"src={brickpath} alt="Brick" />
            </Link>
          </button>
          <p className="legend">Brick</p>
        </div>
        <div>
          <button>
            <Link to="/projects/block">
              <img className="service" src={fireplace} alt="Block" />
            </Link>
          </button>
          <p className="legend">Block</p>
        </div>
        <div>
          <button>
            <Link to="/projects/stone">
          <img className="service" src={brickpath} alt="Stone" />
            </Link>
          </button>
          <p className="legend">Stone</p>
        </div>
      </div>

      <div className="services">
        <button
          className="residential"
          onClick={() => setCustomerType("residential")}
        >
          Residential
        </button>
        <button
          className="commercial"
          onClick={() => setCustomerType("commercial")}
        >
          Commercial
        </button>
        <div>
          {customerType === "residential" && (
            <div className="residential-content">
              <h2>Residential Services</h2>
              <p>
                We offer a range of residential services to meet your needs.
              </p>
            </div>
          )}
          {customerType === "commercial" && (
            <div className="commercial-content">
              <h2>Commercial Services</h2>
              <p>We provide comprehensive solutions for commercial projects.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
