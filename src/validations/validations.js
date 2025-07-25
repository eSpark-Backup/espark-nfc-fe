import * as yup from "yup";

const emailValidation = yup
  .string()
  .trim()
  .email("Enter a valid email")
  .required("Email is required");

const passwordValidation = yup
  .string()
  .trim()
  .min(8, "Password must be at least 8 characters")
  .matches(/[a-z]/, "Must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Must contain at least one uppercase letter")
  .matches(/[0-9]/, "Must contain at least one number")
  //  .matches(/[@$!%*?&]/, "Must contain at least one special character")
  .required("Password is required");

const imageValidation = yup
  .mixed()
  .required("Image is required")
  .test("fileSize", "File size too large", (value) => {
    return !value || (value && value.size <= 5 * 1024 * 1024);
  })
  .test("fileType", "Unsupported file format", (value) => {
    return (
      !value ||
      (value && ["image/jpeg", "image/png", "image/webp"].includes(value.type))
    );
  });

const nameValidation = (label) =>
  yup.string().required(`${label} name is required`);

const websiteLinkValidation = yup
  .string()
  .url("Invalid website URL")
  .required("Website link is required");

const establishedValidation = yup
  .string()
  .matches(/^\d{4}$/, "Must be a valid 4-digit year")
  .required("Established year is required");

const addressValidation = yup.string().required("Address is required");

const buttonNameValidation = yup.string().required("Button name is required");

const redirectedUrlValidation = yup
  .string()
  .url("Invalid redirect URL")
  .required("Redirected URL is required");

const noOfEmpolyeesValidation = yup
  .number()
  .typeError("Must be a number")
  .required("No. of employee is required")
  .min(1, "Must be at least 1");

const dateTimeValidation = (label) =>
  yup.date().typeError("Invalid date format").required(`${label} is required`);

const departmentValidation = yup.string().required("Department is required");

const phoneNumberValidation = yup
  .string()
  .matches(/^\d+$/, "Phone number must be digits only")
  .min(7, "Phone number is too short")
  .max(15, "Phone number is too long")
  .required("Phone number is required");

const ageValidation = yup
  .number()
  .typeError("Age must be a number")
  .min(18, "Minimum age is 18")
  .max(99, "Maximum age is 99")
  .required("Age is required");

const urlValidation = yup
  .string()
  .url("Must be a valid URL")
  .required("URL is required");

export {
  emailValidation,
  passwordValidation,
  imageValidation,
  nameValidation,
  websiteLinkValidation,
  establishedValidation,
  addressValidation,
  buttonNameValidation,
  redirectedUrlValidation,
  noOfEmpolyeesValidation,
  dateTimeValidation,
  departmentValidation,
  phoneNumberValidation,
  ageValidation,
  urlValidation,
};
