import React from "react";
import "../App.css";
import riverFill from "../images/riverfill10.webp";
import eastRidge from "../images/eastRidge.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faCheckCircle, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faHandshake, faUsers} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  return (
    <>
      <div className="why-us-container" data-aos="fade-left" data-aos-anchor-placement="#example-anchor" data-aos-offset="500" data-aos-duration="500">
        <h1>Why Choose Us?</h1>
        <ul>
          <li>
            
            <p>
              <FontAwesomeIcon icon={faUserShield} size="1.5x" style={{marginRight: ".5rem"}}/>
              55+ years serving Pikeville businesses and homes.
            </p>
          </li>
          <li>
            <p>
              <FontAwesomeIcon icon={faUsers} size="1.5x" style={{marginRight: ".5rem"}}/>
              3 generations of masonry experience passed down.
            </p>
          </li>
          <li>
            <p>
              <FontAwesomeIcon icon={faHammer} size="1.5x" style={{marginRight: ".5rem"}}/>
              Built RiverFill 10, East Ridge HS, and Pikeville Medical Center's new diagnostic center.
            </p>
          </li>
          <li>
            <p>
              <FontAwesomeIcon icon={faBuilding} size="1.5x" style={{marginRight: ".5rem"}}/>
              We only use trusted, high-quality materials | locally sourced or nationally supplied.
            </p>
          </li>
          <li>
            <p>
              <FontAwesomeIcon icon={faHandshake} size="1.5x" style={{marginRight: ".5rem"}}/>
             Your project is our priority. We've earned trust by putting clients first since day one.
            </p>
          </li>
        </ul>
      </div>
      <div className="why-us-images" data-aos="fade-left" data-aos-anchor-placement="#example-anchor" data-aos-offset="500" data-aos-duration="500">
        <div className="why-us-riverfill">
          <img src={riverFill} alt="RiverFill 10" />
        </div>
        <div className="why-us-east-ridge">
          <img src={eastRidge} alt="" />
        </div>
      </div>
    </>
  );
}
