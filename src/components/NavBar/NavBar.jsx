import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/educare-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [themeSet, setTheme] = useState("");
  const location = useLocation();
  function SwitchTheme(theme) {
    switch (location.pathname) {
      case "/":
        setTheme("blue");
        break;
      case "/finance-overview":
        setTheme("purple");
        break;
      default:
    }
    console.log(location.pathname);

    console.log(themeSet);
  }
  useEffect(() => {
    SwitchTheme("blue");
  }, []);
  useEffect(() => {
    SwitchTheme("blue");
  }, [location.pathname]);
  return (
    <div className="navbar-container">
      <div className="logo-holder  ">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" />
        </Link>
      </div>
      <ul className=" list-inline list-unstyled nav-links-container">
        <li className="list-inline-item">
          <NavLink
            to={"/finance-overview"}
            className="nav-links"
            activeClassName="active"
          >
            Solutions{" "}
            <span>
              <i className="icofont-curved-down"></i>
            </span>
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            to={"/resources"}
            className="nav-links"
            activeClassName="active"
          >
            Resources
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            to={"/pricing"}
            className="nav-links"
            activeClassName="active"
          >
            Pricing
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            to={"/support"}
            className="nav-links"
            activeClassName="active"
          >
            Support
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink
            to={"/contact"}
            className="nav-links"
            activeClassName="active"
          >
            Contact us
          </NavLink>
        </li>
      </ul>
      <div className="nav-buttons">
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
