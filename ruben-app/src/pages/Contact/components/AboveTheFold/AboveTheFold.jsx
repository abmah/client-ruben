import "./above-the-fold.css";
import ContactATF from "../../../../assets/contact-above-the-fold.svg";
import TopRightArrow from "../../../../assets/top-right-arrow.svg";
function AboveTheFold() {
  return (
    <div className="contact-above-the-fold-wrapper">
      <div className="contact-above-the-fold-container">
        <div className="contact-above-the-fold-content">
          <div className="contact-above-the-fold-left-section">
            <div>
              <h1 className="contact-above-the-fold-main-title">Contact Us</h1>
              <p className="contact-above-the-fold-paragraph">
                Lorem ipsum dolor sit amet,{" "}
                <strong>consectetur adipiscing elit,</strong> sed do eiusmod
                tempor
              </p>
            </div>
            <div className="contact-atf-img">
              <img src={ContactATF} alt="contact-atf" />
            </div>
          </div>

          <form className="contact-atf-form">
            <div className="contact-atf-input-elements">
              <div className="contact-atf-form-group">
                <label htmlFor="name" className="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  className="contact-atf-form-input"
                  placeholder="Enter your name here"
                />
              </div>

              {/* <div className="contact-atf-form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="contact-atf-form-input"
                  placeholder="Enter your last name"
                />
              </div> */}

              <div className="contact-atf-form-group">
                <label htmlFor="email" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="contact-atf-form-group">
                <label htmlFor="phoneNumber" className="form-label">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="contact-atf-form-input"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="contact-atf-form-group form-textarea">
                <label htmlFor="message" className="form-label">
                  MESSEGE
                </label>
                <textarea
                  id="message"
                  className="contact-atf-form-input"
                  placeholder="Enter your message"
                />
              </div>
            </div>
            <button className="contact-atf-button">
              <p>SUBMIT</p>
              <div className="contact-atf-button-arrow">
                <img src={TopRightArrow} alt="top-right-arrow" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
