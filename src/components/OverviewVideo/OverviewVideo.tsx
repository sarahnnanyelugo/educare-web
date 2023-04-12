import React from "react";
import Video from "../../assets/images/watch.svg";

function OverviewVideo() {
  return (
    <>
      {" "}
      <div className="col-md-12 overview-video">
        <center>
          <div className="col-md-2 flexy flexyM">
            {" "}
            <img className="" src={Video} alt="Scholar" width="12%" />
            <h6>Watch Overview</h6>
          </div>
        </center>
      </div>
    </>
  );
}

export default OverviewVideo;
