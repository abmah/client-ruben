import Header from "./components/Header/Header";
import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import RevealSection from "./components/RevealSection/RevealSection";
import BoostApp from "./components/BoostApp/BoostApp";
import BoostAppTwo from "./components/BoostApp/BoostAppTwo";
import BoostAppThree from "./components/BoostApp/BoostAppThree";
import Achievements from "./components/Achievements/Achievements";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import UnReveal from "./components/UnReveal/UnReveal";
import Cookies from "./components/Cookies/Cookies";
import ScrollOverlay from "./components/ScrollOverlay/ScrollOverlay";

function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <Cookies /> */}
      <ScrollOverlay />
      <AboveTheFold />
      <RevealSection />
      <BoostApp />
      <BoostAppTwo />
      <BoostAppThree />
      <Achievements />
      <WhoWeAre />
      <UnReveal />
      <ContactUs />
      {/* <Footer /> */}
      <br />
    </>
  );
}

export default Home;
