import React from "react";
import { NavLink  } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <h2>Daily News</h2>
      </div>
      <div className="nav-link">
        <ul className="navbar">
          <li className="navbar-li">
            <NavLink  activeClassName="active" to="/">
              Home
            </NavLink >
          </li>
          <li className="navbar-li">
            <NavLink  activeClassName="active" to="/trending">
              Trending
            </NavLink >
          </li>
          <li className="navbar-li">
            <NavLink  activeClassName="active" to="/sports">
              Sports
            </NavLink >
          </li>
          <li className="navbar-li">
            <NavLink  activeClassName="active" to="/politics">
                Entertainment
            </NavLink >
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
