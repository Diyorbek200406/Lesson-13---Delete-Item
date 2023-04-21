import React from "react";

const Title = (props) => {
  return (
    <>
      <h1 className="title">{props.title}</h1>
      <br />
      <p className="subtitle">{props.subtitle}</p>
    </>
  );
};

export default Title;
