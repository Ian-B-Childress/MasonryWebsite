import { Link } from "react-router-dom";
import "../App.css";
import React from "react";
import brickpath from "../images/brickpath.jpg";
import fireplace from "../images/fireplace.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Gallery() {
  return (
    
    <>  
   
    <section className="gallery">
     <h1>Services</h1>
    <Carousel
    showThumbs={true}
    showStatus={false}
    autoPlay={false}
    className="carousel"
    
    >
      
      <div>
        <img src={brickpath} alt="Brick" />
        <p className="legend">Brick</p>
      </div>
      <div>
        <img src={fireplace} alt="Block" />
        <p className="legend">Block</p>
      </div>
      <div>
        <img src={brickpath} alt="Stone" />
        <p className="legend">Stone</p>
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
