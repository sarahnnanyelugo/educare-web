import React from "react";
import Shield from "../../assets/images/shield-icon.json";
import Lottie from "react-lottie-player";
function EducarePrivacy() {
  return (
    <>
      {" "}
      <div className="col-md-12 flexy mt">
        <div className="col-md-2 offset-md-1">
          <Lottie
            loop
            animationData={Shield}
            play
            style={{ width: 366, height: 366, marginTop: "-50px" }}
          />
        </div>
        <div className="col-md-6 offset-md-2">
          <h3>educare’s Privacy and Protection</h3>
          <p>
            educare ensures data privacy by implementing advanced security
            measures, including encryption and secure communication channels.
            The platform has no access to your data, and strict policies are in
            place to keep your data under your control. Trust us to keep your
            data safe and secure
          </p>
        </div>
      </div>
    </>
  );
}

export default EducarePrivacy;
