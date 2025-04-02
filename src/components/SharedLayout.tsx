import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavbarApp from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="flex flex-grow flex-col font-mono min-h-screen bg-gray-900 text-white">
      <NavbarApp />

      <main className=" mx-auto max-w-[1200px] px-4 flex items-center justify-center md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
