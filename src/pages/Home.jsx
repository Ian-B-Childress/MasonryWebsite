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
        <div className="h2">
          <h2>Brick, Block, Or Stone, We Can Do It All!</h2>
          <p className="h2p">
            With 58+ years of business we ensure all of your masonry needs are
            met with our highest quality craftsman-ship.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
