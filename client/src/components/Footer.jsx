import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">InstaDoc</h2>
            <p className="footer-description">
              Providing exceptional healthcare services with a patient-centered
              approach. Connect with certified specialists and manage your
              appointments with ease.
            </p>
          </div>

          <div className="footer-links-container">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/doctors"}>Doctors</NavLink>
                </li>
                <li>
                  <NavLink to={"/appointments"}>Appointments</NavLink>
                </li>
                <li>
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Support</h3>
              <ul>
                <li>
                  <NavLink to={"/appointments"}>Book Appointment</NavLink>
                </li>
                <li>
                  <NavLink to={"/notifications"}>Notifications</NavLink>
                </li>
                <li>
                  <HashLink to={"/#contact"}>Contact Us</HashLink>
                </li>
                <li>
                  <NavLink to={"/ChangePassword"}>Change Password</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="social-container">
          <h3>Connect With Us</h3>
          <ul className="social-links">
            <li className="social-link facebook">
              <a
                href="https://www.facebook.com/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-link twitter">
              <a
                href="https://twitter.com/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="social-link youtube">
              <a
                href="https://www.youtube.com/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="social-link instagram">
              <a
                href="https://www.instagram.com/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="social-link linkedin">
              <a
                href="https://www.linkedin.com/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} InstaDoc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
