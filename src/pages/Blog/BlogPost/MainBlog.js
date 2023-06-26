import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blog-post.scss";
import { MainPostOne } from "../../../TestData";
import { useLocation } from "react-router-dom";

function MainBlog() {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const location = useLocation();
  useEffect(() => {
    setId(location.state.blog_id);
    // console.log(id, location);
  }, []);

  useEffect(() => {
    console.log(id);
    if (id != 0)
      setData(
        MainPostOne.find((obj) => {
          return obj.id === id;
        })
      );
  }, [id]);
  //   const { img, paragraph, url, title, date } = props;
  return (
    <>
      <div className="col-md-12 blog-container">
        <Link to={"/blog"} className="offset-md-1 blog-link2">
          Our blog
        </Link>
        <center>
          <h1 className="main-blog-heading col-md-7">{data.title}</h1>
          <p>{data.date}</p>
        </center>
      </div>
      <div className="blog-post-container col-md-12 ">
        <div className="col-md-10 offset-md-1">
          {" "}
          <img
            className="blog-imgg"
            src={data.img}
            alt="Scholar"
            width="100%"
          />
        </div>

        <div className="col-md-6 offset-md-3 mt5 blog-summary">
          <span dangerouslySetInnerHTML={{ __html: data?.paragraph }}></span>
        </div>
      </div>
    </>
  );
}

export default MainBlog;
