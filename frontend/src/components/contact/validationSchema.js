import * as Yup from "yup";

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

export default validationSchema;
