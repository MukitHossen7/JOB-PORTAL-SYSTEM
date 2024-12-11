import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
const MainLayouts = () => {
  return (
    <div className=" w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      <Toaster />
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-314px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
