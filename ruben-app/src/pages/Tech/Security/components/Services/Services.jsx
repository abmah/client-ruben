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
              trigger: ".cloud-security-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".cloud-security-services-nav-section",
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
      ".cloud-security-services-right-section"
    );
    const childElements = rightSection.getElementsByClassName(
      "cloud-security-services-right-section-child"
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
      <div className="cloud-security-services-wrapper">
        <div className="cloud-security-services-container">
          <h1 className="cloud-security-services-main-title">
            Stay proactive against potential threats: enhance your assurance in
            the security of your cloud infrastructure.
          </h1>
          <div className="cloud-security-services-content">
            <div className="cloud-security-services-nav-section">
              <div
                className={`cloud-security-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Strategy
              </div>
              <div
                className={`cloud-security-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Consulting
              </div>
              <div
                className={`cloud-security-services-nav-item ${
                  activeNav === 2 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Manage
              </div>
              <div
                className={`cloud-security-services-nav-item ${
                  activeNav === 3 ? "active-cloud" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Optimize
              </div>
            </div>
            <div className="cloud-security-services-right-section">
              <div className="cloud-security-services-right-section-child">
                <h1 className="cloud-security-services-right-section-child-title">
                  Strategy
                </h1>
                <p className="cloud-security-services-right-section-subtitle">
                  Build with us a framework to harness the full potential of
                  cloud computing, staying secure and compliant with
                  regulations.
                </p>
                <div className="cloud-security-services-right-section-cards-container">
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Customer Data Protection</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Risk Managment & Reduction</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Exposure Management</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Regulatory Compliance Strategy</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Vulnerabilities Analysis</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Access Transparency, Access Approval</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-security-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-security-services-line"></div>
              </div>{" "}
              <div className="cloud-security-services-right-section-child">
                <h1 className="cloud-security-services-right-section-child-title">
                  Consulting
                </h1>
                <p className="cloud-security-services-right-section-subtitle">
                  Let us deliver your seamless transition of applications and
                  data to the cloud, ensuring top level security.
                </p>
                <div className="cloud-security-services-right-section-cards-container">
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Gitlab</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>BeyondCorp</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Terraform</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Automated Security Controls</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Network Perimeter Controls </p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Common Vulnerabilities and Exposures (CVEs)</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-security-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="cloud-security-services-line"></div>
              </div>{" "}
              <div className="cloud-security-services-right-section-child">
                <h1 className="cloud-security-services-right-section-child-title">
                  Manage
                </h1>
                <p className="cloud-security-services-right-section-subtitle">
                  Comprehensive security management on your behalf, with
                  monitoring what matters, proactively reducing incidents and
                  automating repeatable workflows.
                </p>
                <div className="cloud-security-services-right-section-cards-container">
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Security Monitoring</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Incident Response</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>On-Demand Security Support</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Security Tools Deployment and Licencing</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Billing Management</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Compliance as a Service</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-security-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="cloud-security-services-line"></div>
              </div>{" "}
              <div className="cloud-security-services-right-section-child">
                <h1 className="cloud-security-services-right-section-child-title">
                  Optimize
                </h1>
                <p className="cloud-security-services-right-section-subtitle">
                  Stay ahead of the curve by leveraging the latest security
                  trends in cloud.
                </p>
                <div className="cloud-security-services-right-section-cards-container">
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>Automated Security Workflows</p>
                  </div>
                  <div className="cloud-security-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <p>AI-Powered Security Controls</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="cloud-security-services-right-section-btn"
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
