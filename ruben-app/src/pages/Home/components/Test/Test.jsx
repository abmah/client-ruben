import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./test.css";
import Flower from "../../../../assets/flower.svg";

gsap.registerPlugin(ScrollTrigger);

function RevealSection() {
  const flowerRef = useRef(null);

  useEffect(() => {
    const detailsElements = document.querySelectorAll(".details");

    const mm = gsap.matchMedia();
    const breakPoint = 900;
    const tlDown = gsap.timeline();
    const tlUp = gsap.timeline();

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
            ScrollTrigger.create({
              trigger: ".gallery",
              start: "top top",
              end: "bottom bottom",
              pin: ".right",
              onUpdate: (self) => {
                const rotationValue = (self.progress * 360) / 1.5 + -70; // Adjust as needed
                flowerRef.current.style.transform = `rotate(${rotationValue}deg)`;
              },
            });
            // Set initial brightness for all details divs
            gsap.set(detailsElements, { filter: "brightness(0.5)" });

            // Create timelines for scrolling down and scrolling up

            detailsElements.forEach((detail) => {
              // Add animation for scrolling down
              tlDown.to(detail, {
                scrollTrigger: {
                  trigger: detail,
                  start: "top center", // Adjust the start position as needed
                  end: "bottom center", // Adjust the end position as needed
                  toggleActions: "play none none reverse",
                  onEnter: () => {
                    gsap.to(detail, { filter: "brightness(1)" });
                  },
                  onLeaveBack: () => {
                    gsap.to(detail, { filter: "brightness(0.5)" });
                  },
                },
              });

              tlUp.to(detail, {
                scrollTrigger: {
                  trigger: detail,
                  start: "bottom center", // Adjust the start position as needed
                  end: "top center", // Adjust the end position as needed
                  toggleActions: "play none none reverse",
                  onEnterBack: () => {
                    gsap.to(detail, { filter: "brightness(1)" });
                  },
                  onLeave: () => {
                    gsap.to(detail, { filter: "brightness(0.5)" });
                  },
                },
              });
            });
          }
        }
      );
    });

    return () => {
      ctx.kill();
      mm.kill();
      tlDown.kill();
      tlUp.kill();
    };
  }, []);

  return (
    <>
      <div className="gallery">
        <div className="left">
          <div className="detailsWrapper">
            <div className="empty"></div>
            <div className="details">
              <h2>some badge or photo</h2>
              <div className="headline">Talent Augmentation</div>
              <div className="text">
                Access to high profile experts in start/stop model
              </div>
              <button className="some-btn some-btn1">Some Button</button>
            </div>
            <div className="details">
              <h2>some badge or photo</h2>
              <div className="headline headline2">Upskilling Programs</div>
              <div className="text text2">
                Access to high profile experts in start/stop model
              </div>
              <button className="some-btn some-btn2">Some Button</button>
            </div>
            <div className="details">
              <h2>some badge or photo</h2>
              <div className="headline headline3">Cloud Tech</div>
              <div className="text">
                Access to high profile experts in start/stop model
              </div>
              <button className="some-btn some-btn3">Some Button</button>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            className="flower-test"
            ref={flowerRef}
            src={Flower}
            alt="flower"
          />
        </div>
      </div>
    </>
  );
}

export default RevealSection;
