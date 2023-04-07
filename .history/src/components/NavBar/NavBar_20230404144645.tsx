import React from "react";
import Logo from "../../assets/images/educare-logo.png";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo-holder">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="col-md-12  col-12  logo" src={Logo} alt="Scholar" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
