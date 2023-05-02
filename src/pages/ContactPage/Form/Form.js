import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { CountrySelect } from "./CountrySelect";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input"; // import "react-phone-input-2/lib/bootstrap.css";
function Form(props) {
  const [value, setValue] = useState();
  const { bg, text, body } = props;
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [textarea, setTextarea] = useState();
  // "The content of a textarea goes in the value attribute"
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
  const handleMessage = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <>
      <div className="contact-form-container" style={{ backgroundColor: body }}>
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
            <span class="content-name">Your Name *</span>
          </label>
        </div>{" "}
        <div class="form">
          <input
            type="email"
            name="email"
            autocomplete="new-password"
            required
            value={emailValue}
            onChange={handleEmailChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Your Email *</span>
          </label>
        </div>{" "}
        <div className=" formyphone">
          <PhoneInput
            // placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />

          <label for="text" class="label-name">
            <span class="content-name">Enter phone number*</span>
          </label>
        </div>{" "}
        <div className="mt2 formtext">
          <textarea
            value={textarea}
            onChange={handleMessage}
            // className="form-control"
            rows={5}
            cols={5}
          />
          <label for="textarea" class="label-name">
            <span class="content-name">Type your message here *</span>
          </label>
        </div>
        <input
          type="checkbox"
          name="color"
          checked={isChecked}
          onChange={handleChecked}
          style={{
            marginTop: "40px",
          }}
        />{" "}
        <span
          style={{
            fontFamily: " rebondG-Medium",
            fontSize: "12px",
            marginTop: "90px",
          }}
        >
          {" "}
          I agree to the <strong>Terms of Service</strong> and
          <strong> Privacy Policy.</strong>
        </span>
        <div>
          {" "}
          <button className="submitButton" style={{ backgroundColor: bg }}>
            {text}
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
