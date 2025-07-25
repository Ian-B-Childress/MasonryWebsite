//this file is for the Brick project page, which will display specific services related to brick projects
//then prompting the user to select between residential and commercial services


import NavBar  from "../../Components/NavBar";
import { Link } from "react-router-dom";
import React from "react";
import "../App.css";    

function BrickProjects() {
  const [customerType, setCustomerType] = React.useState("");
  return (
    <>
      <div className="nav">
        <NavBar></NavBar>
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
                We offer a range of residential brick services to meet your needs.
              </p>
            </div>
          )}
          {customerType === "commercial" && (
            <div className="commercial-content">
              <h2>Commercial Services</h2>
              <p>We provide comprehensive solutions for commercial brick projects.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BrickProjects;
