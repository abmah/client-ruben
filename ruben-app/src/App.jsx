import "./App.css";

import Header from "./components/Header/Header";
import PlaceHolder from "./components/Main/PlaceHolder";
import AboveTheFold from "./components/AboveTheFold/AboveTheFold";

function App() {
  return (
    <>
      <AboveTheFold />
      <PlaceHolder />
      <Header />
      {/* <div className="line1"></div> */}
    </>
  );
}

export default App;
