import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaArrowRight } from "react-icons/fa";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-login-wrapper">
      <div className="glass-card">
        <div className="admin-avatar">
          <FaUserShield />
        </div>
        <h1>Welcome Admins</h1>
        <p>Authorize to access the management portal</p>
        
        <form onSubmit={(e) => { e.preventDefault(); navigate("/admin"); }}>
          <div className="field">
            <input type="email" placeholder="Admin Email" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">
            Login Securely <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;