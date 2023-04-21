import Carousel from "react-bootstrap/Carousel";
import Profile from "../../../assets/images/med-profile.png";
import Dashboard from "../../../assets/images/medicalsDashboard.png";
import Diagnosis from "../../../assets/images/diagnosis.png";
import Report from "../../../assets/images/latest-report.png";

import "./medical-tab.scss";
function MedicalTabNav() {
  return (
    <div className="medcaro ">
      <Carousel fade indicatorLabels="1234">
        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Well-organized Workflows</h2>
              <p>
                Provides schools with a centralized platform to efficiently
                manage various pastoral care activities, such as tracking
                student attendance, behavior, and well-being, scheduling and
                documenting pastoral care interventions, and recording student
                interactions.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Dashboard} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Student Safety</h2>
              <p>
                educare Medical prioritizes the safety and well-being of
                students. It helps schools keep track of students’ health
                conditions, medications, and allergies, ensuring that
                appropriate care is provided when needed. This promotes student
                safety and minimizes the risk of medical emergencies or
                incidents in schools.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Report} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Enhanced Health Services</h2>
              <p>
                educare”s medical helps schools streamline their health
                services, ensuring that students receive prompt and appropriate
                medical care. It facilitates efficient communication among
                school staff, parents, and healthcare providers, ensuring timely
                and accurate information exchange.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Diagnosis} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Customizable and Scalable</h2>
              <p>
                The medical module of educare is highly customizable, allowing
                schools to adapt it to their specific medical policies,
                procedures, and workflows. It is also scalable, making it
                suitable for schools of different sizes and types, from local
                schools to international institutions.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Profile} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MedicalTabNav;
