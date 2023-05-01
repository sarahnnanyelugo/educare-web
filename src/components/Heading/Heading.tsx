import React from "react";
import "./heading.scss";
export interface HeadingProps {
  bg: "string";
  color: "string";
  text: "string";
  boda: "string";
}
export const Heading = (props: HeadingProps) => {
  const { bg, color, text, boda } = props;
  return (
    <>
      <button
        style={{ backgroundColor: bg, color: color, border: boda }}
        className="heading"
      >
        {text}
      </button>
    </>
  );
};
