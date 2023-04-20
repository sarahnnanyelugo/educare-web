import Standard from "../../assets/images/standard.png";
import Paystack from "../../assets/images/paystack.svg";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Apen from "../../assets/images/apen.png";
import Aisa from "../../assets/images/aisa.svg";
import "./partners-inline-display.scss";
export const PartnersInlineDisplay = () => {
  return (
    <>
      {" "}
      <div className="col-md-10 offset-md-1 mt5 partners-container ">
        {" "}
        <center>
          <h1 className="col-md-">Corporate membership & partners</h1>
        </center>
        <center>
          <div className="mt5 ">
            {" "}
            <img className="aisa" src={Aisa} alt="Scholar" />
            <img className="ms" src={Microsoft} alt="Scholar" />
            <img className="flutter" src={Flutterwave} alt="Scholar" />
            <img className="pay" src={Paystack} alt="Scholar" />
            <img className="standard" src={Standard} alt="Scholar" />
            <img className="apen" src={Apen} alt="Scholar" />
          </div>
        </center>
      </div>
    </>
  );
};
