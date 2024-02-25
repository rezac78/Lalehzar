export interface LoginData {
  email: string;
  password: string;
}
export interface Menu {
  _id: string;
  photo: string;
  title: string;
  description: string;
  price: string;
  hashtags: [string];
  available: boolean;
}
export interface Hashtag {
  _id: string;
  hashtag: string;
}
interface TimeSlot {
  open: string;
  close: string;
  _id: string;
}

interface DailyHours {
  day: string;
  slots: TimeSlot[];
  _id: string;
}

interface SpecialDay {
  date: Date;
  slots: TimeSlot[];
  note: string;
  _id: string;
}

export interface OpeningHours {
  _id: string;
  regularHours: DailyHours[];
  specialHours: SpecialDay[];
  __v: number;
}
