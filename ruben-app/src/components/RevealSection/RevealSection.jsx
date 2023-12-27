import { useEffect, useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./reveal.css";
import Flower from "../../assets/flower.svg";
import BackgroundLines from "../../assets/background-lines-lightgray.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

function WhatWeDo() {
  return (
    <div className="what-we-do-section">
      <img
        className="background-lines"
        src={BackgroundLines}
        alt="background-lines"
      />
      <div className="what-we-do-text-container">
        <h1 className="what-we-do-text what-we-do-text-main">
          Wrong <span className="what-we-do-text-highlight"> talent</span> is
          the top showstopper of a Transformation Journey.
        </h1>
        <h1 className="what-we-do-text">
          We offer 3 solutions to accelerate transformation.
        </h1>
      </div>
      <img className="what-we-do-flower" src={Flower} alt="flower" />

      <div className="what-we-do-cards-container">
        <div className="what-we-do-card what-we-do-gray-card">
          <h1 className="what-we-do-card-highlight">Talent Augmentation</h1>
          <p className="what-we-do-card-sub">
            Access to high profile experts in start/stop model
          </p>
        </div>
        <div className="what-we-do-card what-we-do-yellow-card">
          <h1 className="what-we-do-card-highlight">Upskilling Programs</h1>
          <p className="what-we-do-card-sub">
            Access to high profile experts in start/stop model
          </p>
        </div>
        <div className="what-we-do-card what-we-do-blue-card">
          <h1 className="what-we-do-card-highlight">Cloud Tech</h1>
          <p className="what-we-do-card-sub">
            Access to high profile experts in start/stop model
          </p>
        </div>
      </div>
    </div>
  );
}

function RevealSection() {
  const wrapper = useRef(null);
  const clipPathRef = useRef(null);
  const svgDimensions = { width: 211, height: 252 };

  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - svgDimensions.width / 2,
    y: window.innerHeight / 2 - svgDimensions.height / 2,
  });
  const [scale, setScale] = useState(1);

  // Memoize functions and objects
  const updateClipPath = useMemo(() => {
    return () => {
      clipPathRef.current.setAttribute(
        "transform",
        `translate(${position.x} ${position.y}) scale(${scale})`
      );
    };
  }, [position, scale]);

  const handleResize = useMemo(() => {
    const debounceResize = debounce(() => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newScale = 1 + (scale - 1) * (newWidth / window.innerWidth);
      setPosition({
        x: newWidth / 2 - (svgDimensions.width * newScale) / 2,
        y: newHeight / 2 - (svgDimensions.height * newScale) / 2,
      });
      setScale(newScale);
    }, 200); // Adjust the debounce time as needed

    return debounceResize;
  }, [scale, svgDimensions.width, svgDimensions.height]);

  useEffect(() => {
    updateClipPath();
  }, [position, scale, updateClipPath]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]); // Adjust the dependencies if needed

  useEffect(() => {
    const revealAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".reveal-section-top-wrapper",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const newScale = 1 + self.progress * 25;
          setPosition({
            x: window.innerWidth / 2 - (svgDimensions.width * newScale) / 2,
            y: window.innerHeight / 2 - (svgDimensions.height * newScale) / 2,
          });
          setScale(newScale);
        },
      },
    });

    revealAnimation.to(".what-we-do-main-text-container", {
      opacity: -5,
    });

    return () => revealAnimation.revert();
  }, [svgDimensions.width, svgDimensions.height]);

  return (
    <div className="reveal-section-top-wrapper">
      <div className="what-we-do-main-text-container">
        <h1>What We Do</h1>
        <p>
          DFME is a one-stop-shop for enterprise transformation needs. We
          empower our clients to excel in 3 critical areas of transformation
          projects: talent, technology, skills.
        </p>
      </div>
      <div ref={wrapper} className="reveal-section-wrapper">
        <div className="reveal-section">
          <WhatWeDo />
        </div>

        <svg className="clip-path-svg">
          <defs>
            <clipPath id="myClipPath" ref={clipPathRef}>
              <path d="M211 0H164.942V46.0575H211V0Z" />
              <path d="M12.8503 46.0866H164.942V92.3124H211V205.725H164.942V251.819H12.8503C5.7508 251.819 0 246.068 0 238.968V58.9369C0 51.8374 5.7508 46.0866 12.8503 46.0866Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default RevealSection;

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
