import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./consulting.scss";
function Consulting() {
  return (
    <>
      <div className="col-md-12 consulting-container ">
        <center>
          <div className="col-md-5">
            <small>Consulting</small>
            <h1>Streamline, Analyze, and Enhance Financial Management</h1>
            <p className="col-md-10">
              Transform financial services with our comprehensive module.
              Empower individuals and businesses with cutting-edge tools,
              revolutionize financial management, reporting, and communication.
              Streamline processes, generate accurate reports and deliver
              exceptional client experiences with our intuitive interface and
              robust features.
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
    </>
  );
}

export default Consulting;
