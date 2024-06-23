import React from "react";
import "../styles/Navbar.css";
import NGOLOGO from "../images/ngologo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div className="navbar-logo">
            <img src={NGOLOGO} alt="Logo" />
          </div>
        </Link>

        <div className="navbar-links">
          <a href="#aboutus" className="navbar-link">
            About Us
          </a>
          <a href="#ngolist" className="navbar-link">
            NGOs
          </a>
          <a href="#contact" className="navbar-link">
            Contact Us
          </a>
          <Link to="/login" className="navbar-button">
            Login
          </Link>
          {/* <button className="navbar-button">Login</button> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
