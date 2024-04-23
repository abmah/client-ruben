import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./above-the-fold.css";
import ContactATF from "../../../../assets/contact-above-the-fold.svg";
import TopRightArrow from "../../../../assets/top-right-arrow.svg";

function AboveTheFold() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phoneNumber,
      message: message,
    };

    emailjs
      .send(
        "service_5rldu9p",
        "template_u27cgbi",
        templateParams,
        "fD6S5WlPAnIyVCaFS"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully.");
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          e.target.reset(); // Optionally, reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-above-the-fold-wrapper">
      <div className="contact-above-the-fold-container">
        <div className="contact-above-the-fold-content">
          <div className="contact-above-the-fold-left-section">
            <div>
              <h1 className="contact-above-the-fold-main-title">Contact Us</h1>
              <p className="contact-above-the-fold-paragraph">
                Contact us for{" "}
                <strong>inquiries, feedback, or assistance.</strong> Our team is
                ready to respond promptly, within 1 hour during working time.
              </p>
            </div>
            <div className="contact-atf-img">
              <img src={ContactATF} alt="contact-atf" />
            </div>
          </div>

          <form className="contact-atf-form" onSubmit={sendEmail}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="contact-atf-form-group">
                <label htmlFor="email" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div className="contact-atf-form-group form-textarea">
                <label htmlFor="message" className="form-label">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  className="contact-atf-form-input"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="contact-atf-button">
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
