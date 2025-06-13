import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import aboutCompanyImg from "../images/construction-worker-laying-red-brick-600nw-2488586989.webp"

export default function AboutUs() {
  return (
    <>
      <div className="aboutUsContainer">
        <div className="aboutTheCompany">
          <h1>About The Company</h1>
          <p>
            Founded in 1967 by Danny Melvin, our company was built from the
            ground up with a commitment to excellence and community. Over the
            years, we have established a strong reputation for delivering
            exceptional work for both commercial and residential projects. Fully
            insured and dedicated to using quality materials, we pride ourselves
            on providing superior craftsmanship at competitive prices. Our
            legacy is built on trust, professionalism, and the lasting
            relationships we have formed with our clients.
          </p>
        </div>
        <div className="aboutUsImg">
          <img src={aboutCompanyImg} alt="About Us" />
        </div>
      </div>
      {/* <div className="coreValuesContainer">
        <div className="coreValues">
          <h1>Core Values</h1>
          <ul>
            <li>
              Rooted in Christian principles, we strive to uphold integrity,
              honesty, and ethical practices in all that we do.
            </li>
            <li>
              We are committed to hard work, ensuring every project is completed
              with diligence, precision, and care.
            </li>
            <li>
              Guided by traditional work values, we emphasize quality,
              reliability, and a dedication to timeless craftsmanship.
            </li>
            <li>
              Our passion for masonry work drives us to honor the artistry and
              skill that define our trade, creating beautiful long lasting
              structures.
            </li>
          </ul>
        </div>
      </div>
      <div className="locallyOwned"></div>
      <div className="companyPartners"></div> */}
    </>
  );
}
