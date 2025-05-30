import React from "react";
import CountUp from "react-countup";
import "../styles/homecircles.css";
import {
  FaUserCheck,
  FaUserMd,
  FaCertificate,
  FaCalendarCheck,
} from "react-icons/fa";

const HomeCircles = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            We are committed to providing exceptional healthcare services with
            proven results
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">
              <FaUserCheck size={40} color="#2b6cb0" />
            </div>
            <div className="stat-number">
              <CountUp start={0} end={1000} duration={2.5} suffix="+" />
            </div>
            <h3 className="stat-title">Satisfied Patients</h3>
            <p className="stat-description">
              Committed to patient satisfaction and positive health outcomes
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaUserMd size={40} color="#2b6cb0" />
            </div>
            <div className="stat-number">
              <CountUp start={0} end={250} duration={2.5} suffix="+" />
            </div>
            <h3 className="stat-title">Verified Doctors</h3>
            <p className="stat-description">
              Board-certified professionals with extensive experience
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaCertificate size={40} color="#2b6cb0" />
            </div>
            <div className="stat-number">
              <CountUp start={0} end={75} duration={2.5} suffix="+" />
            </div>
            <h3 className="stat-title">Specialist Doctors</h3>
            <p className="stat-description">
              Experts in various medical specialties for comprehensive care
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaCalendarCheck size={40} color="#2b6cb0" />
            </div>
            <div className="stat-number">
              <CountUp start={0} end={10000} duration={2.5} suffix="+" />
            </div>
            <h3 className="stat-title">Appointments</h3>
            <p className="stat-description">
              Efficiently managed appointments for timely healthcare access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCircles;
