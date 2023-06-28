import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blog-post.scss";
function MiniBlog({ data }) {
  const [blogId, setBlogId] = useState(0);
  //   const { img, paragraph, url, title, date } = props;
  useEffect(() => {
    setBlogId(data.blog_id);
  });
  return (
    <>
      <div className="blog-post-container col-md-6 ">
        <img className="" src={data.img} alt="Scholar" width="100%" />
        <h5>{data.title}</h5>
        <p>{data.paragraph}</p>
        <div className="flexy flexyM">
          <Link
            to="/main-blog"
            state={{ blog_id: blogId }}
            className="blog-link"
          >
            Read post
          </Link>
          <p>{data.date}</p>
        </div>
      </div>
    </>
  );
}

export default MiniBlog;
