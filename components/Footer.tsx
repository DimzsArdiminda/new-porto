import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <section className="section " id="contact">
        <h2 className="section-title fade-in">[ Let&apos;s Connect ]</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
          Ready to collaborate on your next project?
        </p>
        <div className="contact-links">
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
      </section>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} | Ardiminda Project | Coded with passion & tea ☕
        </p>
      </footer>
    </div>
  );
}
