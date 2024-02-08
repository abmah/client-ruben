import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./achievements.css";
import Rectangle from "../../../../assets/blank-rectangle.svg";
import ThreeDotsNext from "../../../../assets/three-dots-next.svg";
import ThreeDotsPrev from "../../../../assets/three-dots-prev.svg";

import DarkGreyDots from "./dark-grey.svg";
import GreyDots from "./grey.svg";
import OrangeDots from "./orange.svg";
import RainbowDots from "../../../../assets/rainbow-dots.svg";

function AchievementsCard({ dotColor }) {
  let dots;
  switch (dotColor) {
    case "dark":
      dots = <img className="dots" src={DarkGreyDots} alt="dark-dots" />;
      break;
    case "grey":
      dots = <img className="dots" src={GreyDots} alt="grey-dots" />;
      break;
    case "orange":
      dots = <img className="dots" src={OrangeDots} alt="orange-dots" />;
      break;
    default:
      dots = <img className="dots" src={RainbowDots} alt="rainbow-dots" />;
  }

  return (
    <div className="achievement-slide">
      <div className="slide-text-container">
        {dots}
        <div className="slide-text-image">
          <div className="slide-text-content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc.
            </p>
          </div>
          <img
            className="slide-blank-image"
            src={Rectangle}
            alt="blank-image"
          />
        </div>
        {dots}
      </div>
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
          <Swiper ref={swiperRef} loop={true} className="achievements-swiper">
            <SwiperSlide>
              <AchievementsCard dotColor="grey" />
            </SwiperSlide>
            <SwiperSlide>
              <AchievementsCard dotColor="dark" />
            </SwiperSlide>
            <SwiperSlide>
              <AchievementsCard dotColor="orange" />
            </SwiperSlide>
          </Swiper>
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
