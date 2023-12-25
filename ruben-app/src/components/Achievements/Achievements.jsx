import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./achievements.css";
import Rectangle from "../../assets/blank-rectangle.svg";

import ThreeDotsNext from "../../assets/three-dots-next.svg";
import ThreeDotsPrev from "../../assets/three-dots-prev.svg";
import TopRightArrow from "../../assets/top-right-arrow.svg";

import RainbowDots from "../../assets/rainbow-dots.svg";

function AchievementsCard() {
  return (
    <div className="achievement-slide">
      <div className="slide-text-container">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc.
        </p>
        <button>
          <p>BUTTON</p>
          <div className="achievement-button-arrow">
            <img src={TopRightArrow} alt="top-right-arrow" />
          </div>
        </button>
      </div>
      <img src={Rectangle} alt="blank-image" />
    </div>
  );
}

export function Achievements() {
  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="achievements-wrapper">
      <div className="achievements-container">
        <h1 className="achievements-title">Achievements</h1>
        <div className="achievements-swiper-container">
          <button
            className="achievements-nav-button-prev"
            onClick={handlePrevSlide}
          >
            <img src={ThreeDotsPrev} alt="rainbow-dots" />
          </button>
          <img src={RainbowDots} alt="rainbow-dots" />
          <Swiper ref={swiperRef} loop={true} className="achievements-swiper">
            <SwiperSlide>
              <AchievementsCard />
            </SwiperSlide>
            <SwiperSlide>
              <AchievementsCard />
            </SwiperSlide>
            <SwiperSlide>
              <AchievementsCard />
            </SwiperSlide>
          </Swiper>{" "}
          <img src={RainbowDots} alt="rainbow-dots" />
          <button
            className="achievements-nav-button-next"
            onClick={handleNextSlide}
          >
            <img src={ThreeDotsNext} alt="rainbow-dots" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
