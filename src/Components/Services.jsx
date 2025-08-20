import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import croppedBrickPath from "../images/croppedbrickpath.webp";
import fireplace from "../images/fireplace.png";
import blockFoundation from "../images/blocks.webp";

export default function Services() {
  return (
    <>
      <div className="services-container">
        <div className="brick-card" data-aos="fade-left">
          <img src={croppedBrickPath} alt="" />
          <h2>Brick</h2>
          <Link to="/contact">
          <button className="free-quote-cta">Get Your Free Quote</button>
          </Link>
        </div>
        <div className="block-card" data-aos="fade-left">
          <img src={blockFoundation} alt="" />
          <h2>Block</h2>
          <Link to="/contact">
           <button className="free-quote-cta">Get Your Free Quote</button>
           </Link>
        </div>
        <div className="stone-card" data-aos="fade-left">
          <img src={fireplace} alt="" />
          <h2>Stone</h2>
          <Link to="/contact">
           <button className="free-quote-cta">Get Your Free Quote</button>
           </Link>
        </div>
      </div>
    </>
  );
}
