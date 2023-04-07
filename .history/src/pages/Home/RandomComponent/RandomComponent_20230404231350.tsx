import React from "react";
import "./_random-component.scss";
export interface RandomComponentProps {
  title: string;
  paragraph: string;
  icon: string;
}
export const RandomComponent = (props: RandomComponentProps) => {
  return (
    <div className="col-md-12 random-container">
      <div className="heading">
        {" "}
        <img
          className="col-md-12 col-8"
          src={props.icon}
          alt="Scholar"
          width="100%"
        />
        <h3>{props.title}</h3>
      </div>
      <p>{props.paragraph}</p>
    </div>
  );
};
