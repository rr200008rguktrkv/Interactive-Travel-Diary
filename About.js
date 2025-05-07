// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'; // We'll also create a nice About.css file

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-background">
      <div className="about-glass">
        <h1 >About Us</h1>
        <p className="about-text">
          WanderLog is your ultimate travel companion. <br />
          We help travelers around the world share their beautiful stories, stunning experiences, and memorable adventures. <br />
          Join our vibrant community and start your journey today!
        </p>
        <button className="about-button" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default About;
