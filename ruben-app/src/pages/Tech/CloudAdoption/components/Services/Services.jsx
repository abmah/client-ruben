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
              trigger: ".cloud-adoption-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".cloud-adoption-services-nav-section",
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
      ".cloud-adoption-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "cloud-adoption-services-right-section-child"
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
      <div className="cloud-adoption-services-wrapper">
        <div className="cloud-adoption-services-container">
          <h1 className="cloud-adoption-services-main-title">
            Optimize your digital infrastructure, fostering scalability,
            cost-efficiency, and agility with our end-to-end service offering
          </h1>
          <div className="cloud-adoption-services-content">
            <div className="cloud-adoption-services-nav-section">
              <div
                className={`cloud-adoption-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Strategy
              </div>
              <div
                className={`cloud-adoption-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Execution
              </div>
              <div
                className={`cloud-adoption-services-nav-item ${
                  activeNav === 2 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Manage
              </div>
              <div
                className={`cloud-adoption-services-nav-item ${
                  activeNav === 3 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Optimize
              </div>
            </div>
            <div className="cloud-adoption-services-right-section">
              <div className="cloud-adoption-services-right-section-child">
                <h1 className="cloud-adoption-services-right-section-child-title">
                  Strategy
                </h1>
                <p className="cloud-adoption-services-right-section-subtitle">
                  Build with us a framework to harness the full potential of
                  cloud computing, aligning technology initiatives with
                  overarching business goals.
                </p>
                <div className="cloud-adoption-services-right-section-cards-container">
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Cloud Adoption Roadmap</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>TCO Analysis</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Multi Cloud</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Hybrid Cloud</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Serverless Adoption Planning</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>VM workloads migration planning</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Protection Analysis</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Cloud Security</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Fin Ops</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-adoption-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-adoption-services-line"></div>
              </div>{" "}
              <div className="cloud-adoption-services-right-section-child">
                <h1 className="cloud-adoption-services-right-section-child-title">
                  Execution
                </h1>
                <p className="cloud-adoption-services-right-section-subtitle">
                  Let us deliver your seamless transition of applications and
                  data to the cloud, ensuring minimal disruptions and maximizing
                  operational efficiency.
                </p>
                <div className="cloud-adoption-services-right-section-cards-container">
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Landing Zones</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>IAM and Access</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Billing Setup</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>IaC</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Lakes and Warehouse</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Application Refactoring</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Lift & Shift</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>DevSecOps</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>
                      3rd Part Security IntegraFon (Cisco, F5, ForFnet, Pal
                      Alto)
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-adoption-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="cloud-adoption-services-line"></div>
              </div>{" "}
              <div className="cloud-adoption-services-right-section-child">
                <h1 className="cloud-adoption-services-right-section-child-title">
                  Manage
                </h1>
                <p className="cloud-adoption-services-right-section-subtitle">
                  Comprehensive Infrastructure management on your behalf, with
                  monitoring what matters, proactively reducing incidents and
                  automating repeatable workflows
                </p>
                <div className="cloud-adoption-services-right-section-cards-container">
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Monitoring</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Incident Response</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>On-Demand Cloud Tech Support</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Cloud Environment Management</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Billing Management</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Workflow Automation</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-adoption-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-adoption-services-line"></div>
              </div>{" "}
              <div className="cloud-adoption-services-right-section-child">
                <h1 className="cloud-adoption-services-right-section-child-title">
                  Optimize
                </h1>
                <p className="cloud-adoption-services-right-section-subtitle">
                  Stay ahead of the curve by leveraging the latest in cloud:
                  speed of delivery, service relability and security
                </p>
                <div className="cloud-adoption-services-right-section-cards-container">
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Continued Cost Optimisation</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Post Migration Optimization</p>
                  </div>
                  <div className="cloud-adoption-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Continued Security Optimisation</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-adoption-services-right-section-btn"
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
