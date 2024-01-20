import "./floating-cards.css";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import animationData from "./Accenture_CardIllu_Anim_001_Timed_Alpha_violet.json";
import animationDataTwo from "./Accenture_CardIllu_Anim_002_Timed_Alpha_red.json";
import animationDataThree from "./Accenture_CardIllu_Anim_003_Timed_Alpha_blue.json";
import lottie from "lottie-web";

function FloatingCards() {
  useEffect(() => {
    const playAnimation = (animation, direction) => {
      animation.setDirection(direction);
      animation.play();
    };

    const containerOne = document.querySelector(
      ".floating-card-background-first"
    );
    const containerTwo = document.querySelector(
      ".floating-card-background-second"
    );
    const containerThree = document.querySelector(
      ".floating-card-background-third"
    );

    const animationOne = lottie.loadAnimation({
      container: containerOne,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData,
    });

    const animationTwo = lottie.loadAnimation({
      container: containerTwo,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationDataTwo,
    });

    const animationThree = lottie.loadAnimation({
      container: containerThree,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationDataThree,
    });

    containerOne.addEventListener("mouseenter", () =>
      playAnimation(animationOne, 1)
    );
    containerOne.addEventListener("mouseleave", () =>
      playAnimation(animationOne, -1)
    );

    containerTwo.addEventListener("mouseenter", () =>
      playAnimation(animationTwo, 1)
    );
    containerTwo.addEventListener("mouseleave", () =>
      playAnimation(animationTwo, -1)
    );

    containerThree.addEventListener("mouseenter", () =>
      playAnimation(animationThree, 1)
    );
    containerThree.addEventListener("mouseleave", () =>
      playAnimation(animationThree, -1)
    );

    return () => {
      containerOne.removeEventListener("mouseenter", () =>
        playAnimation(animationOne, 1)
      );
      containerOne.removeEventListener("mouseleave", () =>
        playAnimation(animationOne, -1)
      );

      containerTwo.removeEventListener("mouseenter", () =>
        playAnimation(animationTwo, 1)
      );
      containerTwo.removeEventListener("mouseleave", () =>
        playAnimation(animationTwo, -1)
      );

      containerThree.removeEventListener("mouseenter", () =>
        playAnimation(animationThree, 1)
      );
      containerThree.removeEventListener("mouseleave", () =>
        playAnimation(animationThree, -1)
      );

      animationOne.destroy();
      animationTwo.destroy();
      animationThree.destroy();
    };
  }, []);
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
            ScrollTrigger.create({
              trigger: ".floating-cards-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".floating-cards-background",
            });
          }
        }
      );
    });

    return () => {
      ctx.kill();
      mm.kill();
    };
  }, []);
  return (
    <div className="floating-cards-wrapper">
      <div className="floating-cards-container">
        <div className="spacing"></div>
        <div className="floating-cards-parent">
          <div className="floating-card floating-card-one">
            <div className="floating-card-background-first floating-card-background"></div>
            <div className="floating-card-content">
              <div className="floating-card-title">some title here </div>
              <div className="floating-card-second-title">
                Lorem, ipsum dolor sit amet
              </div>
            </div>
          </div>
          <div className="floating-card floating-card-two">
            <div className="floating-card-background-second floating-card-background"></div>
            <div className="floating-card-content">
              <div className="floating-card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                exercitationem autem, odio possimus s
              </div>
              <div className="floating-card-second-title">hello</div>
            </div>
          </div>
          <div className="floating-card floating-card-three">
            <div className="floating-card-background-third floating-card-background"></div>
            <div className="floating-card-content">
              <div className="floating-card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="floating-card-second-title">hello</div>
            </div>
          </div>{" "}
        </div>
        <div className="spacing-two "></div>
        <div className="floating-cards-background">
          <h1>Global recognition and awards</h1>
        </div>
      </div>
    </div>
  );
}

export default FloatingCards;
