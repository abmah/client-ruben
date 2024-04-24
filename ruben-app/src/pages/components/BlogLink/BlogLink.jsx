import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./blog-link.css";
import Rectangle from "../../../assets/blank-rectangle.svg";
import ThreeDotsNext from "../../../assets/three-dots-next.svg";
import ThreeDotsPrev from "../../../assets/three-dots-prev.svg";
import { Autoplay } from "swiper/modules";
import DarkGreyDots from "./dark-grey.svg";
import GreyDots from "./grey.svg";
import OrangeDots from "./orange.svg";
import RainbowDots from "../../../assets/rainbow-dots.svg";
import { Link } from "react-router-dom";

import Box from "./box.jpg";

function BlogLinkCard({ dotColor }) {
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
            <h3>Containerized application workloads Security</h3>
            <p>
              Containerized workloads are often more complex and as a result,
              system administrators need more time, effort and complex
              procedures to apply security measures compared to traditional
              workloads.
            </p>
            <Link
              className="blog-link-button"
              to="/blog-Contenerizedapps-workloadsecurity"
            >
              <p>Learn More</p>
            </Link>
          </div>
          <img className="slide-blank-image" src={Box} alt="blank-image" />
        </div>
        {dots}
      </div>
    </div>
  );
}

export function BlogLink() {
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
    <div className="blog-link-wrapper">
      <div className="blog-link-container">
        <h1 className="blog-link-title">
          insights to navigate your cloud journey
        </h1>
        <div className="blog-link-swiper-container">
          <button
            className="blog-link-nav-button-prev"
            onClick={handlePrevSlide}
          >
            <img src={ThreeDotsPrev} alt="rainbow-dots" />
          </button>
          <Swiper
            autoplay={{
              delay: 3000,
            }}
            ref={swiperRef}
            loop={true}
            modules={[Autoplay]}
            className="blog-link-swiper"
          >
            <SwiperSlide>
              <BlogLinkCard dotColor="grey" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogLinkCard dotColor="dark" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogLinkCard dotColor="orange" />
            </SwiperSlide>
          </Swiper>
          <button
            className="blog-link-nav-button-next"
            onClick={handleNextSlide}
          >
            <img src={ThreeDotsNext} alt="rainbow-dots" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogLink;
