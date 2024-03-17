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
              trigger: ".talent-operations-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".talent-operations-services-nav-section",
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
      ".talent-operations-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "talent-operations-services-right-section-child"
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
      <div className="talent-operations-services-wrapper">
        <div className="talent-operations-services-container">
          <h1 className="talent-operations-services-main-title">
            300+ operational consultant profiles available on project-basis,
            with top brand experience and diverse industry specialisation and
            seniority
          </h1>
          <div className="talent-operations-services-content">
            <div className="talent-operations-services-nav-section">
              <div
                className={`talent-operations-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Industries
              </div>
              <div
                className={`talent-operations-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Seniority
              </div>
              <div
                className={`talent-operations-services-nav-item ${
                  activeNav === 2 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Specialisation
              </div>
            </div>
            <div className="talent-operations-services-right-section">
              <div className="talent-operations-services-right-section-child">
                <h1 className="talent-operations-services-right-section-child-title">
                  Industries
                </h1>
                <p className="talent-operations-services-right-section-subtitle">
                  Throughout the years we have developed extensive understanding
                  of various industries where we helped securing operational
                  consultancy contractors.
                </p>
                <div className="talent-operations-services-right-section-cards-container">
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Retail</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Ecommerce</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Fintech</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Energy</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Public Sector</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Transporation</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Sports</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Entertainment</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Culture</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Manufacturing</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Agriculture</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Consumer Goods</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-operations-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-operations-services-line"></div>
              </div>{" "}
              <div className="talent-operations-services-right-section-child">
                <h1 className="talent-operations-services-right-section-child-title">
                  Seniority
                </h1>
                <p className="talent-operations-services-right-section-subtitle">
                  The Consultants we work with can support your organization to
                  cover different levels of engagement, from Associate to Senior
                  Manager
                </p>
                <div className="talent-operations-services-right-section-cards-container">
                  <div className="talent-operations-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Analyst</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Associate Consultant</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Consultant</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Senior Consultant</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Manager</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Senior Manager</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-operations-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="talent-operations-services-line"></div>
              </div>{" "}
              <div className="talent-operations-services-right-section-child">
                <h1 className="talent-operations-services-right-section-child-title">
                  Specialisation
                </h1>
                <p className="talent-operations-services-right-section-subtitle">
                  We provide profiles specialised in broad scope of operational
                  efficiency work and in different types of projects.
                </p>
                <div className="talent-operations-services-right-section-cards-container">
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>M&A</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Corporate Finance</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Cost Cutting</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Value Chain Improvements</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Production Efficiency</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Distribution Optimization</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Pricing Strategies</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Workforce Efficiency</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Performance Improvement</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Performance Marketing</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Ecommerce Operations</p>
                  </div>
                  <div className="talent-operations-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>IT Operations</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-operations-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-operations-services-line"></div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
