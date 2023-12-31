import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export const registrationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required").min(8, "Password is too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
