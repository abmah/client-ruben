import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./test.css";
import Flower from "../../../../assets/flower.svg";

gsap.registerPlugin(ScrollTrigger);

import InfraBtn from "./infrastructure-button.svg";
import dataBtn from "./data-button.svg";
import securityBtn from "./security-button.svg";
import productivityBtn from "./productivity-button.svg";

import AcademyButton from "./academy-button.svg";
import ProgramsButton from "./programs-button.svg";

import DigitalButton from "./digital-button.svg";
import StrategyButton from "./strategy-button.svg";
// import OperationsButton from "./operations-button.svg";
import HourlyButton from "./hourly-button.svg";

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
                const rotationValue = (self.progress * 360) / 1.5 + -60;
                flowerRef.current.style.transform = `rotate(${rotationValue}deg)`;

                const newIndex = Math.floor(self.progress * 3);

                const clampedIndex = Math.min(Math.max(newIndex, 0), 2);
                console.log(newIndex, clampedIndex);
                // Apply opacity and x-offset based on the active detail index
                detailsElements.forEach((detail, index) => {
                  if (index === clampedIndex) {
                    // Active detail
                    gsap.to(detail, { opacity: 1, y: -130 });
                  } else {
                    // Inactive details
                    gsap.to(detail, { opacity: 0, y: 0 });
                  }
                });
              },
            });

            // Set initial opacity and y-offset for all details divs
            detailsElements.forEach((detail, index) => {
              gsap.set(detail, {
                opacity: index === 0 ? 1 : 0,
              });
            });

            // Create timelines for scrolling down and scrolling up (uncomment and customize as needed)
            // const tlDown = gsap.timeline();
            // const tlUp = gsap.timeline();
            // detailsElements.forEach((detail, index) => {
            //   tlDown.to(detail, { opacity: 0, duration: 0.5 }, index * 0.2);
            //   tlUp.to(detail, { opacity: 1, duration: 0.5 }, index * 0.2);
            // });
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
              <div className="headline">Talent Augmentation</div>
              <div className="text">
                Access to high profile experts in start/stop model
              </div>
              <div className="flower-button-container">
                <button className="some-btn some-btn1">
                  <div>
                    <img src={DigitalButton} alt="digital-btn" />
                  </div>
                  <p>Digital Experts</p>
                </button>
                <button className="some-btn some-btn1">
                  <div>
                    <img src={StrategyButton} alt="strategy-btn" />
                  </div>
                  <p>Strategy Consultants</p>
                </button>
                <button className="some-btn some-btn1">
                  <div>
                    <img src={DigitalButton} alt="operations-btn" />
                  </div>

                  <p>Operations Consultants</p>
                </button>
                <button className="some-btn some-btn1">
                  <div>
                    <img src={HourlyButton} alt="hourly-btn" />
                  </div>
                  <p>Hourly Based Experts</p>
                </button>
              </div>
            </div>
            <div className="details">
              <div className="headline headline2">Upskilling Programs</div>
              <div className="text text2">
                Access to high profile experts in start/stop model
              </div>
              <div className="flower-button-container">
                <button className="some-btn some-btn1">
                  <div>
                    <img src={AcademyButton} alt="academy-btn" />
                  </div>
                  <p>Open Academy</p>
                </button>
                <button className="some-btn some-btn1">
                  <div>
                    <img src={ProgramsButton} alt="programs-btn" />
                  </div>
                  <p>Customized Programs</p>
                </button>
              </div>
            </div>
            <div className="details">
              <div className="headline headline3">Cloud Tech</div>
              <div className="text">
                Access to high profile experts in start/stop model
              </div>
              <div className="flower-button-container">
                <button className="some-btn some-btn1">
                  <div>
                    <img src={InfraBtn} alt="infra-btn" />
                  </div>
                  <p>Infrastructure Modernization</p>
                </button>
                <button className="some-btn some-btn1">
                  <div>
                    <img src={dataBtn} alt="data-btn" />
                  </div>
                  <p>Infrastructure Modernization</p>
                </button>
                <button className="some-btn some-btn1">
                  <div>
                    <img src={productivityBtn} alt="productivity-btn" />
                  </div>

                  <p>Infrastructure Modernization</p>
                </button>
                <button className="some-btn some-btn1">
                  <div>
                    <img src={securityBtn} alt="security-btn" />
                  </div>
                  <p>Infrastructure Modernization</p>
                </button>
              </div>
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
