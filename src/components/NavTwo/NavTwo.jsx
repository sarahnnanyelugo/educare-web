import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav-two.scss";

export const NavTwo = (props) => {
  return (
    <div className="col-md-12 top-nav-container ">
      <div className="topnav-heading offset-md-1">
        <h4>{props.title}</h4>
      </div>
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
          <Link to={""} className="top-nav-links">
            Features
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to={""} className="top-nav-links">
            Pricing
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to={""} className="top-nav-links">
            Resources
          </Link>
        </li>
      </ul>
      <div className="col-md-1">&nbsp;</div>
    </div>
  );
};
