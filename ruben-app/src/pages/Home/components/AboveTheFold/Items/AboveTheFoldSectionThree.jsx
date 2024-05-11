import { Link } from "react-router-dom";
import ChadImage from "../main-chad.jpg";
import "../above-the-fold.css";

import MainChadSquares from "../main-chad-squares.svg";

import mobileSquares from "../chad-mobile-squares.svg";
function AboveTheFoldSectionThree({ scrollToRef }) {
  return (
    <div className="above-the-fold-section above-the-fold-section-three">
      <div className="above-the-fold-gray-image">
        <img
          className="above-the-fold-main-image"
          src={ChadImage}
          alt="above-the-fold-gray-image"
        />
        <img
          src={MainChadSquares}
          className="above-the-fold-squares above-the-fold-squares-three"
          alt="squares"
        />
        <img
          className="above-the-fold-mobile-squares"
          src={mobileSquares}
          alt="mobile-squares"
        />
      </div>
      {/* <img
        className="above-the-fold-mobile-squares"
        src={BlueSquares}
        alt="blue-squares"
      /> */}
      <div className="image-gradiant-effect"></div>
      <div className="above-the-fold-right-section">
        <h1 className="above-the-fold-main-text">
          Transform Your Company with Modern, Cloud-Based{" "}
          <strong className="above-the-fold-main-text-bold above-the-fold-main-text-bold-three">
            Tech
          </strong>{" "}
          Stack
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
        <div className="above-the-fold-section-navigation ">
          <div className="above-the-fold-section-navigation-child section-three-talent ">
            <div className="above-the-fold-section-navigation-child-line-disabled "></div>
            <p>Talent Augmentation</p>
          </div>
          <div className="above-the-fold-section-navigation-child section-three-skills">
            <div className="above-the-fold-section-navigation-child-line-disabled"></div>
            <p>Skills Uplifting</p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line section-three-tech navigation-line-blue"></div>
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
