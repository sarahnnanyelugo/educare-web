import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./lesson-planner.scss";
import Home from "../../assets/images/lesson-planner.png";
import Setup1 from "../../assets/images/setup-pink.png";
import Setup2 from "../../assets/images/setup.png";
import Setup3 from "../../assets/images/grey.png";
import Testimonial from "./Testimonial/Testimonial";
import { Link, NavLink } from "react-router-dom";
import Prices from "../../components/Prices/Prices";

function LessonPlanner() {
  return (
    <>
      {" "}
      <div className="col-md-12 lesson-planner-nav sticky-top">
        {" "}
        <NavTwo title="Lesson Planner" />
      </div>
      <div className="col-md-12  lesson-planner">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt9">
            {" "}
            <Heading
              bg="#D4E8C3"
              color="#11A377"
              text="Introducing Lesson Planner"
            />
            <h1>Simplify Your lesson Planning With educare Lesson Planner</h1>
            <p>Create, schedule, and manage your lessons with ease</p>
          </div>
          <div className="col-md-4 offset-md-2">
            <div className="col-md-12">
              {" "}
              <Form bg="#11A377" text="Get started" body="" />
            </div>
          </div>
        </div>
      </div>
      <center>
        <div className="col-md-10 lesson-dashboard">
          <img className=" " src={Home} alt="Scholar" width="100%" />
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy mt5">
        <div className="col-md-4 mt">
          <h3>Lesson Planning</h3>
          <p>
            educare Lesson Planner makes it easy to create custom lesson plans
            with just a few clicks. Our intuitive interface allows you to add
            lesson objectives, learning outcomes, resources, and activities in
            minutes. You can also save and reuse your favorite lesson plans to
            save time and ensure consistency in your teaching.
          </p>
        </div>
        <div className="col-md-7 offset-md-1">
          <img className=" " src={Setup1} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy mt6 no-m">
        <div className="col-md-7 ">
          <img className=" " src={Setup2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-4 mt offset-md-1">
          <h3>Scheduling</h3>
          <p>
            Easily schedule classes, assignments, and assessments. Our
            drag-and-drop calendar interface allows you to quickly schedule
            classes and other events, and you can set reminders for upcoming
            deadlines or events.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy mt5">
        <div className="col-md-4 mt5">
          <h3>Customization</h3>
          <p>
            Our lesson planner is highly customizable to meet the unique needs
            of your classroom. You can customize lesson plans, grading scales,
            and attendance tracking settings to align with your school’s
            standards and requirements.
          </p>
        </div>
        <div className="col-md-7 offset-md-1">
          <img className=" " src={Setup3} alt="Scholar" width="100%" />
        </div>
      </div>
      <center>
        <h3>Hear from Our Satisfied Users</h3>
        <p>Don’t just take our word for it – hear from our happy customers</p>
      </center>
      <div className="col-md-12 offset-md-  testimonial-div">
        {" "}
        <Testimonial />
      </div>
      <div className="lesson-planner-plans col-md-12">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Finance.
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
      <div className="col-md-10 offset-md-1 trial-div">
        <center>
          <h2>Try Our Lesson planner today</h2>
          <p>
            Sign up for a free trial and see how much time and energy you can
            save with our software.
          </p>
          <button className="started">Get started</button>
          <button className="demo">Request for demo</button>
        </center>
      </div>
    </>
  );
}

export default LessonPlanner;
