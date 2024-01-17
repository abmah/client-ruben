import "./services.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clowd from "../../../../../assets/clowd.svg";

gsap.registerPlugin(ScrollTrigger);

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
              trigger: ".skills-academy-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".skills-academy-services-nav-section",
              onUpdate: (self) => {
                const progress = self.progress * 100;
                const newActiveNav = Math.min(3, Math.floor(progress / 25));
                setActiveNav(newActiveNav);
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
    const rightSection = document.querySelector(
      ".skills-academy-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "skills-academy-services-right-section-child"
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
      <div className="skills-academy-services-wrapper">
        <div className="skills-academy-services-container">
          <div className="skills-academy-services-nav-section">
            <div
              className={`skills-academy-services-nav-item services-nav-item-dark ${
                activeNav === 0 ? "active-skills" : ""
              }`}
              onClick={() => handleClick(0)}
            >
              Consult
            </div>
            <div
              className={`skills-academy-services-nav-item services-nav-item-long ${
                activeNav === 1 ? "active-skills" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              Implement
            </div>
            <div
              className={`skills-academy-services-nav-item ${
                activeNav === 2 ? "active-skills" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              Manage
            </div>
            <div
              className={`skills-academy-services-nav-item ${
                activeNav === 3 ? "active-skills" : ""
              }`}
              onClick={() => handleClick(3)}
            >
              Improve
            </div>
          </div>
          <div className="skills-academy-services-right-section">
            <div className="skills-academy-services-section-space"></div>
            <div className="skills-academy-services-right-section-child">
              <div className="skills-academy-services-navigation-mobile">
                <div
                  className={`skills-academy-services-nav-item active-skills    `}
                >
                  Consult
                </div>
                <div
                  className={`skills-academy-services-nav-item services-nav-item-long `}
                >
                  Implement
                </div>
                <div className={`skills-academy-services-nav-item `}>
                  Manage
                </div>
                <div className={`skills-academy-services-nav-item `}>
                  Improve
                </div>
              </div>
              <h1 className="skills-academy-services-right-section-child-title">
                Consult
              </h1>
              <p className="skills-academy-services-right-section-subtitle">
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <div className="skills-academy-services-right-section-cards-container">
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
              </div>
              <button className="skills-academy-services-right-section-btn">
                Explore more
              </button>
            </div>{" "}
            <div className="skills-academy-services-right-section-child">
              <div className="skills-academy-services-navigation-mobile">
                <div className={`skills-academy-services-nav-item     `}>
                  Consult
                </div>
                <div
                  className={`skills-academy-services-nav-item services-nav-item-long active-skills `}
                >
                  Implement
                </div>
                <div className={`skills-academy-services-nav-item `}>
                  Manage
                </div>
                <div className={`skills-academy-services-nav-item `}>
                  Improve
                </div>
              </div>
              <h1 className="skills-academy-services-right-section-child-title">
                Implement
              </h1>
              <p className="skills-academy-services-right-section-subtitle">
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <div className="skills-academy-services-right-section-cards-container">
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
              </div>
              <button className="skills-academy-services-right-section-btn">
                Explore more
              </button>
            </div>{" "}
            <div className="skills-academy-services-right-section-child">
              <div className="skills-academy-services-navigation-mobile">
                <div className={`skills-academy-services-nav-item     `}>
                  Consult
                </div>
                <div
                  className={`skills-academy-services-nav-item services-nav-item-long `}
                >
                  Implement
                </div>
                <div
                  className={`skills-academy-services-nav-item active-skills `}
                >
                  Manage
                </div>
                <div className={`skills-academy-services-nav-item `}>
                  Improve
                </div>
              </div>
              <h1 className="skills-academy-services-right-section-child-title">
                Manage
              </h1>
              <p className="skills-academy-services-right-section-subtitle">
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <div className="skills-academy-services-right-section-cards-container">
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
              </div>
              <button className="skills-academy-services-right-section-btn">
                Explore more
              </button>
            </div>{" "}
            <div className="skills-academy-services-right-section-child">
              <div className="skills-academy-services-navigation-mobile">
                <div className={`skills-academy-services-nav-item     `}>
                  Consult
                </div>
                <div
                  className={`skills-academy-services-nav-item services-nav-item-long `}
                >
                  Implement
                </div>
                <div className={`skills-academy-services-nav-item `}>
                  Manage
                </div>
                <div
                  className={`skills-academy-services-nav-item active-skills `}
                >
                  Improve
                </div>
              </div>
              <h1 className="skills-academy-services-right-section-child-title">
                Improve
              </h1>
              <p className="skills-academy-services-right-section-subtitle">
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <div className="skills-academy-services-right-section-cards-container">
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
                <div className="skills-academy-services-right-section-card">
                  <img src={Clowd} alt="services-image" />
                  <p>labore et dolore magna aliqua ut enim </p>
                </div>
              </div>
              <button className="skills-academy-services-right-section-btn">
                Explore more
              </button>
            </div>
            <div className="skills-academy-services-section-space"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
