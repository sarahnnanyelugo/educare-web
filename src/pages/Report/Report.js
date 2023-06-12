import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import CountUp from "react-countup";
import Icon1 from "../../assets/images/reportsicon.png";
import Icon2 from "../../assets/images/reportsicon2.png";
import Icon3 from "../../assets/images/reportsicon3.png";
import Dot1 from "../../assets/images/dot1.svg";
import Dot2 from "../../assets/images/dot2.svg";
import Dot3 from "../../assets/images/dot3.svg";
import Dot4 from "../../assets/images/dot4.svg";
import Player1 from "../../assets/images/reportslottie.json";
import Lottie from "react-lottie-player";
import "./report.scss";
import ReportTable from "./ReportTable/ReportTable";
import SimplePrices from "../PastoralPage/SimplePrices/SimplePrices";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";
function Report() {
  return (
    <>
      {" "}
      <div className="col-md-12 report-nav-div">
        {" "}
        <NavTwo title="Report" />
      </div>
      <div className="report-div col-md-12">
        <div className="col-md-11 offset-md-1 flexy">
          <div className="col-md-6 mtt  no-m">
            <img className="offset-md-8" src={Dot1} alt="Scholar" />
            <h1>Get more done in less time!</h1>
            <p className="col-md-10 flexy flexyM">
              <img
                className=""
                src={Dot2}
                alt="Scholar"
                style={{ marginLeft: "-qa5px" }}
              />
              Say goodbye to messy paper schedules and hello to easy time
              management with our time table software module. With customizable
              schedules, syncing across all devices, and collaboration features,
              managing your time has never been easier.
            </p>
            <img className="offset-md-9 mt5" src={Dot3} alt="Scholar" />
            <img className="offset-md-3 mt7" src={Dot4} alt="Scholar" />
          </div>
          <div className="col-md-6 formmy-dive">
            {" "}
            <div className="col-md-7 offset-md-3">
              {" "}
              <Form bg="#0098DA" text="Get started" body="#fff" />
            </div>
          </div>
        </div>
        <div className="col-md-10 offset-md-1 reports-journey flexy">
          <div className="col-md-4 div-1">
            <h1 className="col-md-9">A journey to easy school reports</h1>
          </div>
          <div className="flexy col-md-8">
            <div className="col-md-4 stat">
              <center>
                {" "}
                <h1>
                  {" "}
                  <CountUp
                    start={0}
                    end={100}
                    duration={3}
                    decimal=""
                    prefix=" "
                    suffix="+"
                    enableScrollSpy={true}
                  />
                </h1>
                <p>SCHOOLS SERVED</p>
              </center>
            </div>

            <div className="col-md-4 stat">
              <center>
                {" "}
                <h1>
                  {" "}
                  <CountUp
                    start={0}
                    end={5}
                    duration={3}
                    decimal=""
                    prefix=" "
                    suffix="Yrs"
                    enableScrollSpy={true}
                  />
                </h1>
                <p>OF SCHOOL REPORTING</p>
              </center>
            </div>

            <div className="col-md-4 stat">
              <center>
                {" "}
                <h1>
                  {" "}
                  <CountUp
                    start={0}
                    end={8}
                    duration={3}
                    decimal=""
                    prefix=" "
                    suffix="+Hrs"
                    enableScrollSpy={true}
                  />
                </h1>
                <p>SAVED BY SCHOOLS AT END OF TERM</p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <center>
        <h1 className="mtt   font-family: recoAltMedium;">
          How educare reports help you
        </h1>
      </center>
      <ReportTable />
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-4">
          <center>
            {" "}
            <div className="col-md-11 reports-feats">
              <img className="aisa" src={Icon1} alt="Scholar" height="54px" />
              <h5>Automated Data</h5>
              <p>
                Seamless integration with student information systems,
                gradebooks, and attendance tracking systems to automatically
                populate data into the report. This saves time and reduces the
                risk of errors.
              </p>
            </div>
          </center>
        </div>
        <div className="col-md-4">
          <center>
            {" "}
            <div className="col-md-11 reports-feats">
              <img className="aisa" src={Icon2} alt="Scholar" height="54px" />
              <h5>Data Export</h5>
              <p>
                Seamless integration with student information systems,
                gradebooks, and attendance tracking systems to automatically
                populate data into the report. This saves time and reduces the
                risk of errors.
              </p>
            </div>
          </center>
        </div>
        <div className="col-md-4">
          <center>
            {" "}
            <div className="col-md-11 reports-feats">
              <img className="aisa" src={Icon3} alt="Scholar " height="54px" />
              <h5>Automated Data</h5>
              <p>
                Seamless integration with student information systems,
                gradebooks, and attendance tracking systems to automatically
                populate data into the report. This saves time and reduces the
                risk of errors.
              </p>
            </div>
          </center>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy v-learning">
        <div className="col-md-3 offset-md-1">
          <Lottie loop animationData={Player1} play className="lottieee" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h1>
            Enjoy secure virtual learning with educare’s Privacy and Protection
          </h1>
          <p>
            educare ensures data privacy by implementing advanced security
            measures, including encryption and secure communication channels. We
            have no access to your data, and strict policies are in place to
            keep your data under your control. Trust us to keep your data safe
            and secure
          </p>
        </div>
      </div>
      <center>
        <h1 className="mtt mb5">Our simple prices made for you </h1>
      </center>
      <div className="grad col-md-12 mt">
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
              className="offset-md-5 offset-5"
              style={{ marginBottom: "-50px" }}
            >
              <Heading
                bg="#FCDCE3"
                color="#ED2F59"
                boda="#FCDCE3"
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
                cls="recommended6"
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
    </>
  );
}

export default Report;
