import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name address is required"),
  lastName: Yup.string().required("LastName address is required"),
  email: Yup.string().required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters long"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .min(3, "Password must be at least 3 characters long"),
});
