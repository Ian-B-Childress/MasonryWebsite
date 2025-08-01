import { Link } from "react-router-dom";
import "../App.css";
import App from "../App.jsx";
import React from "react";
import HomeContent from "../Components/HomeContent.jsx";
import NavBar from "../Components/NavBar.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import WhyChooseUs from "../Components/WhyChooseUs.jsx";
import FAQ from "../Components/FAQ.jsx";
import Services from "../Components/Services.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  return (
    <>
      <div className="nav">
        <NavBar></NavBar>
      </div>
      <div className="home">
        <HomeContent></HomeContent>
      </div>
      <br></br>
      <div className="homeAboutUs">
        <AboutUs></AboutUs>
      </div>
      <div className="home-service-cards"> 
        <Services></Services>
      </div>
      <div className="home-why-choose-us">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="home-footer">
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
