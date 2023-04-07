import React from "react";
import { RandomComponent } from "./RandomComponent/RandomComponent";
import "./_home.scss";
import RedIcon from "../../assets/images/red-dots.svg";
import BlueIcon from "../../assets/images/blue-dots.svg";
import YellowIcon from "../../assets/images/yellow-dots.svg";
import HalfCircle from "../../assets/images/half-circle.svg";
import People from "../../assets/images/people.svg";
import Mail from "../../assets/images/edit.svg";
import People2 from "../../assets/images/people2.svg";
import Features from "./Features/Features";

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
      <div className="features-heading">
        <center>
          <h1>Featured Products</h1>
        </center>
      </div>
      <div className="col-md-12  flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10  features-container flexy">
          <div className="col-md-6 first-container">
            <h3>educare for Business</h3>
            <p>
              Empower your team to work smarter, not harder, with our powerful
              software solution that simplifies complex tasks, frees up time,
              and drives business growth.
            </p>
            <button>Get Started</button>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="Finance"
                  detail="The one and only accounting and payroll solution your business will ever need"
                  icon={HalfCircle}
                />{" "}
              </div>{" "}
              <div className="col-md-6">
                <Features
                  feature="HR Manager"
                  detail="The one and only accounting and payroll solution your business will ever need"
                  icon={People2}
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy second-grid">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="MailBox"
                  detail="Simplify communication with our powerful mailbox"
                  icon={Mail}
                />{" "}
              </div>{" "}
              <div className="col-md-6">
                <Features
                  feature="Facility Management"
                  detail="Optimize your workforce with our staff management module."
                  icon={People}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12  flexy" style={{ marginTop: "200px" }}>
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10  features-container flexy">
          <div className="col-md-6 first-container">
            <h3>educare for Business</h3>
            <p>
              Empower your team to work smarter, not harder, with our powerful
              software solution that simplifies complex tasks, frees up time,
              and drives business growth.
            </p>
            <button>Get Started</button>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="Finance"
                  detail="The one and only accounting and payroll solution your business will ever need"
                  icon={HalfCircle}
                />{" "}
              </div>{" "}
              <div className="col-md-6">
                <Features
                  feature="HR Manager"
                  detail="The one and only accounting and payroll solution your business will ever need"
                  icon={People2}
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy second-grid">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="MailBox"
                  detail="Simplify communication with our powerful mailbox"
                  icon={Mail}
                />{" "}
              </div>{" "}
              <div className="col-md-6">
                <Features
                  feature="Facility Management"
                  detail="Optimize your workforce with our staff management module."
                  icon={People}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
