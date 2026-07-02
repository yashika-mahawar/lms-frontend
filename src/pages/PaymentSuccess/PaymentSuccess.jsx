import React from "react";
import "./PaymentSuccess.css";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from 'react-confetti';

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  return (
    <div className="success-page">
      <Confetti recycle={false} numberOfPieces={300} />
      <div className="success-card">
        <div className="check">✔</div>
        <h1>Payment Successful! 🎉</h1>
        <p>Your enrollment is confirmed.</p>

        {course && (
          <div className="course-info">
            <h3>{course.title}</h3>
            <div className="receipt-details">
              <p>Order ID: #RZP_{Math.floor(Math.random() * 900000)}</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        )}

        <button className="primary-btn" onClick={() => navigate("/my-courses")}>
          Go to My Courses
        </button>
      </div>
    </div>
  );
}
export default PaymentSuccess;