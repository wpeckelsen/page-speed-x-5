import React from "react";
import PageCard from "../../components/PageCard/PageCard";
import Button from "../../components/Button/Button";

function Signup() {
  return (
    <PageCard
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
            {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
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
        </>
      }
    />
  );
}

export default Signup;
