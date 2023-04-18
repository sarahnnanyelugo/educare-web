import React, { useEffect, useState, useRef } from "react";
import Logo from "../../assets/images/educare-logo.png";
import Arrow from "../../assets/images/arrowdown.svg";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";

function NavBar() {
  const prevUrlRef = useRef(null);

  const [themeSet, setTheme] = useState("");
  const location = useLocation();
  const [navWidth, setNavWidth] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const openNav = () => {
    setNavWidth("100%");
  };

  const closeNav = () => {
    setNavWidth(0);
  };
  function SwitchTheme(theme) {
    switch (location.pathname) {
      case "/":
        setTheme("#2f99da");
        break;
      default:
      case "/finance-overview":
        setTheme("#5044b2");
        break;
      case "/educare-schools":
        setTheme("#2f99da");
        break;
    }
    console.log(location.pathname);

    console.log(themeSet);
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
        console.log(showNav);
      }, 200);
    }
  });
  return (
    <div className={`navbar-container ${showNav ? "" : "hide"}`}>
      <div className="logo-holder  col-md-2">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" width="50%" />
        </Link>
      </div>
      <ul className=" list-inline list-unstyled nav-links-container">
        <li className="list-inline-item web-nav">
          <NavLink
            to={"/finance-overview"}
            className="nav-links"
            activeClassName="active"
          >
            Solutions{" "}
          </NavLink>
        </li>{" "}
        <li className="list-inline-item web-nav">
          <NavLink
            to={"/resources"}
            className="nav-links"
            activeClassName="active"
          >
            Resources
          </NavLink>
        </li>{" "}
        <li className="list-inline-item web-nav">
          <NavLink
            to={"/support"}
            className="nav-links"
            activeClassName="active"
          >
            Support
          </NavLink>
        </li>{" "}
        <li className="list-inline-item web-nav">
          <NavLink
            to={"/contact"}
            className="nav-links"
            activeClassName="active"
          >
            Contact us
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
  );
}

export default NavBar;
