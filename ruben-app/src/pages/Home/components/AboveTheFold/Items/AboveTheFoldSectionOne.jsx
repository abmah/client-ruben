import { Link } from "react-router-dom";
import ManPhoto from "../main-man.jpg";
import "../above-the-fold.css";
import MainManSquares from "../main-man-sqaures.svg";

import mobileSquares from "../man-mobile-squares.svg";
function AboveTheFoldSectionOne({ scrollToRef }) {
  return (
    <div className="above-the-fold-section above-the-fold-section-one">
      <div className="above-the-fold-gray-image">
        <img
          className="above-the-fold-main-image"
          src={ManPhoto}
          alt="above-the-fold-gray-image"
        />{" "}
        <img
          src={MainManSquares}
          className="above-the-fold-squares above-the-fold-squares-one"
          alt="squares"
        />{" "}
        <img
          className="above-the-fold-mobile-squares"
          src={mobileSquares}
          alt="mobile-squares"
        />
      </div>
      <div className="image-gradiant-effect"></div>

      <div className="above-the-fold-right-section">
        <h1 className="above-the-fold-main-text">
          Supercharge Your Transformation Projects with{" "}
          <strong className="above-the-fold-main-text-bold above-the-fold-main-text-bold-one">
            Talent Augmentation
          </strong>
        </h1>
        <p className="above-the-fold-sub-text">
          Flexibly assign high caliber experts to strengthen your projects
        </p>
        <div className="above-the-fold-buttons-container">
          <button
            onClick={() => scrollToRef(1)}
            className="above-the-fold-button"
          >
            View Services
          </button>
          <Link
            to="/contact"
            className="above-the-fold-button lets-talk-button"
          >
            Let's Talk
          </Link>
        </div>
        <div className="above-the-fold-section-navigation">
          <div className="above-the-fold-section-navigation-child section-one-talent">
            <div className="above-the-fold-section-navigation-child-line "></div>
            <p className="above-the-fold-section-navigation-child-selected">
              Talent Augmentation
            </p>
          </div>
          <div className="above-the-fold-section-navigation-child section-one-skills">
            <div className="above-the-fold-section-navigation-child-line-disabled"></div>
            <p>Skills Uplifting</p>
          </div>
          <div className="above-the-fold-section-navigation-child section-one-tech">
            <div className="above-the-fold-section-navigation-child-line-disabled"></div>
            <p>Cloud Transformation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboveTheFoldSectionOne;
