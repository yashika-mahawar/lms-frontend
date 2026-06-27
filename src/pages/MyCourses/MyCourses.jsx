import "./MyCourses.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myCourses")) || [];
    setCourses(data);
  }, []);

  return (
    <div className="mycourses-page">

      <h1 className="title">📚 My Learning Dashboard</h1>
      <p className="subtitle">Track your enrolled courses</p>

      <div className="mycourses-container">

        {courses.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>
            No Courses Enrolled Yet 😢
          </h3>
        ) : (
          courses.map((course) => (
            <div className="mycourse-card" key={course.id}>

              <div className="card-header">
                <h2>{course.title}</h2>

                <span className="badge">
                  {course.progress >= 70
                    ? "Advanced"
                    : course.progress >= 40
                    ? "Intermediate"
                    : "Beginner"}
                </span>
              </div>

              <p className="progress-text">Course Progress</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress || 0}%` }}
                ></div>
              </div>

              <span className="progress-value">
                {course.progress || 0}% Completed
              </span>

              <Link
  to="/learning"
  onClick={() =>
    localStorage.setItem("activeCourse", JSON.stringify(course))
  }
  className="continue-btn"
>
  Continue Learning
</Link>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default MyCourses;