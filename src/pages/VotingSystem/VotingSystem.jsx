import "./voting-system.scss";

import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import { Heading } from "../../components/Heading/Heading";
import Dashboard from "../../assets/images/voting-dashboard.png";
import Prices from "../../components/Prices/Prices";
import { Link, NavLink } from "react-router-dom";

function VotingSystem() {
  return (
    <>
      <div className="col-md-12 nav-two-voting sticky-top">
        {" "}
        <NavTwo title="Voting System" />
      </div>
      <center>
        <div className="col-md-6 voting-div">
          <Heading
            text="Introducing voting system"
            bg="#CEF0FF"
            color="#0098DA"
          />
          <h1>Engage your staff and students in an interesting way</h1>
          <p>
            Streamline various processes and promote greater participation and
            engagement from students and staff alike.
          </p>
          <div className="flexy flexyM offset-md-4 mt4 voting-btns">
            <button className="started">Get started</button>
            <button className="demo">Request for demo</button>
          </div>
        </div>
      </center>
      <div className="col-md-12 dashboard">
        <center>
          <div className="col-md-5">
            <p>
              Educare voting system thrives in creating a fair form of learning
              that helps improve performance for teachers
            </p>
          </div>
        </center>
        <center>
          {" "}
          <div className="col-md-9 ">
            {" "}
            <img className="" src={Dashboard} alt="Scholar" width="100%" />
          </div>
        </center>
      </div>
      <center>
        <h3 className="rating-heading ">
          A platform to run fair forms of voting and rating
        </h3>
      </center>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <div className="col-md-11 engagement rating">
            <h5>Engagement</h5>
            <p>
              Student engagement can be increased by making learning more
              interactive and participatory.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12 assessment rating">
            <h5>Assessment</h5>
            <p>
              The system can be used as a form of formative or summative
              assessment, providing teachers with valuable feedback on student
              understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 accessibility">
        <div className="col-md-6">
          {" "}
          <h5>Accessibility</h5>
          <p>
            Activities can be accessed remotely, allowing for distance learning
            and providing students with more flexibility in how they participate
            <br />
            in class.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <div className="col-md-11 engagement rating">
            <h5>Data Collection</h5>
            <p>
              Collect and analyze data on student performance and participation,
              providing teachers with insights into student needs and areas for
              improvement.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12 assessment rating">
            <h5>Reduced Bias</h5>
            <p>
              Bias can be reduced in the classroom by giving all students an
              equal opportunity to participate and share their thoughts and
              ideas.
            </p>
          </div>
        </div>
      </div>
      <div className="voting-plans col-md-12 mtt">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our HR Manager.
            </p>
          </div>
          {/* <div className="col-md-2 offset-md-2">
            <center>
              {" "}
              <button>See prices</button>
            </center>
          </div> */}
        </div>
        <div className="offset-md-4 recomend">
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
      <div className="col-md-10 offset-md-1 participation">
        <center>
          <div className="col-md-4 col-12">
            <h2>Better participation</h2>
            <h3>Better results</h3>

            <div className="flexy flexyM col-md-12">
              <button className="started">Get started</button>
              <button className="demo">Request for demo</button>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default VotingSystem;
