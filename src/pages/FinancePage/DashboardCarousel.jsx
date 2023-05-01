import React, { Component } from "react";
import Slider from "react-slick";
import Finance from "../../assets/images/finance-dash.png";
import Requisition from "../../assets/images/requisition.png";
import Statement from "../../assets/images/statement.png";
import Inventory from "../../assets/images/store-inventory.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default class DashboardCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "300px",
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      // fade: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };
    return (
      <div className="col-md-12 dashboard-carousel-container">
        <Slider {...settings}>
          <div className="col-md-2 tiral-box">
            {" "}
            <img className="" src={Finance} alt="Scholar" width="95%" />
          </div>
          <div className="col-md-2 tiral-box">
            <img className="" src={Requisition} alt="Scholar" width="95%" />
          </div>
          <div className="col-md-2 tiral-box">
            <img className="" src={Statement} alt="Scholar" width="95%" />
          </div>
          <div className="col-md-2 tiral-box">
            <img className="" src={Inventory} alt="Scholar" width="95%" />
          </div>
        </Slider>
        <center>
          <h3>Streamlined payroll accounting</h3>
        </center>
      </div>
    );
  }
}
