import { useState } from "react";
import "./contact-us.css";
import TopRightArrow from "../../../assets/top-right-arrow.svg";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      from_name: firstName + " " + lastName,
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
          setFirstName("");
          setLastName("");
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
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <div className="contact-us-text-section">
          <h1 className="contact-us-title">Contact Us</h1>
          <h1 className="contact-us-sub-title">
            Contact us for inquiries, feedback, or any assistance you may need.
          </h1>
        </div>

        <form className="contact-us-form-section" onSubmit={sendEmail}>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="contact-us-button">
            <p>Submit</p>
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
