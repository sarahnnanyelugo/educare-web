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
        <div className="flexy  ">
          <div className="col-md-8">
            <div className="col-md-12">
              <img className="" src={Dashboard} alt="Scholar" width="100%" />
            </div>

            <div className="bid-ball-rad col-md-6 " />
          </div>

          <div className="panels col-md-4 ">
            <div className="col-md-10">
              {" "}
              <div className={`panel ${checkActive(1, "active2")}`}>
                <h5>Generate Results</h5>
                <p>
                  Be able to generate comprehensive results, streamlining the
                  process with our intuitive platform, transforming data into
                  insightful reports, saving time, ensuring accuracy, and
                  empowering educators with comprehensive performance analysis.
                </p>
              </div>
              <div className={`panel ${checkActive(2, "active2")}`}>
                {" "}
                <h5>Student Analysis</h5>
                <p>
                  Gain deep insights into students performance and progress
                  through robust student analysis tools, providing a holistic
                  understanding of their academic journey. Utilize data-driven
                  student analysis to track trends, patterns, and growth over
                  time, fostering evidence-based decision-making and
                  personalized educational strategies.
                </p>
              </div>
              <div className={`panel ${checkActive(3, "active2")}`}>
                {" "}
                <h5>Teachers Remark</h5>
                <p>
                  Enrich student reports with personalized and meaningful
                  teachers’ remarks, providing valuable insights and feedback on
                  individual student performance and growth.
                </p>
              </div>
              <div className={`panel ${checkActive(4, "active2")}`}>
                <h5>Communication Book</h5>
                <p>
                  Enhance parent engagement by allowing them to actively
                  participate in their child’s education through the
                  communication book, enabling them to stay informed about
                  assignments, events, and academic milestones.
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
