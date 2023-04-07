import React from "react";
import "./other-products.scss";
export interface OtherProductProps {
  productName: string;

  productIcon: string;
}
export const OtherEducareProducts = (props: OtherProductProps) => {
  return (
    <div className="col-md-12 other-products-container">
      <center>
        {" "}
        <img className="" src={props.productIcon} alt="icon" width="100%" />
        <h6>{props.productName}</h6>
      </center>
    </div>
  );
};

export default OtherEducareProducts;
