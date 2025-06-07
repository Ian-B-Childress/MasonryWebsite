import { Link } from "react-router-dom";
import "../App.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brickpath from "../images/brickpath.jpg";
import fireplace from "../images/fireplace.png";

function Gallery() {
  return (
    <section className="gallerySection">
      <Carousel className="galleryCarousel" fade>
        <Carousel.Item className="rc">
          <img className="ResidentialImg" src={brickpath} text="Residential" />
          <Carousel.Caption>
            <h3>Residential</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="cc">
          <img className="CommercialImg" src={brickpath} text="Commercial" />
          <Carousel.Caption>
            <h3>Commercial</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="ic">
          <img className="Interior" src={fireplace} text="Interior" />
          <Carousel.Caption>
            <h3>Interior</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="ec">
          <img className="Exterior" src={brickpath} text="Exterior" />
          <Carousel.Caption>
            <h3>Exterior</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Gallery;
