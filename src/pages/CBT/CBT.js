import React, { useEffect } from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Icon1 from "../../assets/images/cbt-bell.png";
import Icon2 from "../../assets/images/cbt-cs.png";
import Icon3 from "../../assets/images/cbt-cal.png";
import Player1 from "../../assets/images/cbt-lottie.json";
import Lottie from "react-lottie-player";

import "./cbt.scss";
import Prices from "../../components/Prices/Prices";
import { Link } from "react-router-dom";
import { Prefooter } from "../../components/Prefooter/Prefooter";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
function CBT() {
  const handleScroll = () => {
    const $element = document.querySelector(".parallax");
    const $follow = $element.querySelector(".follow");
    const followHeight = $follow.offsetHeight;
    const height = $element.offsetHeight;
    const window_height = window.innerHeight;

    const pos = window.pageYOffset || document.documentElement.scrollTop;
    const top = $element.offsetTop;

    // Check if element totally above or totally below viewport
    if (top + height - followHeight < pos || top > pos + window_height) {
      return;
    }

    const offset = parseInt(pos - top);
    console.log("pos", pos, "top", top, "offset", offset);
    if (offset > 0) {
      $follow.style.transform = `translateY(${offset}px)`;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });
  return (
    <>
      <div className="col-md-12 cbt-nav-div">
        {" "}
        <NavTwo title="CBT" />
      </div>
      <div className="col-md-12 cbt-intro">
        <center>
          <div className=" col-md-6 cbt-intro-div ">
            <div className="col-md-12">
              {" "}
              <Heading
                text="Introducing CBT"
                bg="transparent"
                boda="solid 1px #11A377"
                color="#11A377"
              />
              <h1 className=" reco-alt">
                Harness the Power of Seamless Computer-Based Testing for school
              </h1>
              <p>
                Our cutting-edge Computer-Based Testing (CBT) platform
                revolutionizes the way you assess your abilities. With a
                user-friendly interface, instant results, adaptive testing, and
                robust security measures, our CBT system empowers you to
                showcase your skills with precision and confidence.
              </p>
              <center>
                <GetStartedForm
                  text=" Get started"
                  bg="#11A377"
                  cls="gsmcbt"
                  bgbtn="#11A377"
                  backdropbg="modal-backdrop-green"
                />
                <button className="demo">Request for demo</button>
              </center>
            </div>
          </div>
        </center>
        {/* <div id="features" /> */}
        <div className="potential-div col-md-12  flexy parallax" id="features">
          <div className="col-md-4 follow ">
            {" "}
            <h1 className="col-md-12">
              “Unleash Your Potential: Experience Seamless Computer-Based
              Testing.
            </h1>
            <div className="mtt">
              {" "}
              <img
                className="aisa"
                src={Icon2}
                alt="Scholar"
                width="10%"
                height="10%"
              />
            </div>
          </div>
          <div className="col-md-5 numbers-container offset-md-7 text">
            {" "}
            <div className="col-md-10">
              <div className="flexy flexyM ">
                <div className="col-md-2 number-div col-3">
                  <h1>1</h1>
                </div>
                <div className="col-md-10 col-9">
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
                <div className="col-md-2 number-div col-3">
                  <h1>2</h1>
                </div>
                <div className="col-md-10 col-9">
                  <h2>Instant Results:</h2>
                  <p className="mt4">
                    No more waiting for days to receive your test scores. Our
                    CBT module provides immediate feedback and generates instant
                    results upon completion of the exam. You’ll know how you
                    performed right away, allowing for timely assessment and
                    decision-making.
                  </p>
                  <img
                    className="offset-md-10"
                    src={Icon1}
                    alt="Scholar"
                    width="20%"
                    height="20%"
                  />
                </div>
              </div>{" "}
              <div className="flexy flexyM mt">
                <div className="col-md-2 number-div col-3">
                  <h1>3</h1>
                </div>
                <div className="col-md-10 col-9">
                  <h2>Adaptive Testing</h2>
                  <p className="mt4">
                    Our CBT module utilizes adaptive testing techniques to
                    personalize the assessment based on your skill level and
                    performance. The system dynamically adjusts the difficulty
                    and sequence of questions, ensuring a tailored test
                    experience that accurately measures your abilities.
                  </p>{" "}
                  <img
                    className="offset-md-11"
                    src={Icon3}
                    alt="Scholar"
                    width="15%"
                    height="15%"
                  />
                </div>{" "}
              </div>
              <div className="flexy flexyM mt">
                <div className="col-md-2 number-div col-3">
                  <h1>4</h1>
                </div>
                <div className="col-md-10 col-9">
                  <h2>Enhanced Security</h2>
                  <p className="mt4">
                    Rest assured that test integrity is a top priority. Our CBT
                    module incorporates robust security measures to prevent
                    cheating and maintain the confidentiality of the exam.
                    Randomized question orders, time limits, and monitoring
                    systems work together to ensure a fair and secure testing
                    environment.
                  </p>{" "}
                </div>
              </div>
              <div className="flexy flexyM mt">
                <div className="col-md-2 number-div col-3">
                  <h1>5</h1>
                </div>
                <div className="col-md-10 col-9">
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
        <div className="col-md-10 offset-md-1 flexy cbt-summary">
          <div className="col-md-5">
            <div className="flexy flexyM ">
              <div className=" col-md-2 dotts dot1 col-3" />
              <div className="col-md-10 col-9">
                <h2>Intuitive User Interface</h2>
                <p>
                  We provide a user-friendly interface that simplifies the
                  testing process. Effortlessly navigate through the exam,
                  swiftly select answers, and submit your responses with ease.
                  Experience a seamless transition that allows you to focus on
                  showcasing your knowledge and skills.
                </p>
              </div>
            </div>
            <div className="flexy flexyM ">
              <div className=" col-md-2 dotts dot2 col-3" />
              <div className="col-md-10 col-9">
                <h2>Comprehensive Reporting</h2>
                <p>
                  Our CBT platform generates detailed reports and analytics,
                  providing valuable insights into your performance. Dive deep
                  into individual and group statistics, identify areas of
                  strength and improvement, and make data-driven decisions that
                  propel you towards success.
                </p>
              </div>
            </div>
            <div className="flexy flexyM ">
              <div className=" col-md-2 dotts dot3 col-2" />
              <div className="col-md-10 col-9">
                <h2>Efficient Test Administration</h2>
                <p>
                  CBTs streamline the test administration process by automating
                  tasks like registration, scheduling, and result generation,
                  saving time and resources.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="flexy flexyM ">
              <div className=" col-md-2 dotts dot4 col-3" />
              <div className="col-md-10 col-9">
                <h2>Security and Integrity</h2>
                <p>
                  Our CBT system incorporates robust security measures to
                  maintain a fair and trustworthy environment. From randomized
                  question orders to built-in monitoring systems, we ensure that
                  your exam experience is free from any form of cheating or
                  compromise. Rest assured that your assessment is conducted
                  with the utmost professionalism and confidentiality.
                </p>
              </div>
            </div>
            <Lottie loop animationData={Player1} play className="lottieee" />
          </div>
        </div>
      </div>
      <div className="cbt-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦800/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our CBT.
            </p>
          </div>
        </div>
        <div className="offset-md-4 recomendF">
          {" "}
          <button>Recommended</button>
        </div>
        <div className="col-md-10 offset-md-1 flexy prices-contain">
          <div className="col-md-3 zoom curve">
            {" "}
            <Prices
              package="Basic"
              amount="400.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Professional"
              amount="600.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Premium"
              amount="800.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom curve2">
            {" "}
            <Prices
              package="Enterprise"
              amount="Contact Us"
              url={""}
              // clss="curve2"
              // btnBg="#ed2f59"
            />
          </div>
        </div>
        <center>
          <p>
            Kindly check out our{" "}
            <Link to={"/educare-business"} className="link">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div>
      <Prefooter textb="Embrace the power of seamless CBT and unlock your true potential today!”" />
    </>
  );
}

export default CBT;
