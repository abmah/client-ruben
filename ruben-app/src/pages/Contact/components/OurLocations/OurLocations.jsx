import "./our-locations.css";
import Pin from "../../../../assets/location-pin.svg";
function OurLocations() {
  return (
    <div className="our-locations-wrapper">
      <div className="our-locations-container">
        <h1>Our locations</h1>
        <div className="our-locations-cards">
          <div className="our-locations-card">
            <div className="our-locations-card-header">
              <img src={Pin} alt="location-pin" />
              <p>
                Dubai <br /> 62 Marchmont St, London WC1N 1AB, United Kingdom
              </p>
            </div>
          </div>
          <div className="our-locations-card">
            <div className="our-locations-card-header">
              <img src={Pin} alt="location-pin" />
              <p>
                Dubai <br /> 62 Marchmont St, London WC1N 1AB, United Kingdom
              </p>
            </div>
          </div>
          <div className="our-locations-card">
            <div className="our-locations-card-header">
              <img src={Pin} alt="location-pin" />
              <p>
                Dubai <br /> 62 Marchmont St, London WC1N 1AB, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurLocations;
