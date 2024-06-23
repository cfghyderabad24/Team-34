import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./AlumniDetails.css";

const AlumniDetails = () => {
  const alumniData = {
    name: "hive",
    coursesTaken: ["Computer Science", "Data Analytics"],
    yearOfCompletion: "2022",
    vocationalCourses: [
      "Web Development",
      "Network Engineering",
      "Graphic Design",
      "Machine Learning",
    ],
  };
  const { name, coursesTaken, yearOfCompletion, vocationalCourses } =
    alumniData;

  const [showModal, setShowModal] = useState(false);
  const [sessionTopic, setSessionTopic] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [sessionDate, setSessionDate] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handlePostSession = () => {
    const newSession = {
      topic: sessionTopic,
      time: sessionTime,
      date: sessionDate,
      alumniName: name,
    };

    // Get existing sessions from local storage
    const existingSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    // Add the new session
    existingSessions.push(newSession);
    // Save back to local storage
    localStorage.setItem("sessions", JSON.stringify(existingSessions));
    alert("POSTED THE SESSION");
    // Close the modal after posting session
    handleCloseModal();
  };

  return (
    <div className="another">
      <center>
        <div className="alumni-details card p-4 shadow">
          <div className="mb-3 text-center">
            <strong>Alumnus:</strong> {name}
          </div>
          <div className="mb-3 text-center">
            <strong>Courses Taken:</strong> {coursesTaken.join(", ")}
          </div>
          <div className="mb-3 text-center">
            <strong>Year of Completion:</strong> {yearOfCompletion}
          </div>
          <div className="mb-3 text-center">
            <Button variant="success" onClick={handleOpenModal}>
              Post a Session
            </Button>
          </div>
          <div>
            <strong>Can take sessions in:</strong>
            <ul>
              {vocationalCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          {/* Modal for posting session */}
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Post a Session</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="sessionTopic">
                  <Form.Label>Session Topic:</Form.Label>
                  <Form.Control
                    type="text"
                    value={sessionTopic}
                    onChange={(e) => setSessionTopic(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="sessionTime">
                  <Form.Label>Session Time:</Form.Label>
                  <Form.Control
                    type="time"
                    value={sessionTime}
                    onChange={(e) => setSessionTime(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="sessionDate">
                  <Form.Label>Session Date:</Form.Label>
                  <Form.Control
                    type="date"
                    value={sessionDate}
                    onChange={(e) => setSessionDate(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handlePostSession}>
                Post Session
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </center>
    </div>
  );
};

export default AlumniDetails;
