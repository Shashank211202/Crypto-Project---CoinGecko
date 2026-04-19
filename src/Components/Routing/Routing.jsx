import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import MyLoader from "../Pageloader/Pageloader";




const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<MyLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="coin/:coinId"
          element={
            <Suspense fallback={ <MyLoader /> }>
              <CoinDetailsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
export default Routing;
