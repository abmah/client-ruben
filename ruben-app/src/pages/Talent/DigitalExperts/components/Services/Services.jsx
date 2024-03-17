import "./services.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Clowd from "../../../../../assets/clowd.svg";
import AreasOrSeniority from "../../../../../assets/talent_areas_OR_seniority.svg";

import Industries from "../../../../../assets/talent_industries_squares.svg";

import SkillsetsOrSpecialisiztion from "../../../../../assets/talent_skillsets_OR_specialisiztion_squares.svg";
import JobPost from "../../../../../assets/job-post-icon.svg";
import { Link } from "react-router-dom";

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
              trigger: ".talent-digital-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".talent-digital-services-nav-section",
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
      ".talent-digital-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "talent-digital-services-right-section-child"
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
      <div className="talent-digital-services-wrapper">
        <div className="talent-digital-services-container">
          <h1 className="talent-digital-services-main-title">
            300+ profiles available immediately, with diverse digital skillsets
            and from various backgrounds and industries
          </h1>
          <div className="talent-digital-services-content">
            <div className="talent-digital-services-nav-section">
              <div
                className={`talent-digital-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Industries
              </div>
              <div
                className={`talent-digital-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Areas
              </div>
              <div
                className={`talent-digital-services-nav-item ${
                  activeNav === 2 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Skillsets
              </div>
              <div
                className={`talent-digital-services-nav-item ${
                  activeNav === 3 ? "active-talent" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Positions
              </div>
            </div>
            <div className="talent-digital-services-right-section">
              <div className="talent-digital-services-right-section-child">
                <h1 className="talent-digital-services-right-section-child-title">
                  Industries
                </h1>
                <p className="talent-digital-services-right-section-subtitle">
                  Throughout the years we have developed extensive understanding
                  of various industries where we helped securing digital experts
                  and contractors.
                </p>
                <div className="talent-digital-services-right-section-cards-container">
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Retail</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Ecommerce</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Fintech</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Energy</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Public Sector</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Transporation</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Sports</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Entertainment</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Culture</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Manufacturing</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Agriculture</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={Industries} alt="services-image" />
                    <p>Consumer Goods</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-digital-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-digital-services-line"></div>
              </div>{" "}
              <div className="talent-digital-services-right-section-child">
                <h1 className="talent-digital-services-right-section-child-title">
                  Areas
                </h1>
                <p className="talent-digital-services-right-section-subtitle">
                  Digital related roles cover various areas of daily enterprise
                  operations. We understand the characteristics of these areas
                  and are able to understand your specific requirements.
                </p>
                <div className="talent-digital-services-right-section-cards-container">
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Digital Marketing</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Martech</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Online Analytics</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>UX/UI</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Data Analysis</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Data Enginering</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Ecommerce Operations</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Performance Marketing</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Social Media Marketing</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Cloud Computing</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Cybersecurity</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={AreasOrSeniority} alt="services-image" />
                    <p>Automation</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-digital-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="talent-digital-services-line"></div>
              </div>{" "}
              <div className="talent-digital-services-right-section-child">
                <h1 className="talent-digital-services-right-section-child-title">
                  Skillsets
                </h1>
                <p className="talent-digital-services-right-section-subtitle">
                  In the rapidly evolving digital landscape, various skills are
                  crucial for professionals to excel in their roles. We map the
                  skillset of profiles we work with making it easier for you to
                  find the perfect match. Examples of skills we map:
                </p>
                <div className="talent-digital-services-right-section-cards-container">
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>User Experience Design</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Coding</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Project Management</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Google Analytics</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Agile Methodologies</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Generative AI</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>SEM and SEO</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Email Marketing</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Marketing Automation</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Content Management Systems (CMS)</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Reporting and Dashboarding</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img
                      src={SkillsetsOrSpecialisiztion}
                      alt="services-image"
                    />
                    <p>Machine Learning</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-digital-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="talent-digital-services-line"></div>
              </div>{" "}
              <div className="talent-digital-services-right-section-child">
                <h1 className="talent-digital-services-right-section-child-title">
                  Positions
                </h1>
                <p className="talent-digital-services-right-section-subtitle">
                  Digital transformation has led to the emergence of various
                  standardized roles aimed at driving organizational change and
                  innovation. From Junior levels to CXO levels, from specialists
                  to experts, we can support with contractors for any of the
                  internal positions you may look to temporarily fill in.
                </p>
                <div className="talent-digital-services-right-section-cards-container">
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>SEM Specialist</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Digital Project Manager</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>PPC (Pay-Per-Click) Specialist</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Conversion Rate Optimization (CRO) Manager</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Marketing Automation Expert</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Digital Marketing Manager</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Predictive Analytics Specialist</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Big Data Engineer</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Business Intelligence Analyst</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Ecommerce Manager</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Machine Learning Engineer</p>
                  </div>
                  <div className="talent-digital-services-right-section-card">
                    <img src={JobPost} alt="services-image" />
                    <p>Cloud Architect</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="talent-digital-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
