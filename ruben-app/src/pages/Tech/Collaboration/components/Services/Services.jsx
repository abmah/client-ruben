import "./services.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clowd from "../../../../../assets/clowd.svg";
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
              trigger: ".cloud-collaboration-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".cloud-collaboration-services-nav-section",
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
      ".cloud-collaboration-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "cloud-collaboration-services-right-section-child"
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
      <div className="cloud-collaboration-services-wrapper">
        <div className="cloud-collaboration-services-container">
          <h1 className="cloud-collaboration-services-main-title">
            Optimize your workforce productivity, fostering scalability,
            cost-efficiency, agility and remote collaboration.
          </h1>
          <div className="cloud-collaboration-services-content">
            <div className="cloud-collaboration-services-nav-section">
              <div
                className={`cloud-collaboration-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Migrate
              </div>
              <div
                className={`cloud-collaboration-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Manage
              </div>
              <div
                className={`cloud-collaboration-services-nav-item ${
                  activeNav === 2 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Upgrade
              </div>
              <div
                className={`cloud-collaboration-services-nav-item ${
                  activeNav === 3 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Optimize
              </div>
            </div>
            <div className="cloud-collaboration-services-right-section">
              <div className="cloud-collaboration-services-right-section-child">
                <h1 className="cloud-collaboration-services-right-section-child-title">
                  Migrate
                </h1>
                <p className="cloud-collaboration-services-right-section-subtitle">
                  Empower your organization to migrate to cloud based
                  collaboration suite by leveraging a highly tailored migration
                  plan.
                </p>
                <div className="cloud-collaboration-services-right-section-cards-container">
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>TCO Analysis & Cost Optimization</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Adoption & Migration Planning</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Email Migration</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Storage Migration</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Calendar Migration</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Dual / Split delivery Migration</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-collaboration-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-collaboration-services-line"></div>
              </div>{" "}
              <div className="cloud-collaboration-services-right-section-child">
                <h1 className="cloud-collaboration-services-right-section-child-title">
                  Manage
                </h1>
                <p className="cloud-collaboration-services-right-section-subtitle">
                  Comprehensive support and managed services, with monitoring
                  what matters, proactively reducing incidents and ensuring
                  highest security of settings.
                </p>
                <div className="cloud-collaboration-services-right-section-cards-container">
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Ongoing Tech Support</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Incident Response</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Employee & Admin Trainings</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Security Audits</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Maturity Audits</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Assisted Roll-out of New Features</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-collaboration-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="cloud-collaboration-services-line"></div>
              </div>{" "}
              <div className="cloud-collaboration-services-right-section-child">
                <h1 className="cloud-collaboration-services-right-section-child-title">
                  Upgrade
                </h1>
                <p className="cloud-collaboration-services-right-section-subtitle">
                  Transform towards more sophisticated solutions as your company
                  grows and the needs for security and productivity solutions
                  grow along.
                </p>
                <div className="cloud-collaboration-services-right-section-cards-container">
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Enterprise Licences</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Mixed Tier Licences</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Chrome OS Devices</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Vault Licences</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Duet AI licences</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Cloud Search Licences</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-collaboration-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-collaboration-services-line"></div>
              </div>{" "}
              <div className="cloud-collaboration-services-right-section-child">
                <h1 className="cloud-collaboration-services-right-section-child-title">
                  Optimize
                </h1>
                <p className="cloud-collaboration-services-right-section-subtitle">
                  Stay ahead of the curve by leveraging the advanced GWS
                  functions: automation, AI.
                </p>
                <div className="cloud-collaboration-services-right-section-cards-container">
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Workflow Automation (Appscripts)</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>AI and Generative AI Trainings</p>
                  </div>
                  <div className="cloud-collaboration-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Low-Code Implementations (Appsheet)</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-collaboration-services-right-section-btn"
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
