import Standard from "../../assets/images/standard.png";
import Paystack from "../../assets/images/paystack.svg";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Apen from "../../assets/images/apen.png";
import Aisa from "../../assets/images/aisa.svg";
import "./partners.scss";
export const Partners = () => {
  return (
    <>
      {" "}
      <div className="col-md-12 offset-md- mt5 partners-container flexy">
        <h1 className="col-md-4 flexy">Corporate membership & partners</h1>
        <div className="mt5 ">
          {" "}
          <img className="" src={Aisa} alt="Scholar" width="100%" />
          <img className="" src={Microsoft} alt="Scholar" width="100%" />
          <img className="" src={Flutterwave} alt="Scholar" width="100%" />
          <br />
          <img className="" src={Paystack} alt="Scholar" width="100%" />
          <img className="" src={Standard} alt="Scholar" width="100%" />
          <img className="apen" src={Apen} alt="Scholar" width="100%" />
        </div>
      </div>
    </>
  );
};
