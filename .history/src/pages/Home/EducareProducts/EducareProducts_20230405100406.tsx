import React from "react";
export interface ProductComponentProps {
  productName: string;
  productDetail: string;
  productIcon: string;
}
export const EducareProducts = (props: ProductComponentProps) => {
  return (
    <>
      <div className="col-md-12">
        <center>
          <img
            className=""
            src={props.productIcon}
            alt="Scholar"
            width="100%"
          />
          <h3>{props.productName}</h3>
          <p>{props.productDetail}</p>
        </center>
      </div>
    </>
  );
};

export default EducareProducts;
