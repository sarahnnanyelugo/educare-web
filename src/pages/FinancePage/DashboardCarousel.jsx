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
      //   fade: true,

      centerMode: true,
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      //   adaptiveHeight: true,
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
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="col-md-12 dashboard-carousel-container">
        <Slider {...settings}>
          <div className="col-md-2 tiral-box">
            {" "}
            <img className="" src={Finance} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-2 tiral-box">
            <img className="" src={Requisition} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-2 tiral-box">
            <img className="" src={Statement} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-2 tiral-box">
            <img className="" src={Inventory} alt="Scholar" width="100%" />
          </div>
        </Slider>
      </div>
    );
  }
}
