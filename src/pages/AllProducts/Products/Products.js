import React from "react";
import { Link } from "react-router-dom";
import "./products.scss";
function Products({ data }) {
  const { bg, border, productIcon, productTitle, productDetail, category } =
    data;
  return (
    <div className={`col wow animate__fadeInUp ${category}`}>
      {" "}
      <div
        className="col-md-12 products-samples"
        style={{ background: bg, border: border }}
      >
        <img className="col-md-12" src={productIcon} alt="Scholar" />
        <h6>{productTitle}</h6>
        <p>{productDetail}</p>
        <Link to={"/login"} className="offset-md-7">
          <button>Sign up now</button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
