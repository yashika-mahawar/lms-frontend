import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import { enrollCourse } from "../../utils/enroll";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const course = location.state?.course;
  const [method, setMethod] = useState("upi");

  // safety check
  if (!course) {
    return <h2 style={{ textAlign: "center" }}>No Course Selected</h2>;
  }

  const handlePayment = () => {
    // 🔥 SAVE COURSE TO MY COURSES
    enrollCourse(course);

    // 🔥 GO TO SUCCESS PAGE
    navigate("/payment-success", { state: { course } });
  };

  return (
    <div className="payment-page">
      <h1>Complete Your Payment</h1>

      <div className="payment-container">

        {/* LEFT SIDE */}
        <div className="payment-left">
          <h2>🎓 Selected Course</h2>

          <div className="course-box">
            <h3>{course.title}</h3>
            <p>Duration: {course.duration}</p>
            <p className="price">{course.fee}</p>
          </div>

          <div className="summary">
            <p>Subtotal: {course.fee}</p>
            <p>GST: ₹0</p>
            <hr />
            <h3>Total: {course.fee}</h3>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="payment-right">
          <h2>💳 Payment Method</h2>

          <div className="payment-options">
            <button
              className={method === "upi" ? "active" : ""}
              onClick={() => setMethod("upi")}
            >
              UPI
            </button>

            <button
              className={method === "card" ? "active" : ""}
              onClick={() => setMethod("card")}
            >
              Card
            </button>

            <button
              className={method === "netbanking" ? "active" : ""}
              onClick={() => setMethod("netbanking")}
            >
              Net Banking
            </button>
          </div>

          {/* UPI */}
          {method === "upi" && (
            <div className="form-box">
              <input type="text" placeholder="Enter UPI ID (example@upi)" />

              <button onClick={handlePayment}>
                Pay via UPI
              </button>
            </div>
          )}

          {/* CARD */}
          {method === "card" && (
            <div className="form-box">
              <input type="text" placeholder="Card Holder Name" />
              <input type="text" placeholder="Card Number" />

              <div className="row">
                <input type="text" placeholder="Expiry" />
                <input type="text" placeholder="CVV" />
              </div>

              <button onClick={handlePayment}>
                Pay by Card
              </button>
            </div>
          )}

          {/* NET BANKING */}
          {method === "netbanking" && (
            <div className="form-box">
              <select>
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis Bank</option>
              </select>

              <button onClick={handlePayment}>
                Pay via Net Banking
              </button>
            </div>
          )}

          <p className="note">
            🔒 Secure payment powered by ICFAI LMS System
          </p>
        </div>

      </div>
    </div>
  );
}

export default Payment;