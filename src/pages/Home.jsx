import { Link } from "react-router-dom";
import "../App.css";
import App from "../App.jsx";
import React from "react";
import HomeContent from "../Components/HomeContent.jsx";
import NavBar from "../Components/NavBar.jsx";

function Home() {
  return (
    <>
    <div className="nav">
      <NavBar></NavBar>
    </div>
      <div className="home">
        <HomeContent></HomeContent>
        <p>We specialize in custom brick and stone work</p>
      </div>
    </>
  );
}

export default Home;
