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
              trigger: ".skills-academy-services-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".skills-academy-services-nav-section",
              onUpdate: (self) => {
                const progress = self.progress * 100;
                const newActiveNav = Math.min(4, Math.floor(progress / 20));
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
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="skills-academy-services-wrapper">
        <div className="skills-academy-services-container">
          <h1 className="skills-academy-services-main-title">
            Learn how to build a plan and grow online presence for any type of
            business
          </h1>
          <div className="skills-academy-services-content">
            <div className="skills-academy-services-nav-section">
              <div
                className={`skills-academy-services-nav-item services-nav-item-dark ${
                  activeNav === 0 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Fundamentals
              </div>
              <div
                className={`skills-academy-services-nav-item services-nav-item-long ${
                  activeNav === 1 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Google
              </div>
              <div
                className={`skills-academy-services-nav-item ${
                  activeNav === 2 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Social Media
              </div>
              <div
                className={`skills-academy-services-nav-item ${
                  activeNav === 3 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Analytics
              </div>
              <div
                className={`skills-academy-services-nav-item ${
                  activeNav === 4 ? "active-skills" : ""
                }`}
                onClick={() => handleClick(4)}
              >
                Email
              </div>
            </div>
            <div className="skills-academy-services-right-section">
              <div className="skills-academy-services-right-section-child">
                <h1 className="skills-academy-services-right-section-child-title">
                  Fundamentals
                </h1>
                <p className="skills-academy-services-right-section-subtitle">
                  Discover the steps to execute an effective online marketing
                  strategy. Gain insights into the benefits of various marketing
                  channels and learn how to leverage them to attain your
                  marketing and business objectives.
                </p>
                <div className="skills-academy-services-right-section-cards-container">
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Digital Marketing Fundamentals
                      </p>
                      <div>
                        <p>Format: Introduction Class</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-academy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="skills-academy-services-line"></div>
              </div>{" "}
              <div className="skills-academy-services-right-section-child">
                <h1 className="skills-academy-services-right-section-child-title">
                  Google
                </h1>
                <p className="skills-academy-services-right-section-subtitle">
                  This module delves into optimizing the use of Google Search to
                  immediate and long term customer acquisition tactics you can
                  take to grow your business, including organic search and paid
                  ads tools as well as ecommerce.
                </p>
                <div className="skills-academy-services-right-section-cards-container">
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Google Search
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Google Search Advanced
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        SEO Fundamentals
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Google Shopping
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-academy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>
                <div className="skills-academy-services-line"></div>
              </div>{" "}
              <div className="skills-academy-services-right-section-child">
                <h1 className="skills-academy-services-right-section-child-title">
                  Social Media
                </h1>
                <p className="skills-academy-services-right-section-subtitle">
                  Acquire the skills to develop a robust social media and
                  content marketing strategy that sets you apart from the
                  multitude of brands vying for consumer attention. Utilize AI
                  to craft compelling visuals that engage and captivate your
                  audience.
                </p>
                <div className="skills-academy-services-right-section-cards-container">
                  {" "}
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Meta Ads
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Instagram Ads Advanced
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-academy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="skills-academy-services-line"></div>
              </div>{" "}
              <div className="skills-academy-services-right-section-child">
                <h1 className="skills-academy-services-right-section-child-title">
                  Analytics
                </h1>
                <p className="skills-academy-services-right-section-subtitle">
                  In-depth knowledge of web analytics and tag management
                  covering essential concepts and hands-on implementation
                  tactics to effectively analyze website performance and make
                  data-driven decisions to optimize online campaigns.
                </p>
                <div className="skills-academy-services-right-section-cards-container">
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Google Tag Manager
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Analytics 4
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Analytics 4 Advanced
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Data Studio
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-academy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
                <div className="skills-academy-services-line"></div>
              </div>{" "}
              <div className="skills-academy-services-right-section-child">
                <h1 className="skills-academy-services-right-section-child-title">
                  Email
                </h1>
                <p className="skills-academy-services-right-section-subtitle">
                  Learn how to craft compelling email campaigns with effective
                  audience engagement and segmentations as well as optimized
                  deliverability. From building subscriber lists to creating
                  personalized and impactful content, adjusted per segment.
                </p>
                <div className="skills-academy-services-right-section-cards-container">
                  <div className="skills-academy-services-right-section-card">
                    <img src={Clowd} alt="services-image" />
                    <div className="skills-academy-services-right-section-card-text">
                      <p className="skills-academy-services-right-section-card-text-title">
                        Email Campaigns
                      </p>
                      <div>
                        <p>Format: Hands-on Labs</p>
                        <p> Duration: 9H </p>
                        <p> Cost: 599 AED</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="skills-academy-services-right-section-btn"
                >
                  Let&#39;s Connect
                </Link>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
