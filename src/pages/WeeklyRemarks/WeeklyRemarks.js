import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Aisa from "../../assets/images/aisa.svg";
import Key from "../../assets/images/keygirl.svg";
import Ball1 from "../../assets/images/r-ball1.svg";
import Ball2 from "../../assets/images/r-ball2.svg";
import Ball3 from "../../assets/images/r-ball3.svg";
import { Link, NavLink } from "react-router-dom";

import "./weekly-remarks.scss";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import Badge from "../../components/Badge/Badge";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
function WeeklyRemarks() {
  return (
    <>
      <div className="col-md-12 nav-div">
        {" "}
        <NavTwo title="Weekly Remarks" />
      </div>
        <div style={{ height: "140px" }} />
      <div className="col-md-12 weeky-intro">
        <div className="col-md-2 " style={{ marginTop: "350px" }}>
          <img className="" src={Ball2} alt="Scholar" />
        </div>
        <center>
          <div
            className=" col-md-6 remark-intro-div flexy"
            style={{ marginTop: "-350px" }}
          >
            <div className="col-md-2">
              <img className="ms" src={Ball1} alt="Scholar" />
            </div>
            <div className="col-md-10">
              {" "}
              <Heading
                text="Introducing Weekly Remarks"
                background="#fff"
                boda="solid 1px #11A377"
                color="#11A377"
              />
              <h1 className="col-md-10 reco-alt">
                Stay on top of your week, every week!
              </h1>
              <p>
                Maximize your efficiency and achieve your goals with Weekly
                Remarks’ effective task management and time tracking
                capabilities which can provide you with numerous benefits that
                can help you improve your productivity, reduce stress, and
                achieve greater success in your personal and professional life.
              </p>
              <center>
                <GetStartedForm
                  text=" Get started"
                  bg="#C32BD6"
                  cls="gsmwr"
                  bgbtn="#0098DA"
                  backdropbg="modal-backdrop-dark"
                />
                <button className="demo">Request for demo</button>
              </center>
            </div>
            <div
              className="col-md-2 offset-md-4"
              style={{ marginTop: "250px" }}
            >
              <img className="ms" src={Ball3} alt="Scholar" />
            </div>
          </div>
        </center>
      </div>

      <div className="teams mt7">
        {" "}
        <center>
          <h2>Trusted by teams at</h2>
        </center>
        <center>
          {" "}
          <img className="aisa" src={Aisa} alt="Scholar" />
          <img className="ms" src={Microsoft} alt="Scholar" />
          <img className="flutter" src={Flutterwave} alt="Scholar" />
        </center>
      </div>
      <div id="features" />
      <center>
        <h1 className="reco-alt mt">educare Weekly remarks for all</h1>
      </center>
      <div className="col-md-12 flexy weekly-remarks mt6">
        <div className="col-md-4">
          <div className="col-md-12 remarks task">
            <center>
              <h3>Task Management</h3>
              <p>
                Educare Weekly Remark can help you manage your tasks and
                workload effectively, ensuring you stay on track and meet your
                deadlines.
              </p>
            </center>
          </div>
          <div className="col-md-12 remarks stress">
            {" "}
            <center>
              <h3>Stress Reduction</h3>
              <p>
                By helping you stay organized and on track, Weekly Remark can
                reduce stress and anxiety associated with overwhelming workloads
                and deadlines.
              </p>
            </center>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 remarks time">
            <center>
              <h3>Time Management</h3>
              <p>
                Manage your time more efficiently by tracking the amount of time
                you spend on each task and identifying areas where you can
                improve.
              </p>
            </center>
          </div>
          <div className="col-md-12 remarks motivate">
            {" "}
            <center>
              <h3>Motivation</h3>
              <p>
                Weekly Remark can help you stay motivated by providing you with
                a sense of progress and accomplishment as you complete tasks and
                achieve goals.
              </p>
            </center>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-12 remarks report">
            <center>
              <h3>Reporting</h3>
              <p>
                Get weekly reports that summarize your accomplishments, goals,
                and tasks, helping you to identify areas for improvement and
                celebrate your successes.
              </p>
            </center>
          </div>
          <div className="col-md-12 remarks reflect">
            {" "}
            <center>
              <h3>Reflection</h3>
              <p>
                Educare weekly remark helps you reflect on your accomplishments
                and identify areas where you can improve, providing you with
                valuable insights into your personal and professional growth.
              </p>
            </center>
          </div>
        </div>
      </div>
      <center>
        <h1 className="mtt mb5" id="pricing">
          Our simple prices made for you{" "}
        </h1>
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
                btnBg="#C32BD6"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container ">
            <div
              className="offset-md-5 offset-5"
              style={{ marginBottom: "-50px" }}
            >
              <Heading
                bg="#fff"
                color="#C32BD6"
                boda="solid 1px #C32BD6"
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
                cls="recommended5"
                btnBg="#C32BD6"
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
                btnBg="#C32BD6"
              />
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: "-20px" }}>
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                btnBg="#C32BD6"
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
      <div className="col-md-12 unlock-remark mt">
        <center>
          <div className="col-md-3">
            <img className="" src={Key} alt="Scholar" width="100%" />
          </div>
          <center>
            <div className="col-md-4">
              <h3 className=" reco-alt mt4">
                Unlock your potential, week by week!
              </h3>
              <center>
                <button className="started">Get started</button>
                <button className="demo">Request for demo</button>
              </center>
            </div>
          </center>
        </center>
      </div>
    </>
  );
}

export default WeeklyRemarks;
