import React from "react";
import { Link } from "react-router-dom";
import "./stories.scss";
function Stories({ data }) {
  const { schImg, schLogo, storyTitle, storyParagraph, storyLink } = data;
  return (
    <div className=" col ">
      {" "}
      <div className="stories-component-div col col-md-12">
        <img src={schImg} alt="Scholar" width="100%" className="sch-img" />
        <div className="story-innerr">
          <img src={schLogo} alt="Scholar" width="30%" />
          <p className="title col-md-11">{storyTitle}</p>
          <p>{storyParagraph}</p>
          <Link className="read-more" to={storyLink}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Stories;
