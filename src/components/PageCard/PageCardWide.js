import React from "react";
import "../../App.scss";
import "./PageCard.scss";

function PageCardWide({ title, subtitle, content }) {
  return (
    <div className="flex-page">
      <div className="pagecard-wide" >
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

export default PageCardWide;
