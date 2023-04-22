import React from "react";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="title-block">
      <h1 className="title">{props.title}</h1>
      <br />
      <p className="subtitle">{props.subtitle}</p>
    </div>
  );
};

export default Title;
