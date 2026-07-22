const BASE_URL = "https://api.coingecko.com/api/v3";

export const searchCoins = async (query) => {
  if (!query) return [];
  const res = await fetch(`${BASE_URL}/search?query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Search request failed");
  const data = await res.json();
  return data.coins.slice(0, 8); // top 8 matches
};