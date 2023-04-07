import React from "react";
import Logo from "../../assets/images/white-logo.png";
import { Link, NavLink } from "react-router-dom";

import "./_footer.scss";
export const Footer = () => {
  return (
    <>
      <div className="footer-container ">
        <div className="col-md-11 offset-md-1 flexy">
          <div className="col-md-2">
            {" "}
            <img className="" src={Logo} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-6 flexy flexyM">
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <Link to=""></Link>
                </li>
                <li>
                  <Link to=""></Link>
                </li>
                <li>
                  <Link to=""></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
