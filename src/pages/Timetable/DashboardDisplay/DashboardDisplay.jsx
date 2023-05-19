import Carousel from "react-bootstrap/Carousel";
import Profile from "../../../assets/images/med-profile.png";
import Dashboard from "../../../assets/images/finance-dash.png";
import Diagnosis from "../../../assets/images/diagnosis.png";
import Report from "../../../assets/images/latest-report.png";
import Requisition from "../../../assets/images/requisition.png";
import Statement from "../../../assets/images/statement.png";
import Inventory from "../../../assets/images/store-inventory.png";
import "./dashboard-display.scss";
function DashboardDisplay() {
  return (
    <>
      <div className="timetable-dasboard-display-carousel ">
        <div className="offset-md-1 flexy dashboard-description">
          <h1>
            educare <span>Timetable</span> for your school
          </h1>
          <div className="col-md-4 offset-md-1">
            <div className="col-md-11">
              {" "}
              <p>
                {" "}
                Effortlessly schedule your day with our time table software
                module. With an easy-to-use interface, and customer support, our
                software is designed to meet your scheduling needs and make your
                life easier.
              </p>
            </div>
          </div>
        </div>
        <Carousel fade>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Statement} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Requisition}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Statement} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Statement}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Inventory} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Inventory}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default DashboardDisplay;
