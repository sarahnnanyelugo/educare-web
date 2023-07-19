import React from "react";
import "./partners-slider.scss";
import Standard from "../../assets/images/standard.png";
import Switch from "../../assets/images/switch.png";

import Aisa from "../../assets/images/aisa.svg";
import Grange from "../../assets/images/grange.png";
import LBS from "../../assets/images/lbs.png";
import Cobis from "../../assets/images/cobis.png";

import Starvile from "../../assets/images/starvile.png";
function PartnersSlider() {
  return (
    <div className="col-md-12 partners-slider mt ">
      <center>
        {" "}
        <h3>Trusted by leading organizations</h3>
      </center>
      <div class="slider mt">
        <div className="slide-track partners-immgs">
          {" "}
          <img className="standard slide" src={Standard} alt="Scholar" />
          <img className="cobis slide" src={Cobis} alt="Scholar" />{" "}
          <img className="aisa slide" src={Aisa} alt="Scholar" />{" "}
          <img className="grange slide" src={Grange} alt="Scholar" />{" "}
          <img className="lbs slide" src={LBS} alt="Scholar" />{" "}
          <img className="starvile slide" src={Starvile} alt="Scholar" />{" "}
          <img className="switch slide mt2" src={Switch} alt="Scholar" />{" "}
          <img className="standard slide" src={Standard} alt="Scholar" />
          <img className="cobis slide" src={Cobis} alt="Scholar" />{" "}
          <img className="aisa slide" src={Aisa} alt="Scholar" />{" "}
          <img className="grange slide" src={Grange} alt="Scholar" />{" "}
          <img className="lbs slide" src={LBS} alt="Scholar" />{" "}
          <img className="starvile slide" src={Starvile} alt="Scholar" />{" "}
          <img className="switch slide mt2" src={Switch} alt="Scholar" />{" "}
          <img className="standard slide" src={Standard} alt="Scholar" />
          <img className="cobis slide" src={Cobis} alt="Scholar" />{" "}
          <img className="aisa slide" src={Aisa} alt="Scholar" />{" "}
          <img className="grange slide" src={Grange} alt="Scholar" />{" "}
          <img className="lbs slide" src={LBS} alt="Scholar" />{" "}
          <img className="starvile slide" src={Starvile} alt="Scholar" />{" "}
          <img className="switch slide mt2" src={Switch} alt="Scholar" />
        </div>
      </div>
    </div>
  );
}

export default PartnersSlider;
