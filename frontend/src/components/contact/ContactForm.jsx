import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const captchaRef = useRef(null);
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onCaptchaChange = (value) => {
    setIsCaptchaValid(!!value); // Sets the state to true if value is not null or empty
    formik.setFieldValue("reCAPTCHA", captchaRef.current.getValue());
  };

  const validationSchema = Yup.object({
    user_fullname: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Full name is required"),
    user_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    user_message: Yup.string()
      .min(20, "Must be at least 20 characters")
      .max(500, "Must be 500 characters or less")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      user_fullname: "",
      user_email: "",
      user_message: "",
    },

    validationSchema,
    onSubmit: async (values) => {
      const token = captchaRef.current.getValue();
      if (!token) {
        // Handle the case where reCAPTCHA is not validated
        console.log("reCAPTCHA validation failed");
        return;
      }

      try {
        const response = await axios.post(
          "https://portfolio-kh3y.onrender.com/post",
          {
            token,
          }
        );
        console.log(response);

        const emailResponse = await emailjs.send(
          "service_931uj3m",
          "contact_form",
          values,
          PUBLIC_KEY
        );
        console.log(
          "Email successfully sent!",
          emailResponse.status,
          emailResponse.text
        );

        // Reset reCAPTCHA and form after successful submission
        captchaRef.current.reset();
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact__form">
      <div className="contact__form-inputs">
        <div className="contact__form-input-container">
          <input
            type="text"
            name="user_fullname"
            placeholder="Full Name"
            id="full-name"
            className="contact__form-full-name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_fullname}
          />
          {formik.touched.user_fullname && formik.errors.user_fullname && (
            <div className="contact__form-error">
              {formik.errors.user_fullname}
            </div>
          )}
        </div>

        <div className="contact__form-input-container">
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            id="email-address"
            className="contact__form-email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_email}
          />
          {formik.touched.user_email && formik.errors.user_email && (
            <div className="contact__form-error">
              {formik.errors.user_email}
            </div>
          )}
        </div>
      </div>

      <textarea
        name="user_message"
        className="contact__form-message"
        placeholder="Your Message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.user_message}
      />
      {formik.touched.user_message && formik.errors.user_message && (
        <div className="contact__form-error">{formik.errors.user_message}</div>
      )}

      <p style={{ marginTop: "1rem" }}>
        reCAPTCHA <span style={{ color: "rgb(255, 120, 0)" }}>*</span>
      </p>

      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        ref={captchaRef}
        style={{ marginTop: "0.5rem" }}
        onChange={onCaptchaChange}
      />

      {formik.isValid && isCaptchaValid && (
        <button
          type="submit"
          id="send-button"
          className="contact__form-send-button send-button"
          disabled={
            !formik.isValid || formik.isSubmitting || !formik.values.reCAPTCHA
          }
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
      )}
    </form>
  );
};

export default ContactForm;
