import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./testimonial.scss";
function Testimonial() {
  return (
    <center>
      {" "}
      <div className="col-md-  testimonial-carousel">
        {" "}
        <Carousel>
          <Carousel.Item>
            <div className="col-md-12 mt4">
              <p>
                “I have been using educare Lesson Planner for a year now and it
                has been a<br /> game-changer. My lesson planning and grading
                have never been easier!”
              </p>
              <h6>Jane</h6>
              <small>7th grade teacher</small>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-12 mt4">
              <p>
                “I have been using educare Lesson Planner for a year now and it
                has been a game-changer. <br />
                My lesson planning and grading have never been easier!”
              </p>
              <h6>Tora</h6>
              <small>10th grade teacher</small>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-12 mt4">
              <p>
                “I have been using educare Lesson Planner for a year now and it
                has been a game-changer. <br />
                My lesson planning and grading have never been easier!”
              </p>
              <h6>Faith</h6>
              <small>8th grade teacher</small>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </center>
  );
}

export default Testimonial;
