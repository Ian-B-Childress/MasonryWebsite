import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import croppedBrickPath from "../images/croppedbrickpath.webp";
import fireplace from "../images/fireplace.png";
import cody from "../images/codymailbox.webp";
import fox from "../images/foxcroftstone.webp";
import kini from "../images/kinikinick.webp";
import little from "../images/littlecreekfireplace.webp";
import ramp from "../images/ramp.webp";
import steph from "../images/stephaniestonewall.webp";
import NavBar from "../Components/NavBar";

export default function Gallery() {
  const items = [
    { image: croppedBrickPath, alt: "brick path", text: "Brick pathway leading to backyard.", aos: "fade-left" },
    { image: fireplace, alt: "ryan hall fireplace", text: "Cozy fireplace installation.", aos: "fade-right" },
    { image: cody, alt: "mailbox", text: "Custom mailbox build.", aos: "fade-left" },
    { image: fox, alt: "stone on sand", text: "Stone placement around sand foundation.", aos: "fade-right" },
    { image: kini, alt: "stone around building bottom", text: "Stonework around building base.", aos: "fade-left" },
    { image: little, alt: "brick fireplace", text: "Brick fireplace detail.", aos: "fade-right" },
    { image: ramp, alt: "brick ramp", text: "Brick ramp construction.", aos: "fade-left" },
    { image: steph, alt: "stone under window", text: "Stonework beneath window.", aos: "fade-right" },
  ];

  return (
    <>
      <NavBar />

      <div className="gallery-wrapper">

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
            <img src={croppedBrickPath} alt="brick path" />
            <p className="description">Brick pathway leading to backyard.</p>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            <p className="description">Cozy fireplace installation.</p>
            <img src={fireplace} alt="ryan hall fireplace" />
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
            <img src={cody} alt="mailbox" />
            <p className="description">Custom mailbox build.</p>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            <p className="description">Stone placement around sand foundation.</p>
            <img src={fox} alt="stone on sand" />
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
            <img src={kini} alt="stone around building bottom" />
            <p className="description">Stonework around building base.</p>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            <p className="description">Brick fireplace detail.</p>
            <img src={little} alt="brick fireplace" />
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
            <img src={ramp} alt="brick ramp" />
            <p className="description">Brick ramp construction.</p>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-step" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            <p className="description">Stonework beneath window.</p>
            <img src={steph} alt="stone under window" />
          </div>
        </div>

      </div>
    </>
  );
}