import { useQuery } from "@tanstack/react-query";
import { searchCoins } from "../services/coinService";
import { useDebounce } from "./useDebounce";

export function useSearchCoins(query) {
  const debouncedQuery = useDebounce(query, 400);

  return useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => searchCoins(debouncedQuery),
    enabled: debouncedQuery.trim().length > 0, // don't fire on empty input
    staleTime: 1000 * 60, // 1 min cache
  });
}