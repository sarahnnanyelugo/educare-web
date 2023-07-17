import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./e-classroom.scss";
import WhyEClassroom from "./WhyEClassroom/WhyEclssroom";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Eclassroom from "../../assets/images/eclassroom_dashboard.png";
import Aisa from "../../assets/images/aisa.svg";
import EducarePrivacy from "../../components/EducarePrivacy/EducarePrivacy";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import Badge from "../../components/Badge/Badge";
import { Link } from "react-router-dom";
import Shield from "../../assets/images/security.json";
import Quote1 from "../../assets/images/lottieq1.json";
import Quote2 from "../../assets/images/quote2.json";
import Lottie from "react-lottie-player";

function EClassroomPage() {
  return (
    <>
      {" "}
      <div className="col-md-12 e-classroom-nav col-12">
        {" "}
        <NavTwo title="eClassroom" />
      </div>
      <div style={{ height: "140px" }} />
      <div className="col-md-12  e-classroom ">
        <div className="col-md-12  flexy">
          <div className="col-md-6 right-section ">
            {" "}
            <div className="col-md-8 offset-md-2">
              <Heading
                bg="#FCEBD7"
                color="#EA8713"
                text="Introducing eClassroom"
              />
              <h1>Virtual Learning and Collaboration</h1>
              <p>
                eClassroom is a dynamic and versatile software module designed
                to enhance virtual learning and collaboration within schools.
                Unlock a multitude of features and benefits that empower their
                educational environment.
              </p>
              <button>Request for demo</button>
            </div>
          </div>
          <div className="col-md-6  eclassroom-form">
            <div className="col-md-6 offset-md-3">
              {" "}
              <Form bg="#CC006E" text="Get started" body="#fff" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 why-eclassroom mt7 mb5">
        <WhyEClassroom />
      </div>
      <div className="teams mt">
        {" "}
        <center>
          <h2>Trusted by teams at</h2>
        </center>
        <center>
          {" "}
          <div className="row row-cols-2 row-cols-lg-3 col-12 col-md-6 ">
            {" "}
            <div className="col">
              <img className="aisa" src={Aisa} alt="Scholar" />
            </div>
            <div className="col mt2">
              <img className="ms" src={Microsoft} alt="Scholar" />
            </div>
            <div className="col mt2">
              {" "}
              <img className="flutter" src={Flutterwave} alt="Scholar" />
            </div>
          </div>
        </center>
      </div>
      <div id="features" />
      <center>
        <h1 className="reco-alt mt8">Classroom on the go</h1>
      </center>
      <div className="col-md-10 offset-md-1 mt9 on-d-go">
        <center className="flexy">
          <div className="col-md-4 mt5">
            <div className="col-md-10">
              {" "}
              <h3>Broadcast video classes</h3>
              <p>
                The medical module of educare is highly customizable, allowing
                schools to adapt it to their specific medical policies,
                procedures, and workflows. It is also scalable, making it
                suitable for schools of different sizes and types, from local
                schools to international institutions.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4 mt5">
            <div className="col-md-10">
              {" "}
              <h3>Interact with your students</h3>
              <p>
                The medical module of educare is highly customizable, allowing
                schools to adapt it to their specific medical policies,
                procedures, and workflows. It is also scalable, making it
                suitable for schools of different sizes and types, from local
                schools to international institutions.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4 mt5">
            <div className="col-md-10">
              {" "}
              <h3>Record and share classes</h3>
              <p>
                The medical module of educare is highly customizable, allowing
                schools to adapt it to their specific medical policies,
                procedures, and workflows. It is also scalable, making it
                suitable for schools of different sizes and types, from local
                schools to international institutions.
              </p>
            </div>
          </div>{" "}
        </center>
      </div>
      <div className="col-md-10 offset-md-1">
        <img className="" src={Eclassroom} alt="Scholar" width="100%" />
      </div>
      <div className="col-md-10 offset-md-1  privacy-container">
        {" "}
        {/* <EducarePrivacy
          heading="Enjoy secure virtual learning with educare’s Privacy and Protection"
          paragraph="educare ensures data privacy by implementing advanced security measures, including encryption and secure communication channels. We have no access to your data, and strict policies are in place to keep your data under your control. Trust us to keep your data safe and secure"
        /> */}
        <div className="col-md-12 flexy mt">
          <div className="col-md-2 offset-md-1">
            <Lottie
              loop
              animationData={Shield}
              play
              style={{ width: 366, height: 366, marginTop: "-110px" }}
            />
          </div>
          <div className="col-md-6 offset-md-2">
            <h2 style={{ fontFamily: "rebondG-Medium" }}>
              Enjoy secure virtual learning with educare’s Privacy and
              Protection
            </h2>
            <div className="col-md-12">
              {" "}
              <p>
                educare ensures data privacy by implementing advanced security
                measures, including encryption and secure communication
                channels. We have no access to your data, and strict policies
                are in place to keep your data under your control. Trust us to
                keep your data safe and secure
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 empty-cream" />
      <div className="col-md-12 trial-sign-up">
        <center>
          {" "}
          <Link to={"/sign-up"}>
            {" "}
            <button>Sign up for a free trial today</button>
          </Link>
        </center>
      </div>
      <div className="flexy lotie-quotes">
        <div className="col-md-2 offset-md-1">
          <div className="col-md-10">
            <Lottie loop animationData={Quote1} play />
          </div>
        </div>

        <div className="col-md-5">
          <div className="col-md-12">
            <center>
              {" "}
              <h3>
                “This is a very useful meeting tools, as we use educare to
                conduct classes even during the COVID pandemic, it was an easy
                choice to use educare eclassroom. “
              </h3>
            </center>
          </div>
        </div>
        <div className="col-md-2 offset-md-1" style={{ marginLeft: "40px" }}>
          <div className="col-md-10">
            <Lottie loop animationData={Quote2} play className="lquote" />
          </div>
        </div>
      </div>
      <center>
        <h1 id="pricing">Our simple prices made for you </h1>
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
                btnBg="#CE456D"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container">
            <div className="offset-md-4 offset-5    heading-adj">
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
                cls="recommended3"
                btnBg="#CE456D"
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
                btnBg="#CE456D"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                btnBg="#CE456D"
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
      {/* <div className="col-md-10 offset-md-1 tools-management">
        <center>
          <div className="col-md-8">
            <h2>We’ve got the tools you need</h2>
            <p>
              educare Medicals offers comprehensive platform for managing
              medical services in schools, ensuring the health and well-being of
              students
            </p>
          </div>

          <button>Sign up for a free trial today</button>
        </center>
      </div> */}
    </>
  );
}

export default EClassroomPage;
