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
              trigger: ".cloud-data-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".cloud-data-services-nav-section",
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
      ".cloud-data-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "cloud-data-services-right-section-child"
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
      <div className="cloud-data-services-wrapper">
        <div className="cloud-data-services-container">
          <h1 className="cloud-data-services-main-title">
            Optimize your Data infrastructure, fostering scalability,
            cost-efficiency, and agility with our end-to-end service offering
          </h1>
          <div className="cloud-data-services-content">
            <div className="cloud-data-services-nav-section">
              <div
                className={`cloud-data-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Strategy
              </div>
              <div
                className={`cloud-data-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Execution
              </div>
              <div
                className={`cloud-data-services-nav-item ${
                  activeNav === 2 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Manage
              </div>
              <div
                className={`cloud-data-services-nav-item ${
                  activeNav === 3 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Optimize
              </div>
            </div>
            <div className="cloud-data-services-right-section">
              <div className="cloud-data-services-right-section-child">
                <h1 className="cloud-data-services-right-section-child-title">
                  Strategy
                </h1>
                <p className="cloud-data-services-right-section-subtitle">
                  Build with us a framework to harness the full potential of
                  Data in Cloud, aligning technology initiatives with
                  overarching business goals.
                </p>
                <div className="cloud-data-services-right-section-cards-container">
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data in Cloud Adoption Roadmap</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>TCO Analysis</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Big Data Infrastructure</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>BI Adoption Analysis</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Access Management Planning</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Protection Analysis</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-data-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-data-services-line"></div>
              </div>{" "}
              <div className="cloud-data-services-right-section-child">
                <h1 className="cloud-data-services-right-section-child-title">
                  Execution
                </h1>
                <p className="cloud-data-services-right-section-subtitle">
                  Let us deliver your seamless transition of your data to the
                  cloud, ensuring minimal disruptions and maximizing operational
                  efficiency.
                </p>
                <div className="cloud-data-services-right-section-cards-container">
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Quality Analysis</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>IAM and Access</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Billing Setup</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Location</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Connecting to BI</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Dashboards</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-data-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="cloud-data-services-line"></div>
              </div>{" "}
              <div className="cloud-data-services-right-section-child">
                <h1 className="cloud-data-services-right-section-child-title">
                  Manage
                </h1>
                <p className="cloud-data-services-right-section-subtitle">
                  Comprehensive Data Infrastructure management on your behalf,
                  with monitoring what matters, proactively reducing incidents
                  and automating repeatable workflows
                </p>
                <div className="cloud-data-services-right-section-cards-container">
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Monitoring</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Incident Response</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>On-Demand Cloud Tech Support</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Cloud Environment Management</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Billing Management</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Workflow Automation</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-data-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-data-services-line"></div>
              </div>{" "}
              <div className="cloud-data-services-right-section-child">
                <h1 className="cloud-data-services-right-section-child-title">
                  Optimize
                </h1>
                <p className="cloud-data-services-right-section-subtitle">
                  Stay ahead of the curve by leveraging the Cloud for Data:
                  speed of delivery, service reliability and security
                </p>
                <div className="cloud-data-services-right-section-cards-container">
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data Quality</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>KPI Dashboarding</p>
                  </div>
                  <div className="cloud-data-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Data APIs</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-data-services-right-section-btn"
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
