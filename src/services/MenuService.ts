import { Menu } from "../types/auth";
import axios from "../utils/axiosInstance";

export const MenuReq = async (MenuData: Menu, token: string | null) => {
  try {
    const response = await axios.post("/menu", MenuData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const MenuAllData = async () => {
  try {
    const response = await axios.get("/menu");
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
export const MenuDeletedData = async (itemId: string, token: string | null) => {
  try {
    const response = await axios.delete(`/menu/${itemId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const MenuDataUpdate = async (
  itemId: string,
  MenuData: Menu,
  token: string | null
) => {
  try {
    const response = await axios.put(`/menu/${itemId}`, MenuData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const MenuData = async (
  itemId: string | undefined,
  token: string | null
) => {
  try {
    const response = await axios.get(`/menu/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const HashtagAllData = async () => {
  try {
    const response = await axios.get("/menu/hashtag");
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};