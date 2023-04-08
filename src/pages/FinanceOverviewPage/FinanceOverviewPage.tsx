import React from "react";

import { Link, NavLink } from "react-router-dom";
import Finance from "../../assets/images/half-circle.svg";
import Mailbox from "../../assets/images/edit.svg";
import Facility from "../../assets/images/people.svg";
import HR from "../../assets/images/people2.svg";
import Video from "../../assets/images/watch.svg";
import FinanceDashboard from "../../assets/images/finance.png";
import HRDashboard from "../../assets/images/hr.png";
import MailboxDashboard from "../../assets/images/mailbox.png";
import FacilityDashboard from "../../assets/images/facility.png";

import "./finance-overview-page.scss";

export const FinanceOverviewPage = () => {
  return (
    <>
      <div className="col-md-12 top-nav-container sticky-top">
        <div className="topnav-heading offset-md-1">
          <h5>educare for Business</h5>
        </div>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <Link to={""} className="top-nav-links">
              Features
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={""} className="top-nav-links">
              Pricing
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={""} className="top-nav-links">
              Resources
            </Link>
          </li>
        </ul>
        <div className="col-md-1">&nbsp;</div>
      </div>
      <div className="col-md-10 offset-md-1 flexy introduction-container">
        <div className="col-md-6">
          {" "}
          <div className="educare-for-business col-md-6">
            <h6>Introducing educare for Businesses</h6>
          </div>
          <h1>
            Streamline your business with our powerful apps made just for them.
          </h1>
          <p>
            educare apps for Businesses is designed to empower your team by
            simplifying complex tasks and automating time-consuming processes.
            With easy-to-use tools and seamless integration between different
            apps, your team can work smarter and more efficiently, freeing up
            valuable time to focus on strategic initiatives that drive business
            growth.
          </p>
          <div style={{ display: "flex" }}>
            <button>Get started</button>
            <button>Request for demo</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 operations">
        <center>
          <div className="col-md-5">
            {" "}
            <h3>
              A comprehensive system to manage all operations for your business
            </h3>
            <div className="flexy flexyM">
              {" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={Finance} alt="Scholar" width="100%" />
                <h6>Finance</h6>
              </div>{" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={Mailbox} alt="Scholar" width="100%" />
                <h6>MailBox</h6>
              </div>{" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={Facility} alt="Scholar" width="100%" />
                <h6>Facility Management</h6>
              </div>{" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={HR} alt="Scholar" width="100%" />
                <h6>HR Manager</h6>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="col-md-12 overview-video">
        <center>
          <div className="col-md-2 flexy flexyM">
            {" "}
            <img className="" src={Video} alt="Scholar" width="12%" />
            <h6>Watch Overview</h6>
          </div>
        </center>
      </div>
      <div className="col-md-12  flexy finance-container">
        <div className="col-md-5 offset-md-1">
          <div className="col-md-2 finance-heading">
            {" "}
            <h5>Finance</h5>
          </div>
          <h3>Automated employee reimbursements.</h3>
          <p>
            educare Finance automates the reimbursement approval process,
            ensuring that employees are reimbursed quickly and accurately.
            Expenses are automatically categorized and recorded in the correct
            accounts, eliminating the need for manual data entry.
          </p>
          <h3>Streamlined quote-to-cash process</h3>
          <p>
            Generate quotes and orders in one application and seamlessly fulfill
            them in another, with real-time availability of data. Invoice
            customers and collect payments promptly for improved cash flow
            management.
          </p>
        </div>
        <div className="col-md-6">
          <img className="" src={FinanceDashboard} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="col-md-12 flexy hr-container">
        <div className="col-md-7">
          {" "}
          <img className="" src={HRDashboard} alt="Scholar" width="90%" />
        </div>
        <div className="col-md-4 ">
          <div className="col-md-3 hr-header">
            <h5>HR Manager</h5>
          </div>
          <h3>
            Provide your employees with outstanding experiences they will never
            forget.
          </h3>
          <p>
            HR Manager is a cloud-based HR software that helps organizations
            streamline their HR operations in a rapidly changing work
            environment. It enables organizations to nurture their employees,
            adapt quickly to changes, and make HR management agile and
            effective. With HR Manager, you can simplify HR processes, retain
            top talent, and build a high-performing workforce while prioritizing
            the employee experience.
          </p>
          <h3>Streamlined quote-to-cash process</h3>
          <p>
            Eliminate the hassle of managing HR tasks with outdated spreadsheets
            or rigid systems. Upgrade to our smart and efficient HR software
            that includes features designed to automate administrative work and
            free up your time for more strategic initiatives.
          </p>
        </div>
      </div>
      <div className="col-md-12  flexy finance-container">
        <div className="col-md-4 offset-md-1">
          <div className="col-md-2 mail-heading">
            {" "}
            <h5>Mail</h5>
          </div>
          <h3>Simplifying core HR operations</h3>
          <p>
            Mail provides secure email hosting with state-of-the-art data
            centers that prioritize top-notch security and surveillance. With a
            dependable 99.9% uptime, you can trust that your email
            communications are always available. Enjoy peace of mind with email
            encryption both at rest and in transit.
          </p>
          <h3>Retain emails and quickly discovery</h3>
          <p>
            To comply with company standards and protect against legal attacks,
            it’s important to retain emails across your organisation for a
            specified period. allows for easy discovery of retained emails,
            helping you find the information you need quickly and efficiently.
          </p>
        </div>
        <div className="col-md-7">
          <img className="" src={FinanceDashboard} alt="Scholar" width="100%" />
        </div>
      </div>
    </>
  );
};
