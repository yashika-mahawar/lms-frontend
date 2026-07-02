import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Navigate import karo
import './WelcomeCard.css';

const WelcomeCard = () => {
  const navigate = useNavigate(); // 2. Hook initialize karo

  const handleContinue = () => {
    const saved = localStorage.getItem("lastCourse");
    if (saved) {
      const course = JSON.parse(saved);
      // /learning/id par bhej do
      navigate(`/learning/${course.id}`); 
    } else {
      alert("Please select a course first!");
    }
  };

  return (
    <div className="welcome-card-banner">
      <div className="welcome-text-content">
        <h1>👋 Welcome Back, Yashika</h1>
        <p>Continue your learning journey at ICFAI University.</p>
      </div>
      {/* 3. Button par onClick lagao */}
      <button className="continue-learning-btn" onClick={handleContinue}>
        <span className="play-icon">▶</span> Continue Learning
      </button>
    </div>
  );
};

export default WelcomeCard;