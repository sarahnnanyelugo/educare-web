import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./pastoral-page.scss";
import PastoralDashboard from "../../assets/images/pastoral2.png";
// import Efficiency from "../../components/Efficiency/Efficiency";
import Setting from "../../assets/images/Layer.svg";
import Track from "../../assets/images/track.svg";
import Storage from "../../assets/images/data-storage.svg";
import Support from "../../assets/images/support.svg";
import Together from "../../assets/images/together.svg";
import Logo from "../../assets/images/logo2.png";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import { Link, NavLink } from "react-router-dom";
import { PartnersInlineDisplay } from "../../components/PartnersInlineDisplay/PartnersInlineDisplay";
import Badge from "../../components/Badge/Badge";
import Efficiency from "../../components/Efficiency/Efficiency";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function Pastoral(props) {
  return (
    <>
      <div className="col-md-12 pastoral-nav col-12">
        {" "}
        <NavTwo title="Pastoral" nav1="Features" nav3="Resources" />
      </div>
      <div style={{ height: "140px" }} />

      <div className="col-md-12 wellbeing">
        <center>
          <div className="col-md-5">
            {" "}
            <h2>Enhancing Student Well-Being</h2>
            <p>
              Pastoral provides a detailed platform for holistic student
              support, promoting well-being, engagement, and success,
              facilitating proactive interventions, simplifying pastoral care
              administration and communication, and empowering schools to
              prioritize student well-being and pastoral care.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#ED2F59"
              cls="gsmpst"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
            <button className="demo">Request for a demo</button>
          </div>
        </center>{" "}
      </div>
      <div className="empty-bg"></div>
      <div className="col-md-8 offset-md-2 pdash">
        {" "}
        <img
          className="   "
          src={PastoralDashboard}
          alt="Scholar"
          width="100%"
          height="100%"
        />
      </div>
      <div id="features" />

      <center>
        <div className="col-md-5 efficient">
          {" "}
          <h1>Run a more efficient student care for your schools</h1>
        </div>
      </center>
      <div className="rad col-md-12">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Streamlined management of pastoral care activities"
                icon={Setting}
                paragraph="Provides schools with a centralized platform to efficiently manage various pastoral care activities, such as tracking student attendance, behavior, and well-being, scheduling and documenting pastoral care interventions, and recording student interactions."
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Customizable tools for tracking student well-being"
                icon={Track}
                paragraph="Track and monitor the well-being and engagement of students with our customizable tools. This include features such as student check-ins, mood tracking, and behavior logs, which help schools identify students who may need additional support and interventions."
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Centralized data storage for easy access and analysis"
                icon={Storage}
                paragraph="Store and access pastoral care data, making it easy for schools to analyze trends, patterns, and outcomes related to student well-being. This data-driven approach allows schools to identify areas that require further attention and make informed decisions on pastoral care strategies."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 offset-md-3 flexy mt8">
        <div className="col-md-6">
          <div className="col-md-11">
            <Efficiency
              title="Facilitates proactive interventions for student support"
              icon={Support}
              paragraph="Support student by identifying students who may be facing challenges and providing timely interventions. The automated notifications and alerts help schools intervene early and provide targeted support to students, reducing the risk of students falling through the cracks."
            />
          </div>
        </div>{" "}
        <div className="col-md-6">
          <div className="col-md-11">
            <Efficiency
              title="Collaborative features for effective communication"
              icon={Together}
              paragraph="Collaborative features such as communication tools, shared notes, and progress tracking, which enable effective communication and coordination among school staff, parents, and students. This promotes a holistic approach to pastoral care by facilitating collaboration and alignment among all stakeholders."
            />
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 pastoral-management">
        <center>
          <div className="col-md-8">
            <h2>Enhance your Pastoral Care Management Process with</h2>
          </div>

          <center>
            <div className="col-md-3 flexy">
              <img className="" src={Logo} alt="Scholar" />{" "}
              <h6 style={{ marginTop: "20px" }}>Pastoral</h6>
            </div>
          </center>
          <div id="pricing" />
          <GetStartedForm
            text=" Get started"
            bg="#ED2F59"
            cls="gsmpst"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-pink"
          />
        </center>
      </div>
      {/* <center>
        <h1>Our simple prices made for you </h1>
      </center> */}
      {/* <div className="rad col-md-12">
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
                btnBg="#ed2f59"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container">
            <div className="offset-md-5 reco-badge">
              <Badge btnBg="#FCDCE3" btnColor="#ED2F59" />
            </div>
            <div className="col-md-11 ">
              <SimplePrices
                package="e-learning"
                amount="200.00"
                paragraph="Per Student (Monthly)"
                annualAmount="150 billed annually"
                url={""}
                currency="₦"
                active="active-button "
                cls="recommended"
                btnBg="#ed2f59"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11">
              <SimplePrices
                package="Premium"
                amount="500.00"
                paragraph="Per Student (Monthly)"
                annualAmount="450 billed annually"
                url={""}
                currency="₦"
                btnBg="#ed2f59"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                annualAmount=""
                url={""}
                btnBg="#ed2f59"
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
      <PartnersInlineDisplay /> */}
    </>
  );
}

export default Pastoral;
