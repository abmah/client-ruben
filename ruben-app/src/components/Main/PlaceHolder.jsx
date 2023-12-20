import "./style.css";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

const PlaceHolder = () => {
  const placeHolderRef = useRef(null);
  const svgRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(".second-contetnt-test-svg", {
      cssText: "transform: translate(-50%, -50%) scale(2)",
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: placeHolderRef.current,
      start: "top 70%",
      end: "+=1000",
      scrub: true,
    });
  });

  return (
    <>
      <div className="place-holder"></div>

      <div className="second-contetnt-test" ref={placeHolderRef}>
        <svg
          ref={svgRef}
          className="second-contetnt-test-svg"
          width="1920"
          height="1080"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H1920V1080H0V0ZM1065 386H1018.94V432.058H1065V386ZM1018.94 432.087H866.85C859.751 432.087 854 437.837 854 444.937V624.968C854 632.068 859.751 637.819 866.85 637.819H1018.94V591.725H1065V478.312H1018.94V432.087Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="addheight"></div>
    </>
  );
};

export default PlaceHolder;
