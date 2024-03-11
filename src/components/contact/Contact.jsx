import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__title title border-line-h pos-relative">
          <span>Get in Touch</span>
        </div>

        <div className="contact__details">
          <ul className="contact__details-list">
            <li className="info-list">
              <strong>
                <span>Address: </span>
              </strong>
              <span>Harare, ZW</span>
            </li>
            <li className="info-list">
              <strong>
                <span>Email:</span>
              </strong>
              <span>tfeadzwa@gmail.com</span>
            </li>
            <li className="info-list">
              <strong>
                <span>Phone:</span>
              </strong>
              <span>+263 78 394 8647</span>
            </li>
            <li className="info-list">
              <strong>
                <span>Availability:</span>
              </strong>
              <span>Available</span>
            </li>
          </ul>
        </div>

        <div className="contact__form-title title border-line-h pos-relative">
          <span>Contact Form</span>
        </div>

        <form className="contact__form">
          <div className="contact__form-inputs">
            <input
              type="text"
              className="contact__form-full-name"
              id="full-name"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="contact__form-email"
              id="full-name"
              placeholder="Full Name"
            />
          </div>

          <textarea
            className="contact__form-message"
            placeholder="Your Message"
          />

          <button
            type="button"
            id="send-button"
            className="contact__form-send-button"
          >
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
