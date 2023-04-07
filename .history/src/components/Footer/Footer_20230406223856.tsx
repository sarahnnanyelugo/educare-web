import React from "react";
import Logo from "../../assets/images/aisa.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer-container ">
        <div className="col-md-11 offset-md-1 flexy">
          <div className="col-md-2">
            {" "}
            <img className="" src={Logo} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
