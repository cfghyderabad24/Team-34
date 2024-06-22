import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OldData = () => {
  const alumniData = {
    name: 'Hive',
    coursesTaken: ['Computer Science', 'Data Analytics'],
    yearOfCompletion: '2022',
    vocationalCourses: ['Web Development', 'Network Engineering', 'Graphic Design', 'Machine Learning']
  };

  const { name, coursesTaken, yearOfCompletion, vocationalCourses } = alumniData;

  const [showModal, setShowModal] = useState(false);
  const [sessionTopic, setSessionTopic] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [sessionDate, setSessionDate] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handlePostSession = () => {
    // Logic to post session to database goes here
    console.log("Posting session topic:", sessionTopic, "Time:", sessionTime, "Date:", sessionDate);
    // Close the modal after posting session
    handleCloseModal();
    // You can add further logic to save session data to your database
  };

  return (
    <div className="alumni-details card p-4 shadow">
      <div className="mb-3 text-center">
        <strong>Alumnus:</strong> {name}
      </div>
      <div className="mb-3 text-center">
        <strong>Courses Taken:</strong> {coursesTaken.join(', ')}
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
        <ul className="pl-3">
          {vocationalCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      {/* Modal for posting session */}
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Post a Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="sessionTopic">Session Topic:</label>
              <input
                type="text"
                className="form-control"
                id="sessionTopic"
                value={sessionTopic}
                onChange={(e) => setSessionTopic(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sessionTime">Session Time:</label>
              <input
                type="time"
                className="form-control"
                id="sessionTime"
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sessionDate">Session Date:</label>
              <input
                type="date"
                className="form-control"
                id="sessionDate"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
              />
            </div>
          </form>
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
  );
};

export default OldData;
