import "./services.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clowd from "../../../../../assets/clowd.svg";
import { Link } from "react-router-dom";

import AreasOrSeniority from "../../../../../assets/talent_areas_OR_seniority.svg";

import Industries from "../../../../../assets/talent_industries_squares.svg";

import SkillsetsOrSpecialisiztion from "../../../../../assets/talent_skillsets_OR_specialisiztion_squares.svg";

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
              trigger: ".talent-strategy-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".talent-strategy-services-nav-section",
              onUpdate: (self) => {
                const progress = self.progress * 100;
                const newActiveNav = Math.min(2, Math.floor(progress / 33));
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
      ".talent-strategy-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "talent-strategy-services-right-section-child"
    );

    if (childElements.length > index) {
      childElements[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="talent-strategy-services-wrapper">
        <div className="talent-strategy-services-container">
          <h1 className="talent-strategy-services-main-title">
            200+ consultant profiles available on project-basis, with top brand
            experience and diverse industry specialisation and seniority
          </h1>
          <div className="talent-strategy-services-content">
            <div className="talent-strategy-services-nav-section">
              <div
                className={`talent-strategy-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Industries
              </div>
              <div
                className={`talent-strategy-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Seniority
              </div>
              <div
                className={`talent-strategy-services-nav-item ${
                  activeNav === 2 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Specialisation
              </div>
            </div>
            <div className="talent-strategy-services-right-section">
              <div className="talent-strategy-services-right-section-child">
                <h1 className="talent-strategy-services-right-section-child-title">
                  Industries
                </h1>
                <p className="talent-strategy-services-right-section-subtitle">
                  Throughout the years we have developed extensive understanding
                  of various industries where we helped securing strategy
                  consultancy contractors.
                </p>
                <div className="talent-strategy-services-right-section-cards-container">
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Retail</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Ecommerce</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Fintech</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Energy</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Public Sector</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Transporation</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Sports</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Entertainment</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Culture</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Manufacturing</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Agriculture</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Consumer Goods</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-strategy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-strategy-services-line"></div>
              </div>{" "}
              <div className="talent-strategy-services-right-section-child">
                <h1 className="talent-strategy-services-right-section-child-title">
                  Seniority
                </h1>
                <p className="talent-strategy-services-right-section-subtitle">
                  The Consultants we work with can support your organization to
                  cover different levels of engagement, from Associate to
                  Engagement Manager
                </p>
                <div className="talent-strategy-services-right-section-cards-container">
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Analyst</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Associate Consultant</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Senior Associate Consulant</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Consultant</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Senior Consultant</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Case Team Leader</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Project Manager</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Engagement Manager</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Principal</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-strategy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="talent-strategy-services-line"></div>
              </div>{" "}
              <div className="talent-strategy-services-right-section-child">
                <h1 className="talent-strategy-services-right-section-child-title">
                  Specialisation
                </h1>
                <p className="talent-strategy-services-right-section-subtitle">
                  We provide profiles specialised in broad scope of strategy
                  development work and in different types of projects.
                </p>
                <div className="talent-strategy-services-right-section-cards-container">
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Opening a New Market</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Supply Chain</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Production</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Sourcing</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>New Business Line</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Organizational Design</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Organizational Efficiency</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Ecommerce & Digital</p>
                  </div>
                  <div className="talent-strategy-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Regulatory Transformation</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-strategy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-strategy-services-line"></div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
