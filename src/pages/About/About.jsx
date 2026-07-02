import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-hero">
        <h1>Transforming Education at ICFAI</h1>
        <p>Bridging the gap between traditional learning and modern industry demands.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>To become a global leader in academic excellence by fostering innovation and leadership in every student.</p>
        </div>
        <div className="about-card">
          <h3>Our Approach</h3>
          <p>We combine theoretical knowledge with hands-on projects, ensuring you are "industry-ready" from day one.</p>
        </div>
      </div>
    </div>
  );
};
export default About;