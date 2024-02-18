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
