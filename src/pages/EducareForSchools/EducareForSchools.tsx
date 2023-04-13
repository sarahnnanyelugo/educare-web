import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import { useLocation } from "react-router-dom";
import "./educare-for-schools.scss";
import { Link, NavLink } from "react-router-dom";
import Form from "../../components/Form/Form";
import Operations from "../../components/Operations/Operations";
import OverviewVideo from "../../components/OverviewVideo/OverviewVideo";
import Result from "../../assets/images/resultDashboard.png";
import Pastoral from "../../assets/images/pastoralDashboard.png";
import CBT from "../../assets/images/cbtDashboard.png";
import EClassroom from "../../assets/images/eclassroomDashboard.png";
import WhyEducare from "../../components/WhyEducare/WhyEducare";
import EducarePrivacy from "../../components/EducarePrivacy/EducarePrivacy";
import Finance from "../../assets/images/half-circle.svg";
import Mailbox from "../../assets/images/edit.svg";
import Facility from "../../assets/images/people.svg";
import HR from "../../assets/images/people2.svg";
export const EducareForSchools = () => {
  return (
    <>
      <div className="col-md-12 nav-two-for-schs sticky-top">
        {" "}
        <NavTwo title="educare for Schools" />
      </div>

      <div className="col-md-12 flexy for-schools-container">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6">
            <div className="educare-for-schools col-md-5">
              <p>Introducing educare for Businesses</p>
            </div>
            <h1>
              Elevate Your School’s Efficiency with educare for school modules
            </h1>
            <p>
              educare apps for Schools is a comprehensive software module that
              empowers schools with advanced tools for efficient school
              management and administration. With this, schools can streamline
              their operations, optimize administrative processes, and enhance
              overall efficiency.
            </p>
            <div className="flexy flexyM">
              <Link to={""}>
                <button className="for-schs-button">Get Started</button>
              </Link>
              <Link to={""}>
                <button className="demo-button">Request for demo</button>
              </Link>
            </div>
          </div>
          <div className="col-md-4 offset-md-1">
            <div className="col-md-11">
              {" "}
              <Form bg="#2f99da" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        {" "}
        <div className="col-md-4 offset-md-4 flexy">
          <div className="col-md-3">
            <Operations icon={Finance} title="Report" url="" size="120px" />
          </div>{" "}
          <div className="col-md-3">
            <Operations icon={HR} title="Pastoral" url="" size="120px" />
          </div>{" "}
          <div className="col-md-3">
            <Operations icon={Mailbox} title="CBT" url="" size="120px" />
          </div>{" "}
          <div className="col-md-3">
            <Operations
              icon={Facility}
              title="eClassroom"
              url=""
              size="120px"
            />
          </div>
        </div>
      </div>
      <OverviewVideo />
      <div className="col-md-12 reports-container">
        <center>
          <div className="col-md-6">
            <button>Report</button>
            <h3>Comprehensive Reporting and Analysis</h3>
            <p>
              educare report facilitates comprehensive reporting and analysis
              with customizable reporting templates and tools, data analysis
              capabilities for actionable insights, real-time data reporting,
              integration with other systems for streamlined data collection,
              and a user-friendly interface for ease of use. This also improves
              educational outcomes through data-driven decision making.
            </p>
          </div>
        </center>
      </div>
      <div className="col-md-12">
        <center>
          <div className="col-md-7">
            {" "}
            <img className="   logo" src={Result} alt="Scholar" width="100%" />
          </div>
        </center>
      </div>
      <div className="col-md-11 offset-md-1 flexy pastoral-container">
        <div className="col-md-4">
          <button>Pastoral</button>
          <h3>Enhancing Student Well-Being</h3>
          <p>
            Pastoral provides a detailed platform for holistic student support,
            promoting well-being, engagement, and success, facilitating
            proactive interventions, simplifying pastoral care administration
            and communication, and empowering schools to prioritize student
            well-being and pastoral care.
          </p>
        </div>
        <div className="col-md-8">
          {" "}
          <img className="   logo" src={Pastoral} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="col-md-12 cbt-container">
        <center>
          <div className="col-md-5">
            <button>CBT</button>
            <h3>
              Comprehensive Cognitive Behavioral Therapy (CBT) Support for
              Educations
            </h3>
            <p>
              educare CBT offers customizable features for tailored
              interventions and student progress tracking, and facilitates
              collaboration among school staff, students, and parents.
              Additionally, it provides resources for staff training and support
              in implementing CBT techniques, promoting a team approach to
              student mental health and well-being.
            </p>
          </div>
          <div className="col-md-12">
            <center>
              <div className="col-md-7">
                {" "}
                <img className="   logo" src={CBT} alt="Scholar" width="100%" />
              </div>
            </center>
          </div>
        </center>
      </div>
      <div className="col-md-11 offset-md-1 flexy eclassroom-container">
        <div className="col-md-4">
          <button>eClassroom</button>
          <h3>Efficient Online Learning</h3>
          <p>
            It offers tools for organizing and delivering virtual lessons,
            tracking student progress, and engaging in interactive discussions.
            It also includes features for managing assignments, assessments, and
            communication with students and parents, making online learning more
            effective and streamlined.
          </p>
        </div>
        <div className="col-md-8">
          {" "}
          <img
            className="   logo"
            src={EClassroom}
            alt="Scholar"
            width="100%"
          />
        </div>
      </div>
      <WhyEducare />
      <EducarePrivacy />
    </>
  );
};