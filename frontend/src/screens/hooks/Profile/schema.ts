import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  mobileNumber: Yup.string(),
});

export const validationSchemaPassword = Yup.object().shape({
  currentPassword: Yup.string(),
  newPassword: Yup.string(),
  confirmPassword: Yup.string(),
});

