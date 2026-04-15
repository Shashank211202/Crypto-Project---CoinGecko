// import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import CoinTable from "./Components/CoinTable/CoinTable";
import NavBar from "./Components/NavBar/Navbar";
import Home from "./pages/Home";
// import { CurrencyContext } from "./context/CurrencyContext";

function App() {
  // const [currency, setCurrency] = useState("usd");
  return (
    <>
      {/* <CurrencyContext.Provider value={{ currency, setCurrency }}> */}
        <Home />
      {/* </CurrencyContext.Provider> */}
    </>
  );
}

export default App;
