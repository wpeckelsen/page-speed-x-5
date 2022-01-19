import React from "react";
import PageCard from "../../components/PageCard/PageCard";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Button from "../../components/Button/Button";
import "./Login.scss";
import Form from "../../components/Form/Form";

function Login() {
  return (
    <>
      <PageCard
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
          </>
        }
      />
    </>
  );
}

export default Login;

/*<PageCard
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
