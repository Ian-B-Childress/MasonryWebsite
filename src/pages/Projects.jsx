import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBar.jsx";
import React from "react";
import croppedBrickPath from "../images/croppedbrickpath.webp";
import fireplace from "../images/fireplace.png";
import blockimg from "../images/blockimg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// going to add a link to the brick, block, and stone projects, redirecting to their respective pages
// each image is a button that links to the specific project page
function Projects() {
  const [customerType, setCustomerType] = React.useState("");
  return (
    <>
      <div className="nav">
        <NavBar></NavBar>
      </div>
      <div className="services-container">
        <div className="brick-card">
          <img src={croppedBrickPath} alt="" />
          <h2>Brick</h2>
          <Link to="/contact?material=brick">
            <button className="free-quote-cta">Get Your Free Quote</button>
          </Link>
          <p className="s">
            Professional brickwork at competitive rates, expertly sealed and
            jointed to withstand harsh weather.
          </p>
        </div>
        <div className="block-card">
          <img src={blockimg} alt="" />
          <h2>Block</h2>
          <Link to="/contact?material=block">
            <button className="free-quote-cta">Get Your Free Quote</button>
          </Link>
          <p className="s">
            Reliable block construction, carefully installed to provide strong,
            lasting foundations.
          </p>
        </div>
        <div className="stone-card">
          <img src={fireplace} alt="" />
          <h2>Stone</h2>
          <Link to="/contact?material=stone">
            <button className="free-quote-cta">Get Your Free Quote</button>
          </Link>
          <p className="s">
            High-quality stone installations that combine durability with
            enduring visual appeal.
          </p>
        </div>
      </div>
      <div className="t-carousel">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={17000}
          >
            <SwiperSlide>
              <p>"Hands down the best masons around. Professional, reliable, and really know their craft. Couldn't be happier with the work."</p>
            </SwiperSlide>
            <SwiperSlide>
              <p>"Super fast and efficient without cutting corners. The team really goes the extra mile to make sure everything is perfect."</p>
            </SwiperSlide>
            <SwiperSlide>
              <p>"High-quality work at a great price. They're honest, hardworking, and it shows in everything they do."</p>
            </SwiperSlide>
            <SwiperSlide>
              <p>"Really impressed with how thorough and detail-oriented they are. You can tell they take pride in their work."</p>
            </SwiperSlide>
            <SwiperSlide>
              <p>"Affordable, reliable, and genuinely skilled. I’ve worked with a lot of masons, and these guys are the best by far."</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Projects;
