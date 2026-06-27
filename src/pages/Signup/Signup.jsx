import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">

      <div className="signup-left">
        <h1>ICFAI University</h1>
        <h2>Start Your Learning Journey</h2>

        <p>
          Register yourself to access courses, assignments,
          live classes and your student dashboard.
        </p>
      </div>

      <div className="signup-right">

        <form className="signup-form">

          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>
            <option>Select Program</option>
            <option>B.Tech</option>
            <option>BCA</option>
            <option>MBA</option>
          </select>

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Register
          </button>

          <p>
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Signup;