import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Clockwise from "../../assets/images/lottie1.json";
import Notification from "../../assets/images/bell.png";
import Support from "../../assets/images/support.png";
import Support2 from "../../assets/images/support_faded.png";
import Customize from "../../assets/images/pencil.png";
import Sync from "../../assets/images/sync.png";
import Sync2 from "../../assets/images/sync_faded.png";
// import Sync2 from "../../assets/images/sync_faded.png";
// import Sync2 from "../../assets/images/sync_faded.png";
import Lottie from "react-lottie-player";

import "./timetable.scss";
import TimetableFeatures from "./TimetableFeatures/TimetableFeatures";
function Timetable() {
  return (
    <>
      <div className="col-md-12 timetable-nav sticky-top">
        {" "}
        <NavTwo title="Timetable" />
      </div>
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
              <button className="started">Get Started</button>
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
      <div className="features-div col-md-8 offset-md-2 flexy">
        <div className="col-md-6">
          <div className="col-md-11">
            <TimetableFeatures
              title="Multiple calendar views"
              paragraph="Our product allows you choose how to view your schedule, whether it be daily, weekly, or monthly views, to help stay organized and get a better sense of their schedule at a glance."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timetable;
