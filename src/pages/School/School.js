import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./school.scss";
import Img1 from "../../assets/images/govt_1.png";
import Img2 from "../../assets/images/school2.png";
import Img3 from "../../assets/images/school1.png";
import Img4 from "../../assets/images/school5.png";
import Img5 from "../../assets/images/school3.png";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Aisa from "../../assets/images/aisa.svg";
function School() {
  return (
    <>
      <div className="col-md-12 sch-container ">
        <center>
          <div className="col-md-5">
            <small>School</small>
            <h1>Streamline, Communicate, and Empower for Academic Success</h1>
            <p className="col-md-10">
              In order to provide a top-notch educational experience, our school
              recognises the value of efficiency, good communication, and
              empowerment.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmrep"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5 ">
          <h1 className="col-md-10 mt3">Comprehensive Pastoral Support</h1>
          <p className="col-md-10">
            Promote student well-being and provide pastoral care support with
            our dedicated Pastoral feature. Foster a positive and nurturing
            school environment by addressing student needs, supporting
            social-emotional development, and facilitating effective
            communication between students, parents, and school staff.
          </p>
        </div>
        <div className="col-md-6 offset-md-1  govt-map">
          <img className=" " src={Img3} alt="Scholar" width="100%" />
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-6   govt-map">
          <img className=" " src={Img2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h1 className="col-md-8 mt3">Competent HR Management</h1>
          <p className="col-md-10">
            Effortlessly manage employee records, attendance, and payroll for
            teachers and staff with our HR feature. Streamline administrative
            processes, maintain accurate records, and ensure timely payroll
            management, allowing your school to focus on providing quality
            education.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5">
          <h1 className="col-md-12 mt3">
            Seamless Computer-Based Testing (CBT)
          </h1>
          <p className="col-md-10">
            Facilitate Computer-Based Testing (CBT) for assessments and
            examinations with our dedicated CBT feature. Simplify test
            administration, grading, and result analysis, promoting fairness and
            accuracy in evaluating student performance.
          </p>
        </div>
        <div className="col-md-6 offset-md-1  govt-map">
          <img className=" " src={Img1} alt="Scholar" width="100%" />
        </div>
      </div>{" "}
      <center>
        <div className="col-md-5 col-12 schs-partners">
          <center>
            {" "}
            <img className="aisa" src={Aisa} alt="Scholar" />
            <img className="ms" src={Microsoft} alt="Scholar" />
            <img className="flutter" src={Flutterwave} alt="Scholar" />
          </center>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5  ">
          <h1 className="col-md-10 mt3">Insightful Academic Reporting</h1>
          <p className="col-md-9">
            Gain valuable insights into student performance, track progress, and
            communicate academic achievements effectively.
          </p>
        </div>
        <div className="col-md-6   govt-map offset-md-1">
          <img className=" " src={Img5} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-6 eclass-img">
          {" "}
          <img className=" " src={Img4} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5  offset-md-1">
          <h1 className="col-md-10 mt3">Engaging eClassroom Experience</h1>
          <p className="col-md-10">
            Foster student engagement, provide personalized learning
            experiences, and ensure continuity of education beyond the
            traditional classroom setting.
          </p>
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Transform the way you serve your constituents by empowering your
            government operations with our Government module
          </p>
        </div>
        <div className="offset-md-2 mt3">
          <GetStartedForm
            text=" Get started"
            bg="#0098DA"
            cls="gsmrep"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
        </div>
      </div>
    </>
  );
}

export default School;
