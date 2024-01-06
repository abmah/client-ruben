import "./services.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clowd from "../../../../../assets/clowd.svg";

gsap.registerPlugin(ScrollTrigger);

function RightSectionChild() {
  return (
    <div className="services-right-section-child">
      <div className="services-navigation-mobile">
        <div className={`services-nav-item active    `}>Consult</div>
        <div className={`services-nav-item services-nav-item-long `}>
          Implement
        </div>
        <div className={`services-nav-item `}>Manage</div>
        <div className={`services-nav-item `}>Improve</div>
      </div>
      <h1 className="services-right-section-child-title">Consult</h1>
      <p className="services-right-section-subtitle">
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="services-right-section-cards-container">
        <div className="servies-right-section-card">
          <img src={Clowd} alt="services-image" />
          <p>labore et dolore magna aliqua ut enim </p>
        </div>
        <div className="servies-right-section-card">
          <img src={Clowd} alt="services-image" />
          <p>labore et dolore magna aliqua ut enim </p>
        </div>
        <div className="servies-right-section-card">
          <img src={Clowd} alt="services-image" />
          <p>labore et dolore magna aliqua ut enim </p>
        </div>
        <div className="servies-right-section-card">
          <img src={Clowd} alt="services-image" />
          <p>labore et dolore magna aliqua ut enim </p>
        </div>
      </div>
      <button className="services-right-section-btn">Explore more</button>
    </div>
  );
}

function Services() {
  const [activeNav, setActiveNav] = useState(0);

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
              trigger: ".services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".services-nav-section",
              onUpdate: (self) => {
                const progress = self.progress * 100;
                const newActiveNav = Math.min(3, Math.floor(progress / 25));
                setActiveNav(newActiveNav);
                console.log(newActiveNav);
              },
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

  const handleClick = (index) => {
    console.log(index);
    const rightSection = document.querySelector(".services-right-section");
    const childElements = rightSection.getElementsByClassName(
      "services-right-section-child"
    );

    if (childElements.length > index) {
      childElements[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div className="services-wrapper">
        <div className="services-container">
          <div className="services-nav-section">
            <div
              className={`services-nav-item services-nav-item-dark ${
                activeNav === 0 ? "active" : ""
              }`}
              onClick={() => handleClick(0)}
            >
              Consult
            </div>
            <div
              className={`services-nav-item services-nav-item-long ${
                activeNav === 1 ? "active" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              Implement
            </div>
            <div
              className={`services-nav-item ${activeNav === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              Manage
            </div>
            <div
              className={`services-nav-item ${activeNav === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              Improve
            </div>
          </div>
          <div className="services-right-section">
            <div className="services-section-space"></div>
            <RightSectionChild />
            <RightSectionChild />
            <RightSectionChild />
            <RightSectionChild />
            <div className="services-section-space"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
