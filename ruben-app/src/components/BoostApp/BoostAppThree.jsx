import "./boost-app.css";
import GrayFlower from "./gray-flower.svg";
import Progress from "./progress.svg";
import LinesGray from "./gray-lines.svg";

function BoostApp() {
  return (
    <div className="boost-app-section">
      <img className="blue-lines-background" src={LinesGray} alt="blue-lines" />
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
      <img className="gray-flower" src={GrayFlower} alt="gray-flower" />
    </div>
  );
}

export default BoostApp;
