import React from "react";
import Logo from "../../assets/images/educare-logo.png";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo-holder">
        {" "}
        <Link to={"/"}>
          {" "}
          <img className="col-md- col- logo" src={Logo} alt="Scholar" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
