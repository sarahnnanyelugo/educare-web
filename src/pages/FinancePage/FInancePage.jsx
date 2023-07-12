import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./finance-page.scss";
import Setting from "../../assets/images/purple-setting.svg";
import Track from "../../assets/images/p-screen.svg";
import Storage from "../../assets/images/p-tick.svg";
import Support from "../../assets/images/payroll.svg";
import Together from "../../assets/images/p-chart.svg";

import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
import Efficiency from "../../components/Efficiency/Efficiency";
import Prices from "../../components/Prices/Prices";
import { Link, NavLink } from "react-router-dom";
import Shield from "../../assets/images/security.json";
import Lottie from "react-lottie-player";
import { Prefooter } from "../../components/Prefooter/Prefooter";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
export const FinancePage = () => {
  return (
    <>
      <div className="col-md-12 nav-two-finance ">
        {" "}
        <NavTwo title="Finance" />
      </div>

      <center>
        {" "}
        <div className="col-md-6 finance-intro">
          <Heading
            color="#3B0F8E"
            text="Introducing educare Finance"
            bg="#DED0FA"
            boda="#DED0FA"
          />
          <h1>
            Simplify your business with our powerful apps made just for them.
          </h1>
          <p className="col-md-11">
            From invoicing to order management to accounting, educare Finance
            has all the tools you need to streamline all of your back office
            operations. Gain insight into your financial performance and make
            informed decisions to help your business thrive.
          </p>
          <div className="flexy flexyM offset-md-4 mt4 finance-btns">
            <GetStartedForm
              text=" Get started"
              bg="#4A13B2"
              cls="gsmf"
              bgbtn="#4A13B2"
              backdropbg="modal-backdrop-purple"
            />
            <button className="demo">Request for demo</button>
          </div>
        </div>
      </center>
      <div id="features" />

      <DashboardDisplay />

      <div className="col-md-12 integrated-finance">
        <center>
          <div className="col-md-5">
            <h1>Benefits of an Integrated Finance Suite for Your Business</h1>
          </div>
        </center>
        <div className="col-md-10 offset-md-1 flexy  mt">
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Optimize your business operations with efficiently"
                icon={Setting}
                paragraph="Streamline your business operations by simplifying purchase and inventory management, order tracking, and fulfillment. Maximize sales potential by adding more selling channels while efficiently managing multiple warehouses. Improve order processing times to enhance customer satisfaction."
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Improved business decisions"
                icon={Track}
                paragraph="By connecting all back-office applications, data integration becomes automated, eliminating the need for manual data linking across various sources. This integration ensures that information flows in real-time between the applications, providing you with up-to-date and accurate information. As a result, you can make better-informed business decisions."
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Simplify Your Financial Management with Automated Tools"
                icon={Storage}
                paragraph="Effortlessly manage your finances and maintain cash flow with automated tools that allow you to track receivables and payables. Seamlessly import bank feeds to ensure accuracy and compliance with sales tax, VAT, and GST."
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 offset-md-3 flexy  mt5">
          <div className="col-md-6">
            <div className="col-md-12">
              <Efficiency
                title="Streamlined payroll accounting"
                icon={Support}
                paragraph="Automate salary payments through secure integrations with partner banks. Distribute payslips and payroll forms online. Effortlessly organize and download crucial payroll documents all from one place. Tax saving investment declarations can be quickly and easily submitted online."
              />
            </div>
          </div>{" "}
          <div className="col-md-6 offset-md-1">
            <div className="col-md-12">
              <Efficiency
                title="Payroll data on demand"
                icon={Together}
                paragraph="Download ready-to-share payroll reports that paint a complete picture about your organization’s payroll costs.."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="finance-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Finance.
            </p>
          </div>
          {/* <div className="col-md-2 offset-md-2">
            <center>
              {" "}
              <button>See prices</button>
            </center>
          </div> */}
        </div>
        <div className="offset-md-4 recomendF">
          {" "}
          <button>Recommended</button>
        </div>
        <div className="col-md-10 offset-md-1 flexy prices-contain">
          <div className="col-md-3 zoom curve">
            {" "}
            <Prices
              package="Basic"
              amount="400.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Professional"
              amount="600.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Premium"
              amount="800.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom curve2">
            {" "}
            <Prices
              package="Enterprise"
              amount="Contact Us"
              url={""}
              // clss="curve2"
              // btnBg="#ed2f59"
            />
          </div>
        </div>
        <center>
          <p>
            Kindly check out our{" "}
            <Link to={"/educare-business"} className="link">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 flexy mt lottie-div">
        <div className="col-md-6 ">
          <h3>Security at the heart of everything</h3>
          <p>
            educare is dedicated to safeguarding the privacy and security of its
            customers’ data. To achieve this goal, we employ a range of robust,
            enterprise-level security features, and conduct regular audits of
            our applications, infrastructure, and internal policies. By doing
            so, we strive to ensure uninterrupted services and a secure
            environment for your data.
          </p>
        </div>
        <div className="col-md-5 offset-md-1">
          <Lottie
            loop
            animationData={Shield}
            play
            className="lottieee"
            style={{}}
          />
        </div>
      </div>
      <Prefooter
        text="Provide a Finance experience that 
              will scale your business upward."
      />
    </>
  );
};
