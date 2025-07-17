import * as yup from "yup";

export const emailValidation = yup
  .string()
  .trim()
  .email("Enter a valid email")
  .required("Email is required");

export const passwordValidation = yup
  .string()
  .trim()
  .min(8, "Password must be at least 8 characters")
  .matches(/[a-z]/, "Must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Must contain at least one uppercase letter")
  .matches(/[0-9]/, "Must contain at least one number")
  //  .matches(/[@$!%*?&]/, "Must contain at least one special character")
  .required("Password is required");
