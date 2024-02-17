import "./above-the-fold.css";
// import Data from "../../../../../assets/data.svg";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./lottie.json";
import { Link } from "react-router-dom";

function AboveTheFold() {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  const handleLearnMoreClick = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="cloud-data-above-the-fold-wrapper">
      <div className="cloud-data-above-the-fold-container">
        <div className="cloud-data-above-the-fold-left-section-wrapper">
          <div className="cloud-data-above-the-fold-left-section">
            <h1 className="cloud-data-above-the-fold-main-title">
              Modernize Your <br /> <strong> Data Infrastructure</strong> <br />{" "}
              through Cloud Adoption and Migration
            </h1>
            <div className="cloud-data-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="cloud-data-learn-more-button"
              >
                Learn More
              </button>
              <Link to="/contact" className="cloud-data-get-in-contact-button">
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        {/* <img className="cloud-data-above-the-fold-img" src={Data} alt="data" /> */}
        <div className="cloud-data-above-the-fold-img" ref={container}></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
