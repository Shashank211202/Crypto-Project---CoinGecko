import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
function MainLayout() {
  return (
    <>
    <Navbar /> {/* This Navbar is shared UI across all pages*/}
    <Outlet /> {/* The actual page that will be rendered along with Navbar */}
    </>
  );
}
export default MainLayout;