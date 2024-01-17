import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import RevealSection from "./components/RevealSection/RevealSection";
import BoostApp from "./components/BoostApp/BoostApp";
import BoostAppTwo from "./components/BoostApp/BoostAppTwo";
import BoostAppThree from "./components/BoostApp/BoostAppThree";
import Achievements from "./components/Achievements/Achievements";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import ContactUs from "./components/ContactUs/ContactUs";
import UnReveal from "./components/UnReveal/UnReveal";
import Test from "./components/Test/Test";
import FloatingCards from "./components/FloatingCards/FloatingCards";

function Home() {
  return (
    <>
      <AboveTheFold />
      <RevealSection />
      <Test />
      <BoostApp />
      <BoostAppTwo />
      <BoostAppThree />
      <FloatingCards />
      <Achievements />
      <WhoWeAre />
      <UnReveal />
      <ContactUs />
      <br />
    </>
  );
}

export default Home;
