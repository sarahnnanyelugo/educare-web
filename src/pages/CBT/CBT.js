import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Icon1 from "../../assets/images/cbt-bell.png";
import Icon2 from "../../assets/images/cbt-cs.png";
import Icon3 from "../../assets/images/cbt-cal.png";

import "./cbt.scss";
function CBT() {
  return (
    <>
      <div className="col-md-12 cbt-nav-div">
        {" "}
        <NavTwo title="CBT" />
      </div>
      <div className="col-md-12 cbt-intro">
        <center>
          <div className=" col-md-6 cbt-intro-div ">
            <div className="col-md-10">
              {" "}
              <Heading
                text="Introducing CBT"
                bg="transparent"
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
                <button className="started">Get started</button>
                <button className="demo">Request for demo</button>
              </center>
            </div>
          </div>
        </center>
        <div className="potential-div col-md-12  flexy">
          <div className="col-md-5 ">
            <h1 className="col-md-9">
              “Unleash Your Potential: Experience Seamless Computer-Based
              Testing.
            </h1>
            <div className="mtt">
              {" "}
              <img className="aisa" src={Icon2} alt="Scholar" />
            </div>
          </div>
          <div className="col-md-6 numbers-container offset-md-1">
            {" "}
            <div className="col-md-8">
              <div className="flexy flexyM ">
                <div className="col-md-2 number-div">
                  <h1>1</h1>
                </div>
                <div className="col-md-10">
                  <h2>Seamless Test Experience</h2>
                  <p className="mt4">
                    Our intuitive interface ensures a smooth and user-friendly
                    testing experience. Navigating through the questions,
                    selecting answers, and submitting your responses is simple
                    and straightforward.
                  </p>
                </div>
              </div>
              <div className="flexy flexyM mt">
                <div className="col-md-2 number-div">
                  <h1>2</h1>
                </div>
                <div className="col-md-10">
                  <h2>Instant Results:</h2>
                  <p className="mt4">
                    No more waiting for days to receive your test scores. Our
                    CBT module provides immediate feedback and generates instant
                    results upon completion of the exam. You’ll know how you
                    performed right away, allowing for timely assessment and
                    decision-making.
                  </p>
                </div>
                <img
                  className="aisa"
                  src={Icon1}
                  alt="Scholar"
                  width="20%"
                  height="20%"
                />
              </div>{" "}
              <div className="flexy flexyM mt">
                <div className="col-md-2 number-div">
                  <h1>3</h1>
                </div>
                <div className="col-md-10">
                  <h2>Adaptive Testing</h2>
                  <p className="mt4">
                    Our CBT module utilizes adaptive testing techniques to
                    personalize the assessment based on your skill level and
                    performance. The system dynamically adjusts the difficulty
                    and sequence of questions, ensuring a tailored test
                    experience that accurately measures your abilities.
                  </p>
                </div>
              </div>
              <div className="flexy flexyM mt">
                <div className="col-md-2 number-div">
                  <h1>4</h1>
                </div>
                <div className="col-md-10">
                  <h2>Enhanced Security</h2>
                  <p className="mt4">
                    Rest assured that test integrity is a top priority. Our CBT
                    module incorporates robust security measures to prevent
                    cheating and maintain the confidentiality of the exam.
                    Randomized question orders, time limits, and monitoring
                    systems work together to ensure a fair and secure testing
                    environment.
                  </p>
                </div>
              </div>
              <div className="flexy flexyM mt">
                <div className="col-md-2 number-div">
                  <h1>5</h1>
                </div>
                <div className="col-md-10">
                  <h2>Comprehensive Reporting</h2>
                  <p className="mt4">
                    Detailed reports and analytics are generated to provide
                    valuable insights into test performance. You’ll have access
                    to comprehensive data on individual and group performance,
                    allowing for informed decision-making and targeted
                    improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CBT;
