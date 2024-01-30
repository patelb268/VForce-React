import React from "react";
import "./../PageHeader/pageHeader.css";

const PageHeader = (props) => {
  return (
    <div className="about">
      <div className="container">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
