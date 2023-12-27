import "./above-the-fold.css";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import AboveTheFoldSectionOne from "./Items/AboveTheFoldSectionOne";
import AboveTheFoldSectionTwo from "./Items/AboveTheFoldSectionTwo";
import AboveTheFoldSectionThree from "./Items/AboveTheFoldSectionThree";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function LandingPage() {
  const swiperRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    const percentage = (1 - progress) * 100;
    document.documentElement.style.setProperty("--progress", `${percentage}%`);
  };

  useEffect(() => {
    // Function to update Swiper instance on window resize
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="above-the-fold-container">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="above-the-fold-swiper"
      >
        <SwiperSlide>
          <AboveTheFoldSectionOne />
        </SwiperSlide>
        <SwiperSlide>
          <AboveTheFoldSectionTwo />
        </SwiperSlide>
        <SwiperSlide>
          <AboveTheFoldSectionThree />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LandingPage;
