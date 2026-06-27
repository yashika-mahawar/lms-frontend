import { Link } from "react-router-dom";
import "./CourseDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import courseImage from "../../assets/Course1.jpg";

function CourseDetails() {
  return (
    <>
      <Navbar />

      <section className="course-details">
        <div className="course-image">
          <img src={courseImage} alt="B.Tech Computer Science" />
        </div>

        <div className="course-info">
          <span className="course-badge">Admissions Open 2026</span>

          <h1>B.Tech Computer Science Engineering</h1>

          <p className="course-text">
            The B.Tech Computer Science Engineering program at ICFAI University
            equips students with modern technical knowledge, practical skills,
            and industry exposure in software development, Artificial
            Intelligence, Cloud Computing, Data Science, and Cyber Security.
          </p>

          <div className="info-grid">
            <div className="info-box">
              <h3>Duration</h3>
              <p>4 Years</p>
            </div>

            <div className="info-box">
              <h3>Mode</h3>
              <p>Online / Offline</p>
            </div>

            <div className="info-box">
              <h3>Eligibility</h3>
              <p>10+2 PCM</p>
            </div>

            <div className="info-box">
              <h3>Course Fee</h3>
              <p>₹49,999</p>
            </div>
          </div>

          <h2>Course Highlights</h2>

          <ul>
            <li>Industry-Oriented Curriculum</li>
            <li>Experienced Faculty Members</li>
            <li>Hands-on Projects</li>
            <li>Placement Assistance</li>
            <li>Internship Opportunities</li>
            <li>Modern Computer Labs</li>
          </ul>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CourseDetails;
