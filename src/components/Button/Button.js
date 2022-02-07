import React from "react";
import "./Button.scss";
import { Link, useHistory } from "react-router-dom";

function Button({ content, type, click, buttonSwitch }) {
  return (
    <button type={type} onClick={click}   hidden={buttonSwitch}>
      <span className="button-text">{content}</span>
    </button>
  );
}

export default Button;
