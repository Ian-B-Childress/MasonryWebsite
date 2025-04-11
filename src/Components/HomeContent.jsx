import React from "react";
import Home from "../pages/Home";
import "../App.css";
import project1 from "../images/project1.jpg";

function ContentTable() {
  return (
    <div>
      {/* TODO meet the team.*/}
      <div className="table-content">
        <h2>Meet the Team:</h2>
        <table>
          <tr>
            <th className="name">Name</th>
            <th className="role">Role</th>
            <th className="desc">Description</th>
          </tr>

          <tr>
            <td className="danny-name" id="row-1">
              Danny Melvin
            </td>
            <td className="danny-role" id="row-1">
              Owner/Founder
            </td>
            <td className="danny-desc" id="row-1">
              <span>
                A seasoned masonry veteran with over 55 years of experience.
                Personally played a pivitol role in the growth of Pikeville's
                architecture!
              </span>
            </td>
          </tr>
          <tr>
            <td className="josh-name" id="row-2">
              Josh Napier
            </td>
            <td className="josh-role" id="row-2">
              Brick Mason
            </td>
            <td className="josh-desc" id="row-2">
              Another esteemed professional with over 10 years of experience
              making your visions a reality!
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}


export default function HomeSectionOne() {
  return (
    <>
  <div className="home-section-one">
    <div className="h-header">
      <h1>Masonry Done Right!</h1>
      <p>Specializing in custom brick, block, and stone work</p>
    </div>
    <div className="h-image">
      <img src={project1} alt="project1" />
    </div>
  </div>
    
 </>
  )
};
