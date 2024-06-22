import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ShowStudentData from './components/ShowStudentData';
import NGOUploadPage from './components/NGOUploadPage';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/studentdetails" element={<ShowStudentData />} />
        <Route path="/upload" element={<NGOUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
