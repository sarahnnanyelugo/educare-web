import { useEffect, useState } from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./educare-packages.scss";
import {
  standardData,
  rates,
  professionalData,
  businessEnterpriseData,
  currencyChar,
} from "../../TestData";
import Tick from "../../assets/images/tickk2.png";
import { CompareFeatures } from "./CompareFeatures/CompareFeatures";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import { Partners } from "../../components/Partners/Partners";
import Axios from "axios";

function EducarePackages(props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [amount, setAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("NGN");
  const [conversionRate, setConversionRate] = useState(1);

  const convertCurrency = () => {
    setConversionRate(rates[toCurrency]);
  };
  function setThisCurrency(curr) {
    if (curr !== toCurrency) {
      setToCurrency(curr);
    }
  }
  useEffect(() => {
    convertCurrency();
    console.log(toCurrency, conversionRate);
  }, []);
  useEffect(() => {
    convertCurrency();
    setTimeout(() => {
      console.log(toCurrency, conversionRate);
    }, 1000);
  }, [toCurrency]);
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
              Run your entire back office with an integrated suite of apps.
            </h1>
          </div>
        </center>
      </div>{" "}
      <div className="business-pricing-tab ">
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
        <div className="currency-buttons flexy flexym offset-md-10">
          <button onClick={() => setThisCurrency("NGN")}>NGN</button>
          <button onClick={() => setThisCurrency("USD")}>USD</button>
        </div>

        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="offset-md-7">
              {" "}
              <button className="premium-button">Recommended</button>
            </div>
            <div className="col-md-9 flexy monthly-container offset-md-1">
              <div className="col-md-4 ">
                <div className="col-md-12 standard">
                  <h3>{standardData.heading1}</h3>
                  <div className="flexy flexyM">
                    {" "}
                    <h1>
                      {" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyChar[toCurrency],
                        }}
                      ></span>
                      {standardData.monthlyAmount * conversionRate}
                    </h1>
                    <h6>
                      Per Student <br /> (Monthly)
                    </h6>
                  </div>
                  <button className="price-button">Get started</button>
                  <ul className="list-unstyled">
                    {standardData.packages.map((items, index) => (
                      <li key={items.id}>
                        {" "}
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 right-cards2 e-learning ">
                <h3>{professionalData.heading1}</h3>
                <h1>
                  {" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: currencyChar[toCurrency],
                    }}
                  ></span>
                  {professionalData.monthlyAmount * conversionRate}
                </h1>
                <button className="price-button">Get started</button>
                <ul className="list-unstyled">
                  {professionalData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="col-md-4 right-cards e-learning ">
                <h3>{businessEnterpriseData.heading1}</h3>
                <h1>{businessEnterpriseData.monthlyAmount}</h1>
                <button className="price-button">Get started</button>
                <ul className="list-unstyled">
                  {businessEnterpriseData.packages.map((items, index) => (
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
          <div className={`panel ${checkActive(2, "active2")}`}>
            <div className="col-md-9 flexy monthly-container offset-md-1">
              <div className="col-md-4 ">
                <div className="col-md-12 standard">
                  <h3>{standardData.heading1}</h3>
                  <div className="flexy flexyM">
                    {" "}
                    <h1>
                      {" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyChar[toCurrency],
                        }}
                      ></span>
                      {standardData.yearlyAmount * conversionRate}
                    </h1>
                    <h6>
                      Per Student <br /> (Yearly)
                    </h6>
                  </div>
                  <button className="price-button">Get started</button>
                  <ul className="list-unstyled">
                    {standardData.packages.map((items, index) => (
                      <li key={items.id}>
                        {" "}
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 right-cards e-learning basic">
                <h3>{professionalData.heading1}</h3>
                <h1>
                  {" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: currencyChar[toCurrency],
                    }}
                  ></span>
                  {professionalData.yearlyAmount * conversionRate}
                </h1>
                <button className="price-button">Get started</button>
                <ul className="list-unstyled">
                  {professionalData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="col-md-4 right-cards e-learning basic">
                <h3>{businessEnterpriseData.heading1}</h3>
                <h1>{businessEnterpriseData.yearlyAmount}</h1>
                <button className="price-button">Get started</button>
                <ul className="list-unstyled">
                  {businessEnterpriseData.packages.map((items, index) => (
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
        </div>
      </div>
      <div className="col-md-12 more-details-container">
        <CompareFeatures title="Compare Features" />
      </div>
      <div className="col-md-12 more-details-container">
        <div className="col-md-12">
          <center>
            <div className="col-md-6 onboarding">
              <h1>Onboarding</h1>
              <p>
                Our Onboarding Experts have extensive experience working with
                numerous businesses worldwide. They are available to assist you
                with setting up your dashboard improving your team’s workflow,
                and ensuring your company fully adopts the platform. If you
                prefer, you can also select a partner from our directory to
                receive guidance on implementation, training, and integration.
              </p>
            </div>
          </center>
        </div>
        <div className="col-md-10 offset-md-1 flexy faq-container">
          <div className="col-md-3">
            <h1>FAQs</h1>
          </div>
          <div className="col-md-9">
            <FAQAccordion />
          </div>
        </div>
        <Partners />
      </div>
    </>
  );
}

export default EducarePackages;
