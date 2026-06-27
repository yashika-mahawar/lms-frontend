import "./Learning.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Learning() {
  return (
    <>
      <Navbar />

      <div className="learning-page">

        {/* LEFT VIDEO SECTION */}
        <div className="video-section">
          <h2>Now Playing: Introduction to CSE</h2>

          <div className="video-box">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/9bZkp7q19f0"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* RIGHT SYLLABUS */}
        <div className="syllabus">
          <h3>Course Syllabus</h3>

          <ul>
            <li>✔ Introduction</li>
            <li>✔ Basics of Programming</li>
            <li>✔ Data Structures</li>
            <li>✔ Algorithms</li>
            <li>✔ Database Systems</li>
          </ul>

          <button>Next Lesson →</button>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Learning;