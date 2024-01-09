import "./footer.css";
import DigitalFuture from "../../assets/digital-future-logo-dark.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top-content">
            <div className="footer-top-item footer-logo-container">
              <img src={DigitalFuture} alt="DigitalFuture" />
            </div>
            <div className="footer-top-item">
              <p className="footer-top-item-title">About</p>
              <p className="footer-top-item-title">Contact Us</p>
            </div>
            <div className="footer-top-item">
              <p className="footer-top-item-title">Talent</p>
              <p className="footer-top-item-option">Digital Experts</p>
              <p className="footer-top-item-option">Strategy Consultants</p>
              <p className="footer-top-item-option">Operations Consultant</p>
              <p className="footer-top-item-option">Hourly Based Experts</p>
            </div>
            <div className="footer-top-item">
              <p className="footer-top-item-title">Skills</p>
              <p className="footer-top-item-option">Hourly Based Experts</p>
              <p className="footer-top-item-option">Customized Programs</p>
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