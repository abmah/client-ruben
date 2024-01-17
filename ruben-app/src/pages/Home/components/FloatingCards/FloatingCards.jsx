import "./floating-cards.css";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FloatingCards() {
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
              trigger: ".floating-cards-wrapper",
              start: "top top",
              end: "bottom bottom",
              pin: ".floating-cards-background",
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

  return (
    <div className="floating-cards-wrapper">
      <div className="floating-cards-container">
        <div className="spacing"></div>
        <div className="floating-cards-parent">
          <div className="floating-card floating-card-one">
            <div className="floating-card-content">
              <div className="floating-card-title">some title here </div>
              <div className="floating-card-second-title">
                second title here
              </div>
            </div>
          </div>
          <div className="floating-card floating-card-two">
            <div className="floating-card-content">
              <div className="floating-card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                exercitationem autem, odio possimus similique rem inventore illo
                fugit minus quibusdam dolore vero. Dolores commodi recusandae
                corrupti nobis sed illum dolor.
              </div>
              <div className="floating-card-second-title">hello</div>
            </div>
          </div>
          <div className="floating-card floating-card-three">
            <div className="floating-card-content">
              <div className="floating-card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                exercitationem autem, odio possimus similique rem inventore illo
                fugit minus quibusdam dolore vero. Dolores commodi recusandae
                corrupti nobis sed illum dolor.
              </div>
              <div className="floating-card-second-title">hello</div>
            </div>
          </div>{" "}
        </div>
        <div className="spacing-two "></div>
        <div className="floating-cards-background">
          <h1>Global recognition and awards</h1>
        </div>
      </div>
    </div>
  );
}

export default FloatingCards;
