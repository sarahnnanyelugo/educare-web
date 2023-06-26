import React from "react";
import "./search-bar.scss";
// import { BsSearch } from "react-icons/bs";
import Icon from "../../assets/images/search-icon1.png";

function SearchBar() {
  return (
    <>
      <div className="search-div">
        <div class="search-box">
          <button class="btn-search">
            <img className="aisa" src={Icon} alt="Scholar" width="70%" />
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
