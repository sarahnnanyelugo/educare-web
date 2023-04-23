import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import HRDashboard from "../../assets/images/hr-page.png";
import HRSimple from "../../assets/images/hr-simple.png";

import "./hrm-page.scss";

export const HRMPage = () => {
  return (
    <>
      <div className="col-md-12 hrm-nav sticky-top">
        {" "}
        <NavTwo title="HR Manager" />
      </div>
      <div className="col-md-12  hr-manager ">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt9">
            {" "}
            <Heading
              bg="#FCEBD7"
              color="#EA8713"
              text="Introducing HR Manager"
            />
            <h1>A people management platform built for people</h1>
            <p>
              Simplify your HR & Payroll processes with our comprehensive
              software
              <br /> solution that covers everything from hiring to offboarding.
            </p>
          </div>
          <div className="col-md-4 offset-md-2">
            <div className="col-md-10">
              {" "}
              <Form bg="#EA8713" text="Get started" />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 hr-dashboard">
        {" "}
        <center>
          {" "}
          <div className="col-md-11">
            <img
              className="   logo"
              src={HRDashboard}
              alt="Scholar"
              width="100%"
            />
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1  mt hr-simple">
        {" "}
        <div className="col-md-11 ">
          <div className="flexy">
            <div className="col-md-4">
              <h1>Core HR made simple</h1>
            </div>
            <div className="col-md-6 offset-md-2">
              <p>
                {" "}
                Simplify your core HR operations and say farewell to the
                tediousness of managing HR tasks through manual spreadsheets or
                inflexible systems. Our smart and efficient HR software comes
                with features tailored to release you from administrative
                duties.
              </p>
            </div>
          </div>

          <img className="   mt9" src={HRSimple} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="pricing-plans col-md-10 offset-md-1 flexy">
        <div className="col-md-7">
          <h3>Pricing plans start at just ₦400/month</h3>
          <p>
            Select from a range of plans and supplementary features. You will
            not be charged until you are prepared to use our HR Manager.
          </p>
        </div>
        <div className="col-md-2 offset-md-2">
          <center>
            {" "}
            <button>See prices</button>
          </center>
        </div>
      </div>
      <center>
        <div className="col-md-6" style={{ marginBottom: "30px" }}>
          <h1>Get your team working with educare’s HR Manager.</h1>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy  hr-steps ">
        <div className="col-md-4 boda pt">
          <center>
            {" "}
            <div className="col-md-8">
              <h4>Create an account.</h4>
              <p>
                It’s free to start. Tell us about your business and we’ll find
                the best plan for your needs.
              </p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-4 boda pt">
          <center>
            {" "}
            <div className="col-md-8">
              <h4>Add your people.</h4>
              <p>
                Enter your employees into Gusto. They can even self-onboard to
                save you time.
              </p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-4 pt">
          <center>
            {" "}
            <div className="col-md-8">
              <h4>Run your first payroll.</h4>
              <p>
                Once we have your employee and tax info, you can run payroll in
                just a few clicks.
              </p>
            </div>
          </center>
        </div>
      </div>
      <center>
        {" "}
        <button className="hrbtn">Get Started</button>
      </center>
    </>
  );
};
