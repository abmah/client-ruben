import "./boost-app.css";

import Progress from "../../../../assets/progress.svg";

import YellowLines from "../../../../assets/yellow-lines.svg";

import YellowFlower from "../../../../assets/yellow-flower.svg";

function BoostApp() {
  return (
    <div className="boost-app-section">
      <img
        className="blue-lines-background"
        src={YellowLines}
        alt="blue-lines"
      />
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
        src={YellowFlower}
        alt="boost-app-flower"
      />
    </div>
  );
}

export default BoostApp;
