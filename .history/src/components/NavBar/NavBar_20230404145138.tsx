import React from "react";
import Logo from "../../assets/images/educare-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo-holder col-md-1 ">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="col-md-12   logo" src={Logo} alt="Scholar" />
        </Link>
      </div>
      <ul className="nav-links list-inline list-unstyled">
        <li className="list-inline-item">
          <NavLink to={""}>
            Solutions{" "}
            <span>
              <i className="icofont-curved-down"></i>
            </span>
          </NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink to={""}>Resources</NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink to={""}>Pricing</NavLink>
        </li>{" "}
        <li className="list-inline-item">
          <NavLink to={""}>Support</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
