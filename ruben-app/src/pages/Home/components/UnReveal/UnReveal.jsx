import "./unreveal.css";
import Road from "../../../../assets/road.svg";
import ClippedRoad from "../../../../assets/clipped-road.svg";

import { useEffect, useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

function RevealSection() {
  const clipPathRefTwo = useRef(null);
  const svgDimensions = { width: 211, height: 252 };

  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - (svgDimensions.width * 12) / 2,
    y: window.innerHeight / 2 - (svgDimensions.height * 12) / 2,
  });
  const [scale, setScale] = useState(12);

  const wrapperRef = useRef(null);

  // Memoize functions and objects
  const updateClipPath = useMemo(() => {
    return () => {
      clipPathRefTwo.current.setAttribute(
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
    const mm = gsap.matchMedia();
    const breakPoint = 900;

    let ctx = gsap.context(() => {
      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
          isMobile: `(max-width: ${
            breakPoint - 1
          }px) and (prefers-reduced-motion: no-preference)`,
        },
        (context) => {
          let { isDesktop } = context.conditions;

          if (isDesktop) {
            let unrevealAnim = gsap.timeline({
              scrollTrigger: {
                trigger: ".unreveal-top-wrapper",
                start: "top top",
                end: "+=500",
                pin: ".unreveal-wrapper",
                scrub: true,
                onUpdate: (self) => {
                  // Update the scale based on the scroll position with reversed direction
                  const newScale = 11 - self.progress * 11 + 1; // Adjusted the scale calculation
                  setPosition({
                    x:
                      window.innerWidth / 2 -
                      (svgDimensions.width * newScale) / 2,
                    y:
                      window.innerHeight / 2 -
                      (svgDimensions.height * newScale) / 2,
                  });
                  setScale(newScale);
                },
              },
            });
            unrevealAnim.fromTo(
              ".unreveal-bottom-text-container",
              {
                opacity: -20,
              },
              {
                opacity: 1,
              }
            );
          }
        }
      );
    });

    return () => {
      ctx.revert();
      mm.kill();
    };
  }, [svgDimensions.width, svgDimensions.height]);

  return (
    <div className="unreveal-top-wrapper">
      <div ref={wrapperRef} className="unreveal-wrapper">
        <div className="unreveal-container">
          <img className="road-image" src={Road} alt="road" />
        </div>
        <svg>
          <defs>
            <clipPath id="myClipPathtwo" ref={clipPathRefTwo}>
              <path d="M211 0H164.942V46.0575H211V0Z" />
              <path d="M12.8503 46.0866H164.942V92.3124H211V205.725H164.942V251.819H12.8503C5.7508 251.819 0 246.068 0 238.968V58.9369C0 51.8374 5.7508 46.0866 12.8503 46.0866Z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <img src={ClippedRoad} alt="clipped-road" className="clipped-road" />
      <div className="unreveal-bottom-text-container">
        <h1>Reinvent What Your Business Could Be</h1>
        <h1 className="unreveal-text-gray">Reinvent Talent / Tech / Skills</h1>
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
