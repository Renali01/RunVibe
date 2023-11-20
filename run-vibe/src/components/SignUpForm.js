// src/components/SignUpForm.js
import React, { useState } from 'react';
import '../styles/HomePage.css';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to backend endpoint
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Registration successful
        console.log('User registered successfully');
      } else {
        // Handle registration failure
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Internal Server Error');
    }
  };

  return (
    <div className="home-container">
      <header>
        <h1>Sign Up for RunVibe</h1>
      </header>
      <main>
        <form className="auth-form" onSubmit={handleSignUp}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </main>
      <footer>
        <p>Already have an account? <a href="/login">Login</a></p>
      </footer>
    </div>
  );
};

export default SignUpForm;
