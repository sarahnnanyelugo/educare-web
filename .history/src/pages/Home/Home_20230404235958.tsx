import React from "react";
import { RandomComponent } from "./RandomComponent/RandomComponent";
import "./_home.scss";
import RedIcon from "../../assets/images/red-dots.svg";
import BlueIcon from "../../assets/images/blue-dots.svg";
import YellowIcon from "../../assets/images/yellow-dots.svg";

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
              title="work smart not hard"
              icon={YellowIcon}
              paragraph="Choose from our wide range of tools and select the ones that best fit Your business’s unique needs and goals.”"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            {" "}
            <RandomComponent
              title="We’ve got your back"
              icon={BlueIcon}
              paragraph="You can count on our support and expertise every step of the way, so you can focus on your business’s growth and success."
            />
          </div>
        </div>
      </div>
      <div>
        <center>
          <h1>Featured Products</h1>
        </center>
      </div>
      <div className="col-md-12  features-container">
        <div className="col-md-10 flexy">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-6">
            <h3>educare for Business</h3>
            <p>
              Empower your team to work smarter, not harder, with our powerful
              software solution that simplifies complex tasks, frees up time,
              and drives business growth.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};
