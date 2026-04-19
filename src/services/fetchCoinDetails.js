import axiosInstance from "../helpers/axiosInstance";
export async function fetchCoinDetails(id) {
  try {
    const response = await axiosInstance.get(`/coins/${id}`); // A get request to fetch details of a specific coin by its ID

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
