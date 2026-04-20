import axiosInstance from "../helpers/axiosInstance";
export async function fetchCoinHistoricData(id, interval, days = 7, currency = "usd") {
  try {
    const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&interval=${interval}&vs_currency=${currency}`); // A get request to fetch details of a specific coin by its ID

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
