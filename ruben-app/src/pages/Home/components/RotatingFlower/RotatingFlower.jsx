import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopRightArrow from "../../../../assets/top-right-arrow.svg";

import "./rotating-flower.css";
gsap.registerPlugin(ScrollTrigger);

import Flower from "../../../../assets/flower.svg";

function RotatingFlower() {
  const flowerRef = useRef(null);

  useEffect(() => {
    const detailsElements = document.querySelectorAll(
      ".rotating-flower-details"
    );

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
          let { isDesktop } = context.conditions;
          if (isDesktop) {
            ScrollTrigger.create({
              trigger: ".rotating-flower-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".rotating-flower-right-section",
              onUpdate: (self) => {
                const rotationValue = (self.progress * 360) / 1.5 + -60;
                flowerRef.current.style.transform = `rotate(${rotationValue}deg)`;

                const newIndex = Math.floor(self.progress * 3);

                const clampedIndex = Math.min(Math.max(newIndex, 0), 2);
                console.log(newIndex, clampedIndex);
                // Apply filter brightness and y-offset based on the active detail index
                detailsElements.forEach((detail, index) => {
                  const filterBrightness = index === clampedIndex ? 1 : 0.5;
                  gsap.to(detail, {
                    filter: `brightness(${filterBrightness})`,
                  });
                });
              },
            });

            // Set initial filter brightness and y-offset for all details divs
            detailsElements.forEach((detail, index) => {
              const filterBrightness = index === 0 ? 1 : 0.5;
              gsap.set(detail, {
                filter: `brightness(${filterBrightness})`,
              });
            });

            // Create timelines for scrolling down and scrolling up (uncomment and customize as needed)
            // const tlDown = gsap.timeline();
            // const tlUp = gsap.timeline();
            // detailsElements.forEach((detail, index) => {
            //   tlDown.to(detail, { filter: "brightness(0.5)", duration: 0.5 }, index * 0.2);
            //   tlUp.to(detail, { filter: "brightness(1)", duration: 0.5 }, index * 0.2);
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
      <div className="rotating-flower-wrapper">
        <div className="rotating-flower-left-section">
          <div className="rotating-flower-details-section">
            <div className="rotating-flower-details">
              <img
                ref={flowerRef}
                className="mobile-rotating-flower mobile-rotating-flower-first"
                src={Flower}
                alt="flower"
              />
              <p className="rotating-flower-details-headline-header">
                Our Services
              </p>
              <div className="rotating-flower-details-headline">
                Talent <br /> Augmentation
              </div>
              <div className="rotating-flower-details-text">
                Access to high profile experts in start/stop model
              </div>
              <div className="rotating-flower-details-text sub-text">
                Access to high profile experts in start/stop model
              </div>
              <div className="rotating-flower-details-text sub-text">
                Access to high profile experts in start/stop model
              </div>
              <button className="rotating-flower-details-btn">
                <p>BUTTON</p>
                <img src={TopRightArrow} alt="right-top-arrow" />
              </button>
            </div>
            <div className="rotating-flower-details">
              <img
                ref={flowerRef}
                className="mobile-rotating-flower mobile-rotating-flower-second"
                src={Flower}
                alt="flower"
              />
              <p className="rotating-flower-details-headline-header">
                Our Services
              </p>
              <div className="rotating-flower-details-headline">
                Upskilling
                <br />
                Programs
              </div>
              <div className="rotating-flower-details-text">
                Access to high profile experts in start/stop model
              </div>
              <div className="rotating-flower-details-text sub-text">
                Access to high profile experts in start/stop model
              </div>
              <div className="rotating-flower-details-text sub-text">
                Access to high profile experts in start/stop model
              </div>
              <button className="rotating-flower-details-btn">
                <p>BUTTON</p>
                <img src={TopRightArrow} alt="right-top-arrow" />
              </button>
            </div>
            <div className="rotating-flower-details">
              <img
                ref={flowerRef}
                className="mobile-rotating-flower   mobile-rotating-flower-third"
                src={Flower}
                alt="flower"
              />
              <p className="rotating-flower-details-headline-header">
                Our Services
              </p>
              <div className="rotating-flower-details-headline">
                Cloud <br />
                Tech
              </div>
              <div className="rotating-flower-details-text">
                Access to high profile experts in start/stop model
              </div>
              <div className="rotating-flower-details-text sub-text">
                Access to high profile experts in start/stop model
              </div>
              <div className="rotating-flower-details-text sub-text">
                Access to high profile experts in start/stop model
              </div>
              <button className="rotating-flower-details-btn">
                <p>BUTTON</p>
                <img src={TopRightArrow} alt="right-top-arrow" />
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="rotating-flower-right-section">
          <img
            className="rotating-flower-img"
            ref={flowerRef}
            src={Flower}
            alt="flower"
          />
        </div>
      </div>
    </>
  );
}

export default RotatingFlower;
