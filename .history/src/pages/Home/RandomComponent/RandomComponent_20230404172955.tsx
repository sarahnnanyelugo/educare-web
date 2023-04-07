import React from "react";
import RedIcon from "../../assets/images/red-dots.svg";

export interface RandomComponentProps {
  title: string;
  paragraph: string;
  icon: string;
}
export const RandomComponent = (props: RandomComponentProps) => {
  return (
    <div className="col-md-12">
      <div>
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
