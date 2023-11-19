// src/components/SignUpForm.js
import React from 'react';
import '../styles/App.css'; // Adjust the import path

const SignUpForm = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Sign Up for RunVibe</h1>
      </header>
      <main>
        <form className="auth-form">
          <div className="input-container">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </main>
      <footer>
        <p>Already have an account? <a href="/login">Login</a></p>
      </footer>
    </div>
  );
};

export default SignUpForm;
