import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
import Student from "./components/Student";
import NGOUploadPage from "./components/NgoUploadStudent";
import ShowStudentData from "./components/ShowStudentData";
import View from "./components/View";
import Screening3 from "./components/Screening3";
import AlumniDetails from "./components/AlumniDetails";
// import Homepage from "./components/Homepage/Homepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<Student />} />
        <Route path="/ngo" element={<NGOUploadPage />} />
        <Route path="/ngo/st1" element={<ShowStudentData />} />
        <Route path="/ngo/st2" element={<View />} />
        <Route path="/ngo/st3" element={<Screening3 />} />
        <Route path="/alumni" element={<AlumniDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
