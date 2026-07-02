import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <div className="contact-left">
          <h2>Let's Talk!</h2>
          <p>Have questions? Reach out to our admissions team.</p>
          <div className="contact-item"><FaMapMarkerAlt /> Jaipur, Rajasthan</div>
          <div className="contact-item"><FaEnvelope /> admissions@icfai.edu</div>
          <div className="contact-item"><FaPhone /> +91 98765 43210</div>
        </div>
        <form className="contact-right">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your message..." rows="4"></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;