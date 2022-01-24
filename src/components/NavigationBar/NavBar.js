import "./NavBar.scss";
import { NavLink } from "react-router-dom";

import React from "react";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="home-link">
        <NavLink to="/" exact activeClassName="current-link">
          <p>
            <b>Home</b>
          </p>
        </NavLink>
      </div>

      <div className="nav-links">
        <NavLink to="/signup" exact activeClassName="current-link">
          <p>
            <b>Sign Up</b>
          </p>
        </NavLink>

        <NavLink to="/login" exact activeClassName="current-link">
          <p>
            <b>Log In</b>
          </p>
        </NavLink>

        <NavLink to="/account" exact activeClassName="current-link">
          <p>
            <b>My Account</b>
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
