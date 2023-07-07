import React, { useEffect, useState, useRef } from "react";
import Logo from "../../assets/images/logo2.png";
import Arrow from "../../assets/images/arrowdown.svg";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";
import Icofont from "react-icofont";
import { MenuTab } from "./MenuTab/MenuTab";
import { MobileDrop } from "./MobileDrop/Mobile-drop";
import Accordion from "react-bootstrap/Accordion";
import Img1 from "../../assets/images/school.svg";
import Img2 from "../../assets/images/logistics.svg";
import Img3 from "../../assets/images/retail.svg";
import Img4 from "../../assets/images/construction.svg";
import Img5 from "../../assets/images/energy.svg";
import Img6 from "../../assets/images/health.svg";
import Img7 from "../../assets/images/support2.svg";
import Img8 from "../../assets/images/guides.svg";
import Img9 from "../../assets/images/blog.svg";
import Img10 from "../../assets/images/partner.svg";
import Img11 from "../../assets/images/contact.svg";
import Img12 from "../../assets/images/careers.svg";
import Img13 from "../../assets/images/manufacturing.svg";
import Img14 from "../../assets/images/services.svg";
import Img15 from "../../assets/images/consulting.svg";
import Img16 from "../../assets/images/government.svg";
import Img17 from "../../assets/images/abt-us.svg";

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

      case "/wallet-manager":
        setTheme("#11A377");
        setTheme2("#D9F0E9");

        break;
      case "/facility-manager":
        setTheme("#0B2FF7");
        setTheme2("#FEF5F7");

        break;
    }
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
        <ul className=" list-inline list-unstyled nav-links-container web-nav hList">
          <li className="list-inline-item web-nav">
            <a href="#click" class="menu">
              <NavLink
                to={"/finance-overview"}
                activeClassName="active"
                className="menu-title"
              >
                <button className="nav-links menu-title">
                  {" "}
                  Products <i class="icofont-curved-down"></i>
                </button>
              </NavLink>
              <div class="menu-dropdown ">
                <MenuTab />
              </div>
            </a>
          </li>{" "}
          <li className="list-inline-item web-nav">
            <a href="#click" class="menu">
              <NavLink
                to={"/finance-overview"}
                activeClassName="active"
                className="menu-title"
              >
                <button className="nav-links menu-title">
                  {" "}
                  Use Cases <i class="icofont-curved-down"></i>
                </button>
              </NavLink>
              <div className="flexy menu-dropdown2">
                {" "}
                <ul className="col-md-6">
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img1}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />
                      Schools
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/logistics"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img2}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />
                      Distribution and Logistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img3}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Retail
                    </NavLink>
                  </li>{" "}
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img4}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Construction
                    </NavLink>
                  </li>{" "}
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img5}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Energy and Utilities
                    </NavLink>
                  </li>
                </ul>
                <ul className="col-md-6">
                  {" "}
                  <li>
                    <NavLink
                      to={"/healthcare"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img6}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Healthcare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img13}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Manufacturing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img14}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Financial Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img15}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Consulting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img16}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Government
                    </NavLink>
                  </li>
                </ul>
              </div>
            </a>
          </li>{" "}
          <li className="list-inline-item web-nav">
            <a href="#click" class="menu">
              <NavLink
                to={"/finance-overview"}
                activeClassName="active"
                className="menu-title"
              >
                <button className="nav-links menu-title">
                  {" "}
                  Resources <i class="icofont-curved-down"></i>
                </button>
              </NavLink>
              <div className="flexy menu-dropdown2">
                {" "}
                <ul className="col-md-6">
                  <li>
                    <NavLink
                      to={"/support"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img7}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />
                      Support Center
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/guides"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img8}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />
                      Guides
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/blog"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img9}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Blog
                    </NavLink>
                  </li>{" "}
                </ul>
                <ul className="col-md-6">
                  {" "}
                  <li>
                    <NavLink
                      to={"/partner"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img10}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Become a Partner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/customer-stories"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img11}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Customer Stories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact-us"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img12}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Contact Sales
                    </NavLink>
                  </li>
                </ul>
              </div>
            </a>
          </li>{" "}
          <li className="list-inline-item web-nav">
            <a href="#click" class="menu">
              <NavLink
                to={"/finance-overview"}
                activeClassName="active"
                className="menu-title"
              >
                <button className="nav-links menu-title">
                  {" "}
                  Company <i class="icofont-curved-down"></i>
                </button>
              </NavLink>
              <div className="flexy menu-dropdown2">
                {" "}
                <ul className="col-md-6">
                  <li>
                    <NavLink
                      to={"/about-us"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img17}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/careers"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img12}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Careers
                    </NavLink>
                  </li>{" "}
                </ul>
                <ul className="col-md-6">
                  {" "}
                  <li>
                    <NavLink
                      to={"/contact-us"}
                      className="menu-links list-group-item list-group-item-action"
                      type="button"
                    >
                      <img
                        className="   logo"
                        src={Img7}
                        alt="Scholar"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </a>
          </li>{" "}
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
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    style={{ background: themeSet2 }}
                    className="menu-navs"
                  >
                    <button
                      type="button"
                      className="list-group-item list-group-item-action m-accord"
                      style={{ background: themeSet2 }}
                    >
                      {" "}
                      <span style={{ color: themeSet }}>
                        <i class="icofont-help-robot"></i>
                      </span>
                      Products
                    </button>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="col-md-12 mobile-menu">
                      <MenuTab />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    style={{ background: themeSet2 }}
                    className="menu-navs"
                  >
                    <button
                      type="button"
                      className="list-group-item list-group-item-action m-accord"
                      style={{ background: themeSet2 }}
                    >
                      {" "}
                      <span style={{ color: themeSet }}>
                        <i class="icofont-package"></i>
                      </span>
                      Use Cases
                    </button>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul class="list-unstyled">
                      <li>
                        <NavLink
                          to={"/schools"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img1}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Schools
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/logistics"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img2}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />
                          Distribution and Logistics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/blog"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img3}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Retail
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img4}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Contruction
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/healthcare"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img5}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Energy and Utilities
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/healthcare"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img6}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Healthcare
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img13}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Manufacturing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img14}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Financial Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img15}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Consulting
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/blog"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img16}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Government
                        </NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>{" "}
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    style={{ background: themeSet2 }}
                    className="menu-navs"
                  >
                    <button
                      type="button"
                      className="list-group-item list-group-item-action m-accord"
                      style={{ background: themeSet2 }}
                    >
                      {" "}
                      <span style={{ color: themeSet }}>
                        <i class="icofont-package"></i>
                      </span>
                      Resources
                    </button>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul class="list-unstyled">
                      <li>
                        <NavLink
                          to={"/support"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img7}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Support Center
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/guides"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img8}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Guides
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/blog"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img9}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Blog
                        </NavLink>
                      </li>{" "}
                      <li>
                        <NavLink
                          to={"/blog"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img10}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Become a Partner
                        </NavLink>
                      </li>{" "}
                      <li>
                        <NavLink
                          to={"/"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img11}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Customer Stories
                        </NavLink>
                      </li>{" "}
                      <li>
                        <NavLink
                          to={"/contact-us"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img12}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Contact Sales
                        </NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    style={{ background: themeSet2 }}
                    className="menu-navs"
                  >
                    <button
                      type="button"
                      className="list-group-item list-group-item-action m-accord"
                      style={{ background: themeSet2 }}
                    >
                      {" "}
                      <span style={{ color: themeSet }}>
                        <i class="icofont-phone"></i>
                      </span>
                      Company
                    </button>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul class="list-unstyled">
                      <li>
                        <NavLink
                          to={"/about-us"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img17}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/contact-us"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img7}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Contact Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/careers"}
                          className="menu-links list-group-item list-group-item-action"
                          type="button"
                          onClick={() => {
                            document
                              .querySelector(".phone")
                              .classList.toggle("active3");
                          }}
                        >
                          <img
                            className="   logo"
                            src={Img12}
                            alt="Scholar"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Careers
                        </NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <NavLink to={"/login"} className="menu-navs spaze">
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
