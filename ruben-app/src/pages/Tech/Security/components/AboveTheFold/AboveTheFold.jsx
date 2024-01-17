import "./above-the-fold.css";
import Security from "../../../../../assets/security.svg";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./security2.json";

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
    <div className="tech-security-above-the-fold-wrapper">
      <div className="tech-security-above-the-fold-container">
        <div className="tech-security-above-the-fold-left-section-wrapper">
          <div className="tech-security-above-the-fold-left-section">
            <h1 className="tech-security-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-security-above-the-fold-button-container">
              <button className="tech-security-learn-more-button">
                Learn More
              </button>
              <button className="tech-security-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="tech-security-above-the-fold-img"
          src={Security}
          alt="security"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
