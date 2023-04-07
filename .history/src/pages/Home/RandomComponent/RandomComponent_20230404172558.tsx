import React from "react";

export interface RandomComponentProps {
  Title: string;
  paragraph: string;
  icon: string;
}
export const RandomComponent = (props: RandomComponentProps) => {
  return (
    <div className="col-md-12">
      <img></img>
    </div>
  );
};
