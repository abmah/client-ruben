import "./above-the-fold.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import AboveTheFoldSectionOne from "./AboveTheFoldSectionOne";
import AboveTheFoldSectionTwo from "./AboveTheFoldSectionTwo";
import AboveTheFoldSectionThree from "./AboveTheFoldSectionThree";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function LandingPage() {
  const swiperRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    const percentage = (1 - progress) * 100;
    document.documentElement.style.setProperty("--progress", `${percentage}%`);
  };

  // const handleDoubleClick = () => {
  //   // You can customize this logic based on your needs
  //   const targetSlideIndex = 2; // Change this to the desired slide index
  //   swiperRef.current.swiper.slideTo(targetSlideIndex);
  // };

  return (
    <div className="above-the-fold-container">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        scrollbar={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
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
