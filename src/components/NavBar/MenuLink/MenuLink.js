import React from "react";
import { Link } from "react-router-dom";
import "./menu-link.scss";

function MenuLink({ data, callback }) {
  function fb() {
    return () => callback;
  }
  return (
    <Link to={data.url} className="menu-link" onClick={() => fb}>
      {" "}
      <div className="col-md-12 menu-link-container">
        <img className="   " src={data.icon} alt="Scholar" />
        <h6>{data.title}</h6>
        <p>{data.text}</p>
      </div>
    </Link>
  );
}

export default MenuLink;
