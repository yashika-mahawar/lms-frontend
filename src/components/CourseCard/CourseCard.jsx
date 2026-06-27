import { Link } from "react-router-dom";
import "./CourseCard.css";
import Course1 from "../../assets/Course1.jpg";
import Course2 from "../../assets/Course2.jpg";
import Course3 from "../../assets/Course3.jpg";
function CourseCard() {
  const courses = [
    {
      id: 1,
      title: "B.Tech Computer Science",
      description:
        "Learn programming, AI, Data Science and Software Development.",
      duration: "4 Years",
      fee: "₹49,999",
      image: Course1,
    },
    {
      id: 2,
      title: "MBA",
      description:
        "Develop leadership and business management skills.",
      duration: "2 Years",
      fee: "₹69,999",
      image:Course2,
    },
    {
      id: 3,
      title: "BCA",
      description:
        "Learn Web Development, Programming and Databases.",
      duration: "3 Years",
      fee: "₹39,999",
      image:Course3 ,
    },
  ];

  return (
    <section className="courses-section">
      <h2 className="course-heading">Our Popular Courses</h2>
      <p className="course-subheading">
        Explore industry-oriented programs offered by ICFAI University.
      </p>

      <div className="course-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />

            <div className="course-content">
              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-details">
                <span><strong>Duration:</strong> {course.duration}</span>
                <span><strong>Fee:</strong> {course.fee}</span>
              </div>

              <Link to="/course-details" className="course-btn">
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