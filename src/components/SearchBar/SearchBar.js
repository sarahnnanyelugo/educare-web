import React from "react";
import "./search-bar.scss";
// import { BsSearch } from "react-icons/bs";
import Icon from "../../assets/images/search-icon1.png";

function SearchBar() {
  return (
    <>
      <div className="search-div">
        <form action="" class="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required />
          <button class="search-btn" type="submit"></button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
