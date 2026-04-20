import CoinInfo from "./CoinInfo";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";
import PageLoader from "../Pageloader/Pageloader";
import Alert from "../Alert/Alert";

function CoinInfoContainer({ coinId }) {
  const {
    historicData,
    isError,
    isLoading,
    setDays,
    setCoinInterval,
    days,
    currency,
  } = useFetchCoinHistory(coinId);
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <Alert message="Error Fetching Data" type="error" />;
  }
  return (
    <>
      <CoinInfo
        historicData={historicData}
        setDays={setDays}
        setCoinInterval={setCoinInterval}
        days={days}
        currency={currency}
      />
    </>
  );
}
export default CoinInfoContainer;
