export interface LoginData {
  email: string;
  password: string;
}
export interface Menu {
  _id: string;
  photo: string;
  title: string;
  description: string;
  price:string;
  hashtags: [string];
  available: boolean;
}
export interface Hashtag {
  _id: string;
  hashtag: string;
}
