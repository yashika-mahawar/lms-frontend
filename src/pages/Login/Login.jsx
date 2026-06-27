import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">

      <div className="login-left">
        <h1>ICFAI University</h1>

        <h2>Welcome Back!</h2>

        <p>
          Login to access your dashboard, courses,
          live classes and learning resources.
        </p>
      </div>

      <div className="login-right">

        <div className="login-form">

          <h2>Student Login</h2>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </button>

          <p>
            Don't have an account?
            <Link to="/signup"> Register</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;