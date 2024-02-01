import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import RevealSection from "./components/RevealSection/RevealSection";
import BoostApp from "./components/BoostApp/BoostApp";
import BoostAppTwo from "./components/BoostApp/BoostAppTwo";
import BoostAppThree from "./components/BoostApp/BoostAppThree";
import Achievements from "./components/Achievements/Achievements";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

import UnReveal from "./components/UnReveal/UnReveal";
import Test from "./components/Test/Test";
import FloatingCards from "./components/FloatingCards/FloatingCards";
import ContactUs from "../Components/ContactUs/ContactUs";
function Home() {
  return (
    <>
      <AboveTheFold />
      <RevealSection />
      <FloatingCards />
      <Test />
      <BoostApp />
      <BoostAppTwo />
      <BoostAppThree />
      <Achievements />
      <WhoWeAre />
      <UnReveal />
      <ContactUs />
      <br />
    </>
  );
}

export default Home;
