import { useEffect, useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./reveal.css";
import ArrowDown from "../../../../assets/orange-arrow-down.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

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
                  const newScale = 1 + textAnimation.progress() * 13;
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
          <div id="text-content" className="reveal-section-content">
            <div className="reveal-section-big-text">
              <p className="reveal-section-big-text-first">
                Stronger outcomes,
              </p>
              <p className="reveal-section-big-text-second">in</p>
              <p className="reveal-section-big-text-third">changing</p>
              <p className="reveal-section-big-text-fourth">conditions</p>
            </div>
            <div className="reveal-section-sub-text">
              <div className="yellow-line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nulla repudiandae voluptatibus, voluptatum deleniti odio minus
                accusamus nobis ut perspiciatis animi pariatur placeat illum
                harum eos sed. Debitis, velit labore.
              </p>
              <div className="reveal-section-sub-text-footer">
                <p>Lorem ipsum, dol</p>
                <img src={ArrowDown} alt="arrow down" />
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
