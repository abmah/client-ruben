import "./boost-app.css";
import GrayFlower from "../../../../assets/gray-flower.svg";
import Progress from "../../../../assets/progress.svg";
import ProgressWhite from "../../../../assets/progress-white.svg";

function BoostApp() {
  return (
    <div className="boost-app-section">
      {/* <img className="blue-lines-background" src={LinesBlue} alt="blue-lines" /> */}
      <div className="boost-app-left-section">
        <h1>Boost app performance, innovate at scale</h1>
        <div className="boost-app-progress-section">
          <img className="progress" src={Progress} alt="progress" />
          <img className="progress-white" src={ProgressWhite} alt="progress" />
          <div className="boost-app-left-section-progress-lables boost-app-left-section-progress-lables-white">
            <p>Infrastructur Modernization</p>
            <p>Data Security</p>
            <p>Data Analytics</p>
            <p>Productivity & Collaboration</p>
          </div>
        </div>
      </div>
      <img
        className="boost-app-flower"
        src={GrayFlower}
        alt="boost-app-flower"
      />
    </div>
  );
}

export default BoostApp;
