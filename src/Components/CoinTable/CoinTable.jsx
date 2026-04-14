import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import {  useQuery } from "@tanstack/react-query";

function CoinTable() {
    const [page, setPage] = useState(1);
    //Latest version of react-query uses queryKey and queryFn instead of key and fn
   const { data, isLoading, isError, error } = useQuery({
  queryKey: ["coins", page],
  queryFn: () => fetchCoinData(page, "usd"),
  retry: 2,
  retryDelay: 1000,
  gcTime: 1000 * 60 * 2, // updated name
  
});
useEffect(() => {
    console.log(data);
}, [data]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>;
    }
return(
   
    
  <>
    Coin Table  <button onClick={()=> setPage(page+1)}>Click</button> {page}
  </>
);
}
export default CoinTable;
