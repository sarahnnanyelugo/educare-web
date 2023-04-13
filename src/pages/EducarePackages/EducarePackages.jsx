import React, { useState } from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./educare-packages.scss";
import {
  enterpriseData,
  elearningData,
  premiumData,
  basicData,
} from "../../TestData";
import Tick from "../../assets/images/tickk2.png";

function EducarePackages(props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="col-md-12 nav-two-business sticky-top">
        {" "}
        <NavTwo title="educare for Business" />
      </div>
      <div className="packages-first-heading col-md-12 nav-two-business">
        <center>
          {" "}
          <div className="col-md-6">
            '
            <h1>
              Get the complete set of tools needed for your Business success and
              progress.
            </h1>
          </div>
        </center>
      </div>
      <div>
        {" "}
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            Monthly
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Yearly
          </button>
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="offset-md-7">
              {" "}
              <button className="premium-button">Recommended</button>
            </div>
            <div className="col-md-10 flexy monthly-container">
              <div className="col-md-3 left-cards enterprise">
                <h3>{enterpriseData.heading1}</h3>
                <h1>{enterpriseData.amount}</h1>
                <button className="price-button">Get started</button>
                <ul className="list-unstyled">
                  {enterpriseData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="col-md-3 left-cards e-learning">
                <h3>{elearningData.heading1}</h3>
                <h1>{elearningData.amount}</h1>
                <button className="price-button">Get started</button>
                <ul className="list-unstyled">
                  {elearningData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-4 ">
                <div className="col-md-11 right-cards premium">
                  <h3>{premiumData.heading1}</h3>
                  <h1>{premiumData.amount}</h1>
                  <button className="price-button">Get started</button>
                  <ul className="list-unstyled">
                    {premiumData.packages.map((items, index) => (
                      <li key={items.id}>
                        {" "}
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 right-cards e-learning basic">
                <h3>{basicData.heading1}</h3>
                <h1>{basicData.amount}</h1>
                <button className="price-button">Get started</button>
                <ul className="list-unstyled">
                  {basicData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
        </div>
      </div>
      <div className="col-md-12 upcoming"></div>
      <div className="col-md-12 upcoming"></div>
    </>
  );
}

export default EducarePackages;
