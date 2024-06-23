import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Student = () => {
  const stdId = 4389;
  const [course, setCourse] = useState("B.tech");
  const [year, setYear] = useState(2);
  const [s_covered, setSCovered] = useState(45003);
  const [s_elegible, setSElegible] = useState(100101);
  const renewal_deadline = "09-02-2023";
  const [vcourses, setVCourses] = useState([
    { course: "linux", attendance: "85%" },
    { course: "blockchain", attendance: "90%" },
  ]);
  const completionDate = "06-15-2023"; // Example completion date
  //   const todayDate = new Date().toLocaleDateString("en-US"); // Get today's date

  const { register, handleSubmit } = useForm();
  const { register: registerPassword, handleSubmit: handleSubmitPassword } =
    useForm();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleEditDetails = (data) => {
    setCourse(data.course);
    setYear(data.year);
    setSCovered(data.s_covered);
    setSElegible(data.s_elegible);
    setShowEditModal(false);
  };

  const handleChangePassword = (data) => {
    console.log("Password changed:", data.newPassword);
    setShowPasswordModal(false);
  };

  const handleAdminLogin = () => {
    const completion = new Date(completionDate);
    const today = new Date();

    if (today > completion) {
      window.location.href = "/alumni"; // Redirect to alumni page
    } else {
      alert("You are still a student");
    }
  };

  return (
    <div className="mt-5 p-4 bg-light rounded shadow">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Hey {stdId},</h3>
        <div>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={() => setShowEditModal(true)}
          >
            Edit Details
          </button>{" "}
          &nbsp;
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setShowPasswordModal(true)}
          >
            Change Password
          </button>{" "}
          &nbsp;
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAdminLogin}
          >
            Login as Alumni
          </button>
        </div>
      </div>

      <div className="scholarship-details">
        <h1 className="mb-4">Your Scholarship Details</h1>
        <div className="mb-3">
          <div className="p-2 bg-white rounded mb-2">
            <strong>Course Enrolled in:</strong> {course}
          </div>
          <div className="p-2 bg-white rounded mb-2">
            <strong>Year:</strong> {year}
          </div>
          <div className="p-2 bg-white rounded mb-2">
            <strong>Scholarship Eligible Amount:</strong> {s_elegible}
          </div>
          <div className="p-2 bg-white rounded mb-2">
            <strong>Scholarship Covered:</strong> {s_covered}
          </div>
          <h3 className="mt-4">
            Renewal Deadline:{" "}
            <span style={{ color: "red" }}>{renewal_deadline}</span>
          </h3>
          <h2 className="mt-3">Vocational Courses Enrolled In:</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Vocational Course</th>
                <th>Attendance Percentage</th>
              </tr>
            </thead>
            <tbody>
              {vcourses.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.course}</td>
                  <td>
                    <strong>{item.attendance}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(handleEditDetails)}>
            <div className="form-group">
              <label>Course</label>
              <input
                type="text"
                className="form-control"
                defaultValue={course}
                {...register("course")}
              />
            </div>
            <div className="form-group">
              <label>Year</label>
              <input
                type="number"
                className="form-control"
                defaultValue={year}
                {...register("year")}
              />
            </div>
            <div className="form-group">
              <label>Scholarship Eligible Amount</label>
              <input
                type="number"
                className="form-control"
                defaultValue={s_elegible}
                {...register("s_elegible")}
              />
            </div>
            <div className="form-group">
              <label>Scholarship Covered</label>
              <input
                type="number"
                className="form-control"
                defaultValue={s_covered}
                {...register("s_covered")}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Save Changes
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitPassword(handleChangePassword)}>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                {...registerPassword("newPassword")}
              />
            </div>
            <button type="submit" className="btn btn-warning mt-3">
              Change Password
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Student;
