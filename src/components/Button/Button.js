import React from "react";
import "./Button.scss";


function Button({ content, type, click, buttonSwitch }) {
  return (
    <button type={type} onClick={click}   hidden={buttonSwitch}>
      <span className="button-text">{content}</span>
    </button>
  );
}

export default Button;
