import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import "./layout.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            {/* Actualizado el enlace del Aviso Legal */}
            <a className="a" href="/avisolegal">
              Aviso Legal
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/accesibilidad">
              Accesibilidad
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/politica-de-privacidad">
              Política de Privacidad
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/politica-de-cookies">
              Política de cookies
            </a>
            {" "} |{" "}
            <a className="a" href="https://www.patrimonionacional.es/contacto">
              Contacto
            </a>
          </div>
          <div className="footer-left">
            <span>© {new Date().getFullYear()} &middot; </span>
            <a className="a" href="https://www.patrimonionacional.es/">Patrimonio Nacional</a>
          </div>
          <div className="footer-logos" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <StaticImage
              src="../images/logo1.png"
              alt="Logo 1"
              className="footer-logo"
              style={{ width: '90px', height: '50px' }}
            />
            <StaticImage
              src="../images/logo2.png"
              alt="Logo 2"
              className="footer-logo"
              style={{ width: '90px', height: '50px' }}
            />
            <StaticImage
              src="../images/logo3.png"
              alt="Logo 3"
              className="footer-logo"
              style={{ width: '90px', height: '50px' }}
            />
            <StaticImage
              src="../images/logo.png"
              alt="Logo 4"
              className="footer-logo"
              style={{ width: '90px', height: '50px' }}
            />
            <StaticImage
              src="../images/logo5.png"
              alt="Logo 5"
              className="footer-logo"
              style={{ width: '90px', height: '50px' }}
            />
            <a href="https://www.instagram.com/patrimnacional" style={{ marginLeft: '10px' }}>
              <FaInstagram className="footer-icon" />
            </a>
            <a href="https://twitter.com/PatrimNacional" style={{ marginLeft: '10px' }}>
              <FaTwitter className="footer-icon" />
            </a>
            <a href="https://www.facebook.com/PatrimNacional/" style={{ marginLeft: '10px' }}>
              <FaFacebook className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/company/patrimonionacional" style={{ marginLeft: '10px' }}>
              <FaLinkedin className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;