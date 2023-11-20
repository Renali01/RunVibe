// src/components/RunLogForm.js
import React, { useState } from 'react';
import '../styles/HomePage.css';

const RunLogForm = () => {
  const [date, setDate] = useState(getTodayDate());
  const [distance, setDistance] = useState('');
  const [distanceUnit, setDistanceUnit] = useState('km');
  const [timeMinutes, setTimeMinutes] = useState('');
  const [timeSeconds, setTimeSeconds] = useState('');
  const [mood, setMood] = useState('😊'); // Default mood emoji
  const [notes, setNotes] = useState('');

  // Helper function to get today's date in the format 'YYYY-MM-DD'
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    const formattedTime = `${timeMinutes}:${timeSeconds}`;
    console.log('Form submitted:', { date, distance, distanceUnit, time: formattedTime, mood, notes });
  };

  return (
    <div className="home-container">
      <header>
        <h1>Log Your Run</h1>
      </header>
      <main>
        <form className="run-log-form" onSubmit={handleFormSubmit}>
          <div className="input-container">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="distance">Distance:</label>
            <input
              type="number"
              id="distance"
              placeholder="Enter distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              required
            />
            <select
              id="distance-unit"
              value={distanceUnit}
              onChange={(e) => setDistanceUnit(e.target.value)}
            >
              <option value="km">km</option>
              <option value="miles">miles</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="time">Time (minutes:seconds):</label>
            <div className="time-input-container">
              <input
                type="number"
                id="time-minutes"
                placeholder="MM"
                value={timeMinutes}
                onChange={(e) => setTimeMinutes(e.target.value)}
                required
              />
              <span>:</span>
              <input
                type="number"
                id="time-seconds"
                placeholder="SS"
                value={timeSeconds}
                onChange={(e) => setTimeSeconds(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="mood">Mood:</label>
            <select
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            >
              <option value="😊">😊</option>
              <option value="😐">😐</option>
              <option value="😢">😢</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              placeholder="Optional notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit">Log Run</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RunLogForm;
