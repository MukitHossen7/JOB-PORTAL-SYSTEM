import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
const MainLayouts = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
