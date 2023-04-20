import React from "react";
import "./simple-prices.scss";
import { Link } from "react-router-dom";
const myClassName = "my-class-name";
const props = {
  className: myClassName,
};
export interface SimplePricesProps {
  annualAmount: string;
  paragraph: string;
  icon: string;
  package: string;
  amount: string;
  url: string;
  currency: string;
  cls: string;
}
function SimplePrices(props: SimplePricesProps, cls: any) {
  return (
    <div className={`col-md-12 simple-prices ${cls}`}>
      <h2>{props.package}</h2>
      <h1>
        {" "}
        <span>{props.currency}</span>
        {props.amount}
      </h1>
      <p>{props.paragraph}</p>
      <p>
        <strong>{props.currency}</strong>
        {props.annualAmount}
      </p>
      <Link to={props.url}>
        {" "}
        <button>Get Start</button>
      </Link>
    </div>
  );
}

export default SimplePrices;
