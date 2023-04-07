import React from "react";
import Logo from "../../assets/images/white-logo.png";
import { Link, NavLink } from "react-router-dom";

import "./_footer.scss";
export const Footer = () => {
  return (
    <>
      <div className="footer-container ">
        <div className="col-md-11 offset-md-1 flexy">
          <div className="col-md-3">
            {" "}
            <img className="" src={Logo} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-6 flexy flexyM">
            <div className="col-md-4">
              <ul className="list-unstyled">
                <h6>Solutions</h6>
                <li>
                  <Link to="">Products</Link>
                </li>
                <li>
                  <Link to="">Enterprise offer</Link>
                </li>
                <li>
                  <Link to="">Partner with us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <h6>Company</h6>
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">Jobs</Link>
                </li>
                <li>
                  <Link to="">Contact us</Link>
                </li>{" "}
                <li>
                  <Link to="">Enterprise offer</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              {" "}
              <ul className="list-unstyled">
                <h6>Resources</h6>
                <li>
                  <Link to="">Help center</Link>
                </li>
                <li>
                  <Link to="">API Docs</Link>
                </li>
                <li>
                  <Link to="">Enterprise offer</Link>
                </li>
                <li>
                  <Link to="">Enterprise offer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
