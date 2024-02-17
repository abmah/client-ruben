import "./above-the-fold.css";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import AboveTheFoldSectionOne from "./Items/AboveTheFoldSectionOne";
import AboveTheFoldSectionTwo from "./Items/AboveTheFoldSectionTwo";
import AboveTheFoldSectionThree from "./Items/AboveTheFoldSectionThree";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

function LandingPage({ scrollRef, scrollRefTwo, scrollRefThree }) {
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

  const scrollToRef = (num) => {
    if (scrollRef.current) {
      if (num == 1) {
        console.log("scrolling to ref");
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (num == 2) {
        scrollRefTwo.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: false,
          block: "center",
        });
      } else {
        scrollRefThree.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: false,
          block: "center",
        });
      }
    }
  };

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
          <AboveTheFoldSectionOne scrollToRef={scrollToRef} />
        </SwiperSlide>
        <SwiperSlide>
          <AboveTheFoldSectionTwo scrollToRef={scrollToRef} />
        </SwiperSlide>
        <SwiperSlide>
          <AboveTheFoldSectionThree scrollToRef={scrollToRef} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LandingPage;
LandingPage.propTypes = {
  scrollRef: PropTypes.object.isRequired,
  scrollRefTwo: PropTypes.object.isRequired,
  scrollRefThree: PropTypes.object.isRequired,
};
