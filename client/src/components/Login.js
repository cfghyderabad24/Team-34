import React, { useState } from "react";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import signinImage from "../images/signInImage.jpg";
import signupImage from "../images/signUpIage.jpg";
import { Link, useHistory, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const nav = useNavigate();

  const handleStudentSignIn = (e) => {
    e.preventDefault();
    // Perform your authentication logic here
    // If authentication is successful, navigate to the Student component
    nav("/student");
  };

  const handleNgosSignIn = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target[0].value === "kavya@gmail.com") {
      nav("/ngo");
    }
    if (e.target[0].value === "sumeetcfg@gmail.com") {
      nav("/ngo/st2");
    }
    if (e.target[0].value === "shakthi@gmail.com") {
      nav("/ngo/st3");
    }
    if (e.target[0].value === "tata@gmail.com") {
      nav("/alumni");
    }
    // Perform your authentication logic here
    // If authentication is successful, navigate to the Ngo component
  };

  return (
    <>
      <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleStudentSignIn} className="sign-in-form">
              <h2 className="title">Student Sign in</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder="Password" required />
              </div>
              <Link to="/student">
                <button type="button">Login</button>
              </Link>
            </form>
            <form onSubmit={handleNgosSignIn} className="sign-up-form">
              <h2 className="title">NGO Sign in</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder="Password" required />
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
    </>
  );
};

export default SignInForm;
