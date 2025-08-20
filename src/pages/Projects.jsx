import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBar.jsx";
import React from "react";
import croppedBrickPath from "../images/croppedbrickpath.webp";
import fireplace from "../images/fireplace.png";
import blockimg from "../images/blockimg.webp";

// going to add a link to the brick, block, and stone projects, redirecting to their respective pages
// each image is a button that links to the specific project page
function Projects() {
  const [customerType, setCustomerType] = React.useState("");
  return (
    <>
      <div className="nav">
        <NavBar></NavBar>
      </div>
            <div className="services-container" >
              <div className="brick-card">
                <img src={croppedBrickPath} alt="" />
                <h2>Brick</h2>
                <Link to="/contact?material=brick">
                <button className="free-quote-cta" >Get Your Free Quote</button>
                </Link>
              </div>
              <div className="block-card">
                <img src={blockimg} alt="" />
                <h2>Block</h2>
                <Link to="/contact?material=block">
                 <button className="free-quote-cta">Get Your Free Quote</button>
                </Link>
              </div>
              <div className="stone-card">
                <img src={fireplace} alt="" />
                <h2>Stone</h2>
                <Link to="/contact?material=stone">
                 <button className="free-quote-cta">Get Your Free Quote</button>
                </Link>
              </div>
            </div>
          
    </>
  );
}

export default Projects;
