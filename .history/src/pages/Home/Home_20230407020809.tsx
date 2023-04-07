import React from "react";
import { RandomComponent } from "./RandomComponent/RandomComponent";
import "./_home.scss";
import RedIcon from "../../assets/images/red-dots.svg";
import BlueIcon from "../../assets/images/blue-dots.svg";
import YellowIcon from "../../assets/images/yellow-dots.svg";
import HalfCircle from "../../assets/images/half-circle.svg";
import People from "../../assets/images/people.svg";
import Mail from "../../assets/images/edit.svg";
import People2 from "../../assets/images/people2.svg";
import Pastoral from "../../assets/images/pastoral.svg";
import Chart from "../../assets/images/chart.svg";
import Screen from "../../assets/images/screen.svg";
import Classroom from "../../assets/images/read-book.svg";
import Wallet from "../../assets/images/wallet.svg";
import Student from "../../assets/images/students.svg";
import Standard from "../../assets/images/standard.png";
import Paystack from "../../assets/images/paystack.svg";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Apen from "../../assets/images/apen.png";
import Aisa from "../../assets/images/aisa.svg";
import Message from "../../assets/images/message.svg";
import Features from "./Features/Features";
import EducareProducts from "./EducareProducts/EducareProducts";
import OtherEducareProducts from "./OtherEducareProducts/OtherEducareProducts";
import PinkChart from "../../assets/images/inventory.png";
import Account from "../../assets/images/stroke.png";
import Budjet from "../../assets/images/budjet.png";
import Requisition from "../../assets/images/project.png";
import Facility from "../../assets/images/list.png";
import Report2 from "../../assets/images/report-2.png";
import Calendar from "../../assets/images/calendar.png";
import Configure from "../../assets/images/configure.png";
import CBT from "../../assets/images/computer-setting.png";
import Senior from "../../assets/images/rep.png";
import Junior from "../../assets/images/junior.png";
import Transcript from "../../assets/images/cert.png";
import Insight from "../../assets/images/insights.png";
import Transfer from "../../assets/images/finance.png";
import Communication from "../../assets/images/book-review.png";
import Mailbox from "../../assets/images/edit.svg";
import Result from "../../assets/images/result.png";
import Question from "../../assets/images/question.png";
import CBT2 from "../../assets/images/computer-setting.png";
import Test from "../../assets/images/web-testing.png";
import TestResult from "../../assets/images/tick.png";
import Analysis from "../../assets/images/analyze.png";
import Medical from "../../assets/images/med.png";
import Lib from "../../assets/images/lib.png";
import Remarks from "../../assets/images/remark.png";
import Lesson from "../../assets/images/note.png";
import Voting from "../../assets/images/rank.png";
import Eclassroom from "../../assets/images/read-book.svg";
import Points from "../../assets/images/meeting-points.png";
import Hostel from "../../assets/images/yellow-chart.png";
import Exeact from "../../assets/images/logout.png";
import Activity from "../../assets/images/empty.png";
import Timetable from "../../assets/images/purple-chart.png";
import Work from "../../assets/images/fast-forward.png";
import Performance from "../../assets/images/clock.png";
import Recruitment from "../../assets/images/recruitment.png";
import Access from "../../assets/images/control.png";

export const Home = () => {
  return (
    <>
      <div className="col-md-12 modern-solutions-container">
        <center>
          <div className="col-md-6">
            <h1>Modern solution for your Business</h1>
            <p>
              Unlock Your Business’s Potential with Cutting-Edge Software
              Solutions Designed to Streamline Operations, Optimize Performance,
              and Drive Growth.
            </p>
            <button className="gs-button">Get started</button>
            <button className="request-button">Request for a demo</button>
          </div>
        </center>
      </div>
      <div className="col-md-12 actions-container flexy">
        <div className="col-md-4">
          <div className="col-md-9">
            {" "}
            <RandomComponent
              title="Pick your tools"
              icon={RedIcon}
              paragraph=" Unlock Your Business Potential with Cutting-Edge Software  Solutions Designed to Streamline"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            {" "}
            <RandomComponent
              title="work smart not hard"
              icon={YellowIcon}
              paragraph="Choose from our wide range of tools and select the ones that best fit Your business’s unique needs and goals.”"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            {" "}
            <RandomComponent
              title="We’ve got your back"
              icon={BlueIcon}
              paragraph="You can count on our support and expertise every step of the way, so you can focus on your business’s growth and success."
            />
          </div>
        </div>
      </div>
      <div className="features-heading">
        <center>
          <h1>Featured Products</h1>
        </center>
      </div>
      <div
        className="col-md-12  flexy features-holder"
        style={{ paddingBottom: "150px" }}
      >
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10  features-container flexy">
          <div className="col-md-6 first-container">
            <h3>educare for Business</h3>
            <p>
              Empower your team to work smarter, not harder, with our powerful
              software solution that simplifies complex tasks, frees up time,
              and drives business growth.
            </p>
            <button>Get Started</button>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="Finance"
                  detail="The one and only accounting and payroll solution your business will ever need"
                  icon={HalfCircle}
                />{" "}
              </div>{" "}
              <div className="col-md-6 hr-manager">
                <Features
                  feature="HR Manager"
                  detail="The one and only accounting and payroll solution your business will ever need"
                  icon={People2}
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy second-grid">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="MailBox"
                  detail="Simplify communication with our powerful mailbox"
                  icon={Mail}
                />{" "}
              </div>{" "}
              <div className="col-md-6">
                <Features
                  feature="Facility Management"
                  detail="Optimize your workforce with our staff management module."
                  icon={People}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12  flexy features-holder2">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10  features-container flexy ">
          <div className="col-md-6 first-container">
            <h3>educare for Business</h3>
            <p>
              Empower your team to work smarter, not harder, with our powerful
              software solution that simplifies complex tasks, frees up time,
              and drives business growth.
            </p>
            <button>Get Started</button>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="Report"
                  detail="Generate detailed school reports with ease using our user-friendly report."
                  icon={Chart}
                />{" "}
              </div>{" "}
              <div className="col-md-6 pastoral">
                <Features
                  feature="Pastoral"
                  detail="Enhance your institution’s pastoral care with our innovative software module"
                  icon={Pastoral}
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy second-grid">
              {" "}
              <div className="col-md-6 right-features">
                <Features
                  feature="CBT"
                  detail="Revolutionize your testing process with our computer-based test module."
                  icon={Screen}
                />{" "}
              </div>{" "}
              <div className="col-md-6">
                <Features
                  feature="eClassroom"
                  detail="Streamline your HR tasks with our comprehensive HR manager."
                  icon={Classroom}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <center className="mt">
        <h2>Bundles</h2>
      </center>
      <div className="col-md-12 bundles-container flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 bundles"></div>
      </div>
      <div className="col-md-12 products-container">
        <center className="mt9">
          <h2>All educare Products</h2>
        </center>
        <div className="col-md-10  flexy offset-md-1">
          <div className="col-md-4 first-product-column">
            <EducareProducts
              productName="Finance"
              productDetail="The one and only accounting and payroll solution your business will ever need"
              productIcon={HalfCircle}
            />
            <div className="col-md-12 flexy flexyM mt9">
              <div className="col-md-6 col-6 grid1">
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Screen}
                    productName="Payroll"
                  />{" "}
                </div>
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Account}
                    productName="Charts of Accounts"
                  />{" "}
                </div>
                <div className="col-md-12 other-components">
                  <OtherEducareProducts
                    productIcon={Requisition}
                    productName="Requisition"
                  />
                </div>
              </div>
              <div className="col-md-6 col-6">
                {" "}
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={PinkChart}
                    productName="Inventory"
                  />{" "}
                </div>
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Budjet}
                    productName="Budget Management"
                  />{" "}
                </div>
                <div className="col-md-12 other-components">
                  {" "}
                  <OtherEducareProducts productIcon={""} productName="" />
                </div>
              </div>
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Calendar"
                productDetail="Stay organized and on schedule with our intuitive calendar module."
                productIcon={Calendar}
              />
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Facility Management"
                productDetail="Efficiently manage your facilities with our innovative software module."
                productIcon={People}
              />
            </div>
            <div className="col-md-12 flexy flexyM ">
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Facility}
                  productName="Facility List"
                />{" "}
              </div>
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Report2}
                  productName="Facility Report"
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy flexyM ">
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Configure}
                  productName="Configuration"
                />{" "}
              </div>
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts productIcon={""} productName="" />{" "}
              </div>
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Wallet Manager"
                productDetail="Take control of your finances with our intuitive wallet manager module."
                productIcon={Wallet}
              />
            </div>{" "}
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Students Admission"
                productDetail="Transform your admissions process with our streamlined software module."
                productIcon={Student}
              />
            </div>{" "}
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Weekly remarks"
                productDetail="Effortlessly track performance with our weekly remarks module."
                productIcon={Remarks}
              />
            </div>
          </div>{" "}
          <div className="col-md-4 second-product-column">
            <EducareProducts
              productName="Reports"
              productDetail="The one and only accounting and payroll solution your business will ever need"
              productIcon={Chart}
            />
            <div className="col-md-12 flexy flexyM mt9">
              <div className="col-md-6 col-6 grid1">
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Junior}
                    productName="Junior School Report"
                  />{" "}
                </div>
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Transcript}
                    productName="Transcripts"
                  />{" "}
                </div>
                <div className="col-md-12 other-components">
                  <OtherEducareProducts
                    productIcon={Transfer}
                    productName="Transfer Manager"
                  />
                </div>
              </div>
              <div className="col-md-6 col-6">
                {" "}
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Senior}
                    productName="Senior School Report"
                  />{" "}
                </div>
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Insight}
                    productName="Report Insight"
                  />{" "}
                </div>
                <div className="col-md-12 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Communication}
                    productName="Communication Bool"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Mailbox"
                productDetail="Simplify communication with our powerful mailbox"
                productIcon={Mailbox}
              />
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="CBT"
                productDetail="Revolutionize your testing process with our computer-based test module."
                productIcon={Screen}
              />
            </div>
            <div className="col-md-12 flexy flexyM ">
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Result}
                  productName="Result"
                />{" "}
              </div>
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Question}
                  productName="Question"
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy flexyM ">
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={CBT2}
                  productName="CBT Setup"
                />{" "}
              </div>
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Test}
                  productName="Test Manager"
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy flexyM ">
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={TestResult}
                  productName="Test Results"
                />{" "}
              </div>
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Analysis}
                  productName="Test Analysis"
                />{" "}
              </div>
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Medicals"
                productDetail="Streamline medical operations with our innovative software module"
                productIcon={Medical}
              />
            </div>{" "}
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Library"
                productDetail="Simplify your library management with our innovative software module."
                productIcon={Lib}
              />
            </div>
          </div>
          <div className="col-md-4 third-product-column">
            <EducareProducts
              productName="HR Manager"
              productDetail="Choose from our wide range of tools and select the ones that best fit Your business’s unique needs and goals.”"
              productIcon={People2}
            />
            <div className="col-md-12 flexy flexyM mt9">
              <div className="col-md-6 col-6 grid1">
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Recruitment}
                    productName="Recruitment"
                  />{" "}
                </div>
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Work}
                    productName="Work Leave"
                  />{" "}
                </div>
              </div>
              <div className="col-md-6 col-6">
                {" "}
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Access}
                    productName="Access Control"
                  />{" "}
                </div>
                <div className="col-md-12 bb other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Performance}
                    productName="Performance"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Timetable"
                productDetail="Organize schedules with ease using our intuitive timetable module."
                productIcon={Timetable}
              />
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Pastoral"
                productDetail="Efficiently manage your facilities with our innovative software module."
                productIcon={People}
              />
            </div>
            <div className="col-md-12 flexy flexyM ">
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Screen}
                  productName="Finance"
                />{" "}
              </div>
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Screen}
                  productName="Finance"
                />{" "}
              </div>
            </div>
            <div className="col-md-12 flexy flexyM ">
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Screen}
                  productName="Finance"
                />{" "}
              </div>
              <div className="col-md-6 col-6 other-components">
                {" "}
                <OtherEducareProducts
                  productIcon={Screen}
                  productName="Finance"
                />{" "}
              </div>
            </div>
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Wallet Manager"
                productDetail="Take control of your finances with our intuitive wallet manager module."
                productIcon={Wallet}
              />
            </div>{" "}
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Students Admission"
                productDetail="Transform your admissions process with our streamlined software module."
                productIcon={Student}
              />
            </div>{" "}
            <div className="col-md-12 bt pd">
              <EducareProducts
                productName="Weekly remarks"
                productDetail="Effortlessly track performance with our weekly remarks module."
                productIcon={Student}
              />
            </div>
          </div>
        </div>
        <center className="mt7">
          {" "}
          <button>View all products</button>
        </center>
      </div>
      <div className="col-md-12 privacy-protection">
        <div className="col-md-6 offset-md-3">
          <center>
            <h3>educare’s Privacy and Protection</h3>
            <p>
              educare ensures data privacy by implementing advanced security
              measures, including encryption and secure communication channels.
              The platform has no access to your data, and strict policies are
              in place to keep your data under your control. Trust us to keep
              your data safe and secure
            </p>
          </center>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 mt5 partners-container">
        <center>
          <h2>Corporate membership & partners</h2>
          <div className="mt5">
            {" "}
            <img className="" src={Aisa} alt="Scholar" width="100%" />
            <img className="" src={Microsoft} alt="Scholar" width="100%" />
            <img className="" src={Flutterwave} alt="Scholar" width="100%" />
            <img className="apen" src={Apen} alt="Scholar" width="100%" />
            <img className="" src={Paystack} alt="Scholar" width="100%" />
            <img className="" src={Standard} alt="Scholar" width="100%" />
          </div>
        </center>
      </div>
    </>
  );
};
