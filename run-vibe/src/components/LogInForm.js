// src/components/LogInForm.js
import React from 'react';
import '../styles/HomePage.css'; // Adjust the import path

const LogInForm = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Login to RunVibe</h1>
      </header>
      <main>
        <form className="auth-form">
          <div className="input-container">
            <input type="text" placeholder="Username or Email" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </form>
      </main>
      <footer>
        <p>New to RunVibe? <a href="/signup">Sign Up</a></p>
      </footer>
    </div>
  );
};

export default LogInForm;
