import React from "react";
import Finance from "../../assets/images/half-circle.svg";
import Mailbox from "../../assets/images/edit.svg";
import Facility from "../../assets/images/people.svg";
import HR from "../../assets/images/people2.svg";
function Operations() {
  return (
    <>
      {" "}
      <div className="col-md-12 operations">
        <center>
          <div className="col-md-5">
            {" "}
            <h3>
              A comprehensive system to manage all operations for your business
            </h3>
            <div className="flexy ">
              {" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={Finance} alt="Scholar" width="100%" />
                <h6>Finance</h6>
              </div>{" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={Mailbox} alt="Scholar" width="100%" />
                <h6>MailBox</h6>
              </div>{" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={Facility} alt="Scholar" width="100%" />
                <h6>Facility Management</h6>
              </div>{" "}
              <div className="operations-boxes">
                {" "}
                <img className="" src={HR} alt="Scholar" width="100%" />
                <h6>HR Manager</h6>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Operations;
