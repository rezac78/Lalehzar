import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل خالی است"),
  password: Yup.string().required("رمز عبور خالی است"),
});

export const ContactValidationSchema = Yup.object().shape({
  name: Yup.string().required("نام خالی است"),
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل خالی است"),
  message: Yup.string().required("پیام خالی است"),
});

export const menuSchema = Yup.object().shape({
  photo: Yup.string().url("URL معتبر نیست"),
  title: Yup.string().required("مقداری وارد نشده بود"),
  description: Yup.string().required("مقداری وارد نشد"),
  price: Yup.string().required("مقداری وارد نشد"),
  available: Yup.boolean()
    .default(true)
    .required("Product availability is required"),
  hashtags: Yup.array()
    .required("نباید خالی باشد")
    .of(Yup.string())
    .min(1, "حداقل یکی وارد کنید")
    .max(2, "بیشتر از 2 مجاز نیستید"),
});
export const settingsSchema = Yup.object().shape({
  password: Yup.string()
    .required("رمز عبور خالی است")
    .min(5, "رمز باید بیش از 5 حرف داشته باشد"),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "رمز شبی یک دیگر نیستند"
  ),
});
export const settingsEmailSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل خالی است"),
});
