import React, { useContext, useState } from "react";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";
import Button from "../../components/Button/Button";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import ErrorCard from "../../components/ErrorCard/ErrorCard";

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)


  async function handleLogin(e) {
    e.preventDefault();
    setError(false)
    console.log("testing function")

    try {
      const result = await axios.post(
        "https://frontend-educational-backend.herokuapp.com/api/auth/signin",
        {
          username: username,
          password: password,
        }
      );

      console.log(result.data)


      login(result.accessToken);

    } catch (e) {
      console.log("error logging in");

    }
  }

  return (
    <>
      <PageCardNarrow
        title="Login"
        subtitle="fill in your username and password to continue"
        content={
          <>
            { error ? <ErrorCard
            title="Unknown username or password"
            content="The information you provided does not seem to match any account"/> : ''
            }
            <form className="page-form" onSubmit={handleLogin}>
              <div className="grid-a">
                <label htmlFor="one">
                  <p>Username</p>
                </label>
              </div>
              <div className="grid-b">
                <input
                  type="text"
                  placeholder="username"
                  id="one"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
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
                  placeholder="password"
                  id="two"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="grid-f">
                <Button content="Log in" type="submit" />
              </div>
            </form>

            <div className="login-text">
              <p>
                <Link to="/">I forgot my username/password</Link>
              </p>
              <p>
                Don't have an account yet? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </>
        }
      />
    </>
  );
}

export default Login;
