// src/components/SignUpForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import '../styles/HomePage.css';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to backend registration endpoint
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Registration successful
        console.log('User registered successfully');
        const userData = await response.json();
        setUser(userData);
        navigate('/dashboard');
      } else {
        // Handle registration failure
        console.error('Registration failed. Status:', response.status);

        // Log the entire response
        console.log('Response:', response);

        // Try to parse the JSON error message, or use the status text
        const data = await response.json().catch(() => null);
        setError(data?.error || response.statusText || 'Internal Server Error');
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
              placeholder="Nickname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
      {user && <Dashboard user={user} />}
      <footer>
        <p>Already have an account? <a href="/login">Login</a></p>
      </footer>
    </div>
  );
};

export default SignUpForm;
