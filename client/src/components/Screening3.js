import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const Screening3 = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4567/cfg34/ngo/viewApproved", {
        params: { ngoId: 12 },
      })
      .then((response) => {
        setStudents(response.data.students); // Assuming response.data has a 'students' property
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sendEmail = (to_name, to_email, from_name, status, password = "") => {
    const message =
      status === "accepted"
        ? `Congratulations, you have been accepted! Your username is ${to_name} and your password is ${password}.`
        : "We regret to inform you that you have been rejected.";

    const templateParams = {
      to_name: to_name,
      to_email: to_email,
      from_name: from_name,
      message: message,
    };

    emailjs
      .send(
        "service_z3sqw1j", // Your actual Service ID
        "template_xj0x9in", // Your actual Template ID
        templateParams,
        "LUxtiytfpN4Lzr68z" // Your actual Public Key
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
      });
  };

  const handleAccept = (student) => {
    sendEmail(
      student.name,
      student.email,
      "St. Bhatevara Foundation",
      "accepted",
      student.password
    );
  };

  const handleReject = (student) => {
    sendEmail(
      student.name,
      student.email,
      "St. Bhatevara Foundation",
      "rejected"
    );
  };

  return (
    <div className="mt-5">
      <h3>Interviews</h3>
      <table className="table table-hover mt-3">
        <thead className="thead-light">
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={idx}>
              <td>{student.email}</td>
              <td>{student.name}</td>
              <td>
                <button
                  className="btn btn-success mr-2"
                  onClick={() => handleAccept(student)}
                >
                  Accept
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleReject(student)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Screening3;
