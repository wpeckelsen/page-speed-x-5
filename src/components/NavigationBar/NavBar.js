import "./NavBar.scss";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import React, { useContext } from "react";

function NavBar() {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <div className="home-link">
        <NavLink to="/" exact>
          <p>
            <b>Home</b>
          </p>
        </NavLink>
      </div>

      <div className="nav-links">
        <NavLink to="/account" exact activeClassName="current-link">
          <p>
            <b>My Account</b>
          </p>
        </NavLink>

        {auth ? (
          <NavLink to="/" exact onClick={logout}>
            <p>
              <b>Log Out</b>
            </p>
          </NavLink>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
