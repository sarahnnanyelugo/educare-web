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
      {/* <div className="col-md-12 form-container">
      <form className="form">
        
        <input
          type="text"
          name="text"
          value={nameValue}
          onChange={handleChange}
          autocomplete="off"
          required
          className="form-control"
        />
        <label for="text" class="label-name">
          <span class="content-name">Your Text</span>
        </label>
        <input
            type="text"
            value={nameValue}
            onChange={handleChange}
          
            className="form-control"
            required
          />

        <input
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
            placeholder="email"
            className="form-control"
          />
        
         

      
      </form>
      </div> */}
      <div className=" form-container">
        <h6>
          <strong>
            Sign up and deploy your business in <br />
            seconds.
          </strong>
        </h6>{" "}
        <div class="form">
          <input
            type="text"
            name="name"
            autocomplete="off"
            required
            value={nameValue}
            onChange={handleChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Organisation Name *</span>
          </label>
        </div>{" "}
        <div class="form">
          <input
            type="email"
            name="email"
            autocomplete="off"
            required
            value={emailValue}
            onChange={handleEmailChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Email *</span>
          </label>
        </div>{" "}
        <div style={{ marginBottom: "20px" }}>
          {" "}
          <Password label="Password" />
          <Password label="confirm password" />
        </div>
        <CountrySelect />
        <input
          type="checkbox"
          name="color"
          checked={isChecked}
          onChange={handleChecked}
          style={{
            marginTop: "40px",
          }}
        />
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
        <button className="overviewButton">Continue</button>
      </div>
    </>
  );
}

export default Form;
