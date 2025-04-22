import { Link } from "react-router-dom";
import "../App.css";
import App from "../App.jsx";
import React from "react";
import HomeContent from "../Components/HomeContent.jsx";
import NavBar from "../Components/NavBar.jsx";
import AboutUs from "../Components/AboutUs.jsx";

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
      <div className="HomeAboutUs">
        <AboutUs></AboutUs>
      </div>
    </>
  );
}

export default Home;
