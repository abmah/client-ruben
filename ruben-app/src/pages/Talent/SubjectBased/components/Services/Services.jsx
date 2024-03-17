import "./services.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clowd from "../../../../../assets/clowd.svg";
import { Link } from "react-router-dom";

import Industries from "../../../../../assets/talent_industries_squares.svg";

import JobPost from "../../../../../assets/job-post-icon.svg";

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
              trigger: ".talent-subject-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".talent-subject-services-nav-section",
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
      ".talent-subject-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "talent-subject-services-right-section-child"
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
      <div className="talent-subject-services-wrapper">
        <div className="talent-subject-services-container">
          <h1 className="talent-subject-services-main-title">
            200+ profiles with diverse, deeply specialised expertise from
            various backgrounds and industries
          </h1>
          <div className="talent-subject-services-content">
            <div className="talent-subject-services-nav-section">
              <div
                className={`talent-subject-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Industries
              </div>
              <div
                className={`talent-subject-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Operations
              </div>
              <div
                className={`talent-subject-services-nav-item ${
                  activeNav === 2 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Digital
              </div>
            </div>
            <div className="talent-subject-services-right-section">
              <div className="talent-subject-services-right-section-child">
                <h1 className="talent-subject-services-right-section-child-title">
                  Industries
                </h1>
                <p className="talent-subject-services-right-section-subtitle">
                  Throughout the years we have developed extensive understanding
                  of various industries where we helped securing Subject Matter
                  Experts.
                </p>
                <div className="talent-subject-services-right-section-cards-container">
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Retail</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Ecommerce</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Fintech</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Energy</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Public Sector</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Transporation</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Sports</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Entertainment</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Culture</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Manufacturing</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Agriculture</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Consumer Goods</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-subject-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-subject-services-line"></div>
              </div>{" "}
              <div className="talent-subject-services-right-section-child">
                <h1 className="talent-subject-services-right-section-child-title">
                  Operations
                </h1>
                <p className="talent-subject-services-right-section-subtitle">
                  We provide Senior, highly specialized Subject Matter Experts
                  profiles specialised in broad scope of operational efficiency.
                </p>
                <div className="talent-subject-services-right-section-cards-container">
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Corporate Finance</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Cost Cutting</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Value Chain Improvements</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Production Efficiency</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Distribution Optimization</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Pricing Strategies</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Workforce Efficiency</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Performance Improvement</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Regulations</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Management Frameworks</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Risk Frameworks</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Public Policies</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-subject-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="talent-subject-services-line"></div>
              </div>{" "}
              <div className="talent-subject-services-right-section-child">
                <h1 className="talent-subject-services-right-section-child-title">
                  Digital
                </h1>
                <p className="talent-subject-services-right-section-subtitle">
                  We provide Senior, highly specialized Subject Matter Experts
                  profiles specialised in broad scope of digital efficiency.
                </p>
                <div className="talent-subject-services-right-section-cards-container">
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Digital Marketing</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Martech</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Online Analytics</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>UX/UI</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Analysis</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Enginering</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Ecommerce Operations</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Performance Marketing</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Social Media Marketing</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Cloud Computing</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Cybersecurity</p>
                  </div>
                  <div className="talent-subject-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Automation</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-subject-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-subject-services-line"></div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
