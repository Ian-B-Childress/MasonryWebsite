import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBar.jsx";

function Projects() {
  return (
    <>
    <div className="nav">
      <NavBar></NavBar>
    </div>
      <div className="projects">
        <h1>Our Projects</h1>
        <p>Here are some of our recent projects</p>

        <ul>
          <li>
            <h2>Project 1</h2>
            <p>Custom Brick FirePlace</p>
          </li>
          <li>
            <h2>Project 2</h2>
            <p>Stone Patio Installation</p>
            <li>
              <h2>Project 3</h2>
              <p>Brick Wall Restoration</p>
            </li>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Projects;
