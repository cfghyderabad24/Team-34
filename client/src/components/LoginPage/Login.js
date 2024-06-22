import React, { useState } from "react";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import signinImage from "../images/signInImage.jpg";
import signupImage from "../images/signUpIage.jpg";

const SignInForm = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="student.html" className="sign-in-form">
            <h2 className="title">Student Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="ngo.html" className="sign-up-form">
            <h2 className="title">NGO Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Partner NGO?</h3>
            <br />
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => setSignUpMode(true)}
            >
              Sign in
            </button>
          </div>
          <img src={signinImage} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Student?</h3>
            <br />
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => setSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          <img src={signupImage} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
