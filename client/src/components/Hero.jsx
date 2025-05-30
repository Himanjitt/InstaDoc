import React, { useState, useEffect } from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Hero = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const handleBookAppointment = () => {
    if (!token) {
      toast.error("Please login to book an appointment");
      navigate("/login");
      return;
    }
    navigate("/appointments");
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          Your Health, <span className="accent-text">Our Commitment</span>
        </h1>
        <p>
          Providing exceptional healthcare with compassion and expertise.
          Connect with certified specialists and manage your appointments with
          ease through our secure platform.
        </p>
        <div className="hero-buttons">
          <Link to="/doctors" className="hero-button primary-button">
            Find Doctors
          </Link>
          <button
            onClick={handleBookAppointment}
            className="hero-button secondary-button"
          >
            Book Appointment
          </button>
        </div>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="healthcare professionals"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
