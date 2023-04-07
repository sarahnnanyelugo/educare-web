import React from "react";

export interface RandomComponentProps {
  Title: string;
  paragraph: string;
}
export const RandomComponent = (props: RandomComponentProps) => {
  return <div>RandomComponent</div>;
};
