import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./e-classroom.scss";
import WhyEClassroom from "./WhyEClassroom/WhyEclssroom";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Aisa from "../../assets/images/aisa.svg";
function EClassroomPage() {
  return (
    <>
      {" "}
      <div className="col-md-12 e-classroom-nav sticky-top">
        {" "}
        <NavTwo title="eClassroom" />
      </div>
      <div className="col-md-12  e-classroom ">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-4 mt9">
            {" "}
            <Heading
              bg="#FCEBD7"
              color="#EA8713"
              text="Introducing eClassroom"
            />
            <h1>Virtual Learning and Collaboration</h1>
            <p>
              eClassroom is a dynamic and versatile software module designed to
              enhance virtual learning and collaboration within schools. Unlock
              a multitude of features and benefits that empower their
              educational environment.
            </p>
            <button>Request for demo</button>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="col-md-10">
              {" "}
              <Form bg="#CC006E" text="Get started" />
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
          <img className="aisa" src={Aisa} alt="Scholar" />
          <img className="ms" src={Microsoft} alt="Scholar" />
          <img className="flutter" src={Flutterwave} alt="Scholar" />
        </center>
      </div>
      <center>
        <h1 className="reco-alt mt8">Classroom on the go</h1>
      </center>
      <div className="col-md-10 offset-md-1 mt9 on-d-go">
        <center className="flexy">
          <div className="col-md-4">
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
          <div className="col-md-4">
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
          <div className="col-md-4">
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
    </>
  );
}

export default EClassroomPage;
