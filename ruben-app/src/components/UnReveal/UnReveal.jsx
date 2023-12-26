import "./unreveal.css";
import Road from "../../assets/road.svg";

import { useEffect, useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

function RevealSection() {
  const clipPathRef = useRef(null);
  const svgDimensions = { width: 211, height: 252 };

  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - svgDimensions.width / 2,
    y: window.innerHeight / 2 - svgDimensions.height / 2,
  });
  const [scale, setScale] = useState(24);

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
    const unRevealAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".unreveal-wrapper",
        start: "bottom bottom",
        end: "+=2000",
        pin: true,
        onUpdate: (self) => {
          // Update the scale based on the scroll position with reversed direction
          const newScale = 23 - self.progress * 23 + 1; // Adjusted the scale calculation
          setPosition({
            x: window.innerWidth / 2 - (svgDimensions.width * newScale) / 2,
            y: window.innerHeight / 2 - (svgDimensions.height * newScale) / 2,
          });
          setScale(newScale);
        },
      },
    });

    return () => unRevealAnimation.revert();
  }, []);

  return (
    <>
      <div className="unreveal-wrapper">
        <div className="unreveal-container">
          <img src={Road} alt="road" />
        </div>
      </div>

      <svg>
        <defs>
          <clipPath id="myClipPathtwo" ref={clipPathRef}>
            <path d="M211 0H164.942V46.0575H211V0Z" />
            <path d="M12.8503 46.0866H164.942V92.3124H211V205.725H164.942V251.819H12.8503C5.7508 251.819 0 246.068 0 238.968V58.9369C0 51.8374 5.7508 46.0866 12.8503 46.0866Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

RevealSection.propTypes = {
  children: PropTypes.node.isRequired,
};

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
