import axios from "../utils/axiosInstance";

export const GetUser = async (token: string | null) => {
  try {
    const response = await axios.get(`/admin/information`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error data:", error);
    return { message: "Failed to data" };
  }
};

export const UpdateUserPass = async (userData: any, token: string | null) => {
  try {
    const response = await axios.put(`/admin/update`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error data:", error);
    return { message: "Failed to data" };
  }
};
export const UpdateUserEmail = async (userData: any, token: string | null) => {
  try {
    const response = await axios.put(`/admin/updateEmail`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error data:", error);
    return { message: "Failed to data" };
  }
};
export const GetWeekDate = async () => {
  try {
    const response = await axios.get(`/admin/opening-hours`);
    return response.data;
  } catch (error) {
    console.error("Error data:", error);
    return { message: "Failed to data" };
  }
};
