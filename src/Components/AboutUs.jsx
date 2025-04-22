import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function AboutUs() {
  return (
    <>
      <div className="aboutUs">
        <h1>About The Company</h1>
        <p>
          Founded in 1967 by Danny Melvin, our company was built from the ground
          up with a commitment to excellence and community. Over the years, we
          have established a strong reputation for delivering exceptional work
          for both commercial and residential projects. Fully insured and
          dedicated to using quality materials, we pride ourselves on providing
          superior craftsmanship at competitive prices. Our legacy is built on
          trust, professionalism, and the lasting relationships we have formed
          with our clients.
        </p>
      </div>
      <div className="aboutUsImg"></div>
      <div className="coreValues"></div>
      <div className="locallyOwned"></div>
      <div className="companyPartners"></div>
    </>
  );
}
