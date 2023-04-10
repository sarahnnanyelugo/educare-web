import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { CountrySelect } from "./CountrySelect";
function Form() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setNameValue(event.target.value);
    console.log(nameValue);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <div className="col-md-12 form-container">
        <form>
          <h4>
            <strong>
              Sign up and deploy your business in <br />
              seconds.
            </strong>
          </h4>
          <input
            type="text"
            value={nameValue}
            onChange={handleChange}
            placeholder="Organisational Name"
            className="form-control"
          />
          <input
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
            placeholder="email"
            className="form-control"
          />
          <Password placeholder="Password" />
          <Password placeholder="confirm password" />
          <CountrySelect />
          <input
            type="checkbox"
            name="color"
            checked={isChecked}
            onChange={handleChecked}
          />

          <span style={{ fontFamily: " rebondG-Medium" }}>
            {" "}
            I agree to the <strong>Terms of Service</strong> and
            <strong> Privacy Policy.</strong>
          </span>

          <button className="overviewButton">Continue</button>
        </form>
      </div>
    </>
  );
}

export default Form;
