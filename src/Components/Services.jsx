import React from "react";
import "../App.css";
import croppedBrickPath from "../images/croppedBrickPath.webp";
import fireplace from "../images/fireplace.png";

export default function Services() {
  return (
    <>
      <div className="services-container">
        <div className="brick-card">
          <img src={croppedBrickPath} alt="" />
          <h2>Brick</h2>
          <button className="free-quote-cta">Get Your Free Quote</button>
        </div>
        <div className="block-card">
          <img src="" alt="" />
          <h2>Block</h2>
           <button className="free-quote-cta">Get Your Free Quote</button>
        </div>
        <div className="stone-card">
          <img src={fireplace} alt="" />
          <h2>Stone</h2>
           <button className="free-quote-cta">Get Your Free Quote</button>
        </div>
      </div>
    </>
  );
}
