import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./finance-page.scss";

export const FinancePage = () => {
  return (
    <>
      <div className="col-md-12 nav-two-finance sticky-top">
        {" "}
        <NavTwo title="Finance" />
      </div>

      <center>
        {" "}
        <div className="col-md-5 finance-intro">
          <Heading
            color="#3B0F8E"
            text="Introducing educare Finance"
            bg="#DED0FA"
          />
          <h1>
            Simplify your business with our powerful apps made just for them.
          </h1>
          <p>
            From invoicing to order management to accounting, educare Finance
            has all the tools you need to streamline all of your back office
            operations. Gain insight into your financial performance and make
            informed decisions to help your business thrive.
          </p>
          <div className="flexy flexyM offset-md-3 mt4">
            <button className="started">Get started</button>
            <button className="demo">Request for demo</button>
          </div>
        </div>
      </center>
    </>
  );
};
