import React from "react";
import "./search-bar.scss";
// import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <>
      <div className="mt5 offset-md-1 search-input-div">
        {" "}
        <div id="cover">
          <form method="get" action="">
            <div class="tb">
              <div class="td">
                <input type="text" placeholder="Search" required />
              </div>
              <div class="td" id="s-cover">
                <button type="submit">
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
