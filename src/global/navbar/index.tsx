import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const classNameGenerator =  ({ isActive }) => {
  isActive && (document.title = "JavaScript Notes");
  return `link ${isActive ? "active-link" : ""}`;
}

export const NavBar = () => {
  return (
    <div className="root-navbar-container g-10">
      {/* <NavLink
        to={"/home"}
        className={({ isActive }) => {
          isActive && (document.title = "TheCodeSchool");
          return `link ${isActive ? "active-link" : ""}`;
        }}
      >
        Home
      </NavLink> */}
      {/* <NavLink 
        to="/"
        className={classNameGenerator}
      >Home</NavLink> */}
      <NavLink
        to={"/javascript-notes"}
        className={classNameGenerator}
      >
        JavaScript Notes
      </NavLink>
      {/* <NavLink
        to={"/mcq-question/38992"}
        className={({ isActive }) => {
          isActive && (document.title = "Mcq Questions");
          return `link ${isActive ? "active-link" : ""}`;
        }}
      >
        MCQ Questions
      </NavLink> */}
      {/* <NavLink
        to={"/problem/2929020"}
        className={({ isActive }) => {
          isActive && (document.title = "Solve Problem");
          return `link ${isActive ? "active-link" : ""}`;
        }}
      >
        Problems
      </NavLink> */}
    </div>
  );
};
