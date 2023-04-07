import React from "react";
import "./_features.scss";

export const Features = (props) => {
  return (
    <>
      <div className="col-md-12 features-container">
        <img className="" src={props.icon} alt="Scholar" width="100%" />
      </div>
    </>
  );
};

export default Features;
