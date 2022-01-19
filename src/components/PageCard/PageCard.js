import React from "react";
import "./PageCard.scss";

function PageCard({ title, subtitle, content }) {
  return (
    <div className="flex-page">
      <div className="pagecard">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <hr className="line" />
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  );
}

export default PageCard;
