import "./WhatWeDo.css";
import Flower from "../../assets/flower.svg";

import BackgroundLines from "../../assets/background-lines-lightgray.svg";

function WhatWeDo() {
  return (
    <div className="what-we-do-section">
      <img
        className="background-lines"
        src={BackgroundLines}
        alt="background-lines"
      />
      <div className="what-we-do-text-container">
        <h1 className="what-we-do-text">
          Wrong <span className="what-we-do-text-highlight"> talent</span> is
          the top showstopper of a Transformation Journey.
        </h1>
        <h1 className="what-we-do-text">
          We offer 3 solutions to accelerate transformation.
        </h1>
      </div>
      <img src={Flower} alt="flower" />
      <div className="what-we-do-cards-container">
        <div className="what-we-do-card what-we-do-gray-card">
          <h1 className="what-we-do-card-highlight">Talent Augmentation</h1>
          <p className="what-we-do-card-sub">
            Access to high profile experts in start/stop model
          </p>
        </div>
        <div className="what-we-do-card what-we-do-yellow-card">
          <h1 className="what-we-do-card-highlight">Upskilling Programs</h1>
          <p className="what-we-do-card-sub">
            Access to high profile experts in start/stop model
          </p>
        </div>
        <div className="what-we-do-card what-we-do-blue-card">
          <h1 className="what-we-do-card-highlight">Cloud Tech</h1>
          <p className="what-we-do-card-sub">
            Access to high profile experts in start/stop model
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
