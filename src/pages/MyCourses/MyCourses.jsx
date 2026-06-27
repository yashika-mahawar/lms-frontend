import "./MyCourses.css";
import { Link } from "react-router-dom";

function MyCourses() {
  const courses = [
    {
      id: 1,
      title: "B.Tech Computer Science",
      progress: "80%",
    },
    {
      id: 2,
      title: "MBA",
      progress: "55%",
    },
    {
      id: 3,
      title: "BCA",
      progress: "35%",
    },
  ];

  return (
    <div className="mycourses-page">
      <h1>My Courses</h1>

      <div className="mycourses-container">
        {courses.map((course) => (
          <div className="mycourse-card" key={course.id}>
            <h2>{course.title}</h2>

            <p>Course Progress</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: course.progress }}
              ></div>
            </div>

            <span>{course.progress} Completed</span>

            <Link to="/learning" className="continue-btn">
              Continue Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
