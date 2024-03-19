import MapLocation from "./MapLocation";
import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__title title border-line-h pos-relative">
          <span>Get in Touch</span>
        </div>

        <div className="contact__map pos-relative">
          <MapLocation />
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
              id="email-address"
              placeholder="Email Address"
            />
          </div>

          <textarea
            className="contact__form-message"
            placeholder="Your Message"
          />

          <button
            type="button"
            id="send-button"
            className="contact__form-send-button send-button"
          >
            <span>SEND MESSAGE</span>

            <svg
              className="contact__arrow"
              viewBox="0 0 25 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.67 12.5825L5.5 12.5825C4.95 12.5825 4.5 12.1325 4.5 11.5825C4.5 11.0325 4.95 10.5825 5.5 10.5825L16.67 10.5825L11.79 5.7025C11.4 5.3125 11.4 4.6825 11.79 4.2925C12.18 3.9025 12.81 3.9025 13.2 4.2925L19.79 10.8825C20.18 11.2725 20.18 11.9025 19.79 12.2925L13.2 18.8825C13.0132 19.0698 12.7595 19.175 12.495 19.175C12.2305 19.175 11.9768 19.0698 11.79 18.8825C11.4 18.4925 11.4 17.8525 11.79 17.4625L16.67 12.5825Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
