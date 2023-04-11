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
        <h5>{props.productName}</h5>
      </center>
    </div>
  );
};

export default OtherEducareProducts;
