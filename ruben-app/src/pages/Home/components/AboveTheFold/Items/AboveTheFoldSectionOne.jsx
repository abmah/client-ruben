import { Link } from "react-router-dom";
import LandingGray from "../../../../../assets/landing-gray.svg";
import "../above-the-fold.css";
function AboveTheFoldSectionOne({ scrollToRef }) {
  return (
    <div className="above-the-fold-section above-the-fold-section-one">
      <img
        className="above-the-fold-gray-image"
        src={LandingGray}
        alt="above-the-fold-gray-image"
      />
      <div className="above-the-fold-right-section">
        <h1 className="above-the-fold-main-text">
          Supercharge Your Transformation Projects with{" "}
          <strong className="above-the-fold-main-text-bold">
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
