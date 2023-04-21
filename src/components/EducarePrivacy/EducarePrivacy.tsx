import React from "react";
import Shield from "../../assets/images/shield-icon.json";
import Lottie from "react-lottie-player";

export interface PrivacyProps {
  heading: string;
  paragraph: string;
}

function EducarePrivacy(props: PrivacyProps) {
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
          <h3>{props.heading}</h3>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default EducarePrivacy;
