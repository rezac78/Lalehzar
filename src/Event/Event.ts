export interface Navbar {
  id: number;
  Link: string;
  name: string;
}
export interface Week {
  id: number;
  name: string;
  time: string;
}
export interface InputForm {
  id: number;
  IdName: string;
  LabelName: string;
  type: string;
}
export interface TableHead {
  id: number;
  Title: string;
}
export interface InputLogin {
  id: number;
  IdName: string;
  LabelName: string;
  type: string;
}
export interface Navigation {
  id: number;
  name: string;
  href: string;
}
export const navbar: Navbar[] = [
  { id: 1, name: "درباره ما", Link: "/aboutus" },
  { id: 2, name: "ارتباط با ما", Link: "/contactus" },
  { id: 3, name: "سرگرمی", Link: "#" },
];

export const Week: Week[] = [
  { id: 1, name: "شنبه", time: " 11-12.30 , 16.30-21" },
  { id: 2, name: "یک شنبه", time: " 11-12.30 , 16.30-21" },
  { id: 3, name: "دوشنبه", time: " 11-12.30 , 16.30-21" },
  { id: 4, name: "سه شنبه", time: " 11-12.30 , 16.30-21" },
  { id: 5, name: "چهارشنبه", time: " 11-12.30 , 16.30-21" },
  { id: 6, name: "پنج شنبه", time: " 11-12.30 , 16.30-21" },
  { id: 7, name: "جمعه", time: "  16.30-21" },
];
export const InputLogin: InputLogin[] = [
  {
    id: 1,
    IdName: "email",
    LabelName: "ورود",
    type: "email",
  },
  {
    id: 2,
    IdName: "password",
    LabelName: "رمز",
    type: "password",
  },
];
export const navigation: Navigation[] = [
  { id: 1, name: "داشبورد", href: "/admin/dashboard" },
  { id: 4, name: "تنظیمات", href: "/admin/settings" },
];
export const TableHead: TableHead[] = [
  {
    id: 1,
    Title: "ردیف",
  },
  {
    id: 2,
    Title: "عکس",
  },
  {
    id: 3,
    Title: "اسم",
  },
  {
    id: 4,
    Title: "توضیحات",
  },
  {
    id: 5,
    Title: "قیمت",
  },
  {
    id: 6,
    Title: "هشتگ",
  },
  {
    id: 7,
    Title: "موجود بودن",
  },
  {
    id: 8,
    Title: "ابزار",
  },
];
export const InputForm: InputForm[] = [
  {
    id: 1,
    IdName: "photo",
    LabelName: "عکس",
    type: "url",
  },
  {
    id: 2,
    IdName: "title",
    LabelName: "اسم",
    type: "text",
  },
  {
    id: 3,
    IdName: "description",
    LabelName: "توضیحات",
    type: "text",
  },
  {
    id: 4,
    IdName: "price",
    LabelName: "قیمت",
    type: "text",
  },
];
export const InputContactus: InputLogin[] = [
  {
    id: 1,
    IdName: "name",
    LabelName: "نام",
    type: "text",
  },
  {
    id: 2,
    IdName: "email",
    LabelName: "ایمیل",
    type: "email",
  },
];