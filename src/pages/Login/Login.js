import React from "react";
import PageCard from "../../components/PageCard/PageCard";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Button from "../../components/Button/Button";
import "./Login.scss"


function Login() {
  return (
    <>
      <BreadCrumbs />
      <PageCard
        title="Log in"
        subtitle="Fill in your username and password to continue"
        content={<>
            <form>
                <label htmlFor="Email"><p>Email</p></label>
                <input type="email" placeholder="email"/>
                <label htmlFor="Password"><p>Password</p></label>
                <input type="password" placeholder="• • • • • •"/>
            </form>

            <Button
            content="Log in"
            />


        </>}
      />
    </>
  );
}

export default Login;
