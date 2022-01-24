import React from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import Button from "../../components/Button/Button";
import "./Account.scss";
import TextCard from "../../components/TextCard/TextCard";
import { Link } from "react-router-dom";

function Account(props) {
  return (
    <PageCardWide
      title="My account"
      subtitle="Hello {Username}"
      content={
        <>
          <div className="account">
            <div className="account-divider">
              <div className="page-form">
                <div className="grid-one">
                  <label htmlFor="one">
                    <p>Username</p>
                  </label>
                </div>

                <div className="grid-two">
                  <input
                    type="text"
                    value="jimmy"
                    id="one"
                    className="account-label"
                    readOnly
                  />
                </div>

                <div className="grid-three">
                  <label htmlFor="two">
                    <p>Password</p>
                  </label>
                </div>

                <div className="grid-four">
                  <input
                    type="text"
                    value="password"
                    id="two"
                    className="account-label"
                  />
                </div>

                <div className="grid-five">
                  <label htmlFor="three">
                    <p>E-mail</p>
                  </label>
                </div>

                <div className="grid-six">
                  <input
                    type="text"
                    value="email"
                    id="three"
                    className="account-label"
                    readOnly
                  />
                </div>

                <div className="grid-eight">
                  <Button content="Log out" />
                </div>
              </div>

              <div className="user">
                <div className="account-avatar"></div>
                <p className="username-text">Username</p>
              </div>
            </div>

            <div>
              <h2>Username's Features</h2>
              <p>Jump to a feature of Page Speed x 5</p>
              <hr className="line" />
            </div>

            <TextCard
              title="Run a test on 5 domains simultaneously"
              content={
                <p>
                  <Link to="/input-domain">Speed test 5 domains</Link>
                </p>
              }
            />

            <TextCard
              title="See the influence geography has on your scores"
              content={
                <p>
                  <Link to="/location">The Location Effect</Link>
                </p>
              }
            />

            <TextCard
              title="Check how you can improve scores"
              content={
                <p>
                  <Link to="/improvements">Improvements</Link>
                </p>
              }
            />
          </div>
        </>
      }
    />
  );
}

export default Account;
