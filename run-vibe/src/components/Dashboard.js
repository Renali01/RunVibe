// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css'; // Adjust the import path

const Dashboard = () => {
  const [userData, setUserData] = useState({
    username: 'John Doe',
    totalDistance: 36,
    averagePace: '6:30', // in minutes per km
    consistencyStreaks: 5,
    personalRecords: {
      fastest5K: '23:15',
      longestDistance: 15,
    },
  });

  useEffect(() => {
    // Fetch user data from the server or other data source
    // For now, use mock data
    // Replace this with actual API calls when integrating with a backend
  }, []);

  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome, {userData.username}!</h1>
      </header>
      <main>
        <section className="user-info-section">
          <h2>User Information</h2>
          <p>Total Distance Covered: {userData.totalDistance} km</p>
          <p>Average Pace: {userData.averagePace} per km</p>
          <p>Consistency Streaks: {userData.consistencyStreaks} days</p>
          <p>Personal Records:</p>
          <ul>
            <li>Fastest 5K: {userData.personalRecords.fastest5K}</li>
            <li>Longest Distance: {userData.personalRecords.longestDistance} km</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
