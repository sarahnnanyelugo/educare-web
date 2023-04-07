import React from "react";
import Logo from "../../assets/images/white-logo.png";
import LinkedIn from "../../assets/images/linkedin.svg";
import FB from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/twitter.svg";
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
          <div className="col-md-6 offset-md-1 flexy flexyM quick-links">
            <div className="col-md-4">
              <ul className="list-unstyled">
                <h6>Solutions</h6>
                <li>
                  <Link to="" className="links">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="" className="links">
                    Enterprise offer
                  </Link>
                </li>
                <li>
                  <Link to="" className="links">
                    Partner with us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <h6>Company</h6>
                <li>
                  <Link to="" className="links">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="" className="links">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="" className="links">
                    Contact us
                  </Link>
                </li>{" "}
                <li>
                  <Link to="" className="links">
                    Enterprise offer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              {" "}
              <ul className="list-unstyled">
                <h6>Resources</h6>
                <li>
                  <Link to="" className="links">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link to="" className="links">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link to="" className="links">
                    Enterprise offer
                  </Link>
                </li>
                <li>
                  <Link to="" className="links">
                    Enterprise offer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <h6>Connect with us</h6>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                {" "}
                <img className="" src={Twitter} alt="Scholar" width="100%" />
              </li>
              <li className="list-inline-item">
                {" "}
                <img className="" src={LinkedIn} alt="Scholar" width="100%" />
              </li>
              <li className="list-inline-item">
                {" "}
                <img className="" src={FB} alt="Scholar" width="100%" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
