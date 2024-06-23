import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NGOUploadPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ngoId: "12", // Set default ngoId here
    name: "",
    gender: "",
    Grade12: "",
    college: "",
    stream: "",
    yearOfScholarship: "",
    amount: "",
    yearOfGraduation: "",
    occupation: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log form data to console

    try {
      const response = await axios.post(
        "http://localhost:4567/cfg34/ngo/uploadStudentData",
        formData
      );
      console.log("Server response:", response.data);
      alert("Data submitted successfully!");
      setFormData({
        ngoId: "12", // Reset ngoId here
        name: "",
        gender: "",
        Grade12: "",
        college: "",
        stream: "",
        yearOfScholarship: "",
        amount: "",
        yearOfGraduation: "",
        occupation: "",
        email: "",
      });
      navigate("/ngo/st1");
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response ? error.response.data : error.message
      );
      alert("Error submitting data. Please try again.");
    }
  };

  return (
    <div className=" form-container mt-5">
      <h1>Student Scholarship Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" label="Select gender" />
            <option value="male" label="Male" />
            <option value="female" label="Female" />
            <option value="other" label="Other" />
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="Grade12" className="form-label">
            12th Percentage
          </label>
          <input
            id="Grade12"
            name="Grade12"
            type="number"
            className="form-control"
            value={formData.Grade12}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="college" className="form-label">
            College
          </label>
          <input
            id="college"
            name="college"
            type="text"
            className="form-control"
            value={formData.college}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stream" className="form-label">
            Stream
          </label>
          <input
            id="stream"
            name="stream"
            type="text"
            className="form-control"
            value={formData.stream}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="yearOfScholarship" className="form-label">
            Year of Scholarship
          </label>
          <input
            id="yearOfScholarship"
            name="yearOfScholarship"
            type="number"
            className="form-control"
            value={formData.yearOfScholarship}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            className="form-control"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="yearOfGraduation" className="form-label">
            Year of Graduation
          </label>
          <input
            id="yearOfGraduation"
            name="yearOfGraduation"
            type="number"
            className="form-control"
            value={formData.yearOfGraduation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="occupation" className="form-label">
            Occupation
          </label>
          <input
            id="occupation"
            name="occupation"
            type="text"
            className="form-control"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NGOUploadPage;
