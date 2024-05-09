import { useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./reveal.css";
import Squares from "./squares.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./arrow.json";

function RevealSection() {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []); // Empty dependency array to run the effect only once
  const wrapper = useRef(null);
  const clipPathRef = useRef(null);
  const svgDimensions = { width: 211, height: 252 };
  const [scale, setScale] = useState(0.7);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - (svgDimensions.width * scale) / 2,
    y: window.innerHeight / 2 - (svgDimensions.height * scale) / 2,
  });

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
    }, 0);

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

    let textContent = document.getElementById("text-content");

    let ctx = gsap.context(() => {
      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
          isMobile: `(max-width: ${
            breakPoint - 1
          }px) and (prefers-reduced-motion: no-preference)`,
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;

          if (isDesktop) {
            const revealAnimation = gsap.timeline({
              scrollTrigger: {
                trigger: ".reveal-section-top-wrapper",
                start: "top top",
                end: "+=600",
                pin: ".reveal-section",
                scrub: true,
              },
            });

            const textAnimation = gsap.to(
              {},
              {
                onUpdate: () => {
                  const newScale = scale + textAnimation.progress() * 13;
                  if (textAnimation.progress() > 0.1) {
                    textContent.classList.remove("hide");
                  } else {
                    textContent.classList.add("hide");
                  }

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
              }
            );

            revealAnimation.add(textAnimation);
          } else if (isMobile) {
            // no specific animations for mobile at
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
    <div className="reveal-section-top-wrapper">
      <div ref={wrapper} className="reveal-section-wrapper">
        <div className="reveal-section">
          <img
            src={Squares}
            alt="squares"
            className="reveal-section-background"
          />
          <div id="text-content" className="reveal-section-content hide">
            <div className="reveal-section-big-text">
              <p className="reveal-section-big-text-first">
                Stronger outcomes,
              </p>
              <p className="reveal-section-big-text-second">in</p>
              <p className="reveal-section-big-text-third">challenging</p>
              <p className="reveal-section-big-text-fourth">conditions</p>
            </div>
            <div className="reveal-section-sub-text">
              <div className="yellow-line"></div>
              <p>
                Talent, Skills and Technology are integral elements of
                enterprise transformation success. Poor selection of project
                teams, inadequate internal skill set or dated tech are top 3
                reasons of failure and have knock-on effect on agility.
              </p>
              <div className="reveal-section-sub-text-footer">
                <p>We’re known for tools boosting agility</p>
                <div
                  ref={container}
                  className="reveal-section-arrow-down"
                ></div>
              </div>
            </div>
          </div>
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
