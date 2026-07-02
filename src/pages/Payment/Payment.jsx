import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Payment.css";
import { enrollCourse } from "../../utils/enroll";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const course = location.state?.course;

  if (!course) return <h2 style={{textAlign:'center', marginTop:'100px'}}>No Course Selected</h2>;

  const handlePayment = async () => {
    setLoading(true);
    // Simulating API call - Real backend ke liye isse hata dena
    setTimeout(async () => {
      enrollCourse(course);
      navigate("/payment-success", { state: { course } });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="payment-page">
      <h1>Complete Enrollment</h1>
      <div className="payment-container">
        <div className="payment-left">
          <h2>🎓 Your Selection</h2>
          <div className="course-box">
            <h3>{course.title}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p className="price">{course.fee}</p>
          </div>
        </div>

        <div className="payment-right">
          <h2>💳 Secure Checkout</h2>
          <p style={{color:'#64748b', marginBottom:'20px'}}>You are one step away from starting your learning journey.</p>
          
          <button 
            className="pay-now-btn" 
            onClick={handlePayment} 
            disabled={loading}
          >
            {loading ? "Processing..." : `Pay ${course.fee} Securely`}
          </button>
          <p className="note">🔒 100% Secure Payment | Powered by Razorpay</p>
        </div>
      </div>
    </div>
  );
}
export default Payment;