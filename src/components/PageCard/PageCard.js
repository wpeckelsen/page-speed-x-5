import React from "react";
import "./PageCard.scss"

function PageCard({ title, subtitle, content }) {
  return (
      <div className="flex-page">
        <div className="pagecard">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <hr className="line"/>
          <div>{content}</div>
        </div>
      </div>
  );
}

export default PageCard;
