import "./App.css";

import Header from "./components/Header/Header";
// import PlaceHolder from "./components/PlaceHolder/PlaceHolder";
import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import RevealSection from "./components/RevealSection/RevealSection";

function App() {
  return (
    <>
      <Header />
      <AboveTheFold />
      <RevealSection />
      {/* <PlaceHolder /> */}
      {/* <WhatWeDo /> */}
      {/* <div className="line1"></div> */}
    </>
  );
}

export default App;
