import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";
import { getAllCourses } from "../../services/courseService";

import Course1 from "../../assets/Course1.jpg";
import Course2 from "../../assets/Course2.jpg";
import Course3 from "../../assets/Course3.jpeg";
import Course4 from "../../assets/Course4.png";
import Course5 from "../../assets/Course5.jpeg";
import Course6 from "../../assets/Course6.jpeg";
import Course7 from "../../assets/Course7.jpeg";
import Course8 from "../../assets/Course8.jpeg";
import Course9 from "../../assets/Course9.jpeg";
import Course10 from "../../assets/Course10.jpeg";

function CourseCard() {
  const [courses, setCourses] = useState([]);

  // Fallback images (agar backend image na bheje)
  const courseImages = [
    Course1,
    Course2,
    Course3,
    Course4,
    Course5,
    Course6,
    Course7,
    Course8,
    Course9,
    Course10,
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();

        // Agar API response.data me array hai
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleViewDetails = (course) => {
    localStorage.setItem("lastCourse", JSON.stringify(course));
  };

  return (
    <section className="courses-section" id="courses">
      <h2 className="course-heading">Our Popular Courses</h2>

      <p className="course-subheading">
        Explore industry-oriented programs offered by ICFAI University.
      </p>

      <div className="course-container">
        {courses.map((course, index) => (
          <div
            className="course-card"
            key={course.id || course._id}
          >
            <img
              src={course.image || courseImages[index]}
              alt={course.title}
            />

            <div className="course-content">
              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-details">
                <span>
                  <strong>Duration:</strong> {course.duration}
                </span>

                <span>
                  <strong>Fee:</strong> ₹{course.fee}
                </span>
              </div>

              <Link
                to="/course-details"
                className="course-btn"
                state={{ course }}
                onClick={() => handleViewDetails(course)}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseCard;