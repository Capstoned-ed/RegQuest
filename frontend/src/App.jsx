import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SuccessPage from './pages/SuccessPage';
import HomePage from './pages/HomePage';
import RequestDocument from './pages/RequestDocument';
import TrackStatus from './pages/TrackStatus';

const App = () => {
  // Mock user data - Shared across pages
  const currentUser = {
    name: "User",
    role: "Student",
    studentId: "2023-0001",
    notifications: 5 // Example count to verify consistency
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/home" element={<HomePage currentUser={currentUser} />} />
        <Route path="/request-document" element={<RequestDocument currentUser={currentUser} />} />
        <Route path="/track-status" element={<TrackStatus currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
};

export default App;