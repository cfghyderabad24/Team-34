import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"; // Ensure to create this CSS file for custom styles

const Dashboard = () => {
  const [totalStudents, setTotalStudents] = useState(3489);
  const [partnerNGOs, setPartnerNGOs] = useState(4);
  const Volunteers = 234;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const studentsResponse = await axios.get("/api/totalStudents");
        const ngosResponse = await axios.get("/api/partnerNGOs");

        setTotalStudents(studentsResponse.data.total);
        setPartnerNGOs(ngosResponse.data.total);
      } catch (error) {
        console.error("Error fetching stats data:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="mt-5">
      <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
        <div
          className="card text-center shadow-sm m-2 card-hover"
          style={{ width: "18rem", backgroundColor: "#00DCDC", color: "white" }}
        >
          <div className="card-body border rounded">
            <h5 className="card-title">Total Students Benefited</h5>
            <p className="card-text">{totalStudents}</p>
          </div>
        </div>
        <div
          className="card text-center shadow-sm m-2 card-hover"
          style={{ width: "18rem", backgroundColor: "#00DCDC", color: "white" }}
        >
          <div className="card-body border rounded">
            <h5 className="card-title">Number of Volunteers</h5>
            <p className="card-text">{Volunteers}</p>
          </div>
        </div>
        <div
          className="card text-center shadow-sm m-2 card-hover"
          style={{ width: "18rem", backgroundColor: "#00DCDC", color: "white" }}
        >
          <div className="card-body border rounded">
            <h5 className="card-title">Number of Partner NGOs</h5>
            <p className="card-text">{partnerNGOs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
