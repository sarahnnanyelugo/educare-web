import React from "react";
import { Heading } from "../../components/Heading/Heading";
import "./all-products.scss";
import { Link } from "react-router-dom";
import ProductsTab from "./ProductsTab/ProductsTab";

function AllProducts() {
  return (
    <>
      <div className="all-products-container col-md-12">
        <center>
          <div className="col-md-5">
            <Heading
              text="All products"
              bg="#CEF0FF"
              color="#0098DA"
              boda="#CEF0FF"
            />
            <h1>All the software you need to run your business</h1>
          </div>
          <center>
            <Link to={"/login"}>
              <button className="sign-up">Sign Up and Deploy in Seconds</button>
            </Link>
            <Link to={"/contact-us"}>
              <button className="contact">Contact Us</button>
            </Link>
          </center>
        </center>
      </div>
      <div>
        <ProductsTab />
      </div>
    </>
  );
}

export default AllProducts;
