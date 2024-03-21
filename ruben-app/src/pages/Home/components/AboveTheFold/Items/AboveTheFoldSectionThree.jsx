import { Link } from "react-router-dom";
import LandingBlue from "../../../../../assets/landing-blue.svg";
import "../above-the-fold.css";
function AboveTheFoldSectionThree({ scrollToRef }) {
  return (
    <div className="above-the-fold-section above-the-fold-section-three">
      <img
        className="above-the-fold-gray-image"
        src={LandingBlue}
        alt="above-the-fold-gray-image"
      />
      <div className="above-the-fold-right-section">
        <h1 className="above-the-fold-main-text">
          Transform Your Company with Modern, Cloud-Based{" "}
          <strong className="above-the-fold-main-text-bold">Tech</strong> Stack
        </h1>
        <p className="above-the-fold-sub-text">
          Improve efficiency and reduce costs with cutting-edge tech
          implementations
        </p>
        <div className="above-the-fold-buttons-container">
          <button
            onClick={() => scrollToRef(3)}
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
          <div className="above-the-fold-section-navigation-child section-three-talent">
            <div className="above-the-fold-section-navigation-child-line-disabled "></div>
            <p>Talent Augmentation</p>
          </div>
          <div className="above-the-fold-section-navigation-child section-three-skills">
            <div className="above-the-fold-section-navigation-child-line-disabled"></div>
            <p>Skills Uplifting</p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line section-three-tech"></div>
            <p className="above-the-fold-section-navigation-child-selected">
              Cloud Transformation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboveTheFoldSectionThree;
