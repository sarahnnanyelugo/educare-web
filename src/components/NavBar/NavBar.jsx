import React, { useEffect, useState, useRef } from "react";
import Logo from "../../assets/images/logo2.png";
import Arrow from "../../assets/images/arrowdown.svg";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";
import Icofont from "react-icofont";

function NavBar() {
  const prevUrlRef = useRef(null);
  const [stick, setStick] = useState(true);
  const [themeSet, setTheme] = useState("");
  const [themeSet2, setTheme2] = useState("");
  const [themeSet3, setTheme3] = useState("");
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  function SwitchTheme(theme) {
    switch (location.pathname) {
      case "/":
        setTheme("#2f99da");
        setTheme2("#CEF0FE");
        break;
      default:
      case "/educare-business":
        setTheme("#2F99DA");
        setTheme2("#CEF0FE");
        break;
      case "/educare-schools":
        setTheme("#2f99da");
        setTheme2("#CEF0FE");
        break;
      case "/pastoral":
        setTheme("#FADAB6");
        setTheme2("#FCE0DD");
        break;
      case "/medicals":
        setTheme("#0B2FF7");
        setTheme2("#8CA8F7");
        break;
      case "/e-classroom":
        setTheme("#671F37");
        setTheme2("#CC006E");
        break;
      case "/educare-school-packages":
        setTheme("#0098DA");
        setTheme2("#CEF0FE");
        break;
      case "/sign-up":
        setTheme("#2F99DA");
        setTheme2("#ffffff");
        break;
      case "/login":
        setTheme("#1777F2");
        setTheme2("#ffffff");
        break;
      case "/finance":
        setTheme("#4A13B2");
        setTheme2("#DED0FA");
        break;
      case "/mail-box":
        setTheme("#C32BD6");
        setTheme2("#F5DCF8");
        break;
      case "/voting-system":
        setTheme("#0098DA");
        setTheme2("#CEF0FF");
        break;
      case "/contact-us":
        setTheme("#0098DA");
        setTheme2("#CEF0FF");
        setTheme3("#E7E7E7");
        break;
      case "/hrm":
        setTheme("#EA8713");
        setTheme2("#E4D5F5");
        // setTheme3("#E7E7E7");
        break;
      case "solutions":
        setTheme("#0098DA");
        setTheme2("#CEF0FF");
        // setTheme3("#E7E7E7");
        break;
      case "/resources":
        setTheme("#0098DA");
        setTheme2("#CEF0FF");
        // setTheme3("#E7E7E7");
        break;
      case "/support":
        setTheme("#0098DA");
        setTheme2("#CEF0FF");

        break;
      case "/lesson-planner":
        setTheme("#11A377");
        setTheme2("#FCEBCE");

        break;
      case "/library":
        setTheme("#ED2F59");
        setTheme2("#FCDCE3");

        break;
      case "/timetable":
        setTheme("#4A13B2");
        setTheme2("#E7E0F4");

        break;
      case "/weekly-remarks":
        setTheme("#C32BD6");
        setTheme2("#E5A8E0");

        break;
      case "/cbt":
        setTheme("#11A377");
        setTheme2("#E0F3ED");

        break;
    }
    // localStorage.setItem("globalTheme", themeSet);
  }
  useEffect(() => {
    SwitchTheme("#2f99da");
  }, []);
  useEffect(() => {
    SwitchTheme("#2f99da");
  }, [location.pathname]);

  useEffect(() => {
    const currentUrl = window.location.pathname;

    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/login":
            setShowNav(false);
            break;
          case "/sign-up":
            setShowNav(false);
            break;
          default:
            setShowNav(true);
            break;
        }
        localStorage.setItem("showNav", showNav);
      }, 200);
    }
  });
  // useEffect(() => {
  //   const currentUrl = window.location.pathname;

  //   if (prevUrlRef.current !== currentUrl) {
  //     prevUrlRef.current = currentUrl;
  //     console.log(currentUrl);
  //     setTimeout(() => {
  //       switch (currentUrl) {
  //         case "/":
  //           setStick(true);
  //           break;

  //         default:
  //           setStick(false);
  //           break;
  //       }
  //       console.log(showNav);
  //     }, 200);
  //   }
  // });

  return (
    <>
      <div
        className={`navbar-container offset-md-1 col-md-10 ${
          showNav ? "" : "hide"
        } ${stick ? "" : "sticky"}`}
        id="nav"
      >
        <div className="logo-holder  col-md-2 flexy ">
          {" "}
          <Link to={"/"}>
            {" "}
            <img className="   logo" src={Logo} alt="Scholar" width="50%" />
          </Link>
        </div>
        <ul className=" list-inline list-unstyled nav-links-container web-nav">
          <li className="list-inline-item web-nav">
            <NavLink to={"/finance-overview"} activeClassName="active">
              <button className="nav-links"> Solutions</button>
            </NavLink>
          </li>{" "}
          <li className="list-inline-item web-nav">
            <NavLink to={"/resources"} activeClassName="active">
              <button className="nav-links"> Resourcess</button>
            </NavLink>
          </li>{" "}
          <li className="list-inline-item web-nav">
            <NavLink to={"/support"} activeClassName="active">
              <button className="nav-links"> Support</button>
            </NavLink>
          </li>{" "}
          <li className="list-inline-item web-nav">
            <NavLink to={"/contact-us"} activeClassName="active">
              <button
                className="nav-links"
                style={{
                  backgroundColor: "" + themeSet3,
                  borderRadius: "33px",
                }}
              >
                {" "}
                Contact us
              </button>
            </NavLink>
          </li>
        </ul>
        <div className="nav-buttons web-nav">
          <Link to={"/login"}>
            <button className="sign-in-button">Log in</button>
          </Link>
          <Link to={"/sign-up"}>
            <button
              className="get-started-button"
              style={{ backgroundColor: "" + themeSet }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className=" mobile-navigation">
        {" "}
        <div className="phone ">
          <div className="menu" style={{ background: themeSet }}>
            <div class="list-group options">
              <NavLink to={""} className="menu-navs">
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                  style={{ background: themeSet2 }}
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  <span style={{ color: themeSet }}>
                    <i class="icofont-help-robot"></i>
                  </span>
                  Solutions
                </button>
              </NavLink>
              <NavLink to={""} className="menu-navs">
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  style={{ background: themeSet2 }}
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  <span style={{ color: themeSet }}>
                    <i class="icofont-package"></i>
                  </span>
                  Resources
                </button>{" "}
              </NavLink>
              <NavLink to={""} className="menu-navs">
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  style={{ background: themeSet2 }}
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  <span style={{ color: themeSet }}>
                    <i class="icofont-support"></i>
                  </span>
                  Support
                </button>
              </NavLink>
              <NavLink to={"/contact-us"} className="menu-navs">
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  style={{ background: themeSet2 }}
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  <span style={{ color: themeSet }}>
                    <i class="icofont-phone"></i>
                  </span>
                  Contact us
                </button>
              </NavLink>
              <NavLink to={"/login"} className="menu-navs">
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  style={{ background: themeSet2 }}
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  <span style={{ color: themeSet }}>
                    <i class="icofont-sign-in"></i>
                  </span>
                  Login
                </button>
              </NavLink>{" "}
              <NavLink to={"/sign-up"} className="menu-navs">
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  style={{ background: themeSet2 }}
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  <span style={{ color: themeSet }}>
                    <i class="icofont-dashboard-web"></i>
                  </span>
                  Get started
                </button>
              </NavLink>
            </div>
          </div>
          <svg
            className="x"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 220 400"
            height="400"
            width="220"
          >
            <g className="top-bars" stroke-width="4">
              <path className="bar bar1" d="M 178,20 H 202" />
              <path className="bar bar2" d="M 178,29 H 202" />
            </g>
          </svg>
          <div
            className="menu-click-area"
            onClick={() => {
              document.querySelector(".phone").classList.toggle("active3");
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
