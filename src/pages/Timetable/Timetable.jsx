import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Clockwise from "../../assets/images/lottie1.json";
import Notification from "../../assets/images/bell.png";
import Notification2 from "../../assets/images/bell_faded.png";
import Support from "../../assets/images/support.png";
import Support2 from "../../assets/images/support_faded.png";
import Customize from "../../assets/images/pencil.png";
import Sync from "../../assets/images/sync.png";
import Sync2 from "../../assets/images/sync_faded.png";
import Conflict from "../../assets/images/thief.png";
import Calender from "../../assets/images/views.png";
import Calender2 from "../../assets/images/views2.png";
import { Link, NavLink } from "react-router-dom";
import Lottie from "react-lottie-player";

import "./timetable.scss";
import TimetableFeatures from "./TimetableFeatures/TimetableFeatures";
import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
import Prices from "../../components/Prices/Prices";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import Badge from "../../components/Badge/Badge";
import TimetableFAQ from "./TimetableFAQ/TimetableFAQ";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
function Timetable() {
  return (
    <>
      <div className="col-md-12 timetable-nav col-12">
        {" "}
        <NavTwo title="Timetable" />
      </div>
      <div style={{ height: "140px" }} />
      <div className="col-md-12 timetable-container">
        <center>
          <div className="col-md-5 timetable-div">
            <Heading
              bg="transparent"
              color="#4A13B2"
              boda="solid 1px #4A13B2"
              text="Introducing Timetable"
            />
            <h1>Get more done in less time!</h1>
            <p>
              Say goodbye to messy paper schedules and hello to easy time
              management with our time table software module. With customizable
              schedules, syncing across all devices, and collaboration features,
              managing your time has never been easier.
            </p>
            <center className="btns">
              <GetStartedForm
                text=" Get started"
                bg="#4A13B2"
                cls="gsmtime"
                bgbtn="#4A13B2"
                backdropbg="modal-backdrop-purple"
              />
              <button className="demo">Request for demo</button>
            </center>
          </div>
        </center>
        <center>
          <div className="col-md-5">
            <Lottie loop animationData={Clockwise} play className="l" />
          </div>
        </center>
      </div>
      <div id="features" />
      <div className="col-md-12 shadowed features-main flexy">
        <div className="features-divd col-md-10 offset-md-1 flexy">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-4">
            <div className="col-md-11">
              <TimetableFeatures
                icon={Calender2}
                title="Multiple calendar views"
                paragraph="Our product allows you choose how to view your schedule, whether it be daily, weekly, or monthly views, to help stay organized and get a better sense of their schedule at a glance."
              />
            </div>
          </div>{" "}
          <div className="col-md-4 one">
            <div className="col-md-11">
              <TimetableFeatures
                icon={Customize}
                title="Customizable schedules"
                paragraph="Users can create and manage their schedules easily with the ability to add events, set reminders, and create their schedule to make it more easier to understand and simplify."
              />
            </div>
          </div>
        </div>{" "}
        <div className="col-md-1 dn">
          {" "}
          <img
            className=" "
            src={Notification2}
            alt="Scholar"
            width="70px"
            height="70px"
          />
        </div>
      </div>{" "}
      <div className="features-divd col-md-10 offset-md-1  flexy">
        <div className="col-md-2 dn">
          <img className=" " src={Support2} alt="Scholar" width="20%" />
        </div>
        <div className="col-md-4">
          <div className="col-md-11">
            <TimetableFeatures
              icon={Notification}
              title="Notifications and reminders"
              paragraph="Sending notifications and reminders to users about upcoming events, classes, or appointments, helping them stay on top of their schedule and never miss an important deadline.."
            />
          </div>
        </div>{" "}
        <div className="col-md-4 one">
          <div className="col-md-11">
            <TimetableFeatures
              icon={Sync}
              title="Syncing across devices"
              paragraph="Our software automatically syncs changes made to the schedule across all devices, so users can access their schedule from anywhere, whether it be on their phone, tablet, or computer.."
            />
          </div>
        </div>
        <div className="col-md-1 offset-md-2 dn">
          {" "}
          <img className=" " src={Calender} alt="Scholar" width="50%" />
        </div>
      </div>{" "}
      <div className="features-divd col-md-10   flexy last-row">
        <div className="col-md-2 dn">
          <img className=" " src={Sync2} alt="Scholar" width="25%" />
        </div>
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-4">
          <div className="col-md-11">
            <TimetableFeatures
              icon={Support}
              title="Customer support"
              paragraph="We offer customer support to ensure that users can get help if they encounter any issues or have questions about how to use the software, making it easier for users to get the most out of the software."
            />
          </div>
        </div>{" "}
        <div className="col-md-4 one">
          <div className="col-md-11">
            <TimetableFeatures
              icon={Conflict}
              title="Conflict detection"
              paragraph="Alerts are sent if there are any scheduling conflicts, helping users avoid double-booked appointments or overlapping classes."
            />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <DashboardDisplay />
      </div>
      <center>
        <h1 id="pricing">Select a plan to go virtual </h1>
      </center>
      <div className="grad col-md-12">
        {" "}
        <div className="col-md-10 offset-md-1 flexy mb5 mt5">
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Basic"
                amount="100.00"
                paragraph="Per Student (Monthly)"
                annualAmount="75 billed annually"
                url={""}
                currency="₦"
                btnBg="#4A13B2"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container">
            <div
              className="offset-md-3 offset-5"
              style={{ marginBottom: "-50px" }}
            >
              <Heading
                bg="#FFD5EB"
                color="#CC006E"
                boda="solid 1px #FFD5EB"
                text="Recommended"
              />
            </div>
            <div className="col-md-11">
              <SimplePrices
                package="e-learning"
                amount="200.00"
                paragraph="Per Student (Monthly)"
                annualAmount="150 billed annually"
                url={""}
                currency="₦"
                active="active-button "
                cls="recommendedT"
                btnBg="#4A13B2"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Premium"
                amount="500.00"
                paragraph="Per Student (Monthly)"
                annualAmount="450 billed annually"
                url={""}
                currency="₦"
                btnBg="#4A13B2"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                btnBg="#4A13B2"
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
          <Link to={""} className="link">
            Pricing page
          </Link>
          {""} for complete details
        </p>
      </center>
      <div className="col-md-10 offset-md-1 timetable-schedule flexy">
        <div className="col-md-3 schedule-header">
          <h2>
            Stay on top of your schedule, <br />
            no matter where you are
          </h2>
        </div>
        <center>
          <GetStartedForm
            text=" Get started"
            bg="#0098DA"
            cls="gsmcal"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
          <button className="demo">Request for demo</button>
        </center>
      </div>
      <div className="col-md-8 offset-md-2 mt">
        <center>
          <h1>Frequently asked questions</h1>
        </center>
        <TimetableFAQ />
      </div>
    </>
  );
}

export default Timetable;
