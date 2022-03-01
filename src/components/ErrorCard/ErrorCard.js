import React from "react";
import "./ErrorCard.scss";

function ErrorCard({ title, content }) {
  return (
    <div className="errorcard">
      <h3>{title}</h3>
      <span>{content}</span>
    </div>
  );
}

export default ErrorCard;
