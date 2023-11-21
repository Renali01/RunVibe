// src/components/LogInForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css'; // Adjust the import path
import Dashboard from './Dashboard';

const LogInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to backend login endpoint
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Send only username and password
      });

      if (response.ok) {
        // Login successful
        console.log('User logged in successfully');
        const userData = await response.json();
        setUser(userData);
        navigate('/dashboard');
      } else {
        // Handle login failure
        console.error('Login failed. Status:', response.status);

        // Log the entire response
        console.log('Response:', response);

        // Try to parse the JSON error message, or use the status text
        const data = await response.json().catch(() => null);
        setError(data?.error || response.statusText || 'Internal Server Error');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Internal Server Error');
    }
  };

  return (
    <div className="home-container">
      <header>
        <h1>Login to RunVibe</h1>
      </header>
      <main>
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Nickname" // Update the placeholder
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
            <button type="submit">Login</button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </main>
      {user && <Dashboard user={user} />}
      <footer>
        <p>New to RunVibe? <a href="/signup">Sign Up</a></p>
      </footer>
    </div>
  );
};

export default LogInForm;
