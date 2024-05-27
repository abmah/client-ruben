import "./above-the-fold.css";
import OpenAcademy from "./young-man-listening-music-study-session.jpg";
import SquareShape from "./shape.svg";
import ShapeTwo from "./shape-two.svg";
import ShapeMobile from "./shape-mobile.svg";

import { Link } from "react-router-dom";
function AboveTheFold() {
  const handleLearnMoreClick = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };
  return (
    <div className="tech-security-above-the-fold-wrapper">
      <div className="tech-security-above-the-fold-container">
        <div className="tech-security-above-the-fold-left-section-wrapper">
          <div className="tech-security-above-the-fold-left-section">
            <h1 className="tech-security-above-the-fold-main-title">
              Cloud <strong> Security</strong> Solutions to reduce risks and
              protect users
            </h1>
            <div className="tech-security-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="tech-security-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="tech-security-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div className="tech-security-above-the-fold-img-container">
          <img
            className="tech-security-above-the-fold-main-image"
            src={OpenAcademy}
            alt="open-security"
          />
          <img className="tech-security-shape" src={SquareShape} alt="shape" />
          <img
            className="tech-security-shape-mobile"
            src={ShapeMobile}
            alt="shape"
          />
          <img className="tech-security-shape-two" src={ShapeTwo} alt="shape" />
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
