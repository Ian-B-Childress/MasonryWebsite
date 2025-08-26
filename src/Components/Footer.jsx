import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 Melvin Masonry. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <br>
          </br>
          <Link to="/terms-of-service">Terms of Service</Link>
          <br>
          </br>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="social-media">
          <a
            href="https://www.facebook.com/dannyntrena.melvin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="developer-tag">
          <p>Developed by Ian Childress</p>
          <a
            href="https://www.linkedin.com/in/ian-blake-childress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
}
