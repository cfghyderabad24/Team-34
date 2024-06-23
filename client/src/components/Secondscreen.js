import React from "react";
import NGOLOGO from "../images/ngologo.png";
import "../styles/Secondscreen.css";

function Secondscreen() {
  return (
    <>
      <div className="container">
        <div className="field">
          <img src={NGOLOGO} alt="Im1" />
          <button onClick={() => alert("Button 1 clicked!")}>Button 1</button>
        </div>
        <div className="field">
          <img src={NGOLOGO} alt="Im1" />
          <button onClick={() => alert("Button 2 clicked!")}>Button 2</button>
        </div>
      </div>
    </>
  );
}

export default Secondscreen;
