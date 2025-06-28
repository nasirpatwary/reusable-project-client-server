import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Motion9 from "../pages/motions/Motion9";
const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto min-h-[calc(100vh-208px)]">
        <Outlet />
      </div>
      <Footer />
      <Motion9 />
    </div>
  );
};

export default MainLayout;
