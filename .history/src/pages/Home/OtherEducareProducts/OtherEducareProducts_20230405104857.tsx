import React from "react";
export interface OtherProductProps {
  productName: string;

  productIcon: string;
}
export const OtherEducareProducts = (props: OtherProductProps) => {
  return (
    <div className="col-md-12">
      <h6>{props.productName}</h6>
    </div>
  );
};

export default OtherEducareProducts;
