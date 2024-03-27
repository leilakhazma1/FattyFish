import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

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
      {(location.pathname === "/breakingfish" || location.pathname === "/recipeindex") && (
        <div className="back-button-container">
          <NavLink to="/" className="back-button" activeClassName="active-back-button">
            Back to Homepage
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
