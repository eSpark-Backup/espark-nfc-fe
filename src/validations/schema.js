import * as yup from "yup";

import {
  addressValidation,
  ageValidation,
  buttonNameValidation,
  dateTimeValidation,
  departmentValidation,
  emailValidation,
  establishedValidation,
  imageValidation,
  nameValidation,
  noOfEmpolyeesValidation,
  passwordValidation,
  phoneNumberValidation,
  redirectedUrlValidation,
  urlValidation,
  websiteLinkValidation,
} from "./validations";

const loginFormSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

const companyProfileFormSchema = yup.object({
  image: imageValidation,
  name: nameValidation("Company"),
  website_link: websiteLinkValidation,
  established: establishedValidation,
  address: addressValidation,
  button_name: buttonNameValidation,
  redirected_url: redirectedUrlValidation,
});

const departmentFormSchema = yup.object({
  image: imageValidation,
  name: nameValidation("Department"),
  email: emailValidation,
  no_of_empolyee: noOfEmpolyeesValidation,
  creation_time: dateTimeValidation("Creation Time"),
});

const employeeFormSchema = yup.object({
  image: imageValidation,
  name: nameValidation("Employee"),
  email: emailValidation,
  department: departmentValidation,
  phone_number: phoneNumberValidation,
  age: ageValidation,
  joining_date: dateTimeValidation("Joining date"),
  agurle: urlValidation,
});

export {
  loginFormSchema,
  companyProfileFormSchema,
  departmentFormSchema,
  employeeFormSchema,
};
