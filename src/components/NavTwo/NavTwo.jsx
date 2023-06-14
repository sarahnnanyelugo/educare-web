import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav-two.scss";
import Logo from "../../assets/images/logo2.png";

export const NavTwo = (props) => {
  return (
    <div className="col-md-12 sticky-top">
      <div className="col-md-10 offset-md-1 top-nav-container ">
        {props.headerIcon ? (
          <img
            className="   logo"
            src={props.headerIcon}
            alt="Scholar"
            // width="50%"
          />
        ) : (
          ""
        )}
        <div className="topnav-heading ">
          <h4>{props.title}</h4>
        </div>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <NavLink to={"/features"} activeClassName="active">
              <button className="top-nav-links">
                {" "}
                Features <i class="icofont-curved-down"></i>
              </button>
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to={props.priceUrl} activeClassName="active">
              <button className="top-nav-links"> Pricing</button>
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to={"/resources"} activeClassName="active">
              <button className="top-nav-links">
                {" "}
                Resources <i class="icofont-curved-down"></i>
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
