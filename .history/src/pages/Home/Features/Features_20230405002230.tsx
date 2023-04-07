import React from "react";
import "./_features.scss";
export interface featuresProps {
  feature: string;
  detail: string;
  icon: string;
}
export const Features = (props: featuresProps) => {
  return (
    <>
      <div className="col-md-12 features-container">
        <img className="" src={props.icon} alt="Scholar" width="100%" />
        <h5>{props.feature}</h5>
        <p>{props.detail}</p>
        <button>Sign up now</button>
      </div>
    </>
  );
};

export default Features;
