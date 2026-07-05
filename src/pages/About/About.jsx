import React from "react";
import "./About.css";

import founderImg from "../../assets/founder.png";
import aboutImg from "../../assets/campus.jpg";

import {
  FaGraduationCap,
  FaBullseye,
  FaEye,
  FaUniversity,
  FaBookOpen,
  FaUsers,
  FaGlobeAsia,
  FaAward,
  FaLightbulb,
  FaHandshake
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <span>Welcome to ICFAI University</span>

          <h1>
            Building Future Leaders Through
            <br />
            Quality Education
          </h1>

          <p>
            For over four decades, ICFAI has been one of India's leading
            educational groups, creating professionals with strong academic
            knowledge, practical exposure, ethical values and leadership
            qualities.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about-intro">

        <div className="about-left">

          <img src={aboutImg} alt="Campus" />

        </div>

        <div className="about-right">

          <h5>ABOUT ICFAI</h5>

          <h2>Creating Excellence Since 1984</h2>

          <p>
            The ICFAI Group has established a nationwide reputation for
            excellence in higher education through its commitment to academic
            innovation, research, industry-oriented curriculum and ethical
            values.
          </p>

          <p>
            Established in 1984, ICFAI has consistently introduced innovative
            academic programs that bridge the gap between classroom learning
            and real-world professional challenges.
          </p>

          <p>
            Today, ICFAI Universities and Business Schools are recognized for
            producing industry-ready graduates equipped with analytical
            thinking, leadership skills, entrepreneurial mindset and global
            perspectives.
          </p>

        </div>

      </section>

      {/* FOUNDER */}

      <section className="founder-section">

        <div className="founder-image">

          <img src={founderImg} alt="Founder" />

        </div>

        <div className="founder-content">

          <h5>Founder</h5>

          <h2>Mr. N.J. Yasaswy</h2>

          <p>
            Mr. N.J. Yasaswy (1950–2011) was the visionary founder of the ICFAI
            Group. His dream was to transform higher education in India through
            quality teaching, innovation, research and professional excellence.
          </p>

          <p>
            Under his leadership, ICFAI became a pioneer in private higher
            education and introduced several benchmark programs that continue
            to shape future professionals.
          </p>


        </div>

      </section>

      {/* VISION MISSION */}

      <section className="vision-mission">

        <div className="vm-card">

          <FaEye className="vm-icon"/>

          <h3>Vision</h3>

          <p>
            To become a globally respected university by creating competent,
            ethical and socially responsible professionals.
          </p>

        </div>

        <div className="vm-card">

          <FaBullseye className="vm-icon"/>

          <h3>Mission</h3>

          <p>
            To provide quality education through innovative pedagogy, research,
            industry collaboration and student-centered learning.
          </p>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="why-section">

        <h2>Why Choose ICFAI?</h2>

        <div className="why-grid">

          <div className="why-card">
            <FaGraduationCap />
            <h4>Quality Education</h4>
            <p>Industry-oriented curriculum with academic excellence.</p>
          </div>

          <div className="why-card">
            <FaBookOpen />
            <h4>Case Study Learning</h4>
            <p>Practical learning through globally recognized case studies.</p>
          </div>

          <div className="why-card">
            <FaUsers />
            <h4>Experienced Faculty</h4>
            <p>Learn from distinguished academicians and professionals.</p>
          </div>

          <div className="why-card">
            <FaUniversity />
            <h4>Modern Infrastructure</h4>
            <p>World-class campus with advanced facilities.</p>
          </div>

          <div className="why-card">
            <FaAward />
            <h4>Excellent Placements</h4>
            <p>Strong industry partnerships and career guidance.</p>
          </div>

          <div className="why-card">
            <FaGlobeAsia />
            <h4>Global Outlook</h4>
            <p>International collaborations and research opportunities.</p>
          </div>

        </div>

      </section>

     

      {/* COUNTER */}

      <section className="stats">

        <div className="stat">

          <h2>40+</h2>

          <p>Years of Excellence</p>

        </div>

        <div className="stat">

          <h2>11</h2>

          <p>Universities</p>

        </div>

        <div className="stat">

          <h2>100000+</h2>

          <p>Students</p>

        </div>

        <div className="stat">

          <h2>5000+</h2>

          <p>Research Cases</p>

        </div>

      </section>

      {/* CORE VALUES */}

      <section className="values">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div>
            <FaLightbulb />
            <h4>Innovation</h4>
          </div>

          <div>
            <FaAward />
            <h4>Excellence</h4>
          </div>

          <div>
            <FaHandshake />
            <h4>Integrity</h4>
          </div>

          <div>
            <FaUsers />
            <h4>Leadership</h4>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>Start Your Journey With ICFAI</h2>

        <p>
          Join thousands of students who are shaping successful careers through
          innovation, excellence and world-class education.
        </p>

      </section>

    </div>
  );
}

export default About;