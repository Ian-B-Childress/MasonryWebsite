import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";

const NotFound = () => {
  return (
    <>
    <div>
      <NavBar></NavBar>
    </div>
      <div className="not-found">
        <h1>404</h1>
        <p>Sorry, you hit a stone wall! Page cannot be found.</p>
        <h3>
          <Link to="/" id="linkTo">
            Return
          </Link>
        </h3>
      </div>
    </>
  );
};

export default NotFound;
