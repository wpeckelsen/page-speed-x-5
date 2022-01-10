import React from "react";
import PageCard from "../../components/PageCard/PageCard";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Button from "../../components/Button/Button";
import "./Login.scss"
import Form from "../../components/Form/Form";


function Login() {
  return (
    <>
      <BreadCrumbs />
      <PageCard
        title="Log in"
        subtitle="Fill in your username and password to continue"
        content={<>
            <form className="input-form">
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
      />
    </>
  );
}

export default Login;
