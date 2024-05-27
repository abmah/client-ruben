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
    <div className="skills-academy-above-the-fold-wrapper">
      <div className="skills-academy-above-the-fold-container">
        <div className="skills-academy-above-the-fold-left-section-wrapper">
          <div className="skills-academy-above-the-fold-left-section">
            <h1 className="skills-academy-above-the-fold-main-title">
              Onsite trainings <strong>helping you learn</strong> most
              sought-after digital skills.
            </h1>
            <div className="skills-academy-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="skills-academy-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="skills-academy-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div className="skills-academy-above-the-fold-img-container">
          <img
            className="skills-academy-above-the-fold-main-image"
            src={OpenAcademy}
            alt="open-academy"
          />
          <img className="skills-academy-shape" src={SquareShape} alt="shape" />
          <img
            className="skills-academy-shape-mobile"
            src={ShapeMobile}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
