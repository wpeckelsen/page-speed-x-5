import React from "react";
import "./TextCard.scss";

function TextCard({ title, content }) {
  return (
    <div className="textcard">
      <h3>{title}</h3>
      <span>{content}</span>
    </div>
  );
}

export default TextCard;
