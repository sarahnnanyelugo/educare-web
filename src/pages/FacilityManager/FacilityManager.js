import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./facility-manager.scss";
import Fac1 from "../../assets/images/fac1.svg";
import Fac2 from "../../assets/images/fac2.svg";
import Fac3 from "../../assets/images/facility_dash1.png";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";
import SimplePrices from "../PastoralPage/SimplePrices/SimplePrices";

function FacilityManager() {
  return (
    <>
      <div className="col-md-12 facility-nav-div">
        {" "}
        <NavTwo title="Facility Management" />
      </div>
      <div className="facility-div col-md-12">
        <div className="col-md-11 offset-md-1 flexy">
          <div className="col-md-5 mtt  no-m">
            <h1>Ensure Smooth Operations with Proactive Maintenance</h1>
            <p className="col-md-10 flexy flexyM">
              Gain actionable insights from comprehensive reporting and
              analytics, empowering you to optimize resources, improve
              efficiency, and enhance facility performance
            </p>
            <button className="demo">Request for demo</button>
          </div>
          <div className="col-md-7 formmy-dive flexy">
            <div className="col-md-3 img1">
              {" "}
              <img className="" src={Fac1} alt="Scholar" />
            </div>
            <div className="col-md-6 ">
              <Form bg="#0B2FF7" text="Get started" body="#fff" />
            </div>
            <div className="col-md-3 img2">
              {" "}
              <img className="" src={Fac2} alt="Scholar" />
            </div>
          </div>
        </div>
      </div>
      <center>
        <h1 className="col-md-5 mt">
          Who says managing your facility is gonna be tedious?
        </h1>
        <div className="col-md-9 mt7">
          {" "}
          <img className="col-md-12" src={Fac3} alt="Scholar" width="100%" />
        </div>
      </center>
      <div className="col-md-10 offset-md-1 asset-management mtt">
        <center>
          <h1>Asset Management</h1>
        </center>
        <div className="flexy">
          <div className="col-md-6">
            <div className="col-md-10">
              <h4>Centralized asset database</h4>
              <p>
                A module allows for the creation of a centralized repository to
                manage and track all facility assets, including equipment,
                furniture, and infrastructure.
              </p>
              <h4>Preventive maintenance</h4>
              <p>
                The module enables the scheduling and management of preventive
                maintenance tasks to minimize downtime and extend asset
                lifespan.
              </p>
              <h4>Asset lifecycle management</h4>
              <p>
                It facilitates monitoring asset conditions, tracking maintenance
                schedules, and managing repair and replacement processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 asset-management2 mtt">
        <center>
          <h1>Asset Management</h1>
        </center>
        <div className="flexy">
          <div className="col-md-6">&nbsp;</div>
          <div className="col-md-6 ">
            <div className="col-md-10">
              <h4>Centralized asset database</h4>
              <p>
                A module allows for the creation of a centralized repository to
                manage and track all facility assets, including equipment,
                furniture, and infrastructure.
              </p>
              <h4>Preventive maintenance</h4>
              <p>
                The module enables the scheduling and management of preventive
                maintenance tasks to minimize downtime and extend asset
                lifespan.
              </p>
              <h4>Asset lifecycle management</h4>
              <p>
                It facilitates monitoring asset conditions, tracking maintenance
                schedules, and managing repair and replacement processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 asset-management mt">
        <center>
          <h1>Asset Management</h1>
        </center>
        <div className="flexy">
          <div className="col-md-6">
            <div className="col-md-10">
              <h4>Preventive maintenance</h4>
              <p>
                The module enables the scheduling and management of preventive
                maintenance tasks to minimize downtime and extend asset
                lifespan.
              </p>
              <h4>Asset lifecycle management</h4>
              <p>
                It facilitates monitoring asset conditions, tracking maintenance
                schedules, and managing repair and replacement processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 admin-simple-prices">
        {" "}
        <center>
          <h1 className=" ">Our simple prices made for you </h1>
        </center>
        <div className=" col-md-12 mt8">
          {" "}
          <div className="col-md-10 offset-md-1 flexy mb5 mt5">
            <div className="col-md-3 " style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Basic"
                  amount="100.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="75 billed annually"
                  url={""}
                  currency="₦"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3 recommended-container ">
              <div
                className="offset-md-4 offset-5"
                style={{ marginBottom: "-50px" }}
              >
                <Heading
                  bg="#FCEBD7"
                  color="#BB6C0F"
                  boda="solid 1px #FCEBD7"
                  text="Recommended"
                />
              </div>
              <div className="col-md-11 mt3">
                <SimplePrices
                  package="e-learning"
                  amount="200.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="150 billed annually"
                  url={""}
                  currency="₦"
                  active="active-button "
                  cls="recommendedCal"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Premium"
                  amount="500.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="450 billed annually"
                  url={""}
                  currency="₦"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Enterprise"
                  amount="Contact Us"
                  paragraph=""
                  btnBg="#0098DA"
                  annualAmount=""
                  url={""}
                />
              </div>
            </div>
          </div>
        </div>
        <center>
          <p>
            Kindly check out our{" "}
            <Link to={"/educare-packages"} className="link">
              Pricing page
            </Link>
            {""} for complete details
          </p>
        </center>
      </div>
      <center>
        <div className="col-md-5 admin-process">
          <h3>
            Streamline Your Admission Process with educare admissions today!
          </h3>
          <center>
            <button className="started">Get started</button>
            <button className="demo">Request for demo</button>
          </center>
        </div>
      </center>
    </>
  );
}

export default FacilityManager;
