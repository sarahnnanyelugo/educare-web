import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./library.scss";
import Player1 from "../../assets/images/lottie6.json";
import Lottie from "react-lottie-player";
import Benefits from "../../assets/images/p-chart.svg";
import Management from "../../assets/images/management.svg";
import Resources from "../../assets/images/resource.svg";
import User from "../../assets/images/user.svg";
import Accessibility from "../../assets/images/load.svg";
import Security from "../../assets/images/security.svg";
import LibFeatures from "./LibFeatures/LibFeatures";

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
            <div className="flexy">
              <div className="col-md-6">
                <div className="col-md-11  book-animations">
                  {" "}
                  <h1>player1</h1>
                </div>
              </div>{" "}
              <div className="col-md-6 ">
                <div
                  className="col-md-11 book-animations"
                  style={{ height: "", marginLeft: "50px" }}
                >
                  {" "}
                  <h1>player2</h1>
                </div>
              </div>
            </div>
            <div className="flexy">
              <div className="col-md-6 ">
                <div className="col-md-11 book-animations">
                  {" "}
                  <h1>player3</h1>
                </div>
              </div>{" "}
              <div className="col-md-3 ">
                <div
                  className="col-md-11 book-animations"
                  style={{ height: "200px", marginLeft: "50px" }}
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
        <div className="col-md-10">
          {/* <img className="lI" src={Benefits} alt="Scholar" width="100%" /> */}
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
    </>
  );
}

export default Library;
