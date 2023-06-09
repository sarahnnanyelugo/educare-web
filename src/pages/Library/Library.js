import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./library.scss";
import Player1 from "../../assets/images/lottie6.json";
import Player3 from "../../assets/images/libuser.json";
import Lottie from "react-lottie-player";
import Benefits from "../../assets/images/p-chart.svg";
import Management from "../../assets/images/management.svg";
import Resources from "../../assets/images/resource.svg";
import User from "../../assets/images/user.svg";
import Accessibility from "../../assets/images/load.svg";
import Security from "../../assets/images/security.svg";
import LibFeatures from "./LibFeatures/LibFeatures";
import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
import Prices from "../../components/Prices/Prices";
import { Link, NavLink } from "react-router-dom";
import Access from "../../assets/images/access.png";
import Manage from "../../assets/images/bulb.png";
import Learn from "../../assets/images/learn.png";
import Dashed1 from "../../assets/images/dashed_line_1.png";
import Dashed2 from "../../assets/images/dashed_line_2.png";
import LibraryFAQ from "./LibraryFAQ/LibraryFAQ";

function Library() {
  return (
    <>
      <div className="col-md-12 library-nav sticky-top">
        {" "}
        <NavTwo title="Library" />
      </div>
      <div className="col-md-12 library-container">
        <div className="col-md-10 offset-md-1  flexy ">
          <div className="col-md-5 ">
            <Heading
              bg="#FCDCE3"
              color="#ED2F59"
              text="Introducing Lesson planner"
              boda="solid 1px #FCDCE3"
            />
            <h1>Your Gateway to Knowledge</h1>
            <p>
              Seamless Access to Educational Materials and Tools. Our library
              system provides an all-in-one solution for your academic needs.
              With a vast collection of resources and intuitive features, we
              make learning easy and accessible. Discover your gateway to
              knowledge today
            </p>
            <div className="flexy flexyM">
              <button className="started">Get started</button>
              <button className="demo">Request a demo</button>
            </div>
          </div>
          <div className="lottie-divs col-md-7">
            <div className="flexy flexyM">
              <div className="col-md-6 col-6">
                <div className="col-md-11  book-animations">
                  {" "}
                  <h2>1</h2>
                </div>
              </div>{" "}
              <div className="col-md-6 col-6">
                <div
                  className="col-md-11 book-animations"
                  style={{ height: "", marginLeft: "50px" }}
                >
                  {" "}
                  <h2>2</h2>
                </div>
              </div>
            </div>
            <div className="flexy flexyM">
              <div className="col-md-6 col-6">
                <div className="col-md-11 book-animations">
                  {" "}
                  <Lottie
                    loop
                    animationData={Player3}
                    play
                    className="lottieee"
                  />
                </div>
              </div>{" "}
              <div className="col-md-3 col-6">
                <div
                  className="col-md-11 book-animations"
                  style={{ height: "", marginLeft: "50px" }}
                >
                  <Lottie
                    loop
                    animationData={Player1}
                    play
                    className="lottieee"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center>
        <div className="col-md-8 flexy mtt mb5 flexyM no-m">
          <div className="col-md-1 col-1">
            <img className="" src={Access} alt="Scholar" width="100%" />
            <h6>Access</h6>
          </div>{" "}
          <div className="col-md-4 col-4 mt1">
            <img className="" src={Dashed1} alt="Scholar" width="100%" />
          </div>{" "}
          <div className="col-md-1 col-1">
            <img className="" src={Manage} alt="Scholar" width="100%" />
            <h6>Manage</h6>
          </div>{" "}
          <div className="col-md-4 col-4">
            <img className="" src={Dashed2} alt="Scholar" width="100%" />
          </div>{" "}
          <div className="col-md-1 col-1">
            <img className="" src={Learn} alt="Scholar" width="100%" />
            <h6>Learn</h6>
          </div>
        </div>
      </center>
      <div className="col-md-12 graded mt ">
        <div className="col-md-10 offset-md-1 flexy  ">
          <div className="col-md-4">
            <div className="col-md-10 try">
              <LibFeatures
                title="Library Account Management"
                paragraph="Students and teachers can manage their library accounts easily. This includes checking out and returning materials, managing their borrowing history, placing holds, and receiving notifications for due dates and overdue materials."
                icon={Management}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-10 try">
              <LibFeatures
                title="Resources and Services"
                paragraph="We provide access to a wide range of resources and services to support students’ academic pursuits. This includes research databases, online learning materials, educational games, and homework help resources."
                icon={Resources}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-10 try">
              <LibFeatures
                title="User Interface"
                paragraph="We have a simple and intuitive layout, with clear navigation and search functionalities that allow both the students and teachers to easily find what they are looking for.."
                icon={User}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 ">
        <center>
          {" "}
          <div className="col-md-7  flexy  ">
            <div className="col-md-6">
              <div className="col-md-10 try">
                <LibFeatures
                  title="Accessibility"
                  paragraph="Our library system is accessible to all students and teachers, including those with disabilities. This includes ensuring that the user interface and all resources and services are accessible to users with visual or auditory impairments, as well as those who use assistive technologies such as screen readers."
                  icon={Accessibility}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-10 try">
                <LibFeatures
                  title="Security & Privacy"
                  paragraph="We secure and protect users’ privacy. This includes implementing appropriate security measures to prevent unauthorized access to user accounts and sensitive information. Additionally, comply with data protection regulations and policies to ensure that users’ personal information is handled appropriately."
                  icon={Security}
                />
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="col-md-12 mt mb5 flexy">
        <div className="col-md-12 ">
          <DashboardDisplay />
        </div>
      </div>
      <div className="library-plans col-md-12">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Library Module.
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
      <div className="col-md-10 offset-md-1 lib-get-started flexy">
        <div className="col-md-5 started-div">
          <h2>Get started with a 15-day trial</h2>
          <p>
            Sign up for a free trial and see how easy it is acquiring <br />
            knowledge with our software.
          </p>
        </div>
        <center>
          <button className="started">Get Started</button>
          <button className="demo">Request for demo</button>
        </center>
      </div>
      <div className="col-md-8 offset-md-2 mt">
        <center>
          <h1>Frequently asked questions</h1>
        </center>
        <LibraryFAQ />
      </div>
    </>
  );
}

export default Library;