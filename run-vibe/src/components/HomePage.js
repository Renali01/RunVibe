// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Adjust the import path

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to RunVibe</h1>
      </header>
      <main>
        <p>Track your runs, set records, and enjoy the perfect running playlist.</p>
        <div className="button-container">
          <Link to="/signup" className="signup-button">
            Sign Up
          </Link>
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </main>
      <footer>
        <p>Follow your rhythm, reach your goals.</p>
      </footer>
    </div>
  );
};

export default HomePage;
