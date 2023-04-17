import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/educare-logo.png";
import Arrow from "../../assets/images/arrowdown.svg";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [themeSet, setTheme] = useState("");
  const location = useLocation();
  const [navWidth, setNavWidth] = useState(0);

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
  return (
    <div className="navbar-container ">
      <div className="logo-holder  col-md-2">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" width="60%" />
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
        <button className="sign-in-button">Log in</button>
        <button
          className="get-started-button"
          style={{ backgroundColor: "" + themeSet }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default NavBar;
