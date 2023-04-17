import React from "react";
import "./heading.scss";
export interface HeadingProps {
  bg: "string";
  color: "string";
  text: "string";
}
export const Heading = (props: HeadingProps) => {
  const { bg, color, text } = props;
  return (
    <>
      <button style={{ backgroundColor: bg, color: color }} className="heading">
        {text}
      </button>
    </>
  );
};
