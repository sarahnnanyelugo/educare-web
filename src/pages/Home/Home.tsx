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
import Striped from "../../assets/images/stripe-bg.png";
import { Link, NavLink } from "react-router-dom";
import { Partners } from "../../components/Partners/Partners";

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
            <Link to={"/sign-up"}>
              {" "}
              <button className="gs-button">Get started</button>
            </Link>
            <button className="request-button">Request for a demo</button>
          </div>
        </center>
      </div>

      <div className="col-md-12 stripe-bg"></div>
      <div className="col-md-12 actions-container ">
        <div className="col-md-10 offset-md-1 flexy">
          {" "}
          <div className="col-md-4">
            {" "}
            <RandomComponent
              title="Pick your tools"
              icon={RedIcon}
              paragraph=" Choose from our wide range of tools and select the ones that best fit Your business’s unique needs and goals.”"
            />
          </div>
          <div className="col-md-4">
            <RandomComponent
              title="Work smart not hard"
              icon={YellowIcon}
              paragraph="Our smart solutions empower you to work smarter, not harder, allowing you to achieve more in less time and with less effort"
            />
          </div>
          <div className="col-md-4">
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
      <div className="col-md-12 features-general">
        {" "}
        <div
          className="col-md-12  flexy features-holder"
          style={{ paddingBottom: "50px" }}
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
              <br />
              <Link to={"/educare-business"}>
                {" "}
                <button>Get Started</button>
              </Link>
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
        </div>
        <div>
          <div className="col-md-12  flexy features-holder2">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10  features-container flexy ">
              <div className="col-md-6 first-container">
                <h3>educare for Schools</h3>
                <p>
                  Revolutionize your school’s operations and student learning
                  experiences with our innovative software solution.
                </p>
                <br />
                <Link to={"/educare-schools"}>
                  {" "}
                  <button>Get Started</button>
                </Link>
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
        </div>
        <center className="mt">
          <h1>Bundles</h1>
        </center>
        <div className="col-md-12 bundles-container flexy ">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-10 bundles"></div>
        </div>
        <div className="col-md-12 products-container radiant">
          <center className="mt">
            <h1>All educare Products</h1>
          </center>
          <div className="col-md-10  flexy offset-md-1">
            <div className="col-md-4 first-product-column">
              <EducareProducts
                productName="Finance"
                productDetail="The one and only accounting and payroll solution your business will ever need"
                productIcon={HalfCircle}
                url={"./"}
              />
              <div className="col-md-12 flexy flexyM mt9">
                <div className="col-md-6 col-6 grid1">
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Screen}
                      productName="Payroll"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Account}
                      productName="Charts of Accounts"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    <OtherEducareProducts
                      productIcon={Requisition}
                      productName="Requisition"
                      url={"./"}
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
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Budjet}
                      productName="Budget Management"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={""}
                      productName=""
                      url={"./"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Calendar"
                  productDetail="Stay organized and on schedule with our intuitive calendar module."
                  productIcon={Calendar}
                  url={"./"}
                />
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Facility Management"
                  productDetail="Efficiently manage your facilities with our innovative software module."
                  productIcon={People}
                  url={"./"}
                />
              </div>
              <div className="col-md-12 flexy flexyM  ">
                <div className="col-md-6 col-6 other-components bb br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Facility}
                    productName="Facility List"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components bb ">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Report2}
                    productName="Facility Report"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy flexyM ">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Configure}
                    productName="Configuration"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={""}
                    productName=""
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Wallet Manager"
                  productDetail="Take control of your finances with our intuitive wallet manager module."
                  productIcon={Wallet}
                  url={"./"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Students Admission"
                  productDetail="Transform your admissions process with our streamlined software module."
                  productIcon={Student}
                  url={"./"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Weekly remarks"
                  productDetail="Effortlessly track performance with our weekly remarks module."
                  productIcon={Remarks}
                  url={"./"}
                />
              </div>
            </div>{" "}
            <div className="col-md-4 second-product-column">
              <EducareProducts
                productName="Reports"
                productDetail="The one and only accounting and payroll solution your business will ever need"
                productIcon={Chart}
                url={"./"}
              />
              <div className="col-md-12 flexy flexyM mt9">
                <div className="col-md-6 col-6 grid1">
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Junior}
                      productName="Junior School Report"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Transcript}
                      productName="Transcripts"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    <OtherEducareProducts
                      productIcon={Transfer}
                      productName="Transfer Manager"
                      url={"./"}
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
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Insight}
                      productName="Report Insight"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Communication}
                      productName="Communication Book"
                      url={"./"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Mailbox"
                  productDetail="Simplify communication with our powerful mailbox"
                  productIcon={Mailbox}
                  url={"./"}
                />
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="CBT"
                  productDetail="Revolutionize your testing process with our computer-based test module."
                  productIcon={Screen}
                  url={"./"}
                />
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Result}
                    productName="Result"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Question}
                    productName="Question"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={CBT2}
                    productName="CBT Setup"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Test}
                    productName="Test Manager"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={TestResult}
                    productName="Test Results"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Analysis}
                    productName="Test Analysis"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Medicals"
                  productDetail="Streamline medical operations with our innovative software module"
                  productIcon={Medical}
                  url={"./medicals"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Library"
                  productDetail="Simplify your library management with our innovative software module."
                  productIcon={Lib}
                  url={"./"}
                />
              </div>
            </div>
            <div className="col-md-4 third-product-column">
              <EducareProducts
                productName="HR Manager"
                productDetail="Streamline your HR tasks with our comprehensive HR manager."
                productIcon={People2}
                url={"./"}
              />
              <div className="col-md-12 flexy flexyM mt9">
                <div className="col-md-6 col-6 grid1">
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Recruitment}
                      productName="Recruitment"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Work}
                      productName="Work Leave"
                      url={"./"}
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
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Performance}
                      url={"./"}
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
                  url={"./"}
                />
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Pastoral"
                  productDetail="Enhance your institution’s pastoral care with our innovative software module"
                  productIcon={Pastoral}
                  url={"./pastoral"}
                />
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Exeact}
                    productName="Exeat Request"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Activity}
                    productName="Activity Point"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy flexyM ">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Points}
                    productName="Points Analysis"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Hostel}
                    productName="Hostel Report"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="eClassroom"
                  productDetail="Empower Your School with eClassroom: A Comprehensive Software Module for Virtual Learning and Collaboration."
                  productIcon={Classroom}
                  url={"./e-classroom"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Voting System"
                  productDetail="Securely manage and conduct elections with our powerful voting system module."
                  productIcon={Voting}
                  url={"./"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Lesson Planner"
                  productDetail="Streamline and simplify your lesson planning process with our lesson planner."
                  productIcon={Lesson}
                  url={"./"}
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
              <h1>educare’s Privacy and Protection</h1>
              <p>
                educare ensures data privacy by implementing advanced security
                measures, including encryption and secure communication
                channels. The platform has no access to your data, and strict
                policies are in place to keep your data under your control.
                Trust us to keep your data safe and secure
              </p>
            </center>
          </div>
        </div>
      </div>
      <Partners />
    </>
  );
};
