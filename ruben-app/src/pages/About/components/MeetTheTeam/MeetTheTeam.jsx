import { useState, useEffect } from "react";
import "./meet-the-team.css";
import sections from "./sections";
import PropTypes from "prop-types";

const MemberCard = ({ image, name, position, location, background }) => {
  return (
    <div className="meet-the-team-member">
      <div className={`meet-the-team-member-image ${background}`}>
        <img src={image} alt={`${name}-team-member`} />
      </div>
      <h1 className="meet-the-team-member-name">{name}</h1>
      <div className="meet-the-team-member-position-and-location">
        <p>{position}</p>
        <div className="meet-the-team-member-position-and-location-line"></div>
        <p>{location}</p>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

function MeetTheTeam() {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleSwitchClick = (index) => {
    const container = document.querySelector(".meet-the-team-members-wrapper");
    container.classList.add("fade-out");

    setTimeout(() => {
      container.classList.remove("fade-out");
      setSelectedSection(index);
    }, 100); // Adjust as needed
  };

  useEffect(() => {
    // Perform fading animation when selectedSection changes
    // You may need to adjust the timeout and animation duration based on your needs
    const container = document.querySelector(".meet-the-team-members-wrapper");
    container.classList.add("fade-out");

    setTimeout(() => {
      container.classList.remove("fade-out");
    }, 100); // Adjust as needed
  }, [selectedSection]);

  return (
    <div className="meet-the-team-wrapper">
      <div className="meet-the-team-container">
        <h1 className="meet-the-team-title">Meet The Team</h1>
        <div className="meet-the-team-switch">
          {["Leadership", "Sales", "Engineering", "Operations"].map(
            (section, index) => (
              <div
                key={index}
                className={`meet-the-team-switch-item ${
                  selectedSection === index ? "selected" : ""
                }`}
                onClick={() => handleSwitchClick(index)}
              >
                {section}
              </div>
            )
          )}
        </div>
        <div className="meet-the-team-members-wrapper">
          {sections[selectedSection].map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
