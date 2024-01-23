import "./floating-cards.css";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import animationData from "./Accenture_CardIllu_Anim_001_Timed_Alpha_violet.json";
import animationDataTwo from "./Accenture_CardIllu_Anim_002_Timed_Alpha_red.json";
import animationDataThree from "./Accenture_CardIllu_Anim_003_Timed_Alpha_blue.json";
import lottie from "lottie-web";
import { Link } from "react-router-dom";

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

    const firstCard = document.querySelector(".floating-card-one");
    const secondCard = document.querySelector(".floating-card-two");
    const thirdCard = document.querySelector(".floating-card-three");

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

    firstCard.addEventListener("mouseenter", () =>
      playAnimation(animationOne, 1)
    );
    firstCard.addEventListener("mouseleave", () =>
      playAnimation(animationOne, -1)
    );

    secondCard.addEventListener("mouseenter", () =>
      playAnimation(animationTwo, 1)
    );
    secondCard.addEventListener("mouseleave", () =>
      playAnimation(animationTwo, -1)
    );

    thirdCard.addEventListener("mouseenter", () =>
      playAnimation(animationThree, 1)
    );
    thirdCard.addEventListener("mouseleave", () =>
      playAnimation(animationThree, -1)
    );

    return () => {
      firstCard.removeEventListener("mouseenter", () =>
        playAnimation(animationOne, 1)
      );
      firstCard.removeEventListener("mouseleave", () =>
        playAnimation(animationOne, -1)
      );

      secondCard.removeEventListener("mouseenter", () =>
        playAnimation(animationTwo, 1)
      );
      secondCard.removeEventListener("mouseleave", () =>
        playAnimation(animationTwo, -1)
      );

      thirdCard.removeEventListener("mouseenter", () =>
        playAnimation(animationThree, 1)
      );
      thirdCard.removeEventListener("mouseleave", () =>
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
              <div className="floating-card-content-first">
                <p> Your team is struggling with resources and expertise?</p>
              </div>
              <div className="floating-card-content-second"></div>
              <div className="floating-card-content-third">
                <p>
                  What if you could reshuffle your team's expertise and
                  resources whenever needed and flexibliy add and reduce
                  members? If the risk of wrong hire would not exist and
                  time-to-hire would be close to zero? Check how our Talent
                  Augmentation service helps solve Talent related problems.
                </p>
                <div className="floating-card-link">
                  <Link to="infrastructure">some-link</Link>
                  <div className="floating-card-link-line"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-card floating-card-two">
            <div className="floating-card-background-second floating-card-background"></div>
            <div className="floating-card-content">
              <div className="floating-card-content-first">hello</div>
              <div className="floating-card-content-second"></div>
              <div className="floating-card-content-third">bye</div>
            </div>
          </div>
          <div className="floating-card floating-card-three">
            <div className="floating-card-background-third floating-card-background"></div>
            <div className="floating-card-content">
              <div className="floating-card-content-first">hello</div>
              <div className="floating-card-content-second"></div>
              <div className="floating-card-content-third">bye</div>
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
