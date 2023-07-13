import React from "react";

import { Link, NavLink } from "react-router-dom";

import FinanceDashboard from "../../assets/images/finance.png";
import HRDashboard from "../../assets/images/hr.png";
import MailboxDashboard from "../../assets/images/mailbox.png";
import FacilityDashboard from "../../assets/images/facility.png";
import Tick from "../../assets/images/tick2.png";

import "./educare-for-business.scss";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Operations from "../../components/Operations/Operations";
import OverviewVideo from "../../components/OverviewVideo/OverviewVideo";
import WhyEducare from "../../components/WhyEducare/WhyEducare";
import EducarePrivacy from "../../components/EducarePrivacy/EducarePrivacy";
import Finance from "../../assets/images/half-circle.svg";
import Mailbox from "../../assets/images/edit.svg";
import Facility from "../../assets/images/people.svg";
import HR from "../../assets/images/people2.svg";
import { Heading } from "../../components/Heading/Heading";
export const EducareForBusiness = () => {
  return (
    <>
      <div className="col-md-12 nav-two-business ">
        {" "}
        <NavTwo title="educare for Business" priceUrl={"/educare-packages"} />
      </div>
      <div style={{ height: "140px" }} />

      <div className="col-md-12 grad">
        {" "}
        <div className="col-md-10 offset-md-1 flexy introduction-container mt2 ">
          <div className="col-md-7 mt8 no-margin ">
            {" "}
            <Heading
              text="Introducing educare for Business"
              bg="#CEF0FF"
              color="#007AAE"
              boda="#CEF0FF"
            />
            <h1>
              Streamline your business with our powerful apps made just for
              them.
            </h1>
            <p>
              educare apps for Businesses is designed to empower your team by
              simplifying complex tasks and automating time-consuming processes.
              With easy-to-use tools and seamless integration between different
              apps, your team can work smarter and more efficiently, freeing up
              valuable time to focus on strategic initiatives that drive
              business growth.
            </p>
            {/* <div style={{ display: "flex" }}>
            <Link to={"/educare-packages"}>
              {" "}
              <button className="gs-button">Get started</button>
            </Link>
            <button className="demo-button">Request for demo</button>
          </div> */}
          </div>
          <div className="col-md-4 offset-md-1">
            <div className="col-md-11">
              {" "}
              <Form bg="#0098DA" text="Get started" body="#fff" />
            </div>
          </div>
        </div>
      </div>
      <div className="col--md-12  mt">
        <center>
          <div className="col-md-4">
            {" "}
            <h3>
              A comprehensive system to manage all operations for your business
            </h3>
          </div>
        </center>
      </div>
      <div className="col-md-12">
        {" "}
        <div className="col-md-6  offset-md-3 flexy">
          <div className="col-md-3">
            <Operations icon={Finance} title="Finance" url="" size="170px" />
          </div>{" "}
          <div className="col-md-3">
            <Operations icon={HR} title="HR Manager" url="" size="170px" />
          </div>{" "}
          <div className="col-md-3">
            <Operations icon={Mailbox} title="Mailbox" url="" size="170px" />
          </div>{" "}
          <div className="col-md-3">
            <Operations
              icon={Facility}
              title="Facility Management"
              url=""
              size="170px"
            />
          </div>
        </div>
      </div>
      <center>
        {" "}
        <div className="col-md-2 ">
          {" "}
          <OverviewVideo />
        </div>
      </center>
      <div className="col-md-12  flexy finance-container">
        <div className="col-md-5 offset-md-1">
          <Heading text="Finance" bg="#DED0FA" color="#3B0F8E" boda="#DED0FA" />
          <h3 className="mt3">Automated employee reimbursements.</h3>
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
          <Heading
            text="HR Manager"
            bg="#fdf5eb"
            color="#bf741c"
            boda="#fdf5eb"
          />
          <h3 className="mt3">
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
          <Heading text="Mail" bg="#f6e9f8" color="#b054bb" boda="#f6e9f8" />
          <h3 className="mt3">Simplifying core HR operations</h3>
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
      <div className="facility-management flexy mt">
        <div className="col-md-7">
          <img className="" src={FacilityDashboard} alt="Scholar" width="90%" />
        </div>
        <div className="col-md-4">
          <Heading
            text="Facility Management"
            bg="#eaedfe"
            color="#204bc8"
            boda="#eaedfe"
          />
          <h3 className="mt3">Automated employee reimbursements.</h3>
          <p>
            educare Finance automates the reimbursement approval process,
            ensuring that employees are reimbursed quickly and accurately.
            Expenses are automatically categorized and recorded in the correct
            accounts, eliminating the need for manual data entry.
          </p>
          <h3>Streamlined quote-to-cash process</h3>
          <p>
            Generate quotes and orders in one application and seamlessly fulfil
            them in another, with real-time availability of data. Invoice
            customers and collect payments promptly for improved cash flow
            management.
          </p>
          <h3>Prepared for subscription-based businesses</h3>
          <p>
            educare Finance offers a reliable recurring billing solution that
            adapts to the growing trend of subscription-based models, all while
            integrating traditional accounting methods seamlessly.
          </p>
        </div>
      </div>

      <div className="col-md-12 mt" style={{ marginTop: "190px" }}>
        {" "}
        <WhyEducare />
      </div>

      <EducarePrivacy
        heading="educare’s Privacy and Protection"
        paragraph=" educare ensures data privacy by implementing advanced security
            measures, including encryption and secure communication channels.
            The platform has no access to your data, and strict policies are in
            place to keep your data under your control. Trust us to keep your
            data safe and secure"
      />
    </>
  );
};

{
}
