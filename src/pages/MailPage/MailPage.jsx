import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import ThreeItemComponent from "../../components/ThreeItemComponent/ThreeItemComponent";
import Key from "../../assets/images/key.svg";
import Padlock from "../../assets/images/padlock.svg";
import Tick from "../../assets/images/tick-shield.svg";
import Person from "../../assets/images/person.svg";
import { Link, NavLink } from "react-router-dom";

import "./mail-page.scss";
import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
import Prices from "../../components/Prices/Prices";
import MailboxFAQ from "./MailboxFAQ/MailboxFAQ";
import { Prefooter } from "../../components/Prefooter/Prefooter";
function MailPage() {
  return (
    <>
      <div className="col-md-12 nav-two-mailbox ">
        {" "}
        <NavTwo title="MailBox" />
      </div>
      <div style={{ height: "140px" }} />
      <div className="col-md-12 mail-div">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt div1">
            <Heading
              text="Introducing educare mailbox"
              bg="#F5DCF8"
              color="#C32BD6"
              boda="solid 1px #C32BD6"
            />
            <h1>Secure business email for your organization</h1>
            <p>
              Experience the security, encryption, privacy, and ad-free
              environment your business email deserves by hosting it on our
              trusted email service.
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="col-md-10">
              <Form bg="#C32BD6" text="Get started" />
            </div>
          </div>
        </div>
      </div>
      <div id="features" />
      <center>
        <div className="col-md-4 mt">
          <h1>Key features of our privacy-oriented email service</h1>
        </div>
      </center>{" "}
      <center>
        <div className="col-md-6 mt3 ">
          <p>
            We understand the importance of maintaining control and ownership
            over your email data. That’s why we offer a secure email service
            that prioritizes your privacy.
          </p>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy mt">
        <div className="col-md-4">
          <div className="col-md-10">
            <ThreeItemComponent
              title="Data Ownership"
              paragraph="We firmly believe that your data should belong to you, and we uphold this principle by ensuring that your email data remains under your ownership at all times. We do not mine or sell your data to third parties, protecting your privacy and maintaining the confidentiality of your information."
              icon={Key}
            />
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-10">
            <ThreeItemComponent
              title="Data Encryption"
              paragraph="To safeguard the privacy of your email communications, we employ robust encryption methods. This encryption ensures that your messages and attachments are encoded and can only be accessed by authorized recipients, providing an additional layer of protection against unauthorized access."
              icon={Key}
            />
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-10">
            <ThreeItemComponent
              title="Transparent Privacy Policies"
              paragraph="We maintain transparency in our privacy practices and policies. Our privacy policy clearly outlines how we handle your data, what information is collected, and how it is used. You can trust that we prioritize your privacy and take appropriate measures to safeguard your data.."
              icon={Padlock}
            />
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-2 flexy mt9">
        <div className="col-md-4">
          <div className="col-md-11">
            <ThreeItemComponent
              title="Transparent Privacy Policies"
              paragraph="We maintain transparency in our privacy practices and policies. Our privacy policy clearly outlines how we handle your data, what information is collected, and how it is used. You can trust that we prioritize your privacy and take appropriate measures to safeguard your data.."
              icon={Tick}
            />
          </div>
        </div>{" "}
        <div className="col-md-4 offset-md-1">
          <div className="col-md-11">
            <ThreeItemComponent
              title="Transparent Privacy Policies"
              paragraph="We maintain transparency in our privacy practices and policies. Our privacy policy clearly outlines how we handle your data, what information is collected, and how it is used. You can trust that we prioritize your privacy and take appropriate measures to safeguard your data.."
              icon={Person}
            />
          </div>
        </div>
      </div>
      <DashboardDisplay />
      <center>
        {" "}
        <div className=" col-md-9 flexy mtt">
          <div className="col-md-4">
            <div className="col-md-11 item-div">
              <ThreeItemComponent
                title="Secure Infrastructure"
                paragraph="Control every aspect of your email data. Our industry-leading privacy policies guarantee that only you own the data."
                icon={Person}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11 item-div">
              <ThreeItemComponent
                title="Secure Attachment Handling"
                paragraph="Sharing files and documents via email can pose risks if not handled securely. Our solution offers secure attachment handling, ensuring that your sensitive files remain protected throughout transmission."
                icon={Person}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11 item-div">
              <ThreeItemComponent
                title="Data Loss Prevention"
                paragraph="Safeguarding sensitive data is critical for your organization’s. Our solution incorporates robust data loss prevention measures, enabling you to define policies and rules to prevent accidental or intentional data leakage."
                icon={Person}
              />
            </div>
          </div>
        </div>
      </center>
      <div className="mail-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Mailbox.
            </p>
          </div>
          {/* <div className="col-md-2 offset-md-2">
            <center>
              {" "}
              <button>See prices</button>
            </center>
          </div> */}
        </div>
        <div className="offset-md-4 recomend">
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
            <Link to={"/educare-business"} className="linkp">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div>
      <center>
        <div className="col-md-8 question-div">
          <h1>Frequently asked questions</h1>
          <MailboxFAQ />
        </div>
      </center>
      <Prefooter
        text="No ads. Secure. Private"
        paragraph="Host Your Business Email"
      />
    </>
  );
}

export default MailPage;
