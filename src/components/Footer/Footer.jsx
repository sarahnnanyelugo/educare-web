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
            <Link to={"/"}>
              {" "}
              <img className="" src={Logo} alt="Scholar" width="100%" />
            </Link>
          </div>
          <div className="col-md-6 offset-md-1 flexy flexyM quick-links">
            <div className="col-md-4">
              <ul className="list-unstyled mobile-ul">
                <h4>Solutions</h4>
                <li>
                  <Link to={"/educare-schools"} className="links">
                    For Schools
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"/educare-business"} className="links">
                    For Businesses
                  </Link>
                </li>{" "}
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
                  <Link to={"/about-us"} className="links">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to={"/careers"} className="links">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to={"/contact-us"} className="links">
                    Contact us
                  </Link>
                </li>{" "}
              </ul>
            </div>
            <div className="col-md-4">
              {" "}
              <ul className="list-unstyled mobile-ul">
                <h4>Resources</h4>
                <li>
                  <Link to={"/support"} className="links">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link to={"/guides"} className="links">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} className="links">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to={"/partner"} className="links">
                    Become a Partner
                  </Link>
                </li>
                <li>
                  <Link to={"/stories"} className="links">
                    Customer Stories
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"/contact-us"} className="links">
                    Contact Sales
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
