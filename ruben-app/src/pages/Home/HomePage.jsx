import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import RevealSection from "./components/RevealSection/RevealSection";
// import BoostApp from "./components/BoostApp/BoostApp";
// import BoostAppTwo from "./components/BoostApp/BoostAppTwo";
// import BoostAppThree from "./components/BoostApp/BoostAppThree";
import Achievements from "./components/Achievements/Achievements";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

// import UnReveal from "./components/UnReveal/UnReveal";

import FloatingCards from "./components/FloatingCards/FloatingCards";
import ContactUs from "../components/ContactUs/ContactUs";
import RotatingFlower from "./components/RotatingFlower/RotatingFlower";
import Banner from "./components/Banner/Banner";
import { useRef } from "react";
function Home() {
  let scrollRef = useRef(null);
  let scrollRefTwo = useRef(null);
  let scrollRefThree = useRef(null);
  return (
    <>
      <AboveTheFold />
      <Banner />
      <RevealSection />
      <FloatingCards
        scrollRef={scrollRef}
        scrollRefTwo={scrollRefTwo}
        scrollRefThree={scrollRefThree}
      />
      <RotatingFlower
        scrollRef={scrollRef}
        scrollRefTwo={scrollRefTwo}
        scrollRefThree={scrollRefThree}
      />
      {/* <BoostApp />
      <BoostAppTwo />
      <BoostAppThree /> */}
      <Achievements />
      <WhoWeAre />
      {/* <UnReveal /> */}
      <ContactUs />
      <br />
    </>
  );
}

export default Home;
