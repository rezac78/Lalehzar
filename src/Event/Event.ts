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
  { id: 1, name: "درباره ما", Link: "#" },
  { id: 2, name: "ورود", Link: "#" },
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
  { id: 1, name: "Dashboard", href: "/admin/dashboard" },
  { id: 2, name: "Course", href: "/admin/course" },
  { id: 3, name: "Blog", href: "/admin/blog" },
  { id: 4, name: "Settings", href: "/admin/settings" },
];
