import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa"; // Agar icon chahiye toh

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

          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="button" onClick={() => navigate("/dashboard")}>
            Login
          </button>

          <p>
            Don't have an account?
            <Link to="/signup"> Register</Link>
          </p>

          {/* 🔥 ADMIN LOGIN LINK ADDED HERE */}
          <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Are you an administrator? 
              <Link 
                to="/admin/login" 
                style={{ 
                  color: "#4f46e5", 
                  fontWeight: "600", 
                  marginLeft: "8px", 
                  textDecoration: "none" 
                }}
              >
                Login here
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;