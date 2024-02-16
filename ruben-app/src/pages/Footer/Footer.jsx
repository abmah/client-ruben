import "./footer.css";
import DigitalFuture from "../../assets/digital-future-logo-dark.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top-content">
            <Link to="/" className="footer-top-item footer-logo-container">
              <img src={DigitalFuture} alt="DigitalFuture" />
            </Link>
            <div className="footer-top-item footer-top-item-about-contact">
              <Link to="/about" className="footer-top-item-title">
                About
              </Link>
              <Link to="/contact" className="footer-top-item-title">
                Contact Us
              </Link>
            </div>
            <div className="footer-top-item">
              <a className="footer-top-item-title">Talent</a>
              <Link to="/digital-experts" className="footer-top-item-option">
                Digital Experts
              </Link>
              <Link
                to="/strategy-consultants"
                className="footer-top-item-option"
              >
                Strategy Consultants
              </Link>
              <Link
                to="/operations-consultants"
                className="footer-top-item-option"
              >
                Operations Consultant
              </Link>
              <Link
                to="/subject-based-experts"
                className="footer-top-item-option"
              >
                Subject Matter Experts
              </Link>
            </div>
            <div className="footer-top-item">
              <p className="footer-top-item-title">Skills</p>
              <Link to="open-academy" className="footer-top-item-option">
                Open Academy
              </Link>
              <Link to="customized-programs" className="footer-top-item-option">
                Customized Programs
              </Link>
            </div>
            <div className="footer-top-item footer-top-item-tech">
              <p className="footer-top-item-title">Tech</p>
              <Link to="infrastructure" className="footer-top-item-option">
                Infrastructure Modernization
              </Link>
              <Link to="data" className="footer-top-item-option">
                Data, Analytics
              </Link>
              <Link to="collaboration" className="footer-top-item-option">
                Productivity and Collaboration
              </Link>
              <Link to="security" className="footer-top-item-option">
                Security and Compliance
              </Link>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              Copyright © 2023 DigitalFuture.Me
            </div>
            <div className="footer-bottom-right-content">
              Privacy, Terms of Use, Cookies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
