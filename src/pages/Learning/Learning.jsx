import "./Learning.css";
import { useState, useEffect } from "react";

function Learning() {
  const course = JSON.parse(localStorage.getItem("activeCourse"));

  const [progress, setProgress] = useState(course?.progress || 0);
  const [completed, setCompleted] = useState(false);

  const modules = [
    "Introduction",
    "Basics",
    "Core Concepts",
    "Advanced Topics",
    "Project Work",
  ];

  useEffect(() => {
    if (!course) {
      setCompleted(true);
    }
  }, []);

  const markComplete = () => {
    if (progress < 100) {
      const newProgress = progress + 20;
      setProgress(newProgress);

      // update localStorage myCourses
      let myCourses =
        JSON.parse(localStorage.getItem("myCourses")) || [];

      myCourses = myCourses.map((c) =>
        c.id === course.id ? { ...c, progress: newProgress } : c
      );

      localStorage.setItem("myCourses", JSON.stringify(myCourses));

      if (newProgress >= 100) {
        setCompleted(true);
      }
    }
  };

  if (!course) {
    return (
      <div className="learning-page">
        <h2>No Course Selected</h2>
      </div>
    );
  }

  return (
    <div className="learning-page">

      <h1>{course.title}</h1>

      {/* VIDEO SECTION (dummy youtube) */}
      <div className="video-box">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/1Ne1hqOXKKI"
          title="Learning Video"
        ></iframe>
      </div>

      {/* PROGRESS BAR */}
      <div className="progress-section">
        <h3>Progress: {progress}%</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* MODULES */}
      <div className="modules">
        <h3>Syllabus</h3>
        <ul>
          {modules.map((m, i) => (
            <li key={i}>📘 {m}</li>
          ))}
        </ul>
      </div>

      {/* ACTION BUTTON */}
      <button
        className="complete-btn"
        onClick={markComplete}
        disabled={completed}
      >
        {completed ? "Course Completed 🎉" : "Mark as Complete"}
      </button>
    </div>
  );
}

export default Learning;