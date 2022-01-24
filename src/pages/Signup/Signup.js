import React from "react";

import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";

function Signup() {
  return (
      <PageCardNarrow
      title="Sign Up"
      subtitle="Fill in your e-mail, pick a username and enter a strong password"
      content={
        <>
          <form className="page-form">
            <div className="grid-one">
              <label htmlFor="one">
                <p>E-mail</p>
              </label>
            </div>
            <div className="grid-two">
              <input type="email" placeholder="your@email.com" id="one" />
            </div>

            <div className="grid-three">
              <label htmlFor="two">
                <p>Username</p>
              </label>
            </div>

            <div className="grid-four">
              <input type="text" placeholder="username" id="two" />
            </div>

            <div className="grid-five">
              <label htmlFor="domain-three">
                <p>Password</p>
              </label>
            </div>
            <div className="grid-six">
              <input type="password" placeholder="password" />
            </div>

            <div className="grid-eight">
              <Button content="Sign Up" />
            </div>
          </form>

          <div className="login-text">
            <p>
              <Link to="/">I forgot my username/password</Link>
            </p>
            <p>
              Already have an account <Link to="/login">Log in</Link>
            </p>
          </div>

        </>
      }
    />
  );
}

export default Signup;
