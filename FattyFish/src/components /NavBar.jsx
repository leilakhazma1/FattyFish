import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/breakingfish" className="nav-link" activeClassName="active-link">
            Breaking Fish
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recipeindex" className="nav-link" activeClassName="active-link">
            Recipe Index
          </NavLink>
        </li>
      </ul>
      <div className="back-button-container">
        <NavLink to="/" className="back-button" activeClassName="active-back-button">
          Back to Homepage
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;