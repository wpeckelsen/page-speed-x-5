import React from "react";
import "./Form.scss";
import Button from "../Button/Button";

function Form() {
  return (
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
  );
}

export default Form;
