import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glitch">Fullstack Developer</h1>
          <p className="hero-subtitle">
            Bridging Hardware & Software | Building The Future
          </p>
          <div className="typing-text">
            IoT • Mobile • Fullstack • Cybersecurity • DevOps
          </div>
          <br />
          <a href="#contact" className="cta-button">
            Connect With Me
          </a>
        </div>
        <div className="hero-profile">
          <div className="profile-image">
            <div className="profile-placeholder">
              <Image
                src={`/foto/me.JPG`}
                alt="Profile"
                width={200}
                height={200}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <div className="social-buttons">
            <a
              href="https://github.com/DimzsArdiminda"
              className="social-btn"
              target="_blank"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dimas-ardiminda-edia-putra/"
              className="social-btn"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/6285176963543"
              className="social-btn"
              target="_blank"
              title="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://instagram.com/divoidsam"
              className="social-btn"
              target="_blank"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:dimasardiminda@email.com"
              className="social-btn"
              title="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
