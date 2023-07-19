import React, { useEffect, useRef, useState } from "react";
import "./report-table.scss";
import Dashboard from "../../../assets/images/report-dashboard.png";

function ReportTable() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="reports-tab col-md-10 offset-md-1">
        <div className="tabs col-md-12">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            Generate Results
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Students analysis
          </button>
          <button
            className={`tab ${checkActive(3, "active2")}`}
            onClick={() => handleClick(3)}
          >
            Teachers remark
          </button>{" "}
          <button
            className={`tab ${checkActive(4, "active2")}`}
            onClick={() => handleClick(4)}
          >
            Communication book
          </button>{" "}
        </div>{" "}
        <div className="panels col-md-12 ">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-12">
                  <img
                    className=""
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
                </div>

                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <h5>Generate Results</h5>
                <p>
                  Be able to provide thorough findings, streamlining the
                  procedure with our user-friendly platform, converting data
                  into meaningful reports, saving time, ensuring correctness,
                  and providing instructors with thorough performance analysis.
                </p>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {" "}
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-12">
                  <img
                    className=""
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
                </div>

                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <h5>Student Analysis</h5>
                <p>
                  Utilize powerful student analysis tools to gain deep insights
                  into students’ performance and progress, giving you a
                  comprehensive understanding of their academic path.
                </p>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            {" "}
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-12">
                  <img
                    className=""
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
                </div>

                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <h5>Teachers Remark</h5>
                <p>
                  Add personalised and insightful teacher comments to student
                  reports to add rich context and insightful feedback on each
                  student’s development.
                </p>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-12">
                  <img
                    className=""
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
                </div>

                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <h5>Grading system</h5>
                <p>
                  Tailor you report to match your specific grading scales,
                  weightage systems, and grade distribution methods. With its
                  powerful algorithms, it instantly calculates final grades
                  based on the weights and criteria you set.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportTable;
