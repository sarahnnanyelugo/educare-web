import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./calendar.scss";
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
    </>
  );
}

export default Calendar;
