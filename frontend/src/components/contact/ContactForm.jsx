import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { Button } from "../ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "../ui/use-toast";

const ContactForm = () => {
  const [buttonLoad, setButtonLoad] = useState(false);
  const captchaRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
      reCAPTCHA: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setButtonLoad(true);
      const token = values.reCAPTCHA;
      if (!token) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "reCAPTCHA validation failed!",
        });
        setButtonLoad(false);
        return;
      }

      try {
        const captchaResponse = await axios.post(
          "https://portfolio-kh3y.onrender.com/captcha",
          { token }
        );

        if (captchaResponse.status === 200) {
          const emailResponse = await axios.post(
            "https://portfolio-kh3y.onrender.com/send-email",
            values
          );

          if (emailResponse.status === 200) {
            toast({
              title: "Your message has been successfully submitted!",
              description:
                "Thank you for reaching out. I'll get back to you as soon as possible.",
            });
            captchaRef.current.reset();
            resetForm();
          } else {
            throw new Error("Email not sent");
          }
        } else {
          throw new Error("Captcha not validated");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
        });
      } finally {
        setButtonLoad(false);
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
        onChange={(value) => {
          formik.setFieldValue("reCAPTCHA", value || "");
        }}
      />

      <Button
        type="submit"
        disabled={
          !formik.isValid || formik.isSubmitting || !formik.values.reCAPTCHA
        }
        className="group py-[1.5rem] border-[0.12rem] bg-transparent hover:bg-transparent hover:text-[#4caf51] hover:border-[#4caf51]"
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
