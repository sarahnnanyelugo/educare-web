import React from "react";
export interface ProductComponentProps {
  productTitle: string;
  productDetail: string;
  productIcon: string;
}
export const EducareProducts = (props: ProductComponentProps) => {
  return (
    <>
      <div className="col-md-12"></div>
    </>
  );
};

export default EducareProducts;
