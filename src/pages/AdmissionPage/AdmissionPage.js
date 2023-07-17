import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./admission-page.scss";
import Dashboard1 from "../../assets/images/admin_dashboard1.png";
import Dashboard2 from "../../assets/images/admin-dashboard2.png";
import Dashboard3 from "../../assets/images/admin-dashboard3.png";
import Dashboard4 from "../../assets/images/admin-dashboard4.png";
import Dashboard5 from "../../assets/images/admin-dashboard5.png";
import Dashboard6 from "../../assets/images/notify_dashboard.png";
import Step1 from "../../assets/images/step1.png";
import Step2 from "../../assets/images/step2.png";
import Step3 from "../../assets/images/step3.png";
import Step4 from "../../assets/images/step4.png";
import Step5 from "../../assets/images/step5.png";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function AdmissionPage() {
  return (
    <>
      <div className="col-md-12 admission-nav-div col-12">
        {" "}
        <NavTwo title="Admission" />
      </div>
      <div style={{ height: "120px" }} />
      <div className="col-md-12 admissions-div">
        <center>
          <div className="col-md-5">
            <h1>Unlock Insights, Drive Success</h1>
            <p className="col-md-10">
              Take the hassle out of admissions with our user-friendly software
              module, designed to simplify application tracking, evaluation, and
              communication for your institution.
            </p>
            <center>
              <GetStartedForm
                text=" Get started"
                bg="#0098DA"
                cls="gsmadm"
                bgbtn="#0098DA"
                backdropbg="modal-backdrop-blue"
              />
              <button className="demo">Request for demo</button>
            </center>
          </div>
        </center>
      </div>
      <div id="features" />
      <div className="col-md-12 admission-steps">
        {" "}
        <center>
          <div className="col-md-8 ">
            {" "}
            <img
              className="col-md-12 dashboard1"
              src={Dashboard1}
              alt="Scholar"
              width="100%"
            />
            <center>
              <div className="flexy">
                {" "}
                <div className="col-md-4">
                  <div className="col-md-11  steps">
                    <div className="flexy flexyM">
                      <img className="col-md-2" src={Step1} alt="Scholar" />
                      <p>Application Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-md-11  steps">
                    <div className="flexy flexyM">
                      <img className="col-md-2" src={Step2} alt="Scholar" />
                      <p>Applicant Evaluation & Review</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="col-md-11 steps">
                    <div className="flexy flexyM">
                      <img className="col-md-2" src={Step3} alt="Scholar" />
                      <p>Communications & Notification</p>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </center>
        <div className="flexy col-md-6 offset-md-3 mt5 no-m">
          {" "}
          <div className="col-md-6">
            <div className="col-md-11  steps">
              <div className="flexy flexyM">
                <img className="col-md-2" src={Step4} alt="Scholar" />
                <p>Decision Management</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-11  steps">
              <div className="flexy flexyM">
                <img className="col-md-2" src={Step5} alt="Scholar" />
                <p>Scalability and Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 admission-dashboards mt">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Application Management</h1>
            <p>
              This feature focuses on managing the application process from
              start to finish. It includes creating and customizing application
              forms, collecting applicant information, and securely storing and
              managing application documents.
            </p>
          </div>
        </center>
        <div className="col-md-11 offset-md-1 flexy mt5">
          <div className="col-md-5">
            <h4>Creation and Customization of Application Forms</h4>
            <p>
              The module allows organizations to design and customize
              application forms according to their specific requirements. This
              includes adding relevant fields, specifying validation rules, and
              capturing the necessary applicant information.
            </p>{" "}
            <h4>Online Application Submission</h4>
            <p>
              Applicants can conveniently submit their applications online
              through a user-friendly interface. This eliminates the need for
              paper-based applications and allows for efficient data collection.
            </p>{" "}
            <h4>Application Fee Processing</h4>
            <p>
              The software may offer functionality to process application fees
              securely, allowing applicants to make payments online.
            </p>
          </div>
          <div className="col-md-6 offset-md-1">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard2}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 admission-dashboards2 mt">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Applicant Evaluation & Review</h1>
            <p>
              This feature provides tools for evaluating and reviewing applicant
              information and supporting documents. It allows administrators to
              assess and score applicants based on predetermined criteria,
              review recommendation letters or essays, and make notes or
              comments for each applicant.
            </p>
          </div>
        </center>
        <div className="col-md-11  flexy mt9">
          {" "}
          <div className="col-md-6 mt6">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard3}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5  offset-md-1">
            <h4>Scoring or Rating of Applicants</h4>
            <p>
              This enables administrators to define evaluation criteria and
              assign scores or ratings to applicants. This helps in objectively
              assessing applicants and comparing them to predefined benchmarks.
            </p>{" "}
            <h4>Reviewing and Assessing Applicant Documents:</h4>
            <p>
              Admission staff can access and review applicant documents directly
              within the module. This feature streamlines the evaluation process
              and ensures all necessary materials are considered.
            </p>{" "}
            <h4>Comparison and Ranking of Applicants</h4>
            <p>
              The module provides tools to compare and rank applicants based on
              evaluation scores, allowing administrators to identify the most
              qualified candidates.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 admission-dashboards mt">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Communications and Notification</h1>
            <p>
              Facilitate communication between administrators and applicants by
              sending automated notifications or emails at different stages of
              the admission process. This keeps applicants informed about their
              application status and any additional requirements.
            </p>
          </div>
        </center>
        <div className="col-md-11 offset-md-1 flexy mt5">
          <div className="col-md-5">
            <h4>Automated Notifications</h4>
            <p>
              Send automated notifications to applicants at various stages of
              the admission process. These notifications may include application
              received confirmation, document submission reminders, interview
              scheduling, or final decision notifications.
            </p>{" "}
            <h4>Customizable Email Templates</h4>
            <p>
              Administrators can create and customize email templates for
              communication with applicants. This ensures consistent messaging
              and saves time by automating routine communication.
            </p>{" "}
            <h4>Applicant Portal</h4>
            <p>
              Individuals can log in to view their application status, update
              contact information, submit additional documents, or communicate
              with the admissions team on an applicant portal.
            </p>
          </div>
          <div className="col-md-6 offset-md-1">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard6}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 admission-dashboards2 mt">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Decision Management</h1>
            <p>
              Educare admissions assists administrators in making admission
              decisions by providing a centralized platform to review applicant
              information, evaluation scores, and other relevant factors.
            </p>
          </div>
        </center>
        <div className="col-md-11  flexy mt9">
          {" "}
          <div className="col-md-6 mt6">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard4}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5  offset-md-1">
            <h4>Centralized Platform for Decision-making</h4>
            <p>
              A centralized platform where administrators can access applicant
              profiles, evaluation scores, and other relevant data to facilitate
              informed decision-making.
            </p>{" "}
            <h4>Decision-making Tools and Workflows</h4>
            <p>
              Offers workflows or decision-making tools to guide administrators
              through the selection process. This includes setting decision
              criteria, defining acceptance thresholds, and managing waitlists.
            </p>{" "}
            <h4>Generation of Acceptance/Rejection Letters</h4>
            <p>
              Be able to generate acceptance, rejection, or waitlist letters
              automatically. This simplifies the process of notifying applicants
              about their admission status and ensures consistent and timely
              communication.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 admission-dashboards mt">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Scalability and Performance</h1>
            <p>
              The educare admission software module is equipped to handle large
              application volumes effectively, ensuring smooth performance even
              during periods of high traffic and peak admission activity.
            </p>
          </div>
        </center>
        <div className="col-md-11 offset-md-1 flexy mt5">
          <div className="col-md-5">
            <h4>Handling Large Application Volumes</h4>
            <p>
              Our software is designed to handle large volumes of applications
              efficiently without compromising performance. It can handle high
              traffic and accommodate spikes in application submissions during
              peak admission periods..
            </p>{" "}
            <h4>High Availability</h4>
            <p>
              We ensure high availability and reliability, minimizing downtime
              and ensuring uninterrupted access to critical admission data and
              functionalities.
            </p>{" "}
          </div>
          <div className="col-md-6 offset-md-1">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard5}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 admin-simple-prices" id="pricing">
        {" "}
        <center>
          <h1 className=" ">Our simple prices made for you </h1>
        </center>
        <div className=" col-md-12 mt8">
          {" "}
          <div className="col-md-10 offset-md-1 flexy mb5 mt5">
            <div className="col-md-3 " style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Basic"
                  amount="100.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="75 billed annually"
                  url={""}
                  currency="₦"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3 recommended-container ">
              <div
                className="offset-md-4 offset-5"
                style={{ marginBottom: "-50px" }}
              >
                <Heading
                  bg="#FCEBD7"
                  color="#BB6C0F"
                  boda="solid 1px #FCEBD7"
                  text="Recommended"
                />
              </div>
              <div className="col-md-11 mt3">
                <SimplePrices
                  package="e-learning"
                  amount="200.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="150 billed annually"
                  url={""}
                  currency="₦"
                  active="active-button "
                  cls="recommendedCal"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Premium"
                  amount="500.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="450 billed annually"
                  url={""}
                  currency="₦"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Enterprise"
                  amount="Contact Us"
                  paragraph=""
                  btnBg="#0098DA"
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
            <Link to={"/educare-packages"} className="link">
              Pricing page
            </Link>
            {""} for complete details
          </p>
        </center>
      </div>
      <center>
        <div className="col-md-5 admin-process">
          <h3>
            Streamline Your Admission Process with educare admissions today!
          </h3>
          <center>
            {/* <button className="started">Get started</button> */}
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmadm"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-blue"
            />
            <button className="demo">Request for demo</button>
          </center>
        </div>
      </center>
    </>
  );
}

export default AdmissionPage;
