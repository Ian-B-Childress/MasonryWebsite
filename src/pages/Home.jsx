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
      </div>
      <br>
      
      </br>
      <div className="h2">
          <h2>Brick, Block, Or Stone, We Can Do It All!</h2> 
        </div>
    </>
  );
}

export default Home;
