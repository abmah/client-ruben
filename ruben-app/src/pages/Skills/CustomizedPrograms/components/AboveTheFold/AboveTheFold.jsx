import "./above-the-fold.css";
import AcademyExperts from "../../../../../assets/customized-programs-logo.svg";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./programs.json";
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

  return (
    <div className="skills-programs-above-the-fold-wrapper">
      <div className="skills-programs-above-the-fold-container">
        <div className="skills-programs-above-the-fold-left-section-wrapper">
          <div className="skills-programs-above-the-fold-left-section">
            <h1 className="skills-programs-above-the-fold-main-title">
              Modernize You <strong>programs Experts</strong> to Scale and
              Innovate
            </h1>
            <div className="skills-programs-above-the-fold-button-container">
              <button className="skills-programs-learn-more-button">
                Learn More
              </button>
              <button className="skills-programs-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="skills-programs-above-the-fold-img"
          src={AcademyExperts}
          alt="programs-future"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
