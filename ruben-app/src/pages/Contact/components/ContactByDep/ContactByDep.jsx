import "./contact-by-dep.css";
import Talent from "../../../../assets/Talent-contact-by-dep.svg";
import Skills from "../../../../assets/skills-contact-by-dep.svg";
import Tech from "../../../../assets/tech-contact-by-dep.svg";
import General from "../../../../assets/general-contact-by-dep.svg";

function ContactByDep() {
  return (
    <div className="contact-by-dep-wrapper">
      <div className="contact-by-dep-container">
        <h1 className="contact-by-dep-title">Contact by department</h1>
        <div className="contact-by-dep-cards-wrapper">
          <div className="contact-by-dep-card">
            <div className="contact-by-dep-card-image">
              <img src={Talent} alt="talent" />
            </div>
            <h1>Talent</h1>
            <p className="contact-by-dep-phone-number">+00 00 000 00 00</p>
            <p className="contact-by-dep-email">talent@dfme.com</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 4:00 PM (GMT +4)
            </p>
          </div>
          <div className="contact-by-dep-card">
            <div className="contact-by-dep-card-image">
              <img src={Skills} alt="talent" />
            </div>
            <h1>Skills</h1>
            <p className="contact-by-dep-phone-number">+00 00 000 00 00</p>
            <p className="contact-by-dep-email">talent@dfme.com</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 4:00 PM (GMT +4)
            </p>
          </div>
          <div className="contact-by-dep-card">
            <div className="contact-by-dep-card-image">
              <img src={Tech} alt="talent" />
            </div>
            <h1>Tech</h1>
            <p className="contact-by-dep-phone-number">+00 00 000 00 00</p>
            <p className="contact-by-dep-email">talent@dfme.com</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 4:00 PM (GMT +4)
            </p>
          </div>
          <div className="contact-by-dep-card">
            <div className="contact-by-dep-card-image">
              <img src={General} alt="talent" />
            </div>
            <h1>General Office</h1>
            <p className="contact-by-dep-phone-number">+00 00 000 00 00</p>
            <p className="contact-by-dep-email">talent@dfme.com</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 4:00 PM (GMT +4)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactByDep;
