import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(12, " should be of minimum 10 characters length")
    .max(20, "Should be of a maximum 20 characters")
    .email("Enter a valid email"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
});
