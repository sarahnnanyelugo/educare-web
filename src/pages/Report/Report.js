import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import CountUp from "react-countup";

import "./report.scss";
import ReportTable from "./ReportTable/ReportTable";
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
          <div className="col-md-6 mtt">
            <h1>Never Miss an Important Date</h1>
            <p>
              Say goodbye to messy paper schedules and hello to easy time
              management with our time table software module. With customizable
              schedules, syncing across all devices, and collaboration features,
              managing your time has never been easier.
            </p>
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
        <h1>How educare reports help you</h1>
      </center>
      <ReportTable />
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-4">
          <center>
            {" "}
            <div className="col-md-11 reports-feats">
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
    </>
  );
}

export default Report;
