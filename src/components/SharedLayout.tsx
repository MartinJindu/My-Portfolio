import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="flex flex-col font-mono min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow mx-auto max-w-[1200px] px-4 flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
