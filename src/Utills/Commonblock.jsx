import React from "react";
import '../Styles/index.css'
function Commonblock({title,text}) {
  return (
    <div>
      <div className="common-block">
        <div className="container">
          <div className="section-title">
            <div className="title">{title}</div>
            <div className="common-text">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commonblock;
