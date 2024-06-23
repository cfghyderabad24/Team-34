import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const ShowStudentData = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Replace with your actual backend endpoint
    axios
      .get("http://localhost:4567/cfg34/ngo/viewApproved", {
        params: { ngoId: 12 },
      })
      .then((response) => {
        console.log(response.data.students);
        setStudentData(response.data.students);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="">
      <h1>Student Data</h1>
      <p>Here you will see the list of student data.</p>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>College</th>
            <th>12th %</th>
            <th>Year of Scholarship</th>
            <th>Stream</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.college}</td>
              <td>{student.Grade12}</td>
              <td>{student.yearOfScholarship}</td>
              <td>{student.stream}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStudentData;
