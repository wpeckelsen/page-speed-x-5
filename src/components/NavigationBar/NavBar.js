import "./NavBar.scss";

import React from "react";

function NavBar() {
  return (
    <div className="nav-bar">

      <div className="home-link">
        <h3>Home</h3>
      </div>

      <div className="nav-links">
        <h3>Sign Up</h3>

        <h3>Log In</h3>

        <h3>My Account</h3>
      </div>
    </div>
  );
}

export default NavBar;
