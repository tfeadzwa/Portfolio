import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [buttonLoad, setButtonLoad] = useState(false);

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

        setButtonLoad(false);
        // Reset reCAPTCHA and form after successful submission
        captchaRef.current.reset();
        formik.resetForm();

        toast("Email has been sent!", {
          description:
            "Your email has been sent, I'll replay to you very soon!",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
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
            className="contact__form-full-name outline-none"
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
            className="contact__form-email outline-none"
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
        className="contact__form-message outline-none"
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

      <Button
        type="submit"
        disabled={
          !formik.isValid || formik.isSubmitting || !formik.values.reCAPTCHA
        }
        className="group py-[1.5rem] border-[0.12rem] bg-transparent hover:bg-transparent hover:text-[#4caf51] hover:border-[#4caf51]"
        onClick={() => setButtonLoad(true)}
      >
        {buttonLoad ? (
          <div className="flex items-center">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            PLEASE WAIT...
          </div>
        ) : (
          <div className="flex items-center gap-[0.125em]">
            SEND MESSAGE
            <ArrowRight className="group-hover:translate-x-2 w-[22px] h-[22px] transition-all duration-300 ease-in-out"></ArrowRight>
          </div>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;

//modify here
