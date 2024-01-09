import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import RevealSection from "./components/RevealSection/RevealSection";
import BoostApp from "./components/BoostApp/BoostApp";
import BoostAppTwo from "./components/BoostApp/BoostAppTwo";
import BoostAppThree from "./components/BoostApp/BoostAppThree";
import Achievements from "./components/Achievements/Achievements";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import ContactUs from "./components/ContactUs/ContactUs";
import UnReveal from "./components/UnReveal/UnReveal";
// import ScrollOverlay from "./components/ScrollOverlay/ScrollOverlay";
import Test from "./components/Test/Test";

function Home() {
  return (
    <>
      {/* <ScrollOverlay /> */}
      <AboveTheFold />
      <RevealSection />
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
