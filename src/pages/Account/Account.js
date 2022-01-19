import React from "react";
import PageCard from "../../components/PageCard/PageCard";
import Button from "../../components/Button/Button";
import "./Account.scss";
import TextCard from "../../components/TextCard/TextCard";

function Account(props) {
  return (
    <PageCard
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
                  <input type="text" value="jimmy" id="one" readOnly />
                </div>

                <div className="grid-three">
                  <label htmlFor="two">
                    <p>Password</p>
                  </label>
                </div>

                <div className="grid-four">
                  <input type="text" value="password" id="two" />
                </div>

                <div className="grid-five">
                  <label htmlFor="three">
                    <p>E-mail</p>
                  </label>
                </div>

                <div className="grid-six">
                  <input type="text" value="email" id="three" readOnly />
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
              content={<p>Speed test 5 domains</p>}
            />

            <TextCard
              title="See the influence geography has on your scores"
              content={<p>The Location Effect</p>}
            />

            <TextCard
              title="Check how you can improve scores"
              content={<p>Improvements</p>}
            />
          </div>
        </>
      }
    />
  );
}

export default Account;
