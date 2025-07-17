import * as yup from "yup";

import { emailValidation, passwordValidation } from "./validations";

export const loginFormSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
});
