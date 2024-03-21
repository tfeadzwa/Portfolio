import ContactForm from "./ContactForm";
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
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
