import React from "react";
import "./about-us.scss";
function AboutUs() {
  return (
    <>
      <div className="col-md-12 about-landing">
        <center>
          <h1 className="col-md-7">
            We are building a better future for your School and Business
          </h1>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 flexy missions-and-vissions ">
        <div className="img-div col-md-6"></div>
        <div className="col-md-5 offset-md-1">
          <h1>Our Misson</h1>
          <p>
            Our mission is to empower educational institutions and businesses
            through innovative software solutions. We strive to streamline
            processes, enhance productivity, and facilitate growth by leveraging
            cutting-edge technology and a deep understanding of the unique needs
            and challenges of the education and business sectors.
          </p>
          <p>
            {" "}
            Our aim is to create software that not only meets our clients’
            immediate requirements but also adapts to the ever-changing
            landscape, driving sustainable success and making a positive impact
            in the communities we serve.
          </p>
        </div>
      </div>
      <div className="col-md-12 ">
        {" "}
        <center>
          <div className="col-md-6 mtt">
            <h1>We’re a mission driven company</h1>
            <p>
              We are dedicated to developing innovative solutions that empower
              schools and businesses to streamline their workflows and focus on
              what matters most – educating the next generation.
            </p>
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 flexy  missions-and-vissions mtt">
        <div className="col-md-6 mt">
          <h3>Our Commitment to Continuous Improvement</h3>
          <p className="mt5">
            At Educare, we are committed to continuous improvement and the
            journey towards excellence. Our software platform evolves to meet
            the changing needs of our clients in the education sector and
            businesses.
          </p>
          <p>
            We work tirelessly to enhance our platform, customer service, and
            internal processes, actively seeking feedback to deliver an
            exceptional user experience.
          </p>
          <p>
            By staying at the forefront of technological advancements, we ensure
            that our clients’ evolving needs are met effectively.
          </p>
        </div>
        <div className="col-md-6 img-div"></div>
      </div>
      <div className="col-md-10 offset-md-1 flexy  missions-and-vissions mtt">
        <div className="col-md-6 img-div"></div>
        <div className="col-md-5 offset-md-1 mt8">
          <h3>Embracing Change and Innovation</h3>
          <p className="mt5">
            Educare is driven by a commitment to embracing change and fostering
            innovation. We understand that the educational and business
            landscapes are constantly evolving.
          </p>
          <p>
            Our focus is on continuous improvement, refining and developing our
            software to provide effective solutions. By actively seeking and
            incorporating user feedback, we stay ahead of the curve, offering
            cutting-edge features and functionalities that meet the evolving
            needs of our clients in education and business sectors.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy  missions-and-vissions mtt">
        <div className="col-md-5 mt">
          <h3>Our Collaborative Approach</h3>
          <p className="mt5">
            We emphasize the significance of collaboration for success. We
            closely collaborate with our clients, understanding their unique
            challenges and requirements.
          </p>
          <p>
            Our team combines expertise in technology and education to deliver
            tailored solutions that meet the specific needs of each school and
            business we serve.
          </p>
          <p>
            We prioritize strong client relationships, fostering open
            communication and providing ongoing support to help schools and
            businesses achieve excellence.
          </p>
        </div>
        <div className="col-md-6 img-div offset-md-1"></div>
      </div>
      <center>
        {" "}
        <div className="col-md-9 mtt">
          <h1>We are part of the corporate membership & partners</h1>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 cv-div mtt">
        <center>
          <div className="col-md-7">
            <h2>Ready to be more efficient??</h2>
            <p>Let’s get you signed up for free today!</p>
            <button>Sign up for free now</button>
          </div>
        </center>
      </div>
    </>
  );
}

export default AboutUs;
