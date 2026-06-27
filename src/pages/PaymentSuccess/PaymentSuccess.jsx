import "./PaymentSuccess.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/my-courses");
    }, 3000);
  }, []);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="check">✔</div>

        <h1>Payment Successful 🎉</h1>

        <p>Your enrollment is confirmed</p>

        <button onClick={() => navigate("/my-courses")}>
          Go to My Courses
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;