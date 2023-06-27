import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./blog-post.scss";
function LatestBlog({ data }) {
  const [blogId, setBlogId] = useState(0);
  //   const { img, paragraph, url, title, date } = props;
  useEffect(() => {
    setBlogId(data.blog_id);
  });
  return (
    <>
      <div className="latest-post-container col-md-12 ">
        <img className="" src={data.img} alt="Scholar" width="100%" />
        <small>{data.date}</small>
        <h6>{data.title}</h6>

        <div className="flexy flexyM">
          <Link
            to="/main-blog"
            state={{ blog_id: blogId }}
            className="blog-link"
          >
            Read post
          </Link>
        </div>
      </div>
    </>
  );
}

export default LatestBlog;
