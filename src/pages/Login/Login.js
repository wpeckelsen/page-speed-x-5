import React from "react";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Button from "../../components/Button/Button";
import "./Login.scss";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <PageCardNarrow
        title="Login"
        subtitle="fill in your username and password to continue"
        content={
          <>
            <form className="page-form">
              <div className="grid-one">
                <label htmlFor="one">
                  <p>Username</p>
                </label>
              </div>
              <div className="grid-two">
                <input type="text" placeholder="username" id="one" />
              </div>

              <div className="grid-three">
                <label htmlFor="two">
                  <p>Password</p>
                </label>
              </div>

              <div className="grid-four">
                <input type="password" placeholder="password" id="two" />
              </div>

              <div className="grid-six">
                <Button content="Log in" />
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

/*<PageCardWide
            title="Log in"
            subtitle="Fill in your username and password to continue"
            content={<>
                <form className="login-form">
                    <div className="grid-one">
                        <label htmlFor="email">
                            <p>Email</p>
                        </label>
                    </div>

                    <div className="grid-two">
                        <input type="email" placeholder="email" />
                    </div>

                    <div className="grid-three">
                        <label htmlFor="Password">
                            <p>Password</p>
                        </label>
                    </div>

                    <div className="grid-four">
                        <input type="password" placeholder="••••••" />
                    </div>

                    <div className="grid-five">
                        <Button
                            content="Login"
                        />
                    </div>
                </form>


            </>}
        />*/
