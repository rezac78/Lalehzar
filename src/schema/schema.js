import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل خالی است"),
  password: Yup.string().required("رمز عبور خالی است"),
});
