import React from "react";
import { RandomComponent } from "./RandomComponent/RandomComponent";
import "./_home.scss";
import RedIcon from "../../assets/images/red-dots.svg";

export const Home = () => {
  return (
    <>
      <div className="col-md-12 modern-solutions-container">
        <center>
          <div className="col-md-6">
            <h1>Modern solution for your Business</h1>
            <p>
              Unlock Your Business’s Potential with Cutting-Edge Software
              Solutions Designed to Streamline Operations, Optimize Performance,
              and Drive Growth.
            </p>
            <button className="gs-button">Get started</button>
            <button className="request-button">Request for a demo</button>
          </div>
        </center>
      </div>
      <div className="col-md-12 actions-container">
        <div className="col-md-4">
          <div className="col-md-9">
            {" "}
            <RandomComponent
              title="Pick your tools"
              icon={RedIcon}
              paragraph=" Unlock Your Business Potential with Cutting-Edge Software  Solutions Designed to Streamline"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            {" "}
            <RandomComponent
              title="Pick your tools"
              icon={RedIcon}
              paragraph=" Unlock Your Business Potential with Cutting-Edge Software  Solutions Designed to Streamline"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            {" "}
            <RandomComponent
              title="Pick your tools"
              icon={RedIcon}
              paragraph=" Unlock Your Business Potential with Cutting-Edge Software  Solutions Designed to Streamline"
            />
          </div>
        </div>
      </div>
    </>
  );
};
