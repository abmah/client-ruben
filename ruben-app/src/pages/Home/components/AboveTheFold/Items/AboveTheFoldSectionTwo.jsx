import { Link } from "react-router-dom";
import LandingYellow from "../../../../../assets/landing-yellow.svg";
import "../above-the-fold.css";
import WomanImage from "../main-woman.jpg";
import MainWomanSquares from "../main-woman-squares.svg";
import mobileSquares from "../woman-mobile-squares.svg";
import PropTypes from "prop-types";

function AboveTheFoldSectionTwo({ scrollToRef, slideTo }) {
  return (
    <div className="above-the-fold-section above-the-fold-section-two">
      <div className="above-the-fold-gray-image">
        <img
          className="above-the-fold-main-image"
          src={WomanImage}
          alt="above-the-fold-gray-image"
        />
        <img
          src={MainWomanSquares}
          className="above-the-fold-squares above-the-fold-squares-two"
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
          <strong className="above-the-fold-main-text-bold above-the-fold-main-text-bold-two">
            Skills Uplifting
          </strong>
        </h1>
        <p className="above-the-fold-sub-text">
          Future-proof internal workforce with modern tech stack skillset
          trainings
        </p>
        <div className="above-the-fold-buttons-container">
          <button
            onClick={() => scrollToRef(2)}
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
          {" "}
          <div
            onClick={() => slideTo(0)}
            className="above-the-fold-section-navigation-child section-two-tech"
          >
            <div className="above-the-fold-section-navigation-child-line-disabled navigation-line-blue"></div>
            <p>Cloud Transformation</p>
          </div>
          <div
            onClick={() => slideTo(1)}
            className="above-the-fold-section-navigation-child "
          >
            <div className="above-the-fold-section-navigation-child-line-disabled navigation-line-blue "></div>
            <p>Talent Augmentation</p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line navigation-line-purple"></div>
            <p className="above-the-fold-section-navigation-child-selected">
              Skills Uplifting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
AboveTheFoldSectionTwo.propTypes = {
  scrollToRef: PropTypes.func.isRequired,
  slideTo: PropTypes.func.isRequired,
};

export default AboveTheFoldSectionTwo;
