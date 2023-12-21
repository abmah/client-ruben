import LandingGray from "../../assets/landing-gray.svg";
import "./landingpage.css";

function LandingPage() {
  return (
    <div className="landing-page-gray">
      <div>
        <img src={LandingGray} alt="landing-gray-image" />
      </div>
      <div>
        <h1>
          Supercharge Your Transformation Projects with Talent Augmentation
        </h1>
        <p>Flexibly assign high caliber experts to strengthen your projects</p>
        <div>
          <button>view servies</button>
          <button>Lets talk</button>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default LandingPage;
