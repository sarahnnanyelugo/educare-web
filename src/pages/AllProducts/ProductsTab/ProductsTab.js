import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect, useState } from "react";
import "./products-tab.scss";
import { allProducts, forSchools, forBusinesses } from "../../../TestData";
import Products from "../Products/Products";
import WOW from "wowjs";

function ProductsTab() {
  const [category, setCategory] = useState("*");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  function setCat(cat) {
    setCategory(cat);
  }
  useEffect(() => {
    new WOW.WOW({
      live: true,
      duration: 5,
    }).init();
  }, [category]);
  useEffect(() => {
    if (category == "*") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((prd) => prd.category == category)
      );
    }
  }, [category]);

  return (
    <>
      <div className="container-fluid filter-triggers">
        {" "}
        <div className="offset-md-1">
          <span onClick={() => setCat("*")}> All Products</span>
          <span onClick={() => setCat("business")}>For Businesses</span>
          <span onClick={() => setCat("*")}> For Schools</span>
        </div>
      </div>
      <br />
      <div className="col-md-12  ">
        <div id="content" className="offset-md-1 col-md-10">
          <section className="row row-cols-2 row-cols-lg-4  g-lg-4 col-md-12">
            {filteredProducts.map((data, index) => (
              <Products data={data} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default ProductsTab;
