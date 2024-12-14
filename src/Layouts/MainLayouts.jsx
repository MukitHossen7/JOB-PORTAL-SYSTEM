import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
const MainLayouts = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <Toaster />

      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-314px)]">
        <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
