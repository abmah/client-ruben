import "./contact-us.css";
import TopRightArrow from "../../../assets/top-right-arrow.svg";
function ContactUs() {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <div className="contact-us-text-section">
          <h1 className="contact-us-title">Contact Us</h1>
          <h1 className="contact-us-sub-title">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
        </div>

        <form className="contact-us-form-section">
          <div className="contact-us-input-elements">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-input"
                placeholder="Enter your first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-input"
                placeholder="Enter your last name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group form-textarea">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-input"
                placeholder="Enter your message"
              />
            </div>
          </div>
          <button className="contact-us-button">
            <p>BUTTON</p>
            <div className="contact-us-button-arrow">
              <img src={TopRightArrow} alt="top-right-arrow" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
