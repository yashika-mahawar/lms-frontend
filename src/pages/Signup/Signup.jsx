import "./Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  full_name: "", // 'name' ki jagah 'full_name'
  email: "",
  phone: "",
  program: "",
  password: "",
  role: "student" // Default role add kiya
});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Backend ko jo format chahiye, wahi bhejenge
    const payload = {
      full_name: formData.full_name,
      email: formData.email,
      password: formData.password,
      role: formData.role
    };

    const res = await axios.post("http://localhost:5000/api/register", payload);
    localStorage.setItem("token", res.data.token); 
localStorage.setItem("user", JSON.stringify(res.data.user));

alert("Registration Successful!");
    alert("Registration Successful!");
    navigate("/payment", { 
  state: { 
    course: { 
      title: formData.program, 
      fee: "15000",          // Yahan 'fee' add karo
      duration: "2 Years"    // Yahan 'duration' add karo
    } 
  } 
});
  } catch (err) {
    alert(err.response?.data?.message || "Registration Failed!");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>ICFAI University</h1>

        <h2>Start Your Learning Journey</h2>

        <p>
          Register yourself to access courses,
          assignments, live classes and your
          student dashboard.
        </p>
      </div>

      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSignup}>

          <h2>Create Account</h2>

         <input
  type="text"
  name="full_name" // 'name' se badal kar 'full_name' kiya
  placeholder="Full Name"
  value={formData.full_name}
  onChange={handleChange}
  required
/>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="">Select Program</option>
            <option value="B.Tech Computer Science">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MBA">MBA</option>
            <option value="BA">BA</option>
            <option value="MCA">MCA</option>
            <option value="B.Com">B.Com</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="M.Tech">M.Tech</option>
            <option value="LLB">LLB</option>
            <option value="Diploma in IT">Diploma in IT</option>
          </select>

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading
              ? "Registering..."
              : "Register & Proceed to Payment"}
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
