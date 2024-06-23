import React from "react";
import "../styles/Navbar.css";
import NGOLOGO from "../images/ngologo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={NGOLOGO} alt="Logo" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
