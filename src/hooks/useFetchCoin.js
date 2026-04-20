import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from "../state/store";

function useFetchCoin(coinId) {

     const { currency } = currencyStore();
 
  const { data: coin, isLoading, isError,} = useQuery({
    queryKey: ["coinDetails", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  return { currency, isError, isLoading, coin  };
}
export default useFetchCoin;