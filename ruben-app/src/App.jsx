import "./App.css";

import Header from "./components/Header/Header";
// import PlaceHolder from "./components/PlaceHolder/PlaceHolder";
import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import RevealSection from "./components/RevealSection/RevealSection";
import BoostApp from "./components/BoostApp/BoostApp";

import BoostAppTwo from "./components/BoostApp/BoostAppTwo";
import BoostAppThree from "./components/BoostApp/BoostAppThree";
import Achievements from "./components/Achievements/Achievements";

function App() {
  return (
    <>
      <Header />
      <AboveTheFold />
      <RevealSection>
        <WhatWeDo />
      </RevealSection>
      <BoostApp />
      <BoostAppTwo />
      <BoostAppThree />
      <Achievements />
    </>
  );
}

export default App;
