import React, { useContext, useEffect, useState } from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import Button from "../../components/Button/Button";
import "./Account.scss";
import TextCard from "../../components/TextCard/TextCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Account() {
  const [account, setAccount] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function accountFetch() {
      const token = localStorage.getItem("token");

      try {
        const result = await axios.get(
          "https://frontend-educational-backend.herokuapp.com/api/user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAccount(result.data);
      } catch (e) {
        console.error(e);
      }
    }

    accountFetch();
  }, []);

  return (
    <PageCardWide
      title="My account"
      subtitle={
        <span>
          Hello, <b>{user.username}</b>
        </span>
      }
      content={
        <>
          <div className="account">
            <div className="account-divider">
              <div className="page-form">
                <div className="grid-a">
                  <label htmlFor="one">
                    <p>Username</p>
                  </label>
                </div>

                <div className="grid-b">
                  <input
                    type="text"
                    value={user.username}
                    id="one"
                    className="account-label"
                    readOnly
                  />
                </div>

                <div className="grid-c">
                  <label htmlFor="two">
                    <p>Password</p>
                  </label>
                </div>

                <div className="grid-d">
                  <input
                    type="password"
                    value={user.password}
                    id="two"
                    className="account-label"
                    readOnly
                  />
                </div>

                <div className="grid-e">
                  <label htmlFor="three">
                    <p>E-mail</p>
                  </label>
                </div>

                <div className="grid-f">
                  <input
                    type="text"
                    value={user.email}
                    id="three"
                    className="account-label"
                    readOnly
                  />
                </div>
              </div>

              <div className="user">
                <div className="account-avatar"></div>
                <p className="username-text">{user.username}</p>
                <Button content="Log out" />
              </div>
            </div>

            <div>
              <h2>{user.username}'s Features</h2>
              <p>Jump to a feature of Page Speed x 5</p>
              <hr className="line" />
            </div>

            <TextCard
              title="Run a test on 5 domains simultaneously"
              content={
                <p>
                  <Link to="/input">Speed test 5 domains</Link>
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
