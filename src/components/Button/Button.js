import React from "react";
import "./Button.scss";
import { Link, useHistory } from "react-router-dom";

function Button({ content, type, click, hidden }) {
  return (
    <button type={type} onClick={click} className={hidden}>
      <span className="button-text">{content}</span>
    </button>
  );
}

export default Button;
