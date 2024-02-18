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
            <p className="contact-by-dep-phone-number">+971 58 104 34 75</p>
            <p className="contact-by-dep-email">talent@digital-future.me</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 6:00 PM GST
            </p>
          </div>
          <div className="contact-by-dep-card">
            <div className="contact-by-dep-card-image">
              <img src={Skills} alt="talent" />
            </div>
            <h1>Skills</h1>
            <p className="contact-by-dep-phone-number">+971 50 465 9425</p>
            <p className="contact-by-dep-email">skills@digital-future.me</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 6:00 PM GST
            </p>
          </div>
          <div className="contact-by-dep-card">
            <div className="contact-by-dep-card-image">
              <img src={Tech} alt="talent" />
            </div>
            <h1>Tech</h1>
            <p className="contact-by-dep-phone-number">+971 52 308 92 09</p>
            <p className="contact-by-dep-email">cloud@digital-future.me</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 6:00 PM GST
            </p>
          </div>
          <div className="contact-by-dep-card">
            <div className="contact-by-dep-card-image">
              <img src={General} alt="talent" />
            </div>
            <h1>General Office</h1>
            <p className="contact-by-dep-phone-number">+971 58 104 3475</p>
            <p className="contact-by-dep-email">hello@digital-future.me</p>
            <p className="contact-by-dep-time">
              <strong>M-F </strong>8:00 AM - 6:00 PM GST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactByDep;
