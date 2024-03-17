import "./services.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clowd from "../../../../../assets/skills_education squares icon.svg";
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
              trigger: ".skills-programs-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".skills-programs-services-nav-section",
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
      ".skills-programs-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "skills-programs-services-right-section-child"
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
      <div className="skills-programs-services-wrapper">
        <div className="skills-programs-services-container">
          <h1 className="skills-programs-services-main-title">
            Over the years, we have perfected the Program Creation and Delivery
            process, encompassing several crucial elements.
          </h1>
          <div className="skills-programs-services-content">
            <div className="skills-programs-services-nav-section">
              <div
                className={`skills-programs-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Strategy
              </div>
              <div
                className={`skills-programs-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Curriculum
              </div>
              <div
                className={`skills-programs-services-nav-item ${
                  activeNav === 2 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Program
              </div>
              <div
                className={`skills-programs-services-nav-item ${
                  activeNav === 3 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Handover
              </div>
            </div>
            <div className="skills-programs-services-right-section">
              <div className="skills-programs-services-right-section-child">
                <h1 className="skills-programs-services-right-section-child-title">
                  Strategy
                </h1>
                <p className="skills-programs-services-right-section-subtitle">
                  The crucial initial phase involves analysis of the present
                  status of our training audience, with the objective of
                  discovering expectations and identifying the actual
                  educational gaps.
                </p>
                <div className="skills-programs-services-right-section-cards-container">
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Status Quo Discovery</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Desired Outcome Analysis</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Target audience interviews</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-programs-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="skills-programs-services-line"></div>
              </div>{" "}
              <div className="skills-programs-services-right-section-child">
                <h1 className="skills-programs-services-right-section-child-title">
                  Curriculum
                </h1>
                <p className="skills-programs-services-right-section-subtitle">
                  Understanding the status quo, the gaps, the benchmarks we then
                  design the learning program taking into account the learning
                  capability and capacity of target audience.
                </p>
                <div className="skills-programs-services-right-section-cards-container">
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>1:1 Trainings</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Hands-on Labs</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Introductory Trainings</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Consultancy Sessions</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Workshops</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Inspirational Trainings</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-programs-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="skills-programs-services-line"></div>
              </div>{" "}
              <div className="skills-programs-services-right-section-child">
                <h1 className="skills-programs-services-right-section-child-title">
                  Program
                </h1>
                <p className="skills-programs-services-right-section-subtitle">
                  Having the curriculum, we can help you craft full fledged
                  program to deliver it to target audience, including audience
                  acquisitions in case of scaled programs.
                </p>
                <div className="skills-programs-services-right-section-cards-container">
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Audience Acquisition</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Marketing & Awareness (Website & Online Campaigns)</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Project Management</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Sign up Management</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Training Venues Management</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>End-to-end Training Day management</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-programs-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="skills-programs-services-line"></div>
              </div>{" "}
              <div className="skills-programs-services-right-section-child">
                <h1 className="skills-programs-services-right-section-child-title">
                  Handover
                </h1>
                <p className="skills-programs-services-right-section-subtitle">
                  Upon completion of the training program, we will provide you
                  with the reports and insights, empowering you to make flexible
                  decisions on the continuation of the program.
                </p>
                <div className="skills-programs-services-right-section-cards-container">
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Pre&Post Trainings Impact Report</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Learnings & Improvements</p>
                  </div>
                  <div className="skills-programs-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Audience Feedback</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-programs-services-right-section-btn"
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
