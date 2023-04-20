import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav-two.scss";

export const NavTwo = (props) => {
  return (
    <div className="col-md-12 ">
      <div className="col-md-10 offset-md-1 top-nav-container ">
        {" "}
        <div className="topnav-heading ">
          <h4>{props.title}</h4>
        </div>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <NavLink to={"/features"} activeClassName="active">
              <button className="top-nav-links"> Features</button>
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to={"/educare-packages"} activeClassName="active">
              <button className="top-nav-links"> Pricing</button>
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to={"/resources"} activeClassName="active">
              <button className="top-nav-links"> Resources</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
