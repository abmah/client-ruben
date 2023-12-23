import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

gsap.registerPlugin(ScrollTrigger);
import "./reveal.css";

function RevealSection() {
  const wrapper = useRef(null);

  let svgDimensions = { width: 211, height: 252 };

  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - svgDimensions.width / 2,
    y: window.innerHeight / 2 - svgDimensions.height / 2,
  });
  const [scale, setScale] = useState(1);

  const updateClipPath = () => {
    const clipPath = document.getElementById("myClipPath");
    if (clipPath) {
      clipPath.setAttribute(
        "transform",
        `translate(${position.x} ${position.y}) scale(${scale})`
      );
    }
  };

  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newPosition = { x: newWidth / 2 - 114, y: 1000 / 2 - 100 };
    setPosition(newPosition);
  };

  useEffect(() => {
    updateClipPath();
  }, [position, scale]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    let revealAnimation = gsap.context(() => {
      // Use a timeline to control both the pinning and scaling animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".reveal-section",
          start: "top top",
          end: "+=2000",
          pin: true,
          onUpdate: (self) => {
            // Update the scale based on the scroll position
            let newScale = 1 + self.progress * 25;
            setPosition({
              x: window.innerWidth / 2 - (svgDimensions.width * newScale) / 2,
              y: 1000 / 2 - (svgDimensions.height * newScale) / 2,
            });
            console.log(newScale);
            setScale(newScale);
          },
        },
      });

      // Add any other animations you want here, for example:
      // tl.to(".your-other-element", { opacity: 0, duration: 1 });
    }, wrapper);
    return () => revealAnimation.revert();
  }, [svgDimensions.width, svgDimensions.height]);

  return (
    <div ref={wrapper} className="reveal-section-wrapper">
      <div className="reveal-section">
        <WhatWeDo />
      </div>
      <svg className="clip-path-svg">
        <defs>
          <clipPath id="myClipPath">
            <path d="M211 0H164.942V46.0575H211V0Z" />
            <path d="M12.8503 46.0866H164.942V92.3124H211V205.725H164.942V251.819H12.8503C5.7508 251.819 0 246.068 0 238.968V58.9369C0 51.8374 5.7508 46.0866 12.8503 46.0866Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default RevealSection;
