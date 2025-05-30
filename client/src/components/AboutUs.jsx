import React from "react";
import image from "../images/aboutimg.jpg";
import "../styles/about.css";
import { FaUserMd, FaHospital, FaHandHoldingHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Our Practice</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-container">
          <div className="about-image-container">
            <img
              src={image}
              alt="Medical team providing care"
              className="about-image"
            />
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>

          <div className="about-content">
            <h3 className="about-subtitle">Dedicated to Your Health</h3>
            <p>
              At our medical practice, we combine cutting-edge technology with
              compassionate care to provide the best possible medical
              experience. Our team of highly qualified healthcare professionals
              is committed to excellence in every aspect of patient care.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-text">
                  <h4>
                    <FaUserMd className="inline-icon" /> Expert Doctors
                  </h4>
                  <p>Board-certified specialists across multiple fields</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-text">
                  <h4>
                    <FaHospital className="inline-icon" /> Modern Facilities
                  </h4>
                  <p>State-of-the-art equipment and comfortable facilities</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-text">
                  <h4>
                    <FaHandHoldingHeart className="inline-icon" />{" "}
                    Patient-Centered
                  </h4>
                  <p>Personalized care focused on your unique needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
