// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm'; // Import your SignUpForm component
import LogInForm from './components/LogInForm'; // Import your LogInForm component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </Router>
  );
};

export default App;
