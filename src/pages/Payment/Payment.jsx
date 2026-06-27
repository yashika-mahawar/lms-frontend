import { useNavigate } from "react-router-dom";
import "./Payment.css";
function Payment() {
      const navigate = useNavigate();
  return (
    <div className="payment-page">

      <h1>Complete Your Payment</h1>

      <div className="payment-container">

        {/* LEFT - COURSE INFO */}
        <div className="payment-left">
          <h2>Selected Course</h2>

          <div className="course-box">
            <h3>B.Tech Computer Science</h3>
            <p>Duration: 4 Years</p>
            <p className="price">₹49,999</p>
          </div>

          <div className="summary">
            <p>Subtotal: ₹49,999</p>
            <p>GST: ₹0</p>
            <hr />
            <h3>Total: ₹49,999</h3>
          </div>
        </div>

        {/* RIGHT - PAYMENT FORM */}
        <div className="payment-right">
          <h2>Payment Details</h2>

          <form>
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Card Number" />
            <div className="row">
              <input type="text" placeholder="Expiry Date" />
              <input type="text" placeholder="CVV" />
            </div>

            <button
  type="button"
  onClick={() => navigate("/payment-success")}
>
  Pay Now
</button>
          </form>

          <p className="note">
            Secure payment powered by LMS Platform
          </p>
        </div>

      </div>
    </div>
  );
}

export default Payment;
