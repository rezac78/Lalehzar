import axios from "../utils/axiosInstance";
import { LoginData } from "../types/auth";

export const LoginReq = async (LoginData: LoginData) => {
  try {
    const response = await axios.post("/auth/login", LoginData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
