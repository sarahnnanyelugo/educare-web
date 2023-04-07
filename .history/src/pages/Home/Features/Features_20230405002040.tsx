import React from "react";
import "./_features.scss";
export interface featuresProps {
  title: string;
  paragraph: string;
  icon: string;
}
export const Features = (props: featuresProps) => {
  return (
    <>
      <div className="col-md-12 features-container">
        <img className="" src={props.icon} alt="Scholar" width="100%" />
      </div>
    </>
  );
};

export default Features;
