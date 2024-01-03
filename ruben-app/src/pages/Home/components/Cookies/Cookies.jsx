import "./cookies.css";
import CookiesLogo from "../../../../assets/cookies.svg";

function Cookies() {
  return (
    <div className="cookies-wrapper">
      <div className="cookies-container">
        <button className="cookies-button">
          <img src={CookiesLogo} alt="cookies" />
        </button>
      </div>
    </div>
  );
}

export default Cookies;
