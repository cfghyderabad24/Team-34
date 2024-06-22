import React from "react";
import NGOLOGO from "../images/ngologo.png";
import "../styles/Vocational.css";

function Vocational() {
  return (
    <div>
      <div className="container">
        <div className="card" style={{ "--clr": "#ee7314" }}>
          <div className="imgBx">
            <img src={NGOLOGO} alt="Bicep Curls" />
          </div>
          <div className="content">
            <h2>Bicep Curls</h2>
            <p>
              Consistently performing the bicep curl will help you build
              strength in the upper arm and learn to use your arm muscles
              correctly, bracing with your core muscles.
            </p>
            <a href="https://www.youtube.com/watch?v=bMq2riFCF90">
              Start Exercise
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="card" style={{ "--clr": "#ff3e7f" }}>
          <div className="imgBx">
            <img src={NGOLOGO} alt="Shoulder Press" />
          </div>
          <div className="content">
            <h2>Shoulder Press</h2>
            <p>
              Shoulder press targets your shoulders, triceps, and upper back
              muscles, providing a full upper body workout. It mainly increases
              the muscle mass, improved posture and shoulder strength &
              stability.
            </p>
            <a href="https://www.youtube.com/watch?v=bMq2riFCF90">
              Start Exercise
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="card" style={{ "--clr": "rgba(36, 170, 219, 0.996)" }}>
          <div className="imgBx">
            <img src={NGOLOGO} alt="Squat" />
          </div>
          <div className="content">
            <h2>Squat</h2>
            <p>
              Squats are a functional exercise that can boost your calorie burn,
              help prevent injuries, strengthen your core, and improve your
              balance and posture.
            </p>
            <a href="https://www.youtube.com/watch?v=bMq2riFCF90">
              Start Exercise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vocational;
