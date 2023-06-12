import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./calendar.scss";
import Wallet3 from "../../assets/images/fin-icon.svg";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import FAQ from "./FAQ/FAQ";
import SimplePrices from "../PastoralPage/SimplePrices/SimplePrices";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";

function Calendar() {
  return (
    <>
      <div className="col-md-12 calendar-nav-div">
        {" "}
        <NavTwo title="Calendar" />
      </div>
      <div className="calendar-div col-md-12">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt6">
            <h1>Get more done in less time!</h1>
            <p>
              Stay organized and never forget a deadline or appointment with our
              reliable calendar software.
            </p>
            <button className="demo">Request for demo</button>
          </div>
          <div className="col-md-4 offset-md-2">
            {" "}
            <Form bg="#0098DA" text="Get started" body="transparent" />
          </div>
        </div>
      </div>
      <center>
        <h1 className="reco-alt mt">
          Seamless Scheduling Made Simple with educare Calendar
        </h1>
      </center>
      <div className="col-md-10 flexy cal-management offset-md-1 mt7">
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Wallet3} alt="Scholar" />

            <h4>Create events anytime</h4>
            <p>
              Be able to create new events by specifying the title, date, time,
              duration, location, and any additional details or notes. It is
              that easy and straight to the point.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Wallet3} alt="Scholar" />

            <h4>Manage events seamlessly</h4>
            <p>
              You can view, edit, and delete existing events. You can also set
              reminders or notifications for upcoming events so you never miss
              all that goes on.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Wallet3} alt="Scholar" />

            <h4>Scheduling</h4>
            <p>
              The module can assist users in finding available time slots for
              scheduling events, taking into account existing appointments and
              conflicts.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 grad">
        <div className="col-md-10 flexy cal-management offset-md-1 mt7 ">
          <div className="col-md-4">
            <div className="col-md-11 wallet">
              <img className="" src={Wallet3} alt="Scholar" />

              <h4>Collaboration and Sharing</h4>
              <p>
                Users can share calendars with others, allowing for
                collaborative scheduling and coordination. This feature is
                particularly useful in team environments.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 wallet">
              <img className="" src={Wallet3} alt="Scholar" />

              <h4>Calendar Views</h4>
              <p>
                The module provides various views to display events, including
                daily, weekly, monthly, and agenda views. These views allow
                users to easily navigate and visualize their schedules.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 wallet">
              <img className="" src={Wallet3} alt="Scholar" />

              <h4>Recurring Events</h4>
              <p>
                Support for recurring events is crucial, allowing users to
                create events that repeat daily, weekly, monthly, or on custom
                schedules.
              </p>
            </div>
          </div>
        </div>
      </div>
      <center>
        <h1 className="mtt">Frequently asked questions</h1>
      </center>
      <div className="col-md-8 offset-md-2">
        {" "}
        <FAQ />
      </div>
      <center>
        <h1 className="mt ">Our simple prices made for you </h1>
      </center>
      <div className="grad col-md-12 mt8">
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
              className="offset-md-3 offset-5"
              style={{ marginBottom: "-50px" }}
            >
              <Heading
                bg="#CEF0FF"
                color="#0098DA"
                boda="solid 1px #CEF0FF"
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
    </>
  );
}

export default Calendar;
