import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // axios wapis import kiya backup ke liye
import "./Payment.css";
import API from "../../services/api";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const course = location.state?.course;

  useEffect(() => {
    console.log("Course Data Received:", course);
    if (!course) {
      navigate("/");
    }
  }, [course, navigate]);

  if (!course) return null;

  const handlePayment = async () => {
    setLoading(true);
    try {
      // FULL URL use kar rahe hain taaki 404 na aaye
      const { data } = await axios.post("http://localhost:5000/api/create-order", {
        amount: course.fee,
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: "INR",
        name: "ICFAI University",
        description: `Enrollment for ${course.title}`,
        order_id: data.id,
        handler: async (response) => {
          try {
            const verify = await axios.post("http://localhost:5000/api/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }, {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });

            if (verify.data.success) {
              navigate("/payment-success", { state: { course } });
            }
          } catch (err) {
            navigate("/payment-failure");
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
          escape: true
        },
        theme: { color: "#2563eb" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => navigate("/payment-failure"));
      rzp.open();
    } catch (error) {
      console.error("Payment Initiation Error:", error.response || error);
      alert("Error: " + (error.response?.data?.message || "Could not connect to payment server."));
      setLoading(false);
    }
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
          <button className="pay-now-btn" onClick={handlePayment} disabled={loading}>
            {loading ? "Initializing Gateway..." : `Pay ${course.fee} Securely`}
          </button>
          <p className="note">🔒 100% Secure Payment | Powered by Razorpay</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;