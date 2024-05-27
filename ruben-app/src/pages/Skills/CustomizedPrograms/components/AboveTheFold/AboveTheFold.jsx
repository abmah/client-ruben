import "./above-the-fold.css";
import OpenAcademy from "./young-man.jpg";
import SquareShape from "./shape.svg";
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
    <div className="skills-programs-above-the-fold-wrapper">
      <div className="skills-programs-above-the-fold-container">
        <div className="skills-programs-above-the-fold-left-section-wrapper">
          <div className="skills-programs-above-the-fold-left-section">
            <h1 className="skills-programs-above-the-fold-main-title">
              Customized <strong> upskilling programs</strong> designed to drive
              change
            </h1>
            <div className="skills-programs-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="skills-programs-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="skills-programs-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div className="skills-programs-above-the-fold-img-container">
          <img
            className="skills-programs-above-the-fold-main-image"
            src={OpenAcademy}
            alt="open-programs"
          />
          <img
            className="skills-programs-shape"
            src={SquareShape}
            alt="shape"
          />
          <img
            className="skills-programs-shape-mobile"
            src={ShapeMobile}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
