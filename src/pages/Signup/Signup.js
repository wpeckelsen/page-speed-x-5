import React, { useState } from "react";

import Button from "../../components/Button/Button";
import { Link, useHistory } from "react-router-dom";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";
import axios from "axios";
import ErrorCard from "../../components/ErrorCard/ErrorCard";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  async function handleSignup(e) {
    e.preventDefault(e);

    if (password.length < 6) {
      setPasswordError(true);
    }

    if (
        !email.includes("@")||
        email.includes("," ) ||
        email.includes("..")
    )

    {
      setEmailError(true);
    }

    else
      setEmailError(false)
    setPasswordError(false)

      try {
        const result = await axios.post(
          `https://frontend-educational-backend.herokuapp.com/api/auth/signup`,
          {
            email: email,
            username: username,
            password: password,
            role: ["user"],
          }
        );

        console.log(result);



        history.push("/login");
      } catch (e) {
        console.error(e);
        console.error(e.response.data);
        //error state hierin zetten
      }
  }

  return (
    <PageCardNarrow
      title="Sign Up"
      subtitle="Fill in your email, pick a username and enter a strong
      password of at least six characters"
      content={
        <>
          {passwordError ? (
            <ErrorCard
              title="Weak password"
              content={
                <p>
                  You need a password of at least <b>6</b> characters long!
                </p>
              }
            />
          ) : (
            ""
          )}

          {emailError ? (
            <ErrorCard
              title="Invalid email"
              content={
                <p>
               Your email seems to be incorrect.
                </p>
              }
            />
          ) : (
            ""
          )}


          <form className="page-form" onSubmit={handleSignup}>
            <div className="grid-a">
              <label htmlFor="one">
                <p>Email</p>
              </label>
            </div>
            <div className="grid-b">
              <input
                type="text"
                placeholder="your@email.com"
                id="one"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="grid-c">
              <label htmlFor="two">
                <p>Username</p>
              </label>
            </div>

            <div className="grid-d">
              <input
                type="text"
                placeholder="username"
                id="two"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>

            <div className="grid-e">
              <label htmlFor="domain-three">
                <p>Password</p>
              </label>
            </div>
            <div className="grid-f">
              <input
                type="password"
                placeholder="password"
                id="three"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>

            <div className="grid-h">
              <Button content="Sign Up" type="submit" />
            </div>
          </form>

          <div className="login-text">
            <p>
              <Link to="/">I forgot my username/password</Link>
            </p>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </>
      }
    />
  );
}

export default Signup;
