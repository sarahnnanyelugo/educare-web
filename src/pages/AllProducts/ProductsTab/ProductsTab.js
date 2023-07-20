import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect } from "react";
import "./products-tab.scss";
import { allProducts, forSchools, forBusinesses } from "../../../TestData";
import Products from "../Products/Products";
import WOW from "wowjs";
import productIcon from "../../../assets/images/govt_4.png";

function ProductsTab() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });

  return (
    <>
      <div className="container-fluid filter-triggers">
        {" "}
        <div className="offset-md-1">
          <a href="#" focus>
            {" "}
            All Products
          </a>
          <a href="#">For Businesses</a>
          <a href="#"> For Schools</a>
        </div>
      </div>
      <br />
      <div className="col-md-12  ">
        <main>
          <div id="content" className="offset-md-1 col-md-10">
            <section className="row row-cols-2 row-cols-lg-4  g-lg-4 col-md-12">
              {allProducts.map((data, index) => (
                <Products data={data} />
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProductsTab;
