import React from "react";
import RedIcon from "../../assets/images/red-dots.svg";

export interface RandomComponentProps {
  Title: string;
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
          src={RedIcon}
          alt="Scholar"
          width="100%"
        />
        <h3>Pick your tools</h3>
      </div>
    </div>
  );
};
