import "./above-the-fold.css";
import Security from "../../../../../assets/security.svg";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./security2.json";
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
  }, []);

  const handleLearnMoreClick = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="cloud-security-above-the-fold-wrapper">
      <div className="cloud-security-above-the-fold-container">
        <div className="cloud-security-above-the-fold-left-section-wrapper">
          <div className="cloud-security-above-the-fold-left-section">
            <h1 className="cloud-security-above-the-fold-main-title">
              Cloud <strong> Security</strong> Solutions to reduce risks and
              protect users
            </h1>
            <div className="cloud-security-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="cloud-security-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="cloud-security-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="cloud-security-above-the-fold-img"
          src={Security}
          alt="security"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
