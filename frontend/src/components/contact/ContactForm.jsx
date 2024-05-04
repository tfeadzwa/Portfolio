import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "../ui/use-toast";

const ContactForm = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [buttonLoad, setButtonLoad] = useState(false);

  const captchaRef = useRef(null);

  const onCaptchaChange = (value) => {
    setIsCaptchaValid(!!value); // Sets the state to true if value is not null or empty
    formik.setFieldValue("reCAPTCHA", captchaRef.current.getValue());
  };

  const errorToast = (description) => {
    toast({
      variant: "distructive",
      title: "Uh oh! Something went wrong.",
      description: `${description}`,
    });
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(20, "Must be at least 20 characters")
      .max(500, "Must be 500 characters or less")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },

    validationSchema,
    onSubmit: async (values) => {
      const token = captchaRef.current.getValue();
      if (!token) {
        // Handle the case where reCAPTCHA is not validated
        errorToast("reCAPTCHA validation failed!");
        return;
      }

      try {
        await axios
          .post("https://portfolio-kh3y.onrender.com/captcha", { token })
          .then()
          .catch((err) =>
            errorToast(`Couldn't validate captcha ${err.message}`)
          );

        // send email
        await axios
          .post("https://portfolio-kh3y.onrender.com/send-email", values)
          .then((resp) => {
            if (resp.status === 200) {
              toast({
                title: "Your message has been successfully submitted!",
                description:
                  "Thank you for reaching out. I'll get back to you as soon as possible.",
              });
              captchaRef.current.reset();
              formik.resetForm();
            } else {
              errorToast("Couldn't send message, please try again");
            }
          })
          .catch(() => errorToast("Couldn't send message, please try again!"));

        setButtonLoad(false);
      } catch (error) {
        setButtonLoad(false);
        errorToast("Failed to send message, please try again!");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact__form">
      <div className="contact__form-inputs">
        <div className="contact__form-input-container">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            id="full-name"
            className="contact__form-full-name outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="contact__form-error">{formik.errors.fullName}</div>
          )}
        </div>

        <div className="contact__form-input-container">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            id="email-address"
            className="contact__form-email outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="contact__form-error">{formik.errors.email}</div>
          )}
        </div>
      </div>

      <textarea
        name="message"
        className="contact__form-message outline-none"
        placeholder="Your Message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message && (
        <div className="contact__form-error">{formik.errors.message}</div>
      )}

      <p className="mt-[1rem]">
        reCAPTCHA <span className="text-[rgb(255,120,0)]">*</span>
      </p>

      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        ref={captchaRef}
        className="mt-[0.5em]"
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
