import React from "react";
import Logo from "../../assets/images/educare-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
function NavBar() {
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
          <NavLink to={""} className="nav-links">
            Solutions{" "}
            <span>
              <i className="icofont-curved-down"></i>
            </span>
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink to={""} className="nav-links">
            Resources
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink to={""} className="nav-links">
            Pricing
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink to={""} className="nav-links">
            Support
          </NavLink>
        </li>
      </ul>
      <div className="nav-buttons">
        <button>Log in</button>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
}

export default NavBar;
