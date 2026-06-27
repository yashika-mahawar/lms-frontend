import "./PaymentSuccess.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const course = location.state?.course;

useEffect(() => {
  const timer = setTimeout(() => {
    navigate("/my-courses");
  }, 3000);

  return () => clearTimeout(timer);
}, [navigate]);

  return (
    <div className="success-page">
      <div className="success-card">

        <div className="check">✔</div>

        <h1>Payment Successful 🎉</h1>

        {/* COURSE INFO SHOW */}
        {course && (
          <div className="course-info">
            <h3>{course.title}</h3>
            <p>Enrollment Confirmed</p>
          </div>
        )}

        <p>Your course has been added to My Courses</p>

        <p className="redirect">
          Redirecting to My Courses in 3 seconds...
        </p>

        <button onClick={() => navigate("/my-courses")}>
          Go to My Courses
        </button>

      </div>
    </div>
  );
}

export default PaymentSuccess;