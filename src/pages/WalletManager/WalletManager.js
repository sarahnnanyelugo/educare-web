import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./wallet-manager.scss";
import Dot1 from "../../assets/images/dot1.svg";
import Dot2 from "../../assets/images/dot2.svg";
import Dot3 from "../../assets/images/dot3.svg";
import Wallet1 from "../../assets/images/bag-icon.svg";
import Wallet2 from "../../assets/images/track-icon.svg";
import Wallet3 from "../../assets/images/fin-icon.svg";
import Dashboard from "../../assets/images/wallet-dashboard.png";
import Dot4 from "../../assets/images/dot4.svg";
import Icon5 from "../../assets/images/exp-icon.svg";
import Icon6 from "../../assets/images/chart1.svg";
import Icon7 from "../../assets/images/chart2.svg";
import Icon8 from "../../assets/images/chart3.svg";
import Player1 from "../../assets/images/reportslottie.json";
import Lottie from "react-lottie-player";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function WalletManager() {
  return (
    <>
      {" "}
      <div className="col-md-12 wallet-nav-div">
        {" "}
        <NavTwo title="Wallet Manager" />
      </div>
      <div className="col-md-12 wallet-div">
        <img className="offset-md-9" src={Dot1} alt="Scholar" />
        <div className="col-md-12 ">
          {/* <img className="offset-md-2" src={Dot4} alt="Scholar" /> */}
          <center>
            <div className="col-md-7">
              <h1 className="col-md-9">
                Take control of your finances with our powerful wallet manager
                software
              </h1>
              <div className="flexy flexyM">
                <img className="" src={Dot4} alt="Scholar" />
                <p className="col-md-9 no-m" style={{ marginLeft: "80px" }}>
                  Experience hassle-free money management with our user-friendly
                  wallet manager to track your expenses, set budgets, and reach
                  your financial goals like never before.
                </p>
              </div>

              <center>
                <GetStartedForm
                  text=" Get started"
                  bg="#11A377"
                  cls="gsmwm"
                  bgbtn="#0098DA"
                  backdropbg="modal-backdrop-dark"
                />
                <button className="demo">Request for demo</button>
              </center>
            </div>
          </center>
          <img
            className="offset-md-11 no-m offset-5"
            src={Dot3}
            alt="Scholar"
            style={{ marginTop: "-360px" }}
          />
        </div>
        <div className="col-md-12 mt5">
          <img className="" src={Dot2} alt="Scholar" />

          <center>
            <div className="col-md-9 ">
              <img className="col-md-12 col-12" src={Dashboard} alt="Scholar" />{" "}
            </div>
          </center>
        </div>
      </div>
      <center>
        <h2
          className="col-md-9 reco-alt   
"
        >
          Why educare Wallet Manager is the preferred financial management
          software
        </h2>
      </center>
      <div className="col-md-10 flexy fin-management offset-md-1 mt7">
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Wallet1} alt="Scholar" />

            <h5>Comprehensive Financial Management</h5>
            <p>
              Combines features like expense tracking, budgeting, goal setting,
              and transaction management in a single platform offering
              comprehensive solution for managing finances.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Wallet2} alt="Scholar" />

            <h5>Simplified Tracking and Analysis</h5>
            <p>
              Easily input and categorize expenses, link bank accounts for
              automatic transaction imports, and generate reports or
              visualizations of their financial activities.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Wallet3} alt="Scholar" />

            <h5>Enhanced Financial Discipline</h5>
            <p>
              Establish and maintain healthy financial habits through features
              such as budgeting, goal setting, and bill reminders, thus
              encourage responsible spending, savings, and timely payment of
              financial obligations.
            </p>
          </div>
        </div>
      </div>
      <center>
        <h2 className="mt5 reco-alt ">Features in a glance</h2>
      </center>
      <div className="features-div col-md-10 offset-md-1 ">
        <div className="col-md-12 flexy">
          <div className="flexy flexyM col-md-4">
            <img className="" src={Icon5} alt="Scholar" />
            <h5>Expense Tracking</h5>
          </div>
          <div className="col-md-6 offset-md-2">
            <p>
              This allows to track and categorize expenses, providing a
              comprehensive view of where money is being spent. It enables users
              to record and organize transactions, making it easier to analyze
              spending patterns and identify areas for potential savings.
            </p>
          </div>
        </div>{" "}
        <hr />
        <div className="col-md-12 flexy">
          <div className="flexy flexyM col-md-4">
            <img className="" src={Icon6} alt="Scholar" />
            <h5>Financial Goal Setting</h5>
          </div>
          <div className="col-md-6 offset-md-2">
            <p>
              Users can define specific targets, such as saving for a vacation,
              purchasing a car, or paying off debts. The software tracks
              progress towards these goals, providing motivation and guidance to
              achieve them.
            </p>
          </div>
        </div>
        <hr />
        <div className="col-md-12 flexy">
          <div className="flexy flexyM col-md-4">
            <img className="" src={Icon7} alt="Scholar" />
            <h5>Transaction Management</h5>
          </div>
          <div className="col-md-6 offset-md-2">
            <p>
              The software module acts as a central hub for managing financial
              transactions. Bank accounts, credit cards, and other payment
              methods can be linked to automatically import transaction data.
              This streamlines the process of reconciling expenses and ensures
              accurate record-keeping.
            </p>
          </div>
        </div>
        <hr />
        <div className="col-md-12 flexy">
          <div className="flexy flexyM col-md-4">
            <img className="" src={Icon8} alt="Scholar" />
            <h5>Reporting and Analytics</h5>
          </div>
          <div className="col-md-6 offset-md-2">
            <p>
              Wallet manager software modules generate reports and analytics to
              help users gain insights into their financial habits. Users can
              visualize spending patterns, analyze trends, and identify areas
              for improvement. Reports may include charts, graphs, and summaries
              for a clear understanding of financial health.
            </p>
          </div>
        </div>
      </div>
      <center>
        <h1 className="mt " id="pricing">
          Our simple prices made for you{" "}
        </h1>
      </center>
      <div className="grad col-md-12 mt8">
        {" "}
        <div className="col-md-10 offset-md-1 flexy mb5 mt5">
          <div className="col-md-3 " style={{ marginTop: "-20px" }}>
            <div className="col-md-11 ">
              <SimplePrices
                package="Basic"
                amount="100.00"
                paragraph="Per Student (Monthly)"
                annualAmount="75 billed annually"
                url={""}
                currency="₦"
                btnBg="#11A377"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container ">
            <div
              className="offset-md-3 offset-5"
              style={{ marginBottom: "-50px" }}
            >
              <Heading
                bg="#DDF2EC"
                color="#11A377"
                boda="solid 1px #DDF2EC"
                text="Recommended"
              />
            </div>
            <div className="col-md-11 mt3">
              <SimplePrices
                package="e-learning"
                amount="200.00"
                paragraph="Per Student (Monthly)"
                annualAmount="150 billed annually"
                url={""}
                currency="₦"
                active="active-button "
                cls="recommendedWallet"
                btnBg="#11A377"
              />
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: "-20px" }}>
            <div className="col-md-11 ">
              <SimplePrices
                package="Premium"
                amount="500.00"
                paragraph="Per Student (Monthly)"
                annualAmount="450 billed annually"
                url={""}
                currency="₦"
                btnBg="#11A377"
              />
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: "-20px" }}>
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                btnBg="#11A377"
                annualAmount=""
                url={""}
              />
            </div>
          </div>
        </div>
      </div>
      <center>
        <p>
          Kindly check out our{" "}
          <Link to={"/educare-packages"} className="link">
            Pricing page
          </Link>
          {""} for complete details
        </p>
      </center>
      <div className="col-md-10 offset-md-1 flexy v-learning">
        <div className="col-md-3 offset-md-1">
          <Lottie loop animationData={Player1} play className="lottieee" />
        </div>
        <div className="col-md-7 offset-md-">
          <h3>
            Enjoy secure virtual learning with educare’s Privacy and Protection
          </h3>
          <p>
            educare ensures data privacy by implementing advanced security
            measures, including encryption and secure communication channels. We
            have no access to your data, and strict policies are in place to
            keep your data under your control. Trust us to keep your data safe
            and secure
          </p>
        </div>
      </div>
      <div className="col-md-12 prefooter2">
        <div className="col-md-10 offset-md-1 prefooter2-inner">
          <center>
            <div className="col-md-7">
              <h3>
                Gain insights into your financial habits and make smarter
                financial decisions
              </h3>
              <center>
                <GetStartedForm
                  text=" Get started"
                  bg="#0098DA"
                  cls="gsmcal"
                  bgbtn="#0098DA"
                  backdropbg="modal-backdrop-dark"
                />
                <button className="demo">Request for demo</button>
              </center>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default WalletManager;
