import React, { useEffect, useState, useRef } from "react";
import Logo from "../../assets/images/logo3.png";
import LinkedIn from "../../assets/images/linkedin.svg";
import FB from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/twitter.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./_footer.scss";
export const Footer = () => {
  const prevUrlRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  let currentUrl;
  useEffect(() => {
    currentUrl = location.pathname;
  });
  useEffect(() => {
    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/login":
          case "/sign-up":
            setShowNav(false);
            break;
          default:
            setShowNav(true);
            break;
        }
        console.log(currentUrl, showNav);
      }, 10);
    }
  });
  return (
    <>
      <div className={`footer-container  ${showNav ? "" : "hide"}`}>
        <div className="col-md-11 offset-md-1 flexy">
          <div className="col-md-2 logo">
            {" "}
            <img className="" src={Logo} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-6 offset-md-1 flexy flexyM quick-links">
            <div className="col-md-4">
              <ul className="list-unstyled mobile-ul">
                <h4>Solutions</h4>
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
              <ul className="list-unstyled mobile-ul">
                <h4>Company</h4>
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
              <ul className="list-unstyled mobile-ul">
                <h4>Resources</h4>
                <li>
                  <Link to="" className="links">
                    Help Center
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
          <div className="col-md-2 connect">
            <h4>Connect with us</h4>
            <ul className="list-unstyled list-inline mobile-ul">
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
        <div className="col-md-10 offset-md-1 credits-container flexy">
          <p className="">© educare technologies || All right reserved</p>
          <ul className="list-unstyled list-inline ">
            <li className="list-inline-item">
              <Link to="" className="links">
                Terms
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="" className="links">
                Privacy
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="" className="links">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
