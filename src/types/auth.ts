export interface LoginData {
  email: string;
  password: string;
}
export interface Menu {
  _id: string;
  photo: string;
  title: string;
  description: string;
  hashtags: [string];
  available: boolean;
}
