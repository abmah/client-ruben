# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import "./style.css";
import gsap from "gsap";
import { useLayoutEffect, useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

const PlaceHolder = () => {
const placeHolderRef = useRef(null);

// Set your initial scale and position values
let clipPathScale = 2;
const initialX = -50; // Set your initial x position
let initialY = 100; // Set your initial y position

useLayoutEffect(() => {
const tl = gsap.timeline();

    const updateClipPath = () => {
      // Increase the clipPathScale value
      clipPathScale += 0.01;

      // Update the clip path points based on the new scale and initial position
      const clipPathPoints = [
        [98, 96],
        [212.6, 96],
        [265.57, 97.01],
        [265.35, 58.89],
        [303.44, 58.67],
        [303.44, 96.18],
        [266.42, 96],
        [266, 96],
        [265.79, 133.65],
        [303.44, 133.65],
        [303.44, 258.35],
        [266, 258.35],
        [266, 296],
        [98, 296],
      ];

      const scaledClipPath = clipPathPoints.map(([x, y]) => [
        (x - initialX) * clipPathScale + initialX,
        (y - initialY) * clipPathScale + initialY,
      ]);

      const clipPathString = `polygon(${scaledClipPath
        .map(([x, y]) => `${x}px ${y}px`)
        .join(", ")})`;

      // Apply the updated clip path to the element
      const headerMenuMobile = document.querySelector(".place-holder");
      if (headerMenuMobile) {
        headerMenuMobile.style.clipPath = clipPathString;
      }
    };

    // Use gsap ticker for smoother animation
    gsap.ticker.add(updateClipPath);

    // Cleanup function to remove the ticker when component unmounts
    return () => gsap.ticker.remove(updateClipPath);

}, [initialX, initialY]);

useEffect(() => {
// const tl = gsap.timeline();

    // tl.to(".second-contetnt-test-svg", {
    //   cssText: `transform: translate(-50%, -50%) scale(${clipPathScale})`,
    // });

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: placeHolderRef.current,
    //   start: "top 70%",
    //   end: "+=1000",
    //   scrub: true,
    // });

}, [clipPathScale]);

return (
<>
<div className="place-holder" ref={placeHolderRef}></div>

      <div className="second-contetnt-test"></div>
      <div className="addheight"></div>
    </>

);
};

export default PlaceHolder;
