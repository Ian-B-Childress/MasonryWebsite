import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBar.jsx";
import React from "react";

function Projects() {
    const [customerType, setCustomerType] = React.useState("");
  return (
    <>
      <div className="nav">
        <NavBar></NavBar>
      </div>
      
      <div className="services">
        <button className="residential" onClick={() => setCustomerType("residential")}>
        Residential
      </button>
      <button className="commercial" onClick={() => setCustomerType("commercial")}>
        Commercial
      </button>
      <div>
        {customerType === "residential" && (
          <div className="residential-content">
            <h2>Residential Services</h2>
            <p>We offer a range of residential services to meet your needs.</p>
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
