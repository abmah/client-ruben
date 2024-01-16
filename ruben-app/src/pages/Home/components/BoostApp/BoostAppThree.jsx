import "./boost-app.css";
import GrayFlower from "../../../../assets/blue-flower.svg";
import Progress from "../../../../assets/progress.svg";

function BoostApp() {
  return (
    <div className="boost-app-section">
      {/* <img className="blue-lines-background" src={LinesGray} alt="blue-lines" /> */}
      <div className="boost-app-left-section">
        <h1>Boost app performance, innovate at scale</h1>
        <div className="boost-app-progress-section">
          <img src={Progress} alt="progress" />
          <div className="boost-app-left-section-progress-lables">
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
