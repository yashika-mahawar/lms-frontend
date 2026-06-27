import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/icfailogo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo-section">
        <img src={logo} alt="ICFAI University" />
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/signup" className="register-btn">
          Register
        </Link>
      </div>

    </header>
  );
}

export default Navbar;