import { Link } from "react-router-dom";
import "../App.css";
import React from "react";
import brickpath from "../images/brickpath.jpg";
import fireplace from "../images/fireplace.png";
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Gallery() {
  return (
    
    <>  
   
    <section className="gallery">
     <h1>Services</h1>
    <Carousel
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    infiniteLoop={true}
    interval={2000}
    className="carousel"
    >
      
      <div>
        <img src={brickpath} alt="Residential" />
        <p className="legend">Residential</p>
      </div>
      <div>
        <img src={fireplace} alt="Commercial" />
        <p className="legend">Commercial</p>
      </div>
      <div>
        <img src={brickpath} alt="Interior" />
        <p className="legend">Interior</p>
      </div>
      <div>
        <img src={fireplace} alt="Exterior" />
        <p className="legend">Exterior</p>
      </div>

    </Carousel>
    </section>
    </>
    // boostrap carousel, dont know if its better or worse than the react-responsive-carousel
    // <>
    // <section className="gallerySection">
    //   <Carousel className="galleryCarousel" fade>
    //     <Carousel.Item className="rc">
    //       <img className="ResidentialImg" src={brickpath} text="Residential" />
    //       <Carousel.Caption>
    //         <h3>Residential</h3>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item className="cc">
    //       <img className="CommercialImg" src={brickpath} text="Commercial" />
    //       <Carousel.Caption>
    //         <h3>Commercial</h3>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item className="ic">
    //       <img className="Interior" src={fireplace} text="Interior" />
    //       <Carousel.Caption>
    //         <h3>Interior</h3>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item className="ec">
    //       <img className="Exterior" src={brickpath} text="Exterior" />
    //       <Carousel.Caption>
    //         <h3>Exterior</h3>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    // </section>
    // </>
  );
}



export default Gallery;
