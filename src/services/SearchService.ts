import axios from "../utils/axiosInstance";

export const SearchMenu = async (searchTerm: any) => {
  try {
    const response = await axios.get(`/search?term=${encodeURIComponent(searchTerm)}`);
    return response.data;
  } catch (error) {
    console.error("Error search:", error);
    return { message: "Failed to search" };
  }
};