import { useState } from "react";
import { FacebookButton } from "../../../components/FacebookButton/FacebookButton";
import { Password } from "../../../components/Form/Password";
import { GoogleButton } from "../../../components/GoogleButton/GoogleButton";
import "./sign-up-form.scss";
function SignUpForm(props) {
  const { bg } = props;
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
      <form className=" log-in-form-container">
        <h6>
          Log in to access
          <br /> your account
        </h6>{" "}
        <div class="form">
          <input
            type="text"
            name="name"
            autocomplete="new-password"
            required
            value={nameValue}
            onChange={handleChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Organisation Name *</span>
          </label>
        </div>{" "}
        <div>
          {" "}
          <Password label="Password" />
        </div>
        <input
          type="checkbox"
          name="color"
          checked={isChecked}
          onChange={handleChecked}
          style={{
            marginTop: "20px",
          }}
        />
        <span
          style={{
            fontFamily: " rebondG-Medium",
            fontSize: "12px",
          }}
        >
          {" "}
          I agree to the <strong>Terms of Service</strong> and
          <strong> Privacy Policy.</strong>
        </span>
        <button className="continueButton" style={{ backgroundColor: bg }}>
          Continue
        </button>
        <div className="or flexy flexyM">
          <div className="col-md-5 bodda"></div>
          <div className="col-md-2">
            <center>
              {" "}
              <p>Or</p>
            </center>
          </div>
          <div className="col-md-5 bodda"></div>
        </div>
        <center>
          <small>Sign up using</small>
        </center>
        <GoogleButton />
        <FacebookButton />
      </form>
    </>
  );
}

export default SignUpForm;