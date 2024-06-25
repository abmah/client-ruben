import "./floating-cards.css";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import animationData from "./Accenture_CardIllu_Anim_001_Timed_Alpha_violet.json";
// import animationDataTwo from "./Accenture_CardIllu_Anim_002_Timed_Alpha_red.json";
// import animationDataThree from "./Accenture_CardIllu_Anim_003_Timed_Alpha_blue.json";
// import lottie from "lottie-web";
import PropTypes from "prop-types";
import Star from "./star.svg";
import Light from "./light.svg";
import Cloud from "./cloud.svg";
FloatingCards.propTypes = {
  scrollRef: PropTypes.object.isRequired,
  scrollRefTwo: PropTypes.object.isRequired,
  scrollRefThree: PropTypes.object.isRequired,
};

function FloatingCards({ scrollRef, scrollRefTwo, scrollRefThree }) {
  const scrollToRef = (num) => {
    if (scrollRef.current) {
      if (num == 1) {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (num == 2) {
        scrollRefTwo.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: false,
          block: "center",
        });
      } else {
        scrollRefThree.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: false,
          block: "center",
        });
      }
    }
  };

  // useEffect(() => {
  //   const playAnimation = (animation, direction) => {
  //     animation.setDirection(direction);
  //     animation.play();
  //   };

  //   const containerOne = document.querySelector(
  //     ".floating-card-background-first"
  //   );
  //   const containerTwo = document.querySelector(
  //     ".floating-card-background-second"
  //   );
  //   const containerThree = document.querySelector(
  //     ".floating-card-background-third"
  //   );

  //   const firstCard = document.querySelector(".floating-card-one");
  //   const secondCard = document.querySelector(".floating-card-two");
  //   const thirdCard = document.querySelector(".floating-card-three");

  //   const animationOne = lottie.loadAnimation({
  //     container: containerOne,
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: false,
  //     animationData: animationData,
  //   });

  //   const animationTwo = lottie.loadAnimation({
  //     container: containerTwo,
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: false,
  //     animationData: animationDataTwo,
  //   });

  //   const animationThree = lottie.loadAnimation({
  //     container: containerThree,
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: false,
  //     animationData: animationDataThree,
  //   });

  //   firstCard.addEventListener("mouseenter", () =>
  //     playAnimation(animationOne, 1)
  //   );
  //   firstCard.addEventListener("mouseleave", () =>
  //     playAnimation(animationOne, -1)
  //   );

  //   secondCard.addEventListener("mouseenter", () =>
  //     playAnimation(animationTwo, 1)
  //   );
  //   secondCard.addEventListener("mouseleave", () =>
  //     playAnimation(animationTwo, -1)
  //   );

  //   thirdCard.addEventListener("mouseenter", () =>
  //     playAnimation(animationThree, 1)
  //   );
  //   thirdCard.addEventListener("mouseleave", () =>
  //     playAnimation(animationThree, -1)
  //   );

  //   return () => {
  //     firstCard.removeEventListener("mouseenter", () =>
  //       playAnimation(animationOne, 1)
  //     );
  //     firstCard.removeEventListener("mouseleave", () =>
  //       playAnimation(animationOne, -1)
  //     );

  //     secondCard.removeEventListener("mouseenter", () =>
  //       playAnimation(animationTwo, 1)
  //     );
  //     secondCard.removeEventListener("mouseleave", () =>
  //       playAnimation(animationTwo, -1)
  //     );

  //     thirdCard.removeEventListener("mouseenter", () =>
  //       playAnimation(animationThree, 1)
  //     );
  //     thirdCard.removeEventListener("mouseleave", () =>
  //       playAnimation(animationThree, -1)
  //     );

  //     animationOne.destroy();
  //     animationTwo.destroy();
  //     animationThree.destroy();
  //   };
  // }, []);
  useEffect(() => {
    const mm = gsap.matchMedia();
    const breakPoint = 0;

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
        <div className="floating-cards-background">
          <h1 className="floating-cards-background-text">
            Services designed to amplify agility
          </h1>
        </div>
        <div className="spacing"></div>
        <div className="floating-cards-parent">
          <div className="floating-card floating-card-one">
            <div className="floating-card-content">
              <div className="floating-card-first-section">
                <div className="floating-card-first-section-header">
                  <div className="floating-card-first-section-header-left-section">
                    <div>
                      <img src={Star} alt="star" />
                    </div>
                    <div></div>
                  </div>
                  <div className="floating-card-first-section-header-right-section"></div>
                </div>
                <div className="floating-card-first-section-footer">
                  <div className="floating-card-first-section-footer-title">
                    Your team is struggling with resources and expertise?
                  </div>
                  <div className="floating-card-first-section-footer-right-section"></div>
                </div>
              </div>

              <div className="floating-card-second-section">
                <div className="floating-card-second-section-content">
                  <div className="floating-card-second-section-header">
                    <p>
                      What if you could reshuffle your team's <br /> expertise
                      and resources whenever needed?
                    </p>
                    <p>If you could flexibly add and reduce members?</p>
                    <p>If the and time-to-hire would be close to zero?</p>
                    <p>
                      Check how our Talent Augmentation service <br /> helps
                      solve Talent related problems.
                    </p>
                  </div>
                  <div className="floating-card-second-section-footer">
                    <img src={Star} alt="Star" />
                    <div className="floating-card-link">
                      <div onClick={() => scrollToRef(1)}>Learn More</div>
                      <div className="floating-card-link-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card floating-card-two"></div>
            <div className="floating-card floating-card-three"></div>
          </div>
          <div className="floating-card floating-card-two">
            <div className="floating-card-content">
              <div className="floating-card-first-section">
                <div className="floating-card-first-section-header">
                  <div className="floating-card-first-section-header-left-section">
                    <div>
                      <img src={Light} alt="Light" />
                    </div>
                    <div></div>
                  </div>
                  <div className="floating-card-first-section-header-right-section floating-card-first-section-header-right-section-two"></div>
                </div>
                <div className="floating-card-first-section-footer">
                  <div className="floating-card-first-section-footer-title">
                    Struggling to pair internal skillsets with transformation
                    efforts?
                  </div>
                </div>
              </div>

              <div className="floating-card-second-section">
                <div className="floating-card-second-section-content">
                  <div className="floating-card-second-section-header">
                    <p>
                      You are looking to access customized learnings, focused
                      only on relevant job skills?
                    </p>
                    <p>
                      Your business is looking to deliver outcome-driven, scaled
                      learning experience to its employees or customers?
                    </p>
                    <p>
                      Check how our Upskilling services help boosting growth.
                    </p>
                  </div>
                  <div className="floating-card-second-section-footer">
                    <img src={Light} alt="Light" />
                    <div className="floating-card-link floating-card-link-second">
                      <div onClick={() => scrollToRef(2)}>Learn More</div>
                      <div className="floating-card-link-line floating-card-link-line-second"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card floating-card-two"></div>
            <div className="floating-card floating-card-three"></div>
          </div>
          <div className="floating-card floating-card-three">
            <div className="floating-card-content">
              <div className="floating-card-first-section">
                <div className="floating-card-first-section-header">
                  <div className="floating-card-first-section-header-left-section floating-card-first-section-header-left-section-third">
                    <div>
                      <img src={Cloud} alt="Cloud" />
                    </div>
                    <div></div>
                  </div>
                  <div className="floating-card-first-section-header-right-section floating-card-first-section-header-right-section-three"></div>
                  <div className="floating-card-first-section-header-left-section floating-card-first-section-header-left-section-right">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="floating-card-first-section-footer">
                  <div className="floating-card-first-section-footer-title">
                    Technology debt is slowing your business down?
                  </div>
                </div>
              </div>

              <div className="floating-card-second-section">
                <div className="floating-card-second-section-content">
                  <div className="floating-card-second-section-header">
                    <p>
                      What if you could instantly move to scalable, modern IT
                      Environments without upfront costs?
                    </p>
                    <p>
                      If the mess in data and its security would not be a
                      concern anymore?
                    </p>
                    <p>
                      Check how our Technology imeplementation can <br />{" "}
                      optimize your operations.
                    </p>
                  </div>
                  <div className="floating-card-second-section-footer">
                    <img src={Cloud} alt="Cloud" />
                    <div className="floating-card-link floating-card-link-third">
                      <div onClick={() => scrollToRef(3)}>Learn More</div>
                      <div className="floating-card-link-line floating-card-link-line-third"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card floating-card-two"></div>
            <div className="floating-card floating-card-three"></div>
          </div>
          <div className="spacing-two"></div>
        </div>
      </div>
    </div>
  );
}

export default FloatingCards;
