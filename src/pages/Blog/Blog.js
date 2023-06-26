import React from "react";
import "./blog.scss";
import { blogPostColOne, blogPostColTwo } from "../../TestData";
import MiniBlog from "./BlogPost/MiniBlog";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <>
      <div className="col-md-12 blog-container">
        <center>
          <p>Our Blog</p>
          <h1>Resources and Insights</h1>
          <p>
            The latest news, interviews, technologies, and resources on educare.
          </p>
        </center>
      </div>
      <div className="flexy">
        <SearchBar />
      </div>
      <div className="col-md-10 offset-md-1 flexy mt">
        <div className="col-md-6">
          {" "}
          <div className="col-md-11 ">
            {blogPostColOne.map((data, index) => (
              <MiniBlog data={data} />
            ))}
          </div>{" "}
        </div>
        <div className="col-md-6">
          {" "}
          <div className="col-md-11 ">
            {blogPostColTwo.map((data, index) => (
              <MiniBlog data={data} />
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Blog;
