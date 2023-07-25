import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./assignment.scss";
import Dashboard from "../../assets/images/ass-dashboard.png";
import Access from "../../assets/images/assign.png";
import Manage from "../../assets/images/publish.png";
import Learn from "../../assets/images/grade.png";
import Dashed1 from "../../assets/images/dashed_line_11.png";
import Dashed2 from "../../assets/images/dashed_line_22.png";
import Teacher from "../../assets/images/ass-teacher.png";
function Assignment() {
  return (
    <>
      <div className="col-md-12 assignment-nav-div col-12">
        {" "}
        <NavTwo
          title="Assignments"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "120px" }} />
      <div className="container-fluid flexy assignment-div">
        <div className="col-md-5 offset-md-1 mt6 no-m">
          <Heading
            text="Introducing Assignments"
            bg="transparent"
            boda="solid 1px #2F99DA"
            color="#2F99DA"
          />
          <h1>Take the stress out of grading and submissions</h1>
          <p className="col-md-11">
            Streamline assignment creation, submission, and grading for seamless
            academic workflow
          </p>
          <div className="flexy flexyM">
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmadm"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-blue"
            />
            <button className="demo">Request for demo</button>
          </div>
        </div>
        <div className="col-md-4 offset-md-1">
          <img
            className="col-md-12 dashboard1"
            src={Teacher}
            alt="Scholar"
            width="100%"
          />
        </div>
      </div>
      <div className="container-fluid assignment-dashboard">
        <center>
          <div className="col-md-7">
            <img
              className="col-md-12 dashboard1"
              src={Dashboard}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-4">
            <h2>Say goodbye to assignment stress</h2>
            <p className="col-md-10">
              Our assignments software module is a tool designed to streamline
              and enhance the process of assigning, submitting, grading, and
              managing academic or work-related tasks.
            </p>
          </div>
        </center>
        <div className="flexy col-md-10 offset-md-1 mt ass-details">
          <div className="col-md-4">
            <div className="col-md-8">
              <h4>Assignment Creation</h4>
              <p>
                This allows instructors or managers to create assignments with
                clear instructions, deadlines, and associated resources.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-8">
              <h4>Submission Management</h4>
              <p>
                Students or team members can submit their completed assignments
                through the software. The module provides various submission
                options, such as file uploads or text submissions.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-9">
              <h4>Grading and Feedback</h4>
              <p>
                Instructors or supervisors can review and grade assignments
                directly within the software module. They can provide feedback,
                comments, and assessment scores, and the system automatically
                records the grades for each submission.
              </p>
            </div>
          </div>
        </div>
        <div id="features" />
        <center>
          <div className="col-md-8 flexy mtt mb5 flexyM  ass-feats">
            <div className="col-md-1 col-1">
              <img className="" src={Access} alt="Scholar" width="100%" />
              <h5 className="mt1">Assign</h5>
            </div>{" "}
            <div className="col-md-4 col-4 mt7">
              <img className="" src={Dashed1} alt="Scholar" width="100%" />
            </div>{" "}
            <div className="col-md-1 col-1 mt5">
              <img className="" src={Manage} alt="Scholar" width="100%" />
              <h5 className="mt1">Publish</h5>
            </div>{" "}
            <div className="col-md-4 col-4 mt7">
              <img className="" src={Dashed2} alt="Scholar" width="100%" />
            </div>{" "}
            <div className="col-md-1 col-1">
              <img className="" src={Learn} alt="Scholar" width="100%" />
              <h5 className="mt1">Grade</h5>
            </div>
          </div>
        </center>
        <div className="offset-md-2 col-md-8 flexy mt">
          <div className="col-md-6">
            <div className="col-md-9">
              {" "}
              <h4>Deadline and Reminders</h4>
              <p>
                The module sends automated reminders to students or team members
                about upcoming assignment deadlines. These reminders help
                individuals stay on track and submit their work on time,
                promoting accountability and time management.
              </p>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="col-md-10">
              {" "}
              <h4>Plagiarism Detection</h4>
              <p>
                Submitted work are scanned and compared to existing sources to
                identify potential instances of plagiarism. This ensures
                academic integrity and helps instructors address any issues
                related to plagiarism.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 assign-get-started flexy">
        <center>
          <div className="col-md-7 ">
            <h2>
              Ensure academic integrity and plagiarism-free submissions with
              powerful detection tools
            </h2>

            <center className="mt4">
              <GetStartedForm
                text=" Get started"
                bg="#0098DA"
                cls="gsmrep"
                bgbtn="#0098DA"
                backdropbg="modal-backdrop-dark"
              />
              <button className="demo">Request for demo</button>
            </center>
          </div>
        </center>
      </div>
    </>
  );
}

export default Assignment;
