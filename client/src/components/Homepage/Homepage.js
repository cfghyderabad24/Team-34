import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';
import studentimg from '../../images/students.jpg'
import dashboard from '../../images/dashboard.jpg'
function Homepage() {
  return (
    <div className="container">
      <h1>Partner NGO Portal</h1>
      <div className="button-container">
        <div className="form-group">
          <Link to="/upload">
            <img src= {dashboard }alt="Admin Logo" className="logo" />
            <br />
            <button type="button" className="btn custom-btn">Upload Data</button>
          </Link>
        </div>
        <div className="form-group">
          <Link to="/studentdetails">
            <img src={studentimg} alt="Student Logo" className="logo" />
            <br />
            <button type="button" className="btn custom-btn">Show Students</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
