import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopRightArrow from "../../../../assets/top-right-arrow.svg";

import "./rotating-flower.css";
gsap.registerPlugin(ScrollTrigger);

import Flower from "../../../../assets/flower.svg";
import { Link } from "react-router-dom";

function RotatingFlower({ scrollRef, scrollRefTwo, scrollRefThree }) {
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
      <div ref={scrollRef} className="rotating-flower-wrapper">
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
                Pre-vetted high-profile experts from various industries
                available on demand to join your team - from digital experts to
                strategy consultants.
              </div>

              <Link to="contact" className="rotating-flower-details-btn">
                <p>Contact Us</p>
                <img src={TopRightArrow} alt="right-top-arrow" />
              </Link>
            </div>
            <div ref={scrollRefTwo} className="rotating-flower-details">
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
                Customized upskilling programs designed to deliver value.
              </div>
              <div className="rotating-flower-details-text sub-text">
                Accelerator programs built to generate impact on key
                stakeholders (employees, customers, resellers) through carefully
                crafted training curriculum.
              </div>

              <Link to="contact" className="rotating-flower-details-btn">
                <p>Contact Us</p>
                <img src={TopRightArrow} alt="right-top-arrow" />
              </Link>
            </div>
            <div
              ref={scrollRefThree}
              className="rotating-flower-details rotating-flower-details-last"
            >
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
                Modern tech stack implementation by a certified team of
                engineers.
              </div>
              <div className="rotating-flower-details-text sub-text">
                Agile scaling and tangible business value delivered through
                consultancy, cost-optimized licencing, managed services focused
                on modern cloud based solutions.
              </div>

              <Link to="contact" className="rotating-flower-details-btn">
                <p>Contact Us</p>
                <img src={TopRightArrow} alt="right-top-arrow" />
              </Link>
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
