import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2>ICFAI University</h2>
          <p>
            Empowering students with quality education, innovation,
            and excellence. Learn anytime, anywhere with our
            modern e-learning platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Located near Cambay Golf Resort on Agra Road in Jamdoli, Jaipur, Rajasthan (Pin: 302031). </p>
          <p>📧 admissions@icfaiuniversity.edu</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 ICFAI University. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;